import * as React from "react";
import MapContainer from "../containers/map/MapContainer";

export interface State {
    lat: number,
    lng: number,
}

class MapPage extends React.Component<{}, State> {
    state = {
        lat: null,
        lng: null,
    };

    vesselSelected = () => {};

    render() {
        return (
            <div className="fullSizeContainer">
                <MapContainer lat={this.state.lat} lng={this.state.lng}/>
            </div>
        )
    }
}

export default MapPage;
