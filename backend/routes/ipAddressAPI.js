//this file will be used to make a call to determine the ip address of the user's device and use that information as parameter for the ip-geolocationAPI from rapidAPi --> extract latitude and longitude --> use the weatherAPI from rapidAPI to display current information

//api key associated with this api --> bdc_f1c10a8bcd7748119cc7dd970043c6f2 --> api from BigDataCloud
//The following is the api link: https://www.bigdatacloud.com/free-api/public-ip-address-api
const axios = require('axios');
const fs = require('fs');
const API_KEY = `bdc_f1c10a8bcd7748119cc7dd970043c6f2`;
const options = {
    method: 'GET',
    url: 'https://api-bdc.net/data/client-ip',
    headers: {
      'Authorization' : `Bearer ${API_KEY}`, //unsure why I had to add the Bearer option
    }
  };
//define th output file path to store the response
outputFilePath = 'C:/Users/dasa5/OneDrive/Desktop/Accuweather_FullStack/backend/output/ipAddressLookup.json';
  // Wrap the code in an async function
const getIPAddress = async () => {
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

module.exports = {
    getIPAddress
}