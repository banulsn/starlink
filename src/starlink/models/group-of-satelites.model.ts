import { v4 as uuidv4 } from 'uuid';

export class GroupOfSatelites {
  uuid: string;
  satellitesUuid: string[];
  
  constructor() {
    this.uuid = uuidv4();
    this.satellitesUuid = [];
  }

  addSatelliteToGroup(satellitUuid: string): void {
    this.satellitesUuid.push(satellitUuid);
  }

  removeSatelliteFromGroup(satellitUuid: string) {
    const index = this.satellitesUuid.findIndex(satellitUuidInGroup => satellitUuidInGroup === satellitUuid);
    if (index !== -1) {
        this.satellitesUuid.splice(index, 1);
    }
  }

}
