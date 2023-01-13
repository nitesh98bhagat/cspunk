import { useSupabaseClient } from "@supabase/auth-helpers-react";
import React, { useEffect } from "react";

function Signin() {
  const supabase = useSupabaseClient();
  useEffect(() => {
    const signIn = async () => {
      let { data, error } = await supabase.auth.signInWithOAuth({
        provider: "github",
      });

      if (data) {
        console.log("SignInPage", data);
      }
      if (error) {
        console.log(error);
      }
    };
    signIn();
  }, []);

  return <div>Signing in....</div>;
}

export default Signin;
