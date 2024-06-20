import CharactersList from "./CharactersList "

function Character({character}) {

  
    return (
      <div className="card mx-auto mt-90" >
         <img src= {character.links.patch.small} alt={character.name} />   
         <a className="font-black  text-center" href={`/id/${character.id}`}> {character.name} </a>    
      </div>


    )
  }
  
  export default Character
  //Esto es lo que usaba para lo de Ricki and Morty
   //<img src= {character.image} alt={character.name} />

  

  //<a href="#/${appSpace.id}/">