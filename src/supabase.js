import { createClient } from "@supabase/supabase-js";
const supabaseUrl = "https://wplkwskczqzfzyweagfz.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6IndwbGt3c2tjenF6Znp5d2VhZ2Z6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDI2OTYyMjAsImV4cCI6MjA1ODI3MjIyMH0.bllWTiJHYU4SkPm00vAPFr0pmJE6tdMfNRuN3eKJKEI";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
