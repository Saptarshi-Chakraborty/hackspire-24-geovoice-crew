import GeminiBody from '@/components/Gemini/Body'
import Navbar from '@/components/Navbar'
import Head from 'next/head'
import React from 'react'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const gemini = () => {
    return (<>
        <Head>
            <title>Gemini Text-to-JSON</title>
        </Head>

        <Navbar />
        <GeminiBody />

        <ToastContainer theme='dark' position='top-right' autoClose={5000} />
    </>)
}

export default gemini