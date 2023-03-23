import { Inter } from 'next/font/google'
import React from 'react'

import Carrusel from '../components/Carrusel'
import  Layout  from '../components/Layout'
import Wellcome from '../components/Wellcome'


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <Layout>
      <Carrusel />
      <Wellcome/>     
    </Layout>
  )
}
