import { supabase } from '../lib/supabase';
import type { Recipe } from '../types/database';

export const recipeService = {
  async getRecipes() {
    const { data, error } = await supabase
      .from('recipes')
      .select('*')
      .order('created_at', { ascending: false });

    if (error) throw error;
    return data as Recipe[];
  },

  async getRecipe(id: string) {
    const { data, error } = await supabase
      .from('recipes')
      .select('*')
      .eq('id', id)
      .single();

    if (error) throw error;
    return data as Recipe;
  },

  async saveRecipe(recipe: Partial<Recipe>) {
    const { data, error } = await supabase
      .from('recipes')
      .upsert(recipe)
      .select()
      .single();

    if (error) throw error;
    return data as Recipe;
  },

  async deleteRecipe(id: string) {
    const { error } = await supabase
      .from('recipes')
      .delete()
      .eq('id', id);

    if (error) throw error;
  }
};
