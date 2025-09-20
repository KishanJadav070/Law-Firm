import { useState, useEffect } from 'react';
import { supabase } from '../lib/supabase';
import type { Attorney } from '../lib/supabase';

export const useAttorneys = () => {
  const [attorneys, setAttorneys] = useState<Attorney[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchAttorneys = async () => {
    try {
      setLoading(true);
      const { data, error } = await supabase
        .from('attorneys')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) throw error;
      setAttorneys(data || []);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred');
    } finally {
      setLoading(false);
    }
  };

  const createAttorney = async (attorney: Omit<Attorney, 'id' | 'created_at' | 'updated_at'>) => {
    try {
      const { data, error } = await supabase
        .from('attorneys')
        .insert([attorney])
        .select()
        .single();

      if (error) throw error;
      setAttorneys(prev => [data, ...prev]);
      return { data, error: null };
    } catch (err) {
      return { data: null, error: err instanceof Error ? err.message : 'An error occurred' };
    }
  };

  const updateAttorney = async (id: string, updates: Partial<Attorney>) => {
    try {
      const { data, error } = await supabase
        .from('attorneys')
        .update(updates)
        .eq('id', id)
        .select()
        .single();

      if (error) throw error;
      setAttorneys(prev => prev.map(attorney => attorney.id === id ? data : attorney));
      return { data, error: null };
    } catch (err) {
      return { data: null, error: err instanceof Error ? err.message : 'An error occurred' };
    }
  };

  const deleteAttorney = async (id: string) => {
    try {
      const { error } = await supabase
        .from('attorneys')
        .delete()
        .eq('id', id);

      if (error) throw error;
      setAttorneys(prev => prev.filter(attorney => attorney.id !== id));
      return { error: null };
    } catch (err) {
      return { error: err instanceof Error ? err.message : 'An error occurred' };
    }
  };

  useEffect(() => {
    fetchAttorneys();
  }, []);

  return {
    attorneys,
    loading,
    error,
    createAttorney,
    updateAttorney,
    deleteAttorney,
    refetch: fetchAttorneys,
  };
};