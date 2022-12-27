import Head from 'next/head';
import Home from '../pages/home/home.js';

import 'material-icons/iconfont/material-icons.css';

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
