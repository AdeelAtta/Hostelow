import { Html, Head, Main, NextScript } from 'next/document'
import { ToastContainer } from 'react-toastify'


export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body className='min-h-screen light'>
        <ToastContainer />
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
