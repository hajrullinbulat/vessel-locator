import constants from "../../ui/constants"
import {HTTP} from "meteor/http";
import {Meteor} from "meteor/meteor";

export class AprsService {
    public static getVesselLocationByMMSI(MMSI: number) {
        try {
            return HTTP.call("GET", `${constants.aprsApiUrl}get`, {
                params: {
                    name: MMSI,
                    what: "loc",
                    apikey: constants.aprsApiKey,
                    format: "json",
                },
            });
        } catch (e) {
            throw new Meteor.Error("Vessel location fetch error");
        }
    }
}