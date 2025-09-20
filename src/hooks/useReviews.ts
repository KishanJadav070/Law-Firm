import { useState, useEffect } from 'react';
import { supabase } from '../lib/supabase';
import type { Review } from '../lib/supabase';

export const useReviews = (approvedOnly = true) => {
  const [reviews, setReviews] = useState<Review[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchReviews = async () => {
    try {
      setLoading(true);
      let query = supabase
        .from('reviews')
        .select('*')
        .order('created_at', { ascending: false });

      if (approvedOnly) {
        query = query.eq('approved', true);
      }

      const { data, error } = await query;

      if (error) throw error;
      setReviews(data || []);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred');
    } finally {
      setLoading(false);
    }
  };

  const createReview = async (review: Omit<Review, 'id' | 'created_at' | 'updated_at'>) => {
    try {
      const { data, error } = await supabase
        .from('reviews')
        .insert([review])
        .select()
        .single();

      if (error) throw error;
      setReviews(prev => [data, ...prev]);
      return { data, error: null };
    } catch (err) {
      return { data: null, error: err instanceof Error ? err.message : 'An error occurred' };
    }
  };

  const updateReview = async (id: string, updates: Partial<Review>) => {
    try {
      const { data, error } = await supabase
        .from('reviews')
        .update(updates)
        .eq('id', id)
        .select()
        .single();

      if (error) throw error;
      setReviews(prev => prev.map(review => review.id === id ? data : review));
      return { data, error: null };
    } catch (err) {
      return { data: null, error: err instanceof Error ? err.message : 'An error occurred' };
    }
  };

  const deleteReview = async (id: string) => {
    try {
      const { error } = await supabase
        .from('reviews')
        .delete()
        .eq('id', id);

      if (error) throw error;
      setReviews(prev => prev.filter(review => review.id !== id));
      return { error: null };
    } catch (err) {
      return { error: err instanceof Error ? err.message : 'An error occurred' };
    }
  };

  useEffect(() => {
    fetchReviews();
  }, [approvedOnly]);

  return {
    reviews,
    loading,
    error,
    createReview,
    updateReview,
    deleteReview,
    refetch: fetchReviews,
  };
};