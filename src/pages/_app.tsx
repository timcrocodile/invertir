import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Invertir di Fabio Massi</title>
        <link rel="icon" href="/favicon.ico" />
        <meta charSet="utf-8" />
        <meta name="author" content="Salvatore Bisconti" />
        <meta httpEquiv="Reply-to" content="salvatorebisconti98@gmail.com" />
        <meta httpEquiv="content-language" content="IT" />
        <meta
          name="keywords"
          content="Fabio Massi, Civitanova Marche, Consulente finanziario, Invertir di Fabio Massi, consulenza, consulente finanziario a civitanova, consulenza finanziaria "
        />
        <meta
          name="description"
          content="Sono Fabio Massi, da sempre appassionato di mercati finanziari ed innovazioni, la mia famiglia si occupa da oltre 40
          anni di consulenza ..."
        />
        <meta
          name="generator"
          content="Invertir di Fabio Massi - Consulente finanziario indipendente"
        />
        <meta name="robots" content="index,nofollow" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}
