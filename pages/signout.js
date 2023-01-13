import { useSupabaseClient } from "@supabase/auth-helpers-react";
import { useRouter } from "next/router";
import React, { useEffect } from "react";

function SignOut() {
  const supabase = useSupabaseClient();
  const router = useRouter();
  useEffect(() => {
    const signIn = async () => {
      let { error } = await supabase.auth.signOut();

      if (error) {
        console.log(error);
      }
      router.push("/");
    };
    signIn();
  }, []);

  return <div>Signing Out...</div>;
}

export default SignOut;
