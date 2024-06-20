import Character from "./Character"

function DetalleCharacter({character}) {
  return (
    <div>
        <h3 >Razon de falla: {character.failures[0].reason} </h3>   
        <h3 > Detalle: {character.details} </h3>   
        <h3 > Números de vuelo: {character.flight_number} </h3>   
        <h3 > Fecha y hora de despegue: {character.date_local}</h3>
    </div>


  )
}
 
export default DetalleCharacter

//<div>
        //<img src= {character.links.patch.small} alt={character.name} /> 
        //<h3 >Razon de falla: {character.failures[0].reason} </h3>   
        //<h3 > Detalle: {character.details} </h3>   
       // <h3 > Números de vuelo: {character.flight_number} </h3>   
       // <h3 > Fecha y hora de despegue: {character.date_local}</h3>

      // <h1 className="font-black  text-center" > {character.name} </h1>

   // </div>
