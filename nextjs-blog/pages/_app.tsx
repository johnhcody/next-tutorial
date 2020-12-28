import '../styles/global.css'
// global styles must be imported to _app.js


import { AppProps } from 'next/app'

function App({ Component, pageProps }: AppProps) {
    return <Component {...pageProps} />
}

export default App