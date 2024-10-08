"use strict";
"use client";

import { useRef } from 'react';
import Map from './Map';

const DEFAULT_CENTER = [38.907132, -77.036546]

const LeafletMapBody = () => {

    return (<main className="container my-3">
        <h1>Leaflet Map</h1>

        <Map width="800" height="400" center={DEFAULT_CENTER} zoom={12}>
            {({ TileLayer, Marker, Popup }) => (
                <>
                    <TileLayer
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                        attribution="&copy; <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
                    />
                    <Marker position={DEFAULT_CENTER}>
                        <Popup>
                            A pretty CSS3 popup. <br /> Easily customizable.
                        </Popup>
                    </Marker>
                </>
            )}
        </Map>

    </main>)
}

export default LeafletMapBody