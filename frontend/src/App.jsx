/* eslint-disable no-unused-vars */
import { useState } from 'react'
import './App.css';

//import the components we will use here
import TopNavbar from './header_components/TopNavbar';
import SearchBar from './header_components/SearchBar';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div>
      <TopNavbar />
    </div>
    <div>
      <SearchBar />
    </div>
    </>
  )
}

export default App;
