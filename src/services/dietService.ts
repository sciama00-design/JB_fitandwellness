export type ActivityLevel = 
  | 'sedentary' // 1.2
  | 'lightly_active' // 1.375
  | 'moderately_active' // 1.55
  | 'very_active' // 1.725
  | 'extremely_active'; // 1.9

export type Gender = 'M' | 'F';

export const ACTIVITY_MULTIPLIERS: Record<ActivityLevel, number> = {
  sedentary: 1.2,
  lightly_active: 1.375,
  moderately_active: 1.55,
  very_active: 1.725,
  extremely_active: 1.9,
};

export interface CalculatorInput {
  weight: number; // in kg
  height: number; // in cm
  age: number; // in years
  gender: Gender;
  activityLevel: ActivityLevel;
  deficit: number; // Note: Excel uses 500 or 800, but we can accept any number
}

export interface MacroBreakdown {
  protein: number;
  fat: number;
  carbs: number;
}

export interface CalculatorResult {
  bmr: number;
  tdee: number;
  targetKcal: number;
  bmi: number;
  macros: MacroBreakdown;
}

/**
 * Calculates Basal Metabolic Rate (BMR) using Mifflin-St Jeor formula
 */
export function calculateBMR(weight: number, height: number, age: number, gender: Gender): number {
  const base = (10 * weight) + (6.25 * height) - (5 * age);
  return gender === 'M' ? base + 5 : base - 161;
}

/**
 * Calculates Total Daily Energy Expenditure (TDEE)
 */
export function calculateTDEE(bmr: number, activityLevel: ActivityLevel): number {
  return bmr * ACTIVITY_MULTIPLIERS[activityLevel];
}

/**
 * Calculates Body Mass Index (BMI)
 */
export function calculateBMI(weight: number, height: number): number {
  const heightInMeters = height / 100;
  return weight / (heightInMeters * heightInMeters);
}

/**
 * Calculates target macronutrients based on the custom Excel rules
 * - Protein: 2g per kg of body weight (4 kcal/g)
 * - Fat: 25% of target kcal (9 kcal/g)
 * - Carbs: Remaining kcal (4 kcal/g)
 */
export function calculateMacros(weight: number, targetKcal: number): MacroBreakdown {
  // Protein
  const proteinGrams = weight * 2;
  const proteinKcal = proteinGrams * 4;

  // Fat
  const fatKcal = targetKcal * 0.25;
  const fatGrams = fatKcal / 9;

  // Carbs
  const carbsKcal = targetKcal - proteinKcal - fatKcal;
  const carbsGrams = carbsKcal / 4;

  return {
    protein: proteinGrams,
    fat: fatGrams,
    carbs: carbsGrams > 0 ? carbsGrams : 0, // Prevent negative carbs in extreme deficits
  };
}

/**
 * Main function to calculate all diet metrics
 */
export function calculateDietMetrics(input: CalculatorInput): CalculatorResult {
  const bmr = calculateBMR(input.weight, input.height, input.age, input.gender);
  const tdee = calculateTDEE(bmr, input.activityLevel);
  const targetKcal = tdee - input.deficit;
  const bmi = calculateBMI(input.weight, input.height);
  const macros = calculateMacros(input.weight, targetKcal);

  return {
    bmr,
    tdee,
    targetKcal,
    bmi,
    macros,
  };
}

/**
 * Calculates an adapted food portion size based on the Excel proportional rule
 * Reference Base Target is 1911 kcal relative to baseQuantity
 * Math: Round( baseQuantity * (targetKcal / 1911) / 5 ) * 5
 */
export function calculateDietPortion(baseQuantity: number, targetKcal: number): number {
  const ratio = targetKcal / 1911;
  const adaptedQuantity = baseQuantity * ratio;
  
// Round to nearest multiple of 5 grams
  return Math.round(adaptedQuantity / 5) * 5;
}

import { supabase } from '../lib/supabase';
import type { DietPlan, AIMealPlan } from '../types/database';

export const dietService = {
  async getAthleteDietPlan(athleteId: string) {
    const { data, error } = await supabase
      .from('diet_plans')
      .select('*')
      .eq('athlete_id', athleteId)
      .maybeSingle();

    if (error && error.code !== 'PGRST116') throw error;
    return data as DietPlan | null;
  },

  async getTodayAIMealPlan(athleteId: string) {
    const today = new Date().toISOString().split('T')[0];
    const { data, error } = await supabase
      .from('ai_meal_plans')
      .select('*')
      .eq('athlete_id', athleteId)
      .eq('date', today)
      .maybeSingle();

    if (error && error.code !== 'PGRST116') throw error;
    return data as AIMealPlan | null;
  },

  async saveAIMealPlan(plan: Partial<AIMealPlan>) {
    const { data, error } = await supabase
      .from('ai_meal_plans')
      .upsert({
        athlete_id: plan.athlete_id,
        coach_id: plan.coach_id,
        date: plan.date,
        meals: plan.meals,
        updated_at: new Date().toISOString(),
      }, { onConflict: 'athlete_id, date' })
      .select()
      .single();

    if (error) throw error;
    return data as AIMealPlan;
  },

  async saveDietPlan(plan: Partial<DietPlan>) {
    const { data, error } = await supabase
      .from('diet_plans')
      .upsert({
        athlete_id: plan.athlete_id,
        coach_id: plan.coach_id,
        target_kcal: plan.target_kcal,
        target_protein: plan.target_protein,
        target_carbs: plan.target_carbs,
        target_fats: plan.target_fats,
        ai_guidelines: plan.ai_guidelines,
        template_id: plan.template_id,
        selections: plan.selections,
        updated_at: new Date().toISOString(),
      }, { onConflict: 'athlete_id' })
      .select()
      .single();

    if (error) throw error;
    return data as DietPlan;
  }
};
