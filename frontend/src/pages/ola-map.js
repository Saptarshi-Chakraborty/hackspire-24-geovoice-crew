import Navbar from '@/components/Navbar'
import OlaMapsBody from '@/components/OlaMap/Body'
import Head from 'next/head'
import React from 'react'
import { ToastContainer } from 'react-toastify'

const olaMaps = () => {
    return (<>
        <Head>
            <title>OLA Maps</title>
        </Head>

        <Navbar />
        <OlaMapsBody />

        <ToastContainer theme="dark" position="top-right" />
    </>)
}

export default olaMaps