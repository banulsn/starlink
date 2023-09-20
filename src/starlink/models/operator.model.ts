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

    removeSatellite(satellite: Satellite): void {
        const index = this.satellites.findIndex(operatorSatellite => operatorSatellite.uuid === satellite.uuid);
        if (index !== -1) {
            this.satellites.splice(index, 1);
        }
        this.removeSatelliteFromGroupIfNeeded(satellite);
    }

    private removeSatelliteFromGroupIfNeeded(satellite: Satellite) {
        if (this.groupsOfSatellites.length) {
            this.groupsOfSatellites.forEach((group: GroupOfSatelites) => {
                const index = group.satellites.findIndex(satelliteFromGroup => satelliteFromGroup.uuid === satellite.uuid);
                if (index !== -1) {
                    group.removeSatelliteFromGroup(satellite);
                }
            });
        }
    }

    changeSatelliteAltitude(satellite: Satellite, altitude: number) {
        const satelliteToChange = this.satellites.find(operatorSatellite => operatorSatellite.uuid === satellite.uuid);
        if (satelliteToChange) {
            satelliteToChange.setAltitude(altitude);
        }
    }

    changeSatelliteCoordinates(satellite: Satellite, coordinates: Coordinates) {
        const satelliteToChange = this.satellites.find(operatorSatellite => operatorSatellite.uuid === satellite.uuid);
        if (satelliteToChange) {
            satelliteToChange.setCoordinates(coordinates);
        }
    }

    changeSatelliteSolarSailStatus(satellite: Satellite, newStatus: EnableStatus): void {
        const satelliteToChange = this.satellites.find(operatorSatellite => operatorSatellite.uuid === satellite.uuid);
        if (satelliteToChange) {
            satelliteToChange.setSolarSailStatus(newStatus);
        }
    }

    changeSatelliteSignalTransmissionStatus(satellite: Satellite, newStatus: EnableStatus): void {
        const satelliteToChange = this.satellites.find(operatorSatellite => operatorSatellite.uuid === satellite.uuid);
        if (satelliteToChange) {
            satelliteToChange.setSignalTransmissionStatus(newStatus);
        }
    }

    //Methods for groups

    prepareGroupOfSatelites(satellites?: Satellite[]): void {
        const newGroupOfSatellites = new GroupOfSatelites();
        if (satellites && satellites.length) {
            newGroupOfSatellites.satellites = [...satellites, ...newGroupOfSatellites.satellites];
        }
        this.groupsOfSatellites.push(newGroupOfSatellites);
    }

    changeSatelliteAltitudeInGroup(groupOfSatellitesUuid: string, altitude: number) {
        const index = this.groupsOfSatellites.findIndex(groupOfSatellite => groupOfSatellite.uuid === groupOfSatellitesUuid);
        if (index !== -1) {
            this.groupsOfSatellites[index].satellites.forEach(satellite => this.changeSatelliteAltitude(satellite, altitude));
        }
    }

    changeSatelliteCoordinatesInGroup(groupOfSatellitesUuid: string, coordinates: Coordinates) {
        const index = this.groupsOfSatellites.findIndex(groupOfSatellite => groupOfSatellite.uuid === groupOfSatellitesUuid);
        if (index !== -1) {
            this.groupsOfSatellites[index].satellites.forEach(satellite => this.changeSatelliteCoordinates(satellite, coordinates));
        }
    }
    
    changeSatelliteSolarSailStatusInGroup(groupOfSatellitesUuid: string, newStatus: EnableStatus) {
        const index = this.groupsOfSatellites.findIndex(groupOfSatellite => groupOfSatellite.uuid === groupOfSatellitesUuid);
        if (index !== -1) {
            this.groupsOfSatellites[index].satellites.forEach(satellite => this.changeSatelliteSolarSailStatus(satellite, newStatus));
        }
    }

    changeSatelliteSignalTransmissionStatusInGroup(groupOfSatellitesUuid: string, newStatus: EnableStatus) {
        const index = this.groupsOfSatellites.findIndex(groupOfSatellite => groupOfSatellite.uuid === groupOfSatellitesUuid);
        if (index !== -1) {
            this.groupsOfSatellites[index].satellites.forEach(satellite => this.changeSatelliteSignalTransmissionStatus(satellite, newStatus));
        }
    }

}
