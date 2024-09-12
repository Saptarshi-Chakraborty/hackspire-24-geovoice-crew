"use strict";
"use client";

import React, { useEffect } from 'react'
import { Map, View } from 'ol';
import TileLayer from 'ol/layer/Tile';
import OSM from 'ol/source/OSM';
import 'ol/ol.css'

const OpenLayerMap = ({ map, setMap }) => {
    useEffect(() => {
        if (map) return;

        let newMap = new Map({
            target: 'map',
            layers: [
                new TileLayer({
                    source: new OSM()
                })
            ],
            view: new View({
                center: [10, 0],
                zoom: 2
            })
        });

        setMap(newMap);

    }, []);

    return (
        <div style={{ height: "85vh", width: "full" }} id='map'></div>
    )
}

export default OpenLayerMap