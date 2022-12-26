import Head from 'next/head';
import Home from '../pages/home/home.js';
import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';

config.autoAddCss = false

export default function App() {
  return (
    <>
      <Head>
        <title>Next Blog</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Home />
    </>
  )
}
