"use client";
import LeafletMapBody from '@/components/LeafletMap/Body';
import Navbar from '@/components/Navbar';
import Head from 'next/head';
import React from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const leafletMap = () => {
    return (<>
        <Head>
            <title>Leaflet Map</title>
        </Head>

        <Navbar />
        <LeafletMapBody />

        <ToastContainer theme="dark" position="top-right" />
    </>)
}

export default leafletMap