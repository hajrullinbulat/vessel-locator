import * as React from "react";
import constants from "../../constants";
import Map from "../../components/Map";

export interface Props {
    lat?: number,
    lng?: number,
}

class MapContainer extends React.Component<Props, {}> {
    render() {
        // const {lat, lng} = this.props;
        const lat = 50;
        const lng = 50;
        const isMarkerShown: boolean = !!lat && !!lng;
        const {key, version, apiUrl} = constants.googleMap;
        return (
            <Map
                googleMapURL={`${apiUrl}?v=${version}&libraries=drawing,places,geometry&key=${key}`}
                loadingElement={<div className="fullSizeContainer"/>}
                containerElement={<div className="fullSizeContainer"/>}
                mapElement={<div className="fullSizeContainer"/>}
                {...{
                    isMarkerShown: isMarkerShown,
                    lat: isMarkerShown && lat,
                    lng: isMarkerShown && lng,
                }}
            />
        );
    }
}

export default MapContainer;