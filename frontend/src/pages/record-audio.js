"use client";

import Navbar from '@/components/Navbar'
import RecordAudioBody from '@/components/RecordAudio/Body'
import Head from 'next/head'
import React from 'react'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const recordAudio = () => {
    return (<>
        <Head>
            <title>Record Audio</title>
        </Head>

        <Navbar />
        <RecordAudioBody />

        <ToastContainer theme='dark' position='top-right' autoClose={5000} />

    </>)
}

export default recordAudio