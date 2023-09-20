import { v4 as uuidv4 } from 'uuid';
import { Satellite } from './satellite.model';

export class GroupOfSatelites {
  uuid: string;
  satellites: Satellite[];
  
  constructor() {
    this.uuid = uuidv4();
    this.satellites = [];
  }

  addSatelliteToGroup(satellite: Satellite): void {
    this.satellites.push(satellite);
  }

  removeSatelliteFromGroup(satellite: Satellite) {
    const index = this.satellites.findIndex(satelliteInGroup => satelliteInGroup.uuid === satellite.uuid);
    if (index !== -1) {
        this.satellites.splice(index, 1);
    }
  }

}
