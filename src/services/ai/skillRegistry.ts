// Definiamo i tipi per maggiore chiarezza
export interface SkillDefinition {
  name: string;
  description: string;
  parameters: any; // Schema JSON per Gemini
  execute: (args: any) => Promise<any>;
}

// Registro centrale delle skill GLOBALI (tool condivisi tra più agenti/skill)
export const skillRegistry: Record<string, SkillDefinition> = {
  // Aggiungere qui skill trasversali se necessario
};

// Esporta le definizioni nel formato richiesto da Gemini
export const getGeminiTools = () => {
  return [
    {
      functionDeclarations: Object.values(skillRegistry).map(skill => ({
        name: skill.name,
        description: skill.description,
        parameters: skill.parameters
      }))
    }
  ];
};

// Esegue una skill specifica in base al nome e agli argomenti
export const executeSkill = async (name: string, args: any) => {
  const skill = skillRegistry[name];
  if (!skill) {
    throw new Error(`Skill '${name}' non trovata nel registro.`);
  }
  console.log(`[SkillRegistry] Esecuzione skil: ${name}`, args);
  return await skill.execute(args);
};
