/* eslint-disable no-unused-vars */
import { useState, useEffect } from 'react'
import './App.css';
import FlipCard from './header_components/FlipCard';

//import the components we will use here
import TopNavbar from './header_components/TopNavbar';
import SearchBar from './header_components/SearchBar';
import MinutecastForecast from './header_components/MinutecastForecast';

function App() {
  const [count, setCount] = useState(0);
  const locationData = [
    {
      location: 'New York',
      temperature: 80,
      humidity: 55,
      realFeel: 85,
      isRainy: false,
      isWindy: false,
    },
    //later on, add more location objects here
  ];
  //const axios = require('axios');
/*
  useEffect(() => {
    //Make a get request to the backend endpoint
    axios.get('http://localhost:3000/get-geolocation-and-weather')
      .then(response => {
        //Log the response data in the console
        console.log('Backend Response:', response.data);
      })
      .catch(error => {
        //handle any errors
        console.error('Error:', error);
      });
  }, []); //Empty dependancy array to run this effect only once */
  return (
    <>
      <div>
        <TopNavbar />
      </div>
      <div>
        <SearchBar />
      </div>
      <div>
        {locationData.map((data, index) => (
          <FlipCard key={index} card={data} />
        ))}
      </div>
      <div>
        
      </div>
    </>
  )
}

export default App;
