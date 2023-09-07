import { v4 as uuidv4 } from 'uuid';
import { Satellite } from "./satellite.model";

export class GroupOfSatelites {
  uuid?: string;
  groupOfSatelites: Satellite[];
 // Zawiera ewidencję satelit które znajdują się w grupie
    constructor(uuid?, satellites?: Satellite[]) {
      this.uuid = uuid ? uuid : uuidv4();
      this.groupOfSatelites = satellites.length ? satellites : [];
    }

}
