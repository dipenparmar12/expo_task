// app/supabaseClient.ts
import 'react-native-url-polyfill/auto';
import { createClient } from '@supabase/supabase-js';
import { SUPABASE_URL, SUPABASE_ANON_KEY } from '@env'; // or use process.env if using dotenv

const supabaseUrl = process.env.EXPO_PUBLIC_SUPABASE_URL || 'YOUR_SUPABASE_URL'; // Replace with your Supabase URL or use env variables
const supabaseAnonKey = process.env.EXPO_PUBLIC_SUPABASE_ANON_KEY || 'YOUR_SUPABASE_ANON_KEY'; // Replace with your Supabase Anon Key or use env variables


export const supabase = createClient(supabaseUrl, supabaseAnonKey);