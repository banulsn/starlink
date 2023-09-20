import { EnableStatus } from "../enums/enable-status.enum";
import { Operator } from "./operator.model";
import { Satellite } from "./satellite.model";

export class Overlord extends Operator {
  constructor(operator) {
      super(operator);
  }

  changeSatelliteActivationStatus(satellite: Satellite, newStatus: EnableStatus): void {
    const satelliteToChange = this.satellites.find(operatorSatellite => satellite.uuid === operatorSatellite.uuid);
    if (satelliteToChange) {
      satelliteToChange.setSatelliteActivationStatus(newStatus);
    }
  }

  changeSatelliteActivationStatusInGroup(groupOfSatellitesUuid: string, newStatus: EnableStatus) {
    const index = this.groupsOfSatellites.findIndex(groupOfSatellite => groupOfSatellite.uuid === groupOfSatellitesUuid);
    if (index !== -1) {
        this.groupsOfSatellites[index].satellites.forEach(satellite => this.changeSatelliteActivationStatus(satellite, newStatus));
    }
  }

  changeActivationStatusOfAllSatellites(newStatus: EnableStatus) {
    this.satellites.forEach(satellite => this.changeSatelliteActivationStatus(satellite, newStatus));
  }
   
}
