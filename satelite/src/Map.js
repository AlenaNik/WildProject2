import React from 'react'
import { Map as LeafletMap, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';


class Map extends React.Component {
    render() {
        return (
            <LeafletMap
                center={[40.655769,-83.938503]}
                zoom={13}
                maxZoom={19}
                minZoom={11}
                attributionControl={true}
                zoomControl={true}
                doubleClickZoom={true}
                scrollWheelZoom={true}
                dragging={true}
                animate={true}
                easeLinearity={0.35}
                legends={true}
            >
                <TileLayer
                    //AQUI TIENE QUE IR BOTONES Y COSAS
                    // Y MARKER (ABAJO) ES PARA MARKAR EL MOVIMIENTO DE SATELITE
                />
                <Marker position={[50, 10]}>
                    <Popup>
                        Popup for any custom information.
                    </Popup>
                </Marker>
            </LeafletMap>
        );
    }
}

export default Map;