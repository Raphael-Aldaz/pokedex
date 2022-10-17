import axios from "axios";
import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { Badges } from "../Badges/Badges";

const Pokemons = () => {
 const {name} = useParams();
 useEffect(() => {
  axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`)
  .then((r) => {console.log(r.data,'reponse')})
  .catch((e)=> {console.log(e,'error')})
 },[name])
 console.log(name)
  return(
    <>
      <Link to={"/"}>
        <h1>Home</h1>
        
      </Link>
      <Badges />
      <h1>{name}</h1>
    </>
    
  )
}

export default Pokemons;