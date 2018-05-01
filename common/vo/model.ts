export interface Vessel {
    type: string,
    name: string,
    IMO: number,
    CS: string,
    MMSI: number,
    length: string,
}

export class Vessel {
    static convertFromJson(vesselJson): Vessel {
        return {
            type: vesselJson.Type,
            name: vesselJson.Name,
            IMO: vesselJson.IMO,
            CS: vesselJson.CS,
            MMSI: vesselJson.MMSI,
            length: vesselJson.Length,
        }
    }

}