// =============================================
// BÁLÒT — connection settings
// Find these in Supabase: Project Settings → API (or API Keys)
// =============================================

// Your Project URL (double-check it matches your dashboard)
const SUPABASE_URL = "https://wfnhhnwnrstlqopfwckm.supabase.co";

// Your anon / publishable key (NOT the service_role / secret key)
const SUPABASE_ANON_KEY = "sb_publishable_WIVfXM2yUcUvMgl8XDxaHg_NhfV-2pc";

const sb = supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
