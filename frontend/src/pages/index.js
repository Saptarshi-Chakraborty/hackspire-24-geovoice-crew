import Navbar from "@/components/Navbar";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Home</title>
      </Head>

      <Navbar />
      <main className="container my-3">
        <h1>Home Page</h1>
      </main>
    </>
  );
}
