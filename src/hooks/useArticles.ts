import { useState, useEffect } from 'react';
import { supabase } from '../lib/supabase';
import type { Article } from '../lib/supabase';

export const useArticles = (publishedOnly = true) => {
  const [articles, setArticles] = useState<Article[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchArticles = async () => {
    try {
      setLoading(true);
      let query = supabase
        .from('articles')
        .select(`
          *,
          author:attorneys(name, title, image_url)
        `)
        .order('created_at', { ascending: false });

      if (publishedOnly) {
        query = query.eq('published', true);
      }

      const { data, error } = await query;

      if (error) throw error;
      setArticles(data || []);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred');
    } finally {
      setLoading(false);
    }
  };

  const createArticle = async (article: Omit<Article, 'id' | 'created_at' | 'updated_at' | 'author'>) => {
    try {
      const { data, error } = await supabase
        .from('articles')
        .insert([article])
        .select(`
          *,
          author:attorneys(name, title, image_url)
        `)
        .single();

      if (error) throw error;
      setArticles(prev => [data, ...prev]);
      return { data, error: null };
    } catch (err) {
      return { data: null, error: err instanceof Error ? err.message : 'An error occurred' };
    }
  };

  const updateArticle = async (id: string, updates: Partial<Article>) => {
    try {
      const { data, error } = await supabase
        .from('articles')
        .update(updates)
        .eq('id', id)
        .select(`
          *,
          author:attorneys(name, title, image_url)
        `)
        .single();

      if (error) throw error;
      setArticles(prev => prev.map(article => article.id === id ? data : article));
      return { data, error: null };
    } catch (err) {
      return { data: null, error: err instanceof Error ? err.message : 'An error occurred' };
    }
  };

  const deleteArticle = async (id: string) => {
    try {
      const { error } = await supabase
        .from('articles')
        .delete()
        .eq('id', id);

      if (error) throw error;
      setArticles(prev => prev.filter(article => article.id !== id));
      return { error: null };
    } catch (err) {
      return { error: err instanceof Error ? err.message : 'An error occurred' };
    }
  };

  useEffect(() => {
    fetchArticles();
  }, [publishedOnly]);

  return {
    articles,
    loading,
    error,
    createArticle,
    updateArticle,
    deleteArticle,
    refetch: fetchArticles,
  };
};