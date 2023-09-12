import React, { useState } from 'react';
import ReactCardFlip from "react-card-flip";
import { WiDaySunny, WiRain, WiSnow, WiWindy, WiCloudy } from 'react-icons/wi';

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
  return (
    <ReactCardFlip isFlipped={flip} flipDirection="vertical"
    >
      <div style={{
        width: "200px",
        height: "200px",
        background: "rgba(255,255,255,0.7)", //code for transparent background
        fontSize: '20px',
        color: 'black',
        margin: '20px',
        marginTop: '10px',
        borderRadius: '4px',
        textAlign: 'center',
        padding: '20px',
      }}>
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
        <button style={{
          width: '150px',
          padding: '10px',
          fontSize: '20px',
          background: '#f5d9fa',
          fontWeight: 'bold',
          borderRadius: '5px',
          position: 'center',
        }} onClick={() => setFlip(!flip)}>
          Flip
        </button>
      </div>
      <div style={{
        width: '300px',
        height: '200px',
        background: '#fbd7f8',
        fontSize: '20px',
        color: 'blue',
        margin: '20px',
        borderRadius: '4px',
        textAlign: 'center',
        padding: '20px'
      }}>
        Temperature<br />
        Humidity <br />
        Real Feel: <br />
        <button style={{
          width: '150px',
          padding: '10px',
          fontSize: '20px',
          background: '#f5d9fa',
          fontWeight: 'bold',
          borderRadius: '5px'
        }} onClick={() => setFlip(!flip)}>Flip Back</button>
      </div>
    </ReactCardFlip>
  );
};

export default FlipCard;
