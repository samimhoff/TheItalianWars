import React from 'react';
import logo from './logo.svg';
import { MapsKey } from './apikeys';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import './App.css';

function App() {

  const location = {
    address: '1600 Amphitheatre Parkway, Mountain View, california.',
    lat: 37.42216,
    lng: -122.08427,
  }
  const mapStyles = {        
    height: "100vh",
    width: "100%"
  };
  const locations = [
    {
      name: "Location 1",
      location: { 
        lat: 42.576091,
        lng: 12.990725 
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
  
    
  return (
    <div className="App">
      <h2 className='text-3xl font-bold underline text-red-600'>
        Simple sample baby
      </h2>
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
          <Marker label="Batle of Novara" title="Battle of Novara" position={{ 
        lat: 45.45,
        lng: 8.616667
      }} />
           {
            locations.map(item => {
              return (
              // <Marker key={item.name} position={item.location}/>
              <Marker key={item.name} position={item.location}/>

              )
            })
         }

        </GoogleMap>
      </LoadScript>

      </div>
      
    </div>
  );
}


export default App;
