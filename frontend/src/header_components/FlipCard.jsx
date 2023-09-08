import React, { useState } from 'react';
import {
    card,
    container,
    flex,
    h1,
    img,
    p,
    button,
    hover,
} from 'tailwindcss';

export const FlipCard = () => {
  const [locations, useLocations] = useState([
    //for now, these are placeholders, when implementing the backend components, the cards will be changed
    {
      name: "New York City",  //consider implementing an image component later, very complex taking into consideration the location could be anywhere and the associated image needs to be represented with the associated area, look into this when reviewing the frontend components once the development is complete
      temperature: 75,
      realFeel: 
      
    }
  ])

  return (
    <div></div>
  )
}
