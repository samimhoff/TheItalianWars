import { MarkerProps } from "@react-google-maps/api";
import { svgMapper } from "../mappers/svgMapper";
// import cromwell from '../svgs/elizabethan_soldier.svg';
// import { CromwellPikeman, CrossedSwords, ElizabethanSoldier, SwissPikeman } from '../svgs/svgComponents';
import { GiMountedKnight } from 'react-icons/gi'

export const mainBattles = {
    
}

export interface IMarker extends MarkerProps {
    unitType: string,
    nationality: string //convert to enum later
    date?: string
}


export const fornovoLocations = [
    {
        name: "Location 1",
        title: "French Infantry 1",
        unitType: "Infantry",
        nationality: "French",
        label: {
            fontFamily: "Fontawesome",
            text: '\uf66d'
        },
        location: { 
        lat: 44.73102140469256, 
        lng: 10.1186045337695
        },
    },
    {
        name: "Location 3",
        location: { 
        lat: 41.3773,
        lng: 2.1585
        },
    },
    {
        name: "Location 4",
        location: { 
        lat: 41.3797,
        lng: 2.1682
        },
    },
    {
        name: "Location 5",
        location: { 
        lat: 41.4055,
        lng: 2.1915
        },
    }
    ];