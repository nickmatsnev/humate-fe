import { useEffect } from "react";
import { Toaster } from "react-hot-toast";
import { QueryClient, QueryClientProvider } from "react-query";
import { SessionProvider } from "next-auth/react";
import { appWithTranslation } from "next-i18next";
import type { AppProps } from "next/app";
import Head from "next/head";
import AppSettings, { getLanguageFromPath } from "@/utils/app/AppSettings";
import "@/styles/globals.css";

function App({ Component, pageProps }: AppProps<{}>) {
  const queryClient = new QueryClient();
  const { language } = AppSettings.get();

  //   useEffect(() => {
  //     if (language) {
  //       document.documentElement.setAttribute("lang", language);
  //       const langFromPath = getLanguageFromPath();
  //       const shouldReroute = langFromPath
  //         ? // Reroute if language in URL is different from user saved.
  //           langFromPath !== language
  //         : // Don't reroute however, if the language is English and we are on the "/" route.
  //           language !== "en";
  //       if (shouldReroute) {
  //         const currentPathWithoutLang = window.location.pathname.replace(
  //           `/${langFromPath}`,
  //           "",
  //         );
  //         window.location.href = `/${language}${currentPathWithoutLang}`;
  //       }
  //     }
  //   }, [language]);

  return (
    <SessionProvider>
      <Toaster />
      <QueryClientProvider client={queryClient}>
        <Head>
          <title>Humate</title>
          <link rel="icon" href="/favicon.ico" />
          <meta name="description" content="AI HR." />
          <meta
            name="viewport"
            content="height=device-height ,width=device-width, initial-scale=1, user-scalable=no"
          />
        </Head>
        <Component {...pageProps} />
      </QueryClientProvider>
    </SessionProvider>
  );
}

export default appWithTranslation(App);
