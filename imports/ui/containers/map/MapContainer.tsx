import * as React from "react";
import constants from "../../constants";
import Map from "../../components/Map";

export interface Props {
    lat?: number,
    lng?: number,
    vesselName?: string,
}

class MapContainer extends React.Component<Props, {}> {
    render() {
        const {lat, lng, vesselName} = this.props;
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
                    vesselName: vesselName,
                }}
            />
        );
    }
}

export default MapContainer;