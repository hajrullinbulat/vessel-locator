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

class SearchVesselContainer extends React.Component<Props, State> {
    state = {
        searchValue: "",
        vessels: [],
    };

    onChange = (searchValue) => {
    };

    onSelected = (value) => {
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