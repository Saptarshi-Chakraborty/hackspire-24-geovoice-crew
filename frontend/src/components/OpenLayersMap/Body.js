import React, { useEffect, useState } from 'react'
import { Map, View } from 'ol';
import TileLayer from 'ol/layer/Tile';
import OSM from 'ol/source/OSM';
import 'ol/ol.css'
import SidePannel from './SidePannel';
import { useGeographic } from 'ol/proj.js';
import {
    DragRotateAndZoom,
    defaults as defaultInteractions,
} from 'ol/interaction.js';

const Body = () => {
    let map = null;
    const [mapState, setMapState] = useState(null)  

    useGeographic(); // call the useGeographic hook to work with geographic coordinates

    useEffect(() => {
        if (map) return;
        let newMap = new Map({
            interactions: defaultInteractions().extend([new DragRotateAndZoom()]),
            target: 'map',
            layers: [
                new TileLayer({
                    source: new OSM()
                })
            ],
            view: new View({
                center: [10, 0],
                zoom: 4
            }),
        });

        setMapState(newMap)
        map = newMap;
    }, []);


    return (<>
        <div className="d-flex flex-row border border-1 border-dark" style={{ height: "92.5vh" }}>
           {
                mapState && <SidePannel map={mapState}/>
           }


            <div className="flex-grow-1" style={{ height: "100%", width: "full" }} id='map'></div>

        </div>

        {/* <main className="container my-3">

            <div style={{ height: "85vh", width: "full" }} id='map'></div>

        </main> */}
    </>)
}

export default Body