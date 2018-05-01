import * as React from "react";
import MapContainer from "../containers/map/MapContainer";
import SearchVesselContainer from "../containers/map/SearchVesselContainer";

export interface State {
    lat: number,
    lng: number,
    vesselName: string,
}

class MapPage extends React.Component<{}, State> {
    state = {
        lat: null,
        lng: null,
        vesselName: "",
    };

    vesselSelected = (lat: string, lng: string, vesselName: string) => {

    };

    render() {
        return (
            <div className="fullSizeContainer">
                <SearchVesselContainer
                    onSelected={(lat: string, lng: string, vesselName) => this.vesselSelected(lat, lng, vesselName)}/>
                <MapContainer lat={this.state.lat} lng={this.state.lng} vesselName={this.state.vesselName}/>
            </div>
        )
    }
}

export default MapPage;
