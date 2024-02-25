import { Explore } from '@/components';
import type { NextPage } from 'next';
import Head from 'next/head';
const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Vis</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Explore />
      </main>
    </div>
  );
};

export default Home;
