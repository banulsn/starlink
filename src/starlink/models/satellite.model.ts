import { v4 as uuidv4 } from 'uuid';
import { EnableStatus } from '../enums/enable-status.enum';
import { Coordinates } from '../types/coordinates.type';

export class Satellite {
    uuid?: string;
    altitude: number;
    coordinates: Coordinates;
    solarSailStatus?: EnableStatus;
    signalTransmissionStatus?: EnableStatus;
    satelliteActivationStatus?: EnableStatus;

    constructor(satelite: Satellite) {
        this.uuid = satelite.uuid ? satelite.uuid : uuidv4();
        this.altitude = satelite.altitude;
        this.coordinates = satelite.coordinates;
        this.solarSailStatus = satelite.solarSailStatus ? satelite.solarSailStatus : EnableStatus.off;
        this.signalTransmissionStatus = satelite.signalTransmissionStatus ? satelite.signalTransmissionStatus : EnableStatus.off;
        this.satelliteActivationStatus = satelite.satelliteActivationStatus ? satelite.satelliteActivationStatus : EnableStatus.off;
    }

    setAltitude(altitude: number): void {
        this.altitude = altitude;
    }

    setCoordinates(coordinates: Coordinates): void {
        this.coordinates = coordinates;
    }

    setSolarSailStatus(solarSailStatus: EnableStatus): void {
        this.solarSailStatus = solarSailStatus;
    }

    setSignalTransmissionStatus(signalTransmissionStatus: EnableStatus): void {
        this.signalTransmissionStatus = signalTransmissionStatus;
    }

    setSatelliteActivationStatus(satelliteActivationStatus: EnableStatus): void {
        this.satelliteActivationStatus = satelliteActivationStatus;
    }
      
}
