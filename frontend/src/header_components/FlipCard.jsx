import React, { useState } from 'react';
import ReactCardFlip from "react-card-flip";

const FlipCard = ({card}) => {
  const [flip, setFlip] = useState(false);

  return (
    <ReactCardFlip isFlipped={flip} 
      flipDirection="vertical"
    >
      <div style={{
        width: "300px",
        height: "200px",
        background: "#d7fbda",
        fontSize: '40px',
        color: 'green',
        margin: '20px',
        marginTop: '10px',
        borderRadius: '4px',
        textAlign: 'center',
        padding: '20px',
      }}>
        New York<br /><br /> {/**Note: We will need to change the value that is shown here to represent the location of the user at a later time
         */}
        <button style={{
          width: '150px',
          padding: '10px',
          fontSize: '20px',
          background: '#f5d9fa',
          fontWeight: 'bold',
          borderRadius: '5px'
        }} onClick={() => setFlip(!flip)}>
          Click For More
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
