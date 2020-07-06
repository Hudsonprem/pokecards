import React, {useState} from 'react';
import Scroll from "../Components/Scroll";
import CardList from '../Components/CardList';
import Seacrh from "../Components/Search";
// import robots from "../Components/robots";
import "./App.css";

function App() 
{
  var array = [];
  async function fetchmon()
  {
  var poke = await fetch("https://pokeapi.co/api/v2/pokemon?limit=500");
  var list = await poke.json();
  array = await list.results;
  setPokemon(array);
  }

  const [pokemon,setPokemon ] = new useState([]);
  const [seacrhfield,setseacrhfield ] = new useState("");
  fetchmon()
  
       function onSearch(event)
        {
          setseacrhfield(event.target.value);
        } 

        const filterList = pokemon.filter(function(robot){
        return robot.name.toLowerCase().includes(seacrhfield.toLowerCase())
      }) 
  
        return !pokemon.length ? <h1>Loading </h1> : (
          <div className ="tc">
            <h1 className="hudson f1">
              Welcome to PokeCards
            </h1>
        
            <Seacrh seacrhChange =  { onSearch }/>
            <hr/>

            <Scroll>  
                <CardList poke = { filterList }/>
            </Scroll>
          </div>
        );
  
  
}

export default App;
