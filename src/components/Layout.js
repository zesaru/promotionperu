import { Header } from "./header"
import { Footer } from "./Footer"

export const Layout = ({children}) => {
  return (
    <body class="bg-white text-gray-600 work-sans leading-normal text-base tracking-normal">
        <Header/>
        {children}
        <Footer/>
    </body>
  )
}
