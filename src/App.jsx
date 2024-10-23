// src/App.jsx
import { useState } from "react";
import './App.css';
import React from "react";


const App = () => {

const [dragonBallFighters,setDragonBallFighters] = useState([
  {
    name: 'Goku',
    price: 12,
    strength: 6,
    agility: 4,
    img: "https://dragonball-api.com/transformaciones/goku_ssj4.webp",
  },
  {
    name: 'Vegeta',
    price: 10,
    strength: 5,
    agility: 5,
    img: "https://dragonball-api.com/transformaciones/vegeta mega instinto.webp",
  },
  {
    name: 'Frieza',
    price: 18,
    strength: 7,
    agility: 8,
    img: "https://dragonball-api.com/transformaciones/Freezer_3.webp",
  },
  {
    name: 'Piccolo',
    price: 14,
    strength: 7,
    agility: 6,
    img: "https://dragonball-api.com/characters/picolo_normal.webp",
  },
  {
    name: 'Gohan',
    price: 20,
    strength: 6,
    agility: 8,
    img:"https://dragonball-api.com/characters/gohan.webp",
  },
  {
    name: 'Gotenks',
    price: 15,
    strength: 5,
    agility: 7,
    img: "https://dragonball-api.com/characters/Gotenks_Artwork.webp",
  },
  {
    name: 'Master Roshi',
    price: 16,
    strength: 6,
    agility: 5,
    img: "https://dragonball-api.com/characters/roshi.webp",
  },
  {
    name: 'Android 17',
    price: 11,
    strength: 8,
    agility: 3,
    img: "https://dragonball-api.com/characters/17_Artwork.webp",
  },
  {
    name: 'Majin Buu',
    price: 17,
    strength: 5,
    agility: 9,
    img: "https://dragonball-api.com/characters/BuuGordo_Universo7.webp",
  },
  {
    name: 'Jiren',
    price: 22,
    strength: 7,
    agility: 6,
    img: "https://dragonball-api.com/characters/Jiren.webp",
  },
]);

const  [team,setTeam] = useState([])
const [money,setMoney] = useState(100)
const [totalStrength,setTotalStrength] = useState(0)
const [totalAglity,setTotalAgility] = useState(0);

const calculateTotalStrength = () => {
  const strength = team.reduce((total,member)=> total + member.strength,0);
  setTotalStrength(strength);
}

const calculateTotalAgility = () => {
  const agility = team.reduce((total, member) => total + member.agility, 0);
  setTotalAgility(agility);
};

const handleAddFighter = (fighter) => {
  if (money >= fighter.price) {
    setTeam((prevTeam) => {
      const newTeam = [...prevTeam, fighter];
      calculateTotalStrength();
      calculateTotalAgility();
      return newTeam;
    });
    setMoney((prevMoney) => prevMoney - fighter.price);
  } else {
    console.log('Not enough money to add this fighter!');
  }
};

const handleRemoveFighter = (fighter) => {
  setTeam((prevTeam) => {
    const newTeam = prevTeam.filter((member) => member.name !== fighter.name);
    calculateTotalStrength(); 
    calculateTotalAgility();
    return newTeam;
  });
  setMoney((prevMoney) => prevMoney + fighter.price);
};


  return (
    <div className="App">
      <h1> Dragon Ball Fighters </h1>
      <p><strong>Money:</strong> ${money}</p>
      <p><strong>Total Team Strength:</strong>{totalStrength}</p>
      <p><strong>Total Team Agility:</strong>{totalAglity}</p>

      <h2>Avaliable Dragon Ball Fighters</h2>
      <ul className= "fighters-list">
        {dragonBallFighters.map((fighter,index)=>(
          <li key = {index} className= "fighter-card">
            <img src={fighter.img} alt={`${fighter.name} image`} className="fighter-image"/>
            <h3>{fighter.name}</h3>
            <p>Price: ${fighter.price}</p>
            <p>Strength: {fighter.strength}</p>
            <p>Aglity: {fighter.agility}</p>
            <button onClick={() => handleAddFighter(fighter)}>Add Fighter</button>
          </li>
        ))}
      </ul>
      <h2>Your Team</h2>
      {team.length === 0 ? (
        <p>Pick a few team members!</p> 
      ):(
        <ul className="team-list">
          {team.map((member, index) => (
            <li key={index} className="fighter-card">
              <img src={member.img} alt={`${member.name} image`} className="fighter-image" />
              <h3>{member.name}</h3>
              <p>Price: ${member.price}</p>
              <p>Strength: {member.strength}</p>
              <p>Agility: {member.agility}</p>
              <button onClick={() => handleRemoveFighter(member)}>Remove Fighter</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default App


