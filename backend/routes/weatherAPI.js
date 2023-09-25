const axios = require('axios');
const fs = require('fs');
const { getGeolocationData } = require('./ip-geolocation');
const outputFilePath = 'C:/Users/dasa5/OneDrive/Desktop/Accuweather_FullStack/backend/output/weatherData.json'; // Define the output file path --> mote: I had to define the full path in order for it to work successfully

//simply get the JSON file and then extract the information from there
function getJSONData(filePath) {
    const data = fs.readFileSync(filePath, 'utf-8');
    return JSON.parse(data);
}
const geoLocationData = getJSONData('C:/Users/dasa5/OneDrive/Desktop/Accuweather_FullStack/backend/output/geolocationData.json')  //copy the full path of the json file to here
console.log(geoLocationData);

const latitude = geoLocationData.latitude; //extract information about the latitude
const longitude = geoLocationData.longitude;  //extract information about the longitude

const options = {
    method: 'GET',
    url: 'https://weatherapi-com.p.rapidapi.com/current.json',
    params: {q: `${latitude},${longitude}`},
    headers: {
      'X-RapidAPI-Key': '6b47efddb9mshc1034e0198ebb13p1fc09djsn994d19e09be3',
      'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
    }
  };

// Wrap the code in an async function
const getWeatherData = async () => {
  try {
    const response = await axios.request(options);
    console.log(response.data);
    // Write the response data to a JSON file
    fs.writeFile(outputFilePath, JSON.stringify(response.data, null, 2), (err) => {
      if (err) {
        console.error('Error writing JSON file:', err);
      } else {
        console.log('JSON file saved successfully.');
      }
    });
  } catch (error) {
    console.error(error);
  }
};

//export the routes
module.exports = {
    getWeatherData
};