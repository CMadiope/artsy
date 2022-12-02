import Head from 'next/head'
import Image from 'next/image'
import HomePage from '../components/Home'

export default function Home() {
  return (
    <div>
      <Head>
        <title>ARTSY</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
        
      </Head>

      <main>
        <HomePage />
      </main>
    </div>
  );
}
