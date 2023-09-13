import { v4 as uuidv4 } from 'uuid';
import { Satellite } from './satellite.model';
import { Coordinates } from '../types/coordinates.type';
import { EnableStatus } from '../enums/enable-status.enum';
import { GroupOfSatelites } from './group-of-satelites.model';

export class Operator {
    uuid?: string;
    name: string;
    surname: string;
    satellites?: Satellite[];
    groupsOfSatellites?: GroupOfSatelites[];
    
    constructor(operator: Operator) {
        this.uuid = operator.uuid ? operator.uuid : uuidv4();
        this.name = operator.name;
        this.surname = operator.surname;
        this.satellites = operator.satellites && operator.satellites.length ? operator.satellites : [];
        this.groupsOfSatellites = [];
    }

    addSatellite(satellite: Satellite) {
        this.satellites.push(satellite);
    }

    removeSatellite(satelliteUuid: string): void {
        const index = this.satellites.findIndex(satellite => satellite.uuid === satelliteUuid);
        if (index !== -1) {
            this.satellites.splice(index, 1);
        }
        this.removeSatelliteFromGroupIfNeeded(satelliteUuid);
    }

    private removeSatelliteFromGroupIfNeeded(satelliteUuid: string) {
        if (this.groupsOfSatellites.length) {
            this.groupsOfSatellites.forEach((group: GroupOfSatelites) => {
                const index = group.satellitesUuid.findIndex(satelliteUuidFromGroup => satelliteUuidFromGroup === satelliteUuid);
                if (index !== -1) {
                    group.satellitesUuid.splice(index, 1);
                }
            });
        }
    }

    changeSatelliteAltitude(satelliteUuid: string, altitude: number) {
        const satellite = this.satellites.find(satellite => satellite.uuid === satelliteUuid);
        if (satellite) {
            satellite.setAltitude(altitude);
        }
    }

    changeSatelliteCoordinates(satelliteUuid: string, coordinates: Coordinates) {
        const satellite = this.satellites.find(satellite => satellite.uuid === satelliteUuid);
        if (satellite) {
            satellite.setCoordinates(coordinates);
        }
    }

    changeSatelliteSolarSailStatus(satelliteUuid: string, newStatus: EnableStatus): void {
        const satellite = this.satellites.find(satellite => satellite.uuid === satelliteUuid);
        if (satellite) {
            satellite.setSolarSailStatus(newStatus);
        }
    }

    changeSatelliteSignalTransmissionStatus(satelliteUuid: string, newStatus: EnableStatus): void {
        const satellite = this.satellites.find(satellite => satellite.uuid === satelliteUuid);
        if (satellite) {
            satellite.setSignalTransmissionStatus(newStatus);
        }
    }

    //Methods for groups

    prepareGroupOfSatelites(satellitesUuid?: string[]): void {
        const newGroupOfSatellites = new GroupOfSatelites();
        if (satellitesUuid && satellitesUuid.length) {
            newGroupOfSatellites.satellitesUuid = [...satellitesUuid, ...newGroupOfSatellites.satellitesUuid];
        }
        this.groupsOfSatellites.push(newGroupOfSatellites);
    }

    changeSatelliteAltitudeInGroup(groupOfSatellitesUuid: string, altitude: number) {
        const index = this.groupsOfSatellites.findIndex(groupOfSatellite => groupOfSatellite.uuid === groupOfSatellitesUuid);
        if (index !== -1) {
            this.groupsOfSatellites[index].satellitesUuid.forEach(satelliteUuid => this.changeSatelliteAltitude(satelliteUuid, altitude));
        }
    }

    changeSatelliteCoordinatesInGroup(groupOfSatellitesUuid: string, coordinates: Coordinates) {
        const index = this.groupsOfSatellites.findIndex(groupOfSatellite => groupOfSatellite.uuid === groupOfSatellitesUuid);
        if (index !== -1) {
            this.groupsOfSatellites[index].satellitesUuid.forEach(satelliteUuid => this.changeSatelliteCoordinates(satelliteUuid, coordinates));
        }
    }
    
    changeSatelliteSolarSailStatusInGroup(groupOfSatellitesUuid: string, newStatus: EnableStatus) {
        const index = this.groupsOfSatellites.findIndex(groupOfSatellite => groupOfSatellite.uuid === groupOfSatellitesUuid);
        if (index !== -1) {
            this.groupsOfSatellites[index].satellitesUuid.forEach(satelliteUuid => this.changeSatelliteSolarSailStatus(satelliteUuid, newStatus));
        }
    }

    changeSatelliteSignalTransmissionStatusInGroup(groupOfSatellitesUuid: string, newStatus: EnableStatus) {
        const index = this.groupsOfSatellites.findIndex(groupOfSatellite => groupOfSatellite.uuid === groupOfSatellitesUuid);
        if (index !== -1) {
            this.groupsOfSatellites[index].satellitesUuid.forEach(satelliteUuid => this.changeSatelliteSignalTransmissionStatus(satelliteUuid, newStatus));
        }
    }

}
