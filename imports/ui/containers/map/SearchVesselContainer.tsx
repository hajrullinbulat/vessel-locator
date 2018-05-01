import * as React from "react";
import {Vessel} from "../../../../common/vo/model";
import SearchVessel from "../../components/SearchVessel";

export interface Props {
    onSelected: (lat: string, lng: string, vesselName: string) => void,
}

export interface State {
    searchValue: string,
    vessels: Vessel[],
}

const Vessels = new Mongo.Collection("vessels");

class SearchVesselContainer extends React.Component<Props, State> {
    state = {
        searchValue: "",
        vessels: [],
    };

    onChange = (searchValue) => {
        this.setState({searchValue});
        if (!searchValue || searchValue.length === 0) {
            this.setState({vessels: []});
        }
        const vessels: Vessel[] = Vessels.find(
            {name: {$regex: new RegExp(searchValue, "i")},},
        ).fetch();
        this.setState({vessels})
    };

    onSelected = (value) => {
        const promise = new Promise((resolve, reject) => {
            const vessel: Vessel = Vessels.findOne({name: value});
            vessel ? resolve(vessel.MMSI) : reject(`"${value}" - vessel not found`)
        }).then((MMSI: number) => {
            return new Promise((resolve, reject) => {
                Meteor.call('vessels.getLocation', {MMSI}, (err, result) => {
                    if (err) reject(err);
                    else if (result.data.result === "fail") reject(result.data.description);
                    else if (result.found === 0) reject("Vessel location not found");
                    else resolve(result.data.entries[0]);
                });
            });
        }).then(result => {
            const {lat, lng} = result;
            this.props.onSelected(lat, lng, value);
        }).catch(error => {
            window.Materialize.toast(error, 3000);
        });
    };

    render() {
        return (
            <SearchVessel
                vessels={this.state.vessels}
                searchValue={this.state.searchValue}
                onChange={this.onChange}
                onSelected={this.onSelected}
            />
        );
    }
}

export default SearchVesselContainer;