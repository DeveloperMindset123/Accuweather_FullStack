/* eslint-disable no-unused-vars */
import { useState } from 'react'
import './App.css';
import FlipCard from './header_components/FlipCard';

//import the components we will use here
import TopNavbar from './header_components/TopNavbar';
import SearchBar from './header_components/SearchBar';

function App() {
  const [count, setCount] = useState(0);
  const locationData = [
    {
      location: 'New York',
      temperature: 80,
      humidity: 55,
      realFeel: 85,
      isRainy: false,
      isWindy: false,
    },
    //later on, add more location objects here
  ];

  return (
    <>
      <div>
        <TopNavbar />
      </div>
      <div>
        <SearchBar />
      </div>
      <div>
        {locationData.map((data, index) => (
          <FlipCard key={index} card={data} />
        ))}
      </div>
    </>
  )
}

export default App;
