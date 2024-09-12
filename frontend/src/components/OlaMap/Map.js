"use strict";
"use client";

import React, { useEffect } from 'react'
// import "@/lib/OlaMapsWebSDK/style.css";
// import "../../styles/style.css";
import { OlaMaps } from '@/lib/OlaMapsWebSDK/olamaps-js-sdk.es'

const Map = () => {
    let olaMaps = null, MyMap = null;

    useEffect(() => {
        if (olaMaps) return;

        if (MyMap) {
            MyMap.remove();
            MyMap = null;
        }

        olaMaps = new OlaMaps({
            apiKey: process.env.NEXT_PUBLIC_OLA_MAPS_API_KEY
        });

        MyMap = olaMaps.init({
            style: "https://api.olamaps.io/tiles/vector/v1/styles/default-light-standard/style.json",
            container: 'map',
            center: [77.61648476788898, 12.931423492103944],
            zoom: 15,
        })

    }, [])


    async function zoomIn(zoomAmount) {
        var olaIcon = document.createElement('div')
        olaIcon.classList.add('olalogo')

        olaMaps
            .addMarker({ element: olaIcon, offset: [0, -10], anchor: 'bottom' })
            .setLngLat([77.61648476788898, 12.931423492103944])
            .addTo(MyMap)
    }



    return (
        <>
            <div style={{ "height": "80vh" }} id="map"></div>
            <hr />
            <div className="w-100 d-flex flex-wrap gap-3">
                <button onClick={zoomIn} className="btn btn-primary">Zoom In</button>
                <button className="btn btn-primary">Zoom Out</button>
                <button className="btn btn-primary">Pan to Kolkata</button>
            </div>
        </>
    )
}

export default Map