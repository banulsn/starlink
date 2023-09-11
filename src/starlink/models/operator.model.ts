import { v4 as uuidv4 } from 'uuid';
import { Satellite } from './satellite.model';
import { Coordinates } from '../types/coordinates.type';
import { EnableStatus } from '../types/enable-status.type';
import { GroupOfSatelites } from './group-of-satelites.model';

export class Operator {
    uuid?: string;
    name: string;
    surname: string;
    operatorGroupsOfSatellites: GroupOfSatelites[];
  // Ma miec: imie, nazwisko, uuid
  // Ma umożliwiać:
  // - zmianę wysokości i wpółrzędnych pojedynczych satelit
  // - zmianę wysokości i wpółrzędnych całej grupy
  // - otwieranie i składanie żagli słonecznych dla pojedynczego egzemplarza jak i całej grupy
  // - właczanie i wyłączanie sygnału nadawczego dla pojedynczych satelit oraz grup
  // - może tworzyć nowe grupy
    constructor(operator: Operator) {
        this.uuid = operator.uuid ? operator.uuid : uuidv4();
        this.name = operator.name;
        this.surname = operator.surname;
    }

    changeSatelliteAltitude(sateliteUuid: string, altitude: number) {
        this.operatorGroupsOfSatellites.forEach(operatorSatellitesGroup => {
            operatorSatellitesGroup.groupOfSatelites.forEach((satelite: Satellite) => {
                if (satelite.uuid === sateliteUuid) {
                    satelite.altitude = altitude;
                }
            });
        });
    }

    changeSatelliteCoordinates(sateliteUuid: string, coordinates: Coordinates) {
        this.operatorGroupsOfSatellites.forEach(operatorSatellitesGroup => {
            operatorSatellitesGroup.groupOfSatelites.forEach((satelite: Satellite) => {
                if (satelite.uuid === sateliteUuid) {
                    satelite.coordinates = coordinates;
                }
            });
        });
    }

    changeSatelliteSolarSailStatus(sateliteUuid: string, solarSailStatus: EnableStatus) {
        this.operatorGroupsOfSatellites.forEach(operatorSatellitesGroup => {
            operatorSatellitesGroup.groupOfSatelites.forEach((satelite: Satellite) => {
                if (satelite.uuid === sateliteUuid) {
                    satelite.solarSailStatus = solarSailStatus;
                }
            });
        });
    }
    
    changeSatelliteSignalTransmissionStatus(sateliteUuid: string, signalTransmissionStatus: EnableStatus) {
        this.operatorGroupsOfSatellites.forEach(operatorSatellitesGroup => {
            operatorSatellitesGroup.groupOfSatelites.forEach((satelite: Satellite) => {
                if (satelite.uuid === sateliteUuid) {
                    satelite.signalTransmissionStatus = signalTransmissionStatus;
                }
            });
        });
    }

    changeSatelliteGroupAltitude(groupOfSatelitesUuid: string, altitude: number) {
        this.operatorGroupsOfSatellites.forEach(operatorSatellitesGroup => {
            if (operatorSatellitesGroup.uuid === groupOfSatelitesUuid) {
                operatorSatellitesGroup.groupOfSatelites.forEach((satelite: Satellite) =>
                satelite.altitude = altitude);
            }
        });
    }

    changeSatelliteGroupCoordinates(groupOfSatelitesUuid: string, coordinates: Coordinates) {
        this.operatorGroupsOfSatellites.forEach(operatorSatellitesGroup => {
            if (operatorSatellitesGroup.uuid === groupOfSatelitesUuid) {
                operatorSatellitesGroup.groupOfSatelites.forEach((satelite: Satellite) =>
                satelite.coordinates = coordinates);
            }
        });
    }

    changeSatelliteGroupSolarSailStatus(groupOfSatelitesUuid: string, solarSailStatus: EnableStatus) {
        this.operatorGroupsOfSatellites.forEach(operatorSatellitesGroup => {
            if (operatorSatellitesGroup.uuid === groupOfSatelitesUuid) {
                operatorSatellitesGroup.groupOfSatelites.forEach((satelite: Satellite) =>
                satelite.solarSailStatus = solarSailStatus);
            }
        });
    }

    changeSatelliteGroupSignalTransmissionStatus(groupOfSatelitesUuid: string, signalTransmissionStatus: EnableStatus) {
        this.operatorGroupsOfSatellites.forEach(operatorSatellitesGroup => {
            if (operatorSatellitesGroup.uuid === groupOfSatelitesUuid) {
                operatorSatellitesGroup.groupOfSatelites.forEach((satelite: Satellite) =>
                satelite.signalTransmissionStatus = signalTransmissionStatus);
            }
        });
    }

    prepareGroupOfSatelites(uuid?: string, satelites?: Satellite[]) {
        this.operatorGroupsOfSatellites.push(new GroupOfSatelites(uuid, satelites));
    }
}
