import React from 'react';
import Head from 'next/head';


export default function Layout({ children }) {
  return (
    <div>
      <Head>
      </Head>
      <main>{children}</main>
      <footer>Footer</footer>
    </div>
  )
}