import React, { useState } from 'react';
import ReactCardFlip from "react-card-flip";
import { WiDaySunny, WiRain, WiSnow, WiWindy, WiCloudy } from 'react-icons/wi';
import './FlipCard.css';

const FlipCard = ({card}) => {
  const [flip, setFlip] = useState(false);
  //render icons based on the temperature --> note, on the function parameter, I had to encase it in curly braces first followed by paranthaseses, other the html code in the return section would not render.
  const renderTemperatureIcon = ({temperature}) => {  
    if (temperature > 90) {
      return <WiDaySunny size={40} color="yellow" />;
    } else if (temperature < 50) {
      return <WiSnow size={40} color='blue' />;
    } else if (card.isRainy) {
      return <WiRain size={40} color='gray' />;
    } else if (card.isWindy) {
      return <WiWindy size={40} color='gray' />;
    } else {
      return <WiCloudy size={40} color='gray' />;
    }
  };

  const style = {  //we will use this code for styling the div, the code is the same as what we have within the div component, this is simply a better way to organize what we are working with
    width: '200px',
    height: '200px',
    background: 'rgba(255,255,255,0.7)',
    fontSize: '20px',
    color: 'black',
    margin: '20px',
    marginTop: '10px',
    borderRadius: '4px',
    textAlign: 'center',
    padding: '20px',
  }

  
    /*  --> keep this for use of reference later
    backgroundColor: '#f4511e',
    border: 'none',
    color: 'white',
    padding: '10px 20px',
    textAlign: 'center',
    fontSize: '16px',
    margin: '4px 2px',
    opacity: '0.6',
    transition: '0.3s',
    display: 'inline-block',
    textDecoration: 'none',
    cursor: 'pointer', */

  return (
    <ReactCardFlip isFlipped={flip} flipDirection="vertical"
    >
      <div style={style}>
        {/**Display location here */}
        {card.location}
        <br />
        {/*Display temperature icon based on temperature*/ }
        {renderTemperatureIcon(card.temperature)}
        <br />
        {/**Display temperature */}
        {card.temperature}°F
        <br />
        {/**Display Humidity */}
        Humidity: {card.humidity}%
        <br />
        {/**Display real feel */}
        Real Feel: {card.realFeel}°F
        <br />
    
        <button className='btn-flip' onClick={() => setFlip(!flip)}>
          Flip
        </button>
      </div>
      <div style={style}>
        Pollen Count: <br />  {/**To be updated later */}
        Air Quality Index: <br />  {/**To be updated later */}
        UV Index: <br /> {/**To be updated later */}
        <button className='btn-flip' onClick={() => setFlip(!flip)}>Flip Back</button>
      </div>
    </ReactCardFlip>
  );
};

export default FlipCard;
