import React from 'react';
import "./card.css";

function Card({id, name, email}){

    return(
        <div className="dib br4 pa2 grow bw2 shadow-5 tc pokeCardOutline">
            <div className="br3 pokeCard" >
            <div className="pokeImg ">
            <img  src= {`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`} alt="robots" />
            </div>
                 <div className="pokeDetails">
                <h1>{name.toUpperCase()}</h1>
                <p>Hello</p>
              </div>
            </div>
        </div>
        
    );
}


export default Card;
