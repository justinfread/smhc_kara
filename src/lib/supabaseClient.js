import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://xqzkiehzabaqpxopgbtx.supabase.co';   
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InhxemtpZWh6YWJhcXB4b3BnYnR4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjQwNTkwODMsImV4cCI6MjA3OTYzNTA4M30.BPQCmPnmoJU54ttfb5YP5MjFrsp6eiHpnBmnYhRIdz4';            

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

