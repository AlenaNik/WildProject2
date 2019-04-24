import React, { Component } from 'react';
//import { Map as LeafletMap, GeoJSON, Marker, Popup } from 'react-leaflet';
import { Map, TileLayer } from 'react-leaflet';
import './App.css';
//import L from 'leaflet';
//import MapService from './MapService'

let position;
let zoomMap;

class App extends Component {

    constructor() {
        super();
        this.state = {
            lat: 40.427005,
            lng: -3.699534
        };
    }

    showPosition = () => {
    
        fetch('http://api.open-notify.org/iss-now.json')
            .then(function(response) {
                return response.json();
            })
            .then(function(myJson) {
                console.log(myJson);
            });
        /*
            .then((lat, lng) => {
                this.setState({lat,lng});
            })
            */

            //this.showPosition()
    }
    
    render() {
        const { lat, lng } = this.state;
        position = [lat, lng];
        return (
            <div>
                <button onClick={this.showPosition}>Click me to Show Position</button>
                <Map center={position} zoom="11" id="mapid" ref={e => { this.mapInstance = e }}>
                    <TileLayer
                        attribution="&amp;copy <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
                        url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png"
                        // opcion en color url="https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}"
                        // opcion negro url="http://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}.png"
                        // opcion blanquita url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png"
                    />

                </Map>
            </div>
        );

    }

}

export default App;