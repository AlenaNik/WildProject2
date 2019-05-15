import React, { Component } from 'react';
//import { Map1 as LeafletMap, GeoJSON, Marker, Popup } from 'react-leaflet';
import { Map, TileLayer, Popup, Marker, ZoomControl} from 'react-leaflet';
import './App.css';
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import { renderToStaticMarkup } from 'react-dom/server';
import { divIcon } from 'leaflet';
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
        window.setInterval(this.showPosition, 1000);
    }

    showPosition = () => {

        fetch('http://api.open-notify.org/iss-now.json')
            .then(function(response) {
                return response.json();
            })
            .then((myJson) => {
                console.log(this, myJson);
                const { latitude, longitude } = myJson.iss_position;
                this.setState({
                    lat: latitude,
                    lng: longitude
                });

            });

    }

    render() {
        const iconMarkup = renderToStaticMarkup(<i className=" fas fa-user-astronaut fa-3x" />);
        const customMarkerIcon = divIcon({
            html: iconMarkup,
        });
        const {  lat, lng } = this.state;
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
                <div className="ph2 tc-l">
                <button className="f6 link dim br3 ph3 pv2 mb2 dib items-center black bg-light-yellow code"
                        onClick={() => this.setState({position: position})}> Speed: 28 800 km/h Current position:  {position}</button>
                </div>
                <div className="tc">
                <Map center={position} zoom="3" zoomControl={false} id="mapid" ref={e => { this.mapInstance = e }}>
                    <TileLayer
                        attribution="&amp;copy <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
                        url="http://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}.png"
                        // opcion en color url="https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}"
                        // opcion blanquita url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png"
                    />
                    <Marker position={position} icon={customMarkerIcon}>
                        <Popup>
                            I am Anne McClain. I've been 160 days in space. I'm inside of ISS now. You can see it's coordinates at the pink botton. <br /> See how many people are with me now: <a href="https://www.howmanypeopleareinspacerightnow.com/">6</a>
                        </Popup>
                    </Marker>
                    <ZoomControl position="topright" />
                </Map>
                </div>
               )
                <footer className="pv4 ph3 ph5-m ph6-l hot-pink code">
                    <small className="f6 db tc">2019 <b className="ttu">Wild Code School Second Project</b>, by Raquel, Alena and Eva.
                    </small>
                    <div className="tc mt3">
                        <a href="" title="https://github.com/evadav" className="f6 dib pr2 mid-gray dim">Eva on GitHub</a>
                        <a href="https://github.com/AlenaNik" title="" className="f6 dib ph2 mid-gray dim">Alena on GitHub</a>
                        <a href="https://github.com/rakelqr" title="" className="f6 dib pl2 mid-gray dim">Raquel on GitHub</a>
                    </div>
                </footer>
            </div>
        );

    }

}
export default App;
