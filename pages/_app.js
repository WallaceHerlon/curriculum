import React from 'react'
import App from 'next/app'
import '../css/style.css'

class MyApp extends App {
    return () {
        const { Component, pageProps } = this.pageProps
        return < Component {...pageProps}/>
    }
}

export default MyApp