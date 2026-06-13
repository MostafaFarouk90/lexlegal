import { createClient, SupabaseClient } from '@supabase/supabase-js';

// These are PUBLIC by design: the anon key is safe to ship in the browser.
// Security is enforced by Row Level Security on the `inquiries` table
// (INSERT allowed for anonymous visitors, SELECT/READ denied).
const url = import.meta.env.VITE_SUPABASE_URL;
const anonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

// Null when env vars are absent (e.g. local dev without a project configured),
// so the app still runs and the form can fall back gracefully.
export const supabase: SupabaseClient | null =
  url && anonKey ? createClient(url, anonKey) : null;

export const isSupabaseConfigured = Boolean(url && anonKey);
