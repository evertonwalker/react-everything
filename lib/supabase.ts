import { createClient } from '@supabase/supabase-js';

export const supaBase = createClient('https://xdjybsblugyiwwzmaszo.supabase.co', process.env.NEXT_PUBLIC_KEY_SUPABASE as string);

