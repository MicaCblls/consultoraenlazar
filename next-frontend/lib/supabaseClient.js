import { createClient } from "@supabase/supabase-js";
import { supabaseKey, supabaseUrl } from "./enviroment";

const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
