import { EnableStatus } from "../enums/enable-status.enum";
import { Operator } from "./operator.model";

export class Overlord extends Operator {
  constructor(operator) {
      super(operator);
  }

  changeSatelliteActivationStatus(satelliteUuid: string, newStatus: EnableStatus): void {
    const satellite = this.satellites.find(satellite => satellite.uuid === satelliteUuid);
    if (satellite) {
        satellite.setSatelliteActivationStatus(newStatus);
    }
  }

  changeSatelliteActivationStatusInGroup(groupOfSatellitesUuid: string, newStatus: EnableStatus) {
    const index = this.groupsOfSatellites.findIndex(groupOfSatellite => groupOfSatellite.uuid === groupOfSatellitesUuid);
    if (index !== -1) {
        this.groupsOfSatellites[index].satellitesUuid.forEach(satelliteUuid => this.changeSatelliteActivationStatus(satelliteUuid, newStatus));
    }
  }

  changeActivationStatusOfAllSatellites(newStatus: EnableStatus) {
    this.satellites.forEach(satellite => this.changeSatelliteActivationStatus(satellite.uuid, newStatus));
  }
   
}
