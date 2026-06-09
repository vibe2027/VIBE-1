import { createClient } from '@supabase/supabase-js';

// Load from environment variables with fallback for development
const SUPABASE_URL = import.meta.env.VITE_SUPABASE_URL || 'https://fhksytcoyjtcrkmhnoyw.supabase.co';
const SUPABASE_ANON_KEY = import.meta.env.VITE_SUPABASE_ANON_KEY || 'YOUR_SUPABASE_ANON_KEY_HERE';

if (!SUPABASE_ANON_KEY || SUPABASE_ANON_KEY === 'YOUR_SUPABASE_ANON_KEY_HERE') {
  console.warn('⚠️ Supabase ANON_KEY not configured. Please set VITE_SUPABASE_ANON_KEY in your .env.local');
}

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
