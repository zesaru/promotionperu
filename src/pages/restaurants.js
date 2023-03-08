import { Inter } from 'next/font/google'
import { Layout } from '@/components/Layout'
import Restaurants from '@/components/Restautants'



const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <Layout>
        <Restaurants/>
    </Layout>
  )
}
