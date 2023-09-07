import { EnableStatus } from "../types/enable-status.type";
import { Operator } from "./operator.model";
import { Satellite } from "./satellite.model";

export class Overlord extends Operator {
  // Ma mieć: imie, nazwisko, uuid
  // Ma umożliwiać:
  // - to samo co zwykły operator
  // - może wyłączyć poszczególne satelity, wybrane grupy lub cały system (wszystkie dostępne satelity)
    constructor(operator) {
        super(operator);
    }

    changeSatelliteSatelliteActivationStatus(satelite: Satellite, satelliteActivationStatus: EnableStatus) {
      return satelite.satelliteActivationStatus = satelliteActivationStatus;
  }

    changeSatelliteGroupSatelliteActivationStatus(groupOfSatelites: Satellite[], satelliteActivationStatus: EnableStatus) {
      return groupOfSatelites.map((satelite: Satellite) => {
          satelite.satelliteActivationStatus = satelliteActivationStatus;
      });
  }
   
}
