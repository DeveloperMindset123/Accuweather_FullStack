//In this backend portion --> the following functionalities needs to be implemented
//API key -- > Accuweather -->  	QNAPvk1FmYGofsgi7wOLzZ4K2Pp9treG  

/**This is the response I got from Bard, keep it here for reference
 * Use a location API to determine the user's latitude and longitude. There are many different location APIs available, such as Google Maps Geolocation API, Apple maps geocoding API, and Mapbox Geocoding API
 * Use the Accuweather API to retrieve the MinuteCast forecast for the user's latitude and longitude. The accuweather API provides a variety of weather data, including MinuteCast forecast.
 */

//start the express server
/*import express from 'express';
import axios from 'axios';
import Radar from './node_modules/radar-sdk-js';
import 'radar-sdk-js/dist/radar.css'; */

//rather than using import statement, let us try and use 'require' as we classically use
// Import the necessary modules using require
// index.cjs

/**
 * understand the difference between GET and POST API requests
 * GET requests are intended to retrieve data from a server and do not modify the server's state, on the other hand, POST requests are used to send data to the server for processing and may modify the server's state.
 */

const express = require('express');
const axios = require('axios');

const hello = require('./routes/hello'); //import the routes folder
const { getGeolocationData } = require('./routes/ip-geolocation');  //note: to call on this async function, I needed to wrap it in {} 

const app = express();
app.use(express.json());
app.use('/hello', hello);

//call on the async functon to execute the code
getGeolocationData();

const PORT = process.env.PORT || 5500; // Set the desired port
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
/*

const IP_GEOLOCATION_API_URL = 'https://ip-geolocation-ipwhois-io.p.rapidapi.com/json/';
const WEATHER_API_URL = 'https://weatherapi-com.p.rapidapi.com/current.json';
const RAPID_API_KEY = '22a7d09ca5mshabc0d63e80619cap14b47djsn1ea0395dd048';

//Function to make an IP geolocation API request
async function getIpGeolocation() {
  try {
    const response = await axios.get(IP_GEOLOCATION_API_URL, {
      headers: {
        'X-RapidAPI-Key': '22a7d09ca5mshabc0d63e80619cap14b47djsn1ea0395dd048',
        'X-RapidAPI-Host': 'ip-geolocation-ipwhois-io.p.rapidapi.com',
      },
    });

    return response.data;
  } catch(error) {
    console.error('Error fetching IP geolocation', error);
    throw error;
  }
}

//Function to make a weather API request based on latitude and longitude
async function getWeather(latitude, longitude) {
  try {
    const response = await axios.get(WEATHER_API_URL, {
      params: {
        q: `${latitude}, ${longitude}`
      },
      headers: {
        'X-RapidAPI-Key': RAPID_API_KEY,
        'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
      },
    });

    return response.data;
  } catch(error) {
    console.error('Error fetching weather data:', error);
    throw error;
  }
}

// Route to get IP geolocation and weather data
app.get('/get-geolocation-and-weather', async(req, res) => {
  try {
    //get IP geolocation data
    const ipGeolocationData = await getIpGeolocation();  //call on the IPgeolocation function we defined above

    //Extract latitude and longitude
    const { lat, lon } = ipGeolocationData;

    //get weather data based on latitude and longitude
    const weatherData = await getWeather(lat, lon); //pass in the lat, lon data we extracted from the IPGeolocation file we called upon

    //save JSON files
    fs.writeFileSync('ip_geolocation.json', JSON.stringify(ipGeolocationData, null, 2)); //will save the data in a file named ip_geolocation.json
    fs.writeFileSync('weather_data.json', JSON.stringify(weatherData, null, 2));

    res.json({ ipGeolocationData, weatherData });
  } catch(error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

*/

//backend call: http://localhost:5500/hello --> server link

//Look into the following tutorial link: https://rapidapi.com/blog/how-to-use-an-api-with-node-js/