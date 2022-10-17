import axios from "axios"
import { useEffect, useState } from "react"
import styled from "styled-components"
import {theme} from '../../Theme/Theme'
import grid from '../../assets/Icons/6x3.svg'
import pokeball from '../../assets/Icons/pokeballCard.svg'
import { Badges } from "../Badges/Badges"
import { Link } from "react-router-dom"

const Cards = ({name, url }) => {
  const[typesColor, setTypesColor] = useState([])
  const[types, setTypes] = useState([])
  const [picture, setPicture] = useState([])
  const [data, setData] =useState([])
    useEffect(() => {
      axios.get(`${url}`)
    .then((response) => {
      setData(response.data)
      setTypesColor(response.data.types[0].type.name)
      setPicture(response.data.sprites.other["official-artwork"].front_default)
      setTypes(response.data.types)
    })
    .catch((error)=> console.log(error,'infos'))
    },[url])
    const idPokemon = (idToString) => {
      const idPokemonToString = `${idToString}`;

      if(idPokemonToString.length === 1) {
        return `#00${idPokemonToString}`
      }if(idPokemonToString.length === 2) {
        return `#0${idPokemonToString}`
      }
      return `#${idPokemonToString}`;
    };
    let key = 0
  return (
    <>
    <Link  to={ `/${name}`}>
    <CardItem bgColor={theme.colors.backgroundTypes[typesColor]} >
    <PokeballImg src={pokeball} />
    <PokemonData>
    <GridMotifCard src={grid} />
    <PokemonId>{idPokemon(data.id)}</PokemonId>
    <PokemonName>{name}</PokemonName>
    <BadgesWrapper>
    {
      types.map((item) => (
        <Badges typesIcons={theme.typesIcons[item.type.name]} key={key+=1} name={item.type.name} colorFamilly={theme.colors.types[item.type.name]} />
      ))
    }
    </BadgesWrapper>
    </PokemonData>
    <PokemonPicture src={picture} />
    </CardItem>
    </Link>
    </>
  )
}

const CardItem = styled.div`
  width: 334px;
  height: 115px;
  border-radius: 10px;
  margin: auto;
  display: flex;
  position: relative;
  background-color: ${props => props.bgColor };
`
const PokemonData = styled.div`
  width: 144px;
  height: 90px;
  margin: 5px 0 20px 20px;
  position: relative;
`
const PokeballImg = styled.img`
  width: 145px;
  height: 145px;
  position: absolute;
  right: 0;
  top: 0;
  opacity: 0.2;
`
const PokemonId = styled.h3`
  color: rgba(23, 23, 27, 0.6);
  font-size: 12px;
  font-weight: 700;
  font-style: normal;
  margin-top: 20px ;
`
const PokemonName = styled.h1`
  color: #FFFF;
  font-style: normal;
  font-weight: 700;
  font-size: 26px;
`
const GridMotifCard = styled.img`
  width: 74px;
  height: 32px;
  position: absolute;
  top: 0;
  right: 0;
`
const BadgesWrapper = styled.div`
  display: flex;
  gap: 5px;
`
const PokemonPicture = styled.img`
  width:130px ;
  height: 130px;
  position: absolute;
  right: 10px;
  bottom: 10px;
`
export default Cards