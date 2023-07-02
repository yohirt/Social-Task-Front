// pages/index.tsx
import React from 'react'
import Layout from './layout'
import GlobePage from '../components/globe/globe'


export default function Home() {
  return (
    <Layout>
      <h1>Hello, Next.js!</h1>
      <GlobePage></GlobePage>
    </Layout>
  )
}