import React, { useState, useEffect } from 'react';

const MinutecastForecast = () => {
  const [minutecastForecast, setMinutecastForecast] = useState(null);

  useEffect(() => {
    //get the user's location using the browser's geolocation API
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        //send the location to the server
        fetch(`/location?latitude=${latitude}&longitude=${longitude}`)
        .then((response) => response.json())
        .then((minutecastData) => {
          setMinutecastForecast(minutecastData);
        })
        .catch((error) => {
          console.error('Error fetching minutecast foreacast:', error);
        });
      },
      (error) => {
        console.error('Error getting user location:', error);
      }
    );
  }, []);

  if (!minutecastForecast) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>Minutecast Forecast</h1>
      <ul>
        {minutecastForecast.Minutes.map((minute) => (
          <li key={minute.DateTime}>
            {minute.PrecipitationIntensity} at {minute.DateTime}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MinutecastForecast;