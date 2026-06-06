import { createClient } from '@supabase/supabase-js';

const SUPABASE_URL = 'https://fhksytcoyjtcrkmhnoyw.supabase.co';
const SUPABASE_ANON_KEY = 'COLLE_TA_CLE_ANON_ICI';

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);