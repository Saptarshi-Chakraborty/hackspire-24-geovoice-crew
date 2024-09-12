import React from 'react'
import Gemini from './Gemini';
import Map from 'ol/Map.js';
import OSM from 'ol/source/OSM.js';
import TileLayer from 'ol/layer/Tile.js';
import View from 'ol/View.js';
import { easeIn, easeOut } from 'ol/easing.js';
import { fromLonLat } from 'ol/proj.js';
import VoiceCapture from './VoiceCapture';

const SidePannel = ({ map }) => {

    const zoomIn = (zoomAmount = 0.5) => {
        let view = map.getView();
        let zoom = view.getZoom();
        view.setZoom(zoom + zoomAmount);

        map.render();
    }

    const zoomOut = (zoomAmount = 0.5) => {
        console.log("Zooming ou...t")
        let view = map.getView();
        let zoom = view.getZoom();
        view.setZoom(zoom - zoomAmount);

        map.render();
    }

    const gradualZoomIn = (zoomAmount = 0.5) => {
        let view = map.getView();
        let zoom = view.getZoom();
        view.animate({
            zoom: zoom + zoomAmount,
            duration: 300
        });
    }

    const gradualZoomOut = (zoomAmount = 0.5) => {
        let view = map.getView();
        let zoom = view.getZoom();
        view.animate({
            zoom: zoom - zoomAmount,
            duration: 300
        });
    }

    const possibleActions = {
        "zoomIn": gradualZoomIn,
        "zoomOut": gradualZoomOut,
    }

    //function to pan to a location with zoom
    const panToLocationWithZoom = () => {
        const honolulu = fromLonLat([-0.12755, 51.507222], 'EPSG:3857');
        let view = map.getView();
        view.animate({
            center: honolulu,
            zoom: 4,
            duration: 700
        });
    }




    return (
        <div className="sidePannel h-full bg-secondary px-3 py-5 d-flex flex-column" >
            <div className='d-flex flex-row gap-2'>
                <button onClick={zoomIn} className='btn btn-sm btn-primary'>Zoom In</button>
                <button onClick={zoomOut} className='btn btn-sm btn-primary'>Zoom Out</button>
            </div>
            <div className='d-flex flex-row gap-2 mt-2'>
                <button onClick={() => gradualZoomIn(0.5)} className='btn btn-sm btn-primary'>GZoom In</button>
                <button onClick={() => gradualZoomOut(0.5)} className='btn btn-sm btn-primary'>GZoom Out</button>
            </div>
            <div className='d-flex flex-row gap-2 mt-2'>
                <button onClick={panToLocationWithZoom} className='btn btn-sm btn-primary'>Pan Kolkata</button>
                <button onClick={gradualZoomOut} className='btn btn-sm btn-primary'>GZoom Out</button>
            </div>

            {/* <Gemini possibleActions={possibleActions} /> */}

            <VoiceCapture  />

        </div>
    )
}

export default SidePannel