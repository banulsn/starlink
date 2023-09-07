import { v4 as uuidv4 } from 'uuid';
import { EnableStatus } from '../types/enable-status.type';
import { Coordinates } from '../types/coordinates.type';

export class Satellite {
    uuid?: string;
    altitude: number;
    coordinates: Coordinates;
    solarSailStatus: EnableStatus;
    signalTransmissionStatus: EnableStatus;
    satelliteActivationStatus: EnableStatus;
// Ma miec: uuid, wysokość, współrzędne, status żagla słonecznego(on/off), status nadawania sygnału(on/off), status włączenia satelity
    constructor(satelite: Satellite) {
        this.uuid = satelite.uuid ? satelite.uuid : uuidv4();
        this.altitude = satelite.altitude;
        this.coordinates = satelite.coordinates;
        this.solarSailStatus = satelite.solarSailStatus;
        this.signalTransmissionStatus = satelite.signalTransmissionStatus;
        this.satelliteActivationStatus = satelite.satelliteActivationStatus;
    }
}
