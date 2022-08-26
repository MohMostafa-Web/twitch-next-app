import Head from "next/head";
import Main from "../components/Main";
import Sidebar from "../components/Sidebar";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Twitch</title>
        <meta
          name="description"
          content="Twitch is an interactive livestreaming service for content spanning gaming, entertainment, sports, music, and more. There’s something for everyone on Twitch."
        />
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
      </Head>
      
      <div className="relative flex min-h-screen pt-[60px]">
        <Sidebar />
        <Main />
      </div>
    </div>
  );
}
