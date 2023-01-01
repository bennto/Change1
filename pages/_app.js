import React from 'react';
import Head from 'next/head'
import Layout from '../components/layout'
import '../styles/globals.css'

export default function App({ Component, pageProps }) {
      return (
            <>
                  <Head>
                        <link rel="icon" href="/favicon.ico" />
                  </Head>
                  <Layout>
                        <Component {...pageProps} />
                  </Layout> 
            </>
      );
}