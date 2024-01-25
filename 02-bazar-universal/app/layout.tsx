import type { Metadata } from 'next'
import './globals.css'
import { Form } from './components/Form'
import { CartProvider } from './context/cart-context'
import { Header } from './components/header'
export const metadata: Metadata = {
  title: 'Universal bazar',
  description: 'Universal marketplace for all kinds of products.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link href="https://fonts.googleapis.com/css?family=Poppins" rel="stylesheet"></link>
      </head>
      <body className={"font-Poppins"}>
        <Layout>
          <CartProvider>
            <Header />
            <Form />
            {children}
          </CartProvider>
        </Layout>
      </body>
    </html >
  )
}

export function Layout({ children }: { children: React.ReactNode }) {

  return (
    <div className='flex flex-col p-5 sm:p-10 gap-y-5 '>
      {children}
    </div>
  )
}



