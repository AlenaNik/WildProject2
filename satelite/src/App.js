import React, { Component } from 'react';
//import { Map1 as LeafletMap, GeoJSON, Marker, Popup } from 'react-leaflet';
import { Map, TileLayer, Marker, Popup, Tooltip } from 'react-leaflet';
import './App.css';
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import Navigation from './Components/Navigation';
import Contact from './Components/Contact';
import About from './Components/AboutUs';

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
                <BrowserRouter>
                    <div>
                        <Navigation />
                        <Switch>
                            <Route path="/AboutUs" component={About} />
                            <Route path="/Contact" component={Contact}/>
                        </Switch>
                    </div>
                </BrowserRouter>
                <button className="f6 link dim br3 ph3 pv2 mb2 dib white bg-hot-pink" onClick={this.showPosition}>Click me to Show Position</button>
                <Map center={position} zoom="11" id="mapid" ref={e => { this.mapInstance = e }}>
                    <TileLayer
                        attribution="&amp;copy <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
                        url="http://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}.png"
                        // opcion en color url="https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}"
                        // opcion negro url=""
                        // opcion blanquita url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png"
                    />
                    <Marker position={position} >
                        <Tooltip direction='top' opacity={1} >
                            <span> Marker </span>
                        </Tooltip>
                        <Popup>
                            <span> Marker </span>
                        </Popup>
                    </Marker>
                </Map>
            </div>
        );

    }

}
export default App;
