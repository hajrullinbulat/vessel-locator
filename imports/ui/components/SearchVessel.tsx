import * as React from "react";
import {Autocomplete} from "react-materialize";
import {Vessel} from "../../../common/vo/model";

export interface Props {
    vessels: Vessel[],
    searchValue: string,
    onChange: (value: string) => void,
    onSelected: (value: string) => void,
}

const convertVesselsData = (vessels: Vessel[]) => {
    const data = {};
    vessels.forEach(v => data[v.name] = null);
    return data;
};

const SearchVesselInput = (props: Props) => (
    <Autocomplete
        className="searchVessel"
        placeholder="Enter a vessel name"
        onChange={(_, value) => props.onChange(value)}
        onAutocomplete={value => props.onSelected(value)}
        data={convertVesselsData(props.vessels)}
    />
);

export default SearchVesselInput;
