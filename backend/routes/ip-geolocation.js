const axios = require('axios');
const fs = require('fs');

const outputFilePath = 'C:/Users/dasa5/OneDrive/Desktop/Accuweather_FullStack/backend/output/geolocationData.json'; // Define the output file path --> mote: I had to define the full path in order for it to work successfully

//define the JSON file function to properly read a JSON file
function getJSONData(filePath) {
  const data = fs.readFileSync(filePath, 'utf-8');
  return JSON.parse(data);
}

const getIPAddress = getJSONData('C:/Users/dasa5/OneDrive/Desktop/Accuweather_FullStack/backend/output/ipAddressLookup.json');

const userIP = getIPAddress.ipString;


const options = {
  method: 'GET',
  url: 'https://ip-geolocation-ipwhois-io.p.rapidapi.com/json/',
  params: {
    ip: `${userIP}` //this will serve as a placeholder, later on, I will replace this with an API call to call on the ip address instead
  },
  headers: {
    'X-RapidAPI-Key': '6b47efddb9mshc1034e0198ebb13p1fc09djsn994d19e09be3',
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

