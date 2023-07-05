// pages/index.tsx
import React from 'react'
import Layout from './layout'
import GlobePage from '../components/globe/globe'
import Head from 'next/head'


export default function Home() {
  return (
    <Layout>
      <h1>Hello, Next.js!</h1>
      <GlobePage></GlobePage>
    </Layout>
  )
}