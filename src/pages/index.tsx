import { Inter } from 'next/font/google'
import  Layout  from '../components/Layout'
import Carrusel from '../components/Carrusel'
import Wellcome from '../components/Wellcome'
import React from 'react'


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <Layout>
      <Carrusel />
      <Wellcome/>     
    </Layout>
  )
}
