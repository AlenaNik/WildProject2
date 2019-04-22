import React, { Component } from 'react';
import { Map as LeafletMap, GeoJSON, Marker, Popup } from 'react-leaflet';
import { Map, TileLayer } from 'react-leaflet';
import './App.css';

let position;
let zoomMap;

class App extends Component {

    constructor() {
        super();
        this.state = {
            lat: 40.427005,
            lng: -3.699534,
            zoom: 11,
        };
    }
    render() {
        const { lat, lng, zoom } = this.state;
        position = [lat, lng];
        zoomMap = zoom;
        return (
            <Map center={position} zoom={zoomMap} id="mapid" ref={e => { this.mapInstance = e }}>
                <TileLayer
                    attribution="&amp;copy <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
            </Map>
        );
    }
}
export default App;
