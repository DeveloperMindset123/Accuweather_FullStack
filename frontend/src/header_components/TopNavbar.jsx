/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import './TopNavbar.css'; // Include your CSS file

const TopNavbar = () => {

  const imageLinks = [  //create an array where we will store the randomly generated background images
    "https://free4kwallpapers.com/uploads/originals/2015/10/17/greate-scene-of-weather-wallpaper.jpg",
    "https://free4kwallpapers.com/uploads/originals/2015/07/16/nice-beach-suning-weather-hd-wallapaper.jpg",
    "https://images.hdqwalls.com/wallpapers/branches-tree-night-blue-cool-weather-ww.jpg",
    'https://wallpapers.com/images/hd/beautiful-weather-with-gradient-sky-r6nxyjof50r7renl.jpg',
    
  ];
  
  const randomImageIndex = Math.floor(Math.random() * imageLinks.length);
  
  const selectedImage = imageLinks[randomImageIndex];
  
  document.body.style.backgroundImage = `url(${selectedImage})`;
  document.body.style.backgroundRepeat = "no-repeat";
  //document.body.style.backgroundSize="cover";  --> this was updated in the css section
  document.body.style.height="100%";
  document.body.style.width="100%";
  
  //define the toggle open function, to display the content within the navbar
  function openNav() {
    document.getElementById("mySidePanel").style.width = "250px";
  }
  //this will close the navbar
  function closeNav() {
    document.getElementById("mySidePanel").style.width = "0px";
  }

  return (
    <body className='top-navbar'>
        <a href='Home'><img id="web-logo" src="https://cdn-icons-png.flaticon.com/512/4052/4052984.png" alt='Logo' /></a>
        <div id='mySidePanel' className='sidepanel'>
          <a href='javascript:void(0)' className='closebtn' onClick={closeNav}>x</a>
          <a href="#Settings">⚙️ Settings</a>
          <a href="#Location"><span className="material-symbols-outlined">location_on</span> Location</a>
          <a href="#Today">📆 Today</a>
          <a href="#Hourly">🕙 Hourly</a>
          <a href="#Daily">🌤️ Daily</a>
          <a href="#Radar">📡 Radar</a>
          <a href="#Minutecast">🌧️ Minutecast</a>
          <a href="#Monthly">⌛ Monthly</a>
          <a href="#AirQuality">💨 Air Quality</a>
          <a href="#HealthActivities">💪 Health & Activities</a>
        </div>
        <button className="openbtn" onClick={openNav}>☰ Expand</button>
    </body>
  );
  
};

export default TopNavbar;
