import React from 'react';
import logo from './logo.svg';
import { Map } from './components/map/Map';
import { MapsKey } from './hidden/apikeys';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import './App.css';

function App() {

  
    
  return (
    <div className="App">
      <h2 className='text-3xl font-bold underline'>
        The Italian Wars
      </h2>
      <div>
        <Map ></Map>
      </div>
    </div>
  );
}


export default App;
