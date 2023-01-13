import Layout from "../components/Layout";
import "../styles/globals.css";

import { createBrowserSupabaseClient } from "@supabase/auth-helpers-nextjs";
import { SessionContextProvider } from "@supabase/auth-helpers-react";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import LoadingBar from "react-top-loading-bar";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  const [supabaseClient] = useState(() => createBrowserSupabaseClient());

  const [progress, setProgress] = useState(0);
  const router = useRouter();
  useEffect(() => {
    router.events.on("routeChangeComplete", () => {
      setProgress(100);
    });

    router.events.on("routeChangeStart", () => {
      setProgress(40);
    });
  });

  return (
    <SessionContextProvider
      supabaseClient={supabaseClient}
      initialSession={pageProps.initialSession}
    >
      <Layout>
        <Head>
          <link
            rel="shortcut icon"
            href="/short_logo.png"
            type="image/x-icon"
          />
        </Head>
        <LoadingBar
          color="#ffffff"
          waitingTime={400}
          loaderSpeed={600}
          progress={progress}
          onLoaderFinished={() => setProgress(0)}
        />
        <Component {...pageProps} />
      </Layout>
    </SessionContextProvider>
  );
}

export default MyApp;
