import { supabase } from '../lib/supabase';

export interface Todo {
  id: string;
  created_at: string;
  user_id: string;
  athlete_id?: string;
  title: string;
  description?: string;
  due_date: string;
  completed: boolean;
  category: string;
  metadata: any;
}

export const todoService = {
  async getTodos(userId: string) {
    const { data, error } = await supabase
      .from('todos')
      .select('*')
      .eq('user_id', userId)
      .order('due_date', { ascending: true });

    if (error) throw error;
    return data as Todo[];
  },

  async getAthleteTodos(athleteId: string) {
    const { data, error } = await supabase
      .from('todos')
      .select('*')
      .eq('athlete_id', athleteId)
      .order('due_date', { ascending: true });

    if (error) throw error;
    return data as Todo[];
  },

  async createTodo(todo: Partial<Todo>) {
    const { data, error } = await supabase
      .from('todos')
      .insert([todo])
      .select()
      .single();

    if (error) throw error;
    return data as Todo;
  },

  async updateTodo(id: string, updates: Partial<Todo>) {
    const { data, error } = await supabase
      .from('todos')
      .update(updates)
      .eq('id', id)
      .select()
      .single();

    if (error) throw error;
    return data as Todo;
  },

  async toggleTodo(id: string, completed: boolean) {
    const { data, error } = await supabase
      .from('todos')
      .update({ completed })
      .eq('id', id)
      .select()
      .single();

    if (error) throw error;
    return data as Todo;
  },

  async deleteTodo(id: string) {
    const { error } = await supabase
      .from('todos')
      .delete()
      .eq('id', id);

    if (error) throw error;
  }
};
