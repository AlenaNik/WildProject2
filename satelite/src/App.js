import React, { Component } from 'react';
import { Map as LeafletMap, GeoJSON, Marker, Popup } from 'react-leaflet';
import { Map, TileLayer } from 'react-leaflet';
import './App.css';
import L from 'leaflet';

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
                    url="http://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}.png"
                    // opcion en color url="https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}"
                    // opcion negro url="http://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}.png"
                    // opcion blanquita url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png"
                />

            </Map>

        );

    }

}

export default App;
