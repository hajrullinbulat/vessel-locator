import {Meteor} from "meteor/meteor";
import {Mongo} from "meteor/mongo";
import {Vessel} from "../common/vo/model";
import {AprsService} from "../imports/api/services/aprsService";

const Vessels = new Mongo.Collection("vessels");

Meteor.startup(() => {
    if (Vessels.find({}).count() === 0) {
        const seedVessels = JSON.parse(Assets.getText("seedVessels.json"));
        const rawVessels = Vessels.rawCollection();
        rawVessels.insertMany(seedVessels.map(v => Vessel.convertFromJson(v)));
    }
});

Meteor.methods({
    'vessels.getLocation'({MMSI}) {
        return AprsService.getVesselLocationByMMSI(MMSI);
    },
});