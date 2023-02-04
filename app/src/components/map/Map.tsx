import React from 'react';
import logo from './logo.svg';
import { MapsKey } from '../../hidden/apikeys';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import { fornovoLocations } from '../../data/battles';
import { CromwellPikeman, CrossedSwords, ElizabethanSoldier, SwissPikeman } from '../../svgs/svgComponents';
import { GiMountedKnight } from 'react-icons/gi'


import '../../App.css';

export const Map = () => {
    const location = {
        address: '1600 Amphitheatre Parkway, Mountain View, california.',
        lat: 37.42216,
        lng: -122.08427,
    }
    const mapStyles: {height: string, width: string} = {        
    height: "100vh",
    width: "100%"
    };
   
      

    return (
        <div className='w-11/12 mx-auto'>
            <LoadScript 
            googleMapsApiKey={MapsKey}
            >
            <GoogleMap
                mapContainerStyle={mapStyles}
                center={location}
                zoom={13}
                mapTypeId={'terrain'}
                tilt={45}
            >
                <Marker label="Batle of Novara" title="Battle of Novara"  position={{ 
                    lat: 45.45,
                    lng: 8.616667
                }} />
                {
                fornovoLocations.map(item => {
                    return (
                    // <Marker key={item.name} position={item.location}/>
                    <Marker title={item.name} label={item.label}  position={item.location}/>
                    )
                })
            }
    
            </GoogleMap>
            </LoadScript>
  
        </div>
    )
}