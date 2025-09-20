import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || '';
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || '';

// Create a mock client if environment variables are not set
const createSupabaseClient = () => {
  if (!supabaseUrl || !supabaseAnonKey || supabaseUrl === 'your_supabase_project_url_here') {
    console.warn('Supabase environment variables not configured. Using mock client.');
    return null;
  }
  return createClient(supabaseUrl, supabaseAnonKey);
};

export const supabase = createSupabaseClient();

// Database types
export interface Attorney {
  id: string;
  name: string;
  title: string;
  bio: string;
  image_url: string;
  specializations: string[];
  experience_years: number;
  education: string;
  bar_admissions: string[];
  email: string;
  phone: string;
  created_at: string;
  updated_at: string;
}

export interface Article {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  image_url: string;
  author_id: string;
  category: string;
  tags: string[];
  published: boolean;
  created_at: string;
  updated_at: string;
  author?: Attorney;
}

export interface Review {
  id: string;
  client_name: string;
  client_title: string;
  content: string;
  rating: number;
  image_url?: string;
  featured: boolean;
  approved: boolean;
  created_at: string;
  updated_at: string;
}

export interface ContactSubmission {
  id: string;
  name: string;
  email: string;
  phone: string;
  message: string;
  status: 'new' | 'contacted' | 'resolved';
  created_at: string;
}

export interface AdminUser {
  id: string;
  email: string;
  role: 'admin' | 'editor';
  created_at: string;
}