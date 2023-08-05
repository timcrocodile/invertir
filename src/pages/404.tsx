import Head from "next/head";
import Link from "next/link";
import { IoReturnDownBack } from "react-icons/io5";

export default function error() {
  return (
    <>
      <Head>
        <title>Errore 404</title>
        <meta charSet="utf-8" />
        <meta httpEquiv="content-language" content="IT" />
        <link rel="icon" type="image/x-icon" href="favicon.ico" />
        <meta name="robots" content="noindex, nofollow" />
      </Head>
      <div className="h-screen w-screen flex items-center justify-center bg-first">
        <div className="flex flex-col items-center gap-4 p-8 ">
          <h2 className="text-4xl text-gray md:text-5xl">
            ERRORE{" "}
            <span className="text-6xl text-white md:text-7xl ">404 </span>
          </h2>
          <p className="text-xl mb-6 text-center text-gray">
            {" "}
            Qualcosa è andato storto, la pagina non è stata trovata
          </p>
          <Link href="https://www.invertir.fm/">
            <button className="bg-second p-2 text-first font-bold rounded-lg hover:bg-gray flex gap-2 items-center ">
              <IoReturnDownBack className="text-3xl mt-1 " />
              Ritorna alla home
            </button>
          </Link>
        </div>
      </div>
    </>
  );
}
