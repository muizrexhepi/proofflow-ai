import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

export interface WaitlistEntry {
  id: string;
  email: string;
  created_at: string;
  invited: boolean;
  invited_at?: string;
}

export async function addToWaitlist(email: string) {
  return await supabase
    .from("waitlist")
    .insert([{ email, invited: false }])
    .select()
    .single();
}

export async function getWaitlistEntries() {
  return await supabase
    .from("waitlist")
    .select("*")
    .order("created_at", { ascending: true });
}

export async function markAsInvited(id: string) {
  return await supabase
    .from("waitlist")
    .update({ invited: true, invited_at: new Date().toISOString() })
    .eq("id", id);
}

export async function getWaitlistCount() {
  const { count } = await supabase
    .from("waitlist")
    .select("*", { count: "exact", head: true });
  return count || 0;
}
