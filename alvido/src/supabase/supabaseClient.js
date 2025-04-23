
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://iyyyneiawvryveypqthj.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Iml5eXluZWlhd3ZyeXZleXBxdGhqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDU0MTA2MDAsImV4cCI6MjA2MDk4NjYwMH0.IhSjv5elnL8YVu4Wyvv4fum-CCLXljwHR5mOMhZAPzo'; // uzun key

export const supabase = createClient(supabaseUrl, supabaseKey);
