import Navbar from '@/components/Navbar'
import Body from '@/components/OpenLayersMap/Body'
import Head from 'next/head'
import React from 'react'
import { ToastContainer } from 'react-toastify'

const openlayersMap = () => {
    return (
        <>
            <Head>
                <title>OpenLayers Map</title>
            </Head>

            <Navbar />
            <Body />
            <ToastContainer theme="dark" position='top-right' />
        </>)
}

export default openlayersMap