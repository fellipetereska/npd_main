import { createClient } from "@supabase/supabase-js";

export const supabase = createClient(
    //URL Supabase
    "https://pqdviwqyybuqnmrqyifw.supabase.co",

    //Chave Pública
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBxZHZpd3F5eWJ1cW5tcnF5aWZ3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDE3ODM2ODAsImV4cCI6MjAxNzM1OTY4MH0.lD0bBLqPCIzR_B3VBZn1uBkFso-h53TFDSdLpR4ppgU"
);