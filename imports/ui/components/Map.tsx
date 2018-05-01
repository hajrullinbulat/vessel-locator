import * as React from "react";
import {GoogleMap, withGoogleMap, withScriptjs} from "react-google-maps"
import constants from "../constants";

export interface Props {
    isMarkerShown: boolean,
    lat?: number,
    lng?: number,
    vesselName?: string,
}

const {MarkerWithLabel} = require("react-google-maps/lib/components/addons/MarkerWithLabel");

export const Map = (props: Props) => {
    const {lat, lng, isMarkerShown, vesselName} = props;
    const defaultCenter = constants.googleMap.defaultCenter;
    const defaultZoom = 3;
    const image = {
        url: "https://d30y9cdsu7xlg0.cloudfront.net/png/5628-200.png",
        scaledSize: new google.maps.Size(100, 100)
    };
    return (
        <GoogleMap
            defaultZoom={defaultZoom}
            defaultCenter={defaultCenter}
            zoom={isMarkerShown ? 10 : defaultZoom}
            center={isMarkerShown ? {lat, lng} : defaultCenter}>
            {
                isMarkerShown && (
                    <MarkerWithLabel
                        position={{lat, lng}}
                        labelAnchor={new google.maps.Point(100, 0)}
                        labelStyle={{fontSize: "14px", width: "200px", textAlign: "center"}}
                        icon={image}>
                        <div>{vesselName}</div>
                    </MarkerWithLabel>
                )
            }
        </GoogleMap>
    )
};

export default withScriptjs(withGoogleMap((props: Props) => <Map {...props}/>))