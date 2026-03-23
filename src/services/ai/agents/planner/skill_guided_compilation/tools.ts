import { planService } from "../../../../planService";
import { dietService } from "../../../../dietService";
import { athleteService } from "../../../../athleteService";
import { sessionService } from "../../../../sessionService";
import { weeklyPlannerService } from "../../../../weeklyPlannerService";

export const tools = {
  fetch_athlete_context: {
    name: "fetch_athlete_context",
    description: "Recupera i dati completi dell'atleta (profilo, dieta, allenamento attivo, storico recente) per i 5 pilastri della pianificazione.",
    parameters: {
      type: "OBJECT",
      properties: {
        athlete_id: { type: "string" },
        start_date: { type: "string", description: "Inizio settimana (YYYY-MM-DD)" },
        end_date: { type: "string", description: "Fine settimana (YYYY-MM-DD)" }
      },
      required: ["athlete_id"]
    },
    execute: async (args: { athlete_id: string, start_date?: string, end_date?: string }) => {
      const athleteId = args.athlete_id;
      
      const [profile, athletePlans, dietPlan, recentSessions, plannerEntries] = await Promise.all([
        athleteService.getAthlete(athleteId),
        planService.getAthletePlans(athleteId),
        dietService.getAthleteDietPlan(athleteId),
        sessionService.getAthleteHistory(athleteId),
        args.start_date && args.end_date 
          ? weeklyPlannerService.getEntries(athleteId, args.start_date, args.end_date)
          : Promise.resolve([])
      ]);

      const activePlan = athletePlans?.[0] || null;

      return {
        pillar_workout: {
          plan: activePlan,
          coach_guidelines: activePlan?.description || "Nessuna linea guida specifica del coach."
        },
        pillar_nutrition: {
          diet: dietPlan,
          macros: dietPlan ? { kcal: dietPlan.target_kcal, p: dietPlan.target_protein, c: dietPlan.target_carbs, f: dietPlan.target_fats } : null
        },
        pillar_preferences: {
          preferences: profile?.dietary_preferences,
          intolerances: profile?.intolerances,
          schedule_constraints: profile?.schedule_constraints
        },
        pillar_history: {
          sessions_count: recentSessions?.length || 0,
          last_sessions: recentSessions?.slice(0, 5) || [],
        },
        pillar_future_existing: plannerEntries || []
      };
    }
  },
  
  save_weekly_plan: {
    name: "save_weekly_plan",
    description: "Salva la bozza finale della pianificazione settimanale nel database.",
    parameters: {
      type: "OBJECT",
      properties: {
        athlete_id: { type: "string" },
        plan_entries: {
          type: "ARRAY",
          items: {
            type: "OBJECT",
            properties: {
              date: { type: "string" },
              commitments: { type: "string" },
              workout_id: { type: "string" },
              nutrition_focus: { type: "string" },
              ai_suggestions: { type: "string" }
            }
          }
        }
      },
      required: ["athlete_id", "plan_entries"]
    },
    execute: async (args: { athlete_id: string, plan_entries: any[] }) => {
      const results = await Promise.all(args.plan_entries.map(entry => 
        weeklyPlannerService.saveEntry({
          athlete_id: args.athlete_id,
          date: entry.date,
          commitments: entry.commitments,
          ai_suggestions: entry.ai_suggestions,
        })
      ));
      return { status: "success", saved_count: results.length };
    }
  }
};
