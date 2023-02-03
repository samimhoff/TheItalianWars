import { MarkerProps } from "@react-google-maps/api";
import { svgMapper } from "../mappers/svgMapper";
import crossedSwords from '../../svgs/crossed_swords.svg';
import cromwellPpikeman from '../../svgs/cromwell_pikeman.svg';
import elizabethanSoldier from '../../svgs/elizabethan_soldier.svg';
import swissPikeman from '../../svgs/swiss_pikeman.svg';

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
        icon: swissPikeman,
        location: { 
        lat: 44.717518, 
        lng: 10.094841
        },
    },
    {
        name: "Location 2",
        location: { 
        lat: 41.3917,
        lng: 2.1649
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