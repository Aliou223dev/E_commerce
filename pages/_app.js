import '@/styles/globals.css'
import Container from '../components/container/container'
import {SessionProvider} from 'next-auth/react'
import { Toaster } from 'react-hot-toast'
import CategoryProvider from '@/components/context/context'
//export const runtime = 'edge' // 'nodejs' (default) | 'edge'
export default function App({ Component, pageProps }) {
  return (
  
  
  <Container>
    <Toaster position='top-center'/>
    <CategoryProvider>
    <SessionProvider session={pageProps.session}> 
      
      <Component {...pageProps} />
      
    </SessionProvider> 
    </CategoryProvider>
  </Container>
  
  )
}
