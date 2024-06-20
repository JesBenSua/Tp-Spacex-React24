import { useEffect, useState } from "react"
import Character from "./Character";
//import DetalleCharacter from "./DetalleCharacter";

function CharactersList() {
//arreglo de caracteres
const [characters, setCharacters]= useState([]);

//Mostarar o ocultar componete


useEffect (()=> {
  async function fetchData(){
    const response = await fetch('https://api.spacexdata.com/v4/launches');
    const data = await response.json()
    console.log(data)
   setCharacters(data);
    
    }

  fetchData()
}, [])

  return (
<>

    <div className="grid grid-cols-3 "> 
      
             { characters.map  (character => {
              return (
                
               <Character key={character.id} character={character}
               />
              )
            })
          }
    </div>
    </>

  )
}

export default CharactersList

