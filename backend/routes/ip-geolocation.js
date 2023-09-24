const axios = require('axios');
const fs = require('fs');

const outputFilePath = 'C:/Users/dasa5/OneDrive/Desktop/Accuweather_FullStack/backend/output/geolocationData.json'; // Define the output file path --> mote: I had to define the full path in order for it to work successfully


const options = {
  method: 'GET',
  url: 'https://ip-geolocation-ipwhois-io.p.rapidapi.com/json/',
  headers: {
    'X-RapidAPI-Key': '22a7d09ca5mshabc0d63e80619cap14b47djsn1ea0395dd048',
    'X-RapidAPI-Host': 'ip-geolocation-ipwhois-io.p.rapidapi.com'
  }
};

// Wrap the code in an async function
const getGeolocationData = async () => {
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
    getGeolocationData
};

