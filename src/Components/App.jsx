import './App.scss'
import logoPokeball from '../assets/Icons/Pokeball.svg'
import Generation from '../assets/Icons/Generation.svg'
import Sort from '../assets/Icons/Sort.svg'
import FilterIcon from '../assets/Icons/Filter.svg'
import styled from 'styled-components'
import SearchBar from './SearchBar/Searchbar'
import Cards from './Cards/Cards'
import Pokemons from './Pokemon/Pokemon'

import axios from 'axios'
import { useEffect, useState } from 'react'
import { Routes, Route, useParams} from "react-router-dom"

function App() {
  const params = useParams();
  const [pokemons, setPokemons] = useState([])


  useEffect(()=> {
    axios.get('https://pokeapi.co/api/v2/pokemon/')
    .then((response) => {
      setPokemons(response.data.results)
    })
    .catch((error)=> {
      console.log(error)
    })
  },[])


  return (
    <div className='App'>
    <Routes>
      <Route path="*" element={
        <>
      <LogoPokeballHeader src={logoPokeball} />
      <HeaderWrapper>
      <IconsGroup>
        <HeaderIcon src={Generation} />
        <HeaderIcon src={Sort} />
        <HeaderIcon src={FilterIcon} />
      </IconsGroup>
      <HeaderTitle>Pokédex</HeaderTitle>
      <HeaderDescription>Search for Pokémon by name or using the National Pokédex number</HeaderDescription>
      </HeaderWrapper>
      <SearchBar />
      <ListCardWrapper>
      {
        pokemons.map((pokemon) => 
          <Cards 
          key={pokemon.name} 
          id={pokemon.id} 
          name={pokemon.name} 
          url = {pokemon.url}/>
        )
      }
      </ListCardWrapper>
      </>
      } />
      <Route path='/:name' element={
        <Pokemons name={params} />
      } />
    </Routes>
    </div>
  )
}
const LogoPokeballHeader = styled.img`
  width: 414px;
  height: 414px;
  position: absolute;
  left: 0;
  top: -207px;
  opacity: 0.02;
`
const HeaderWrapper = styled.div`

height: 186px;
position: relative;
margin: 40px 40px 21px 40px;
`
const IconsGroup = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0px;
  gap: 20px;
  width: 115px;
  height: 25px;
  right: 0;
  top: 0;
  position: absolute;
`
const HeaderIcon = styled.img`
  width: 20px;
  height: 20px;
`
const HeaderTitle = styled.h1`
  position: absolute;
  width: 334px;
  height: 38px;
  left: 0px;
  top:30px;
  font-family: 'SF Pro Display';
  font-style: normal;
  font-weight: bold;
  font-size: 32px;
  line-height: 38px;
  color: #17171B;
`
const HeaderDescription = styled.p`
  position: absolute;
  width: 334px;
  height: 38px;
  left: 0px;
  bottom: 0px;
  font-family: 'SF Pro Display';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
  color: #747476;
`
const ListCardWrapper = styled.div`
  margin-top: 45px;
  display: flex;
  flex-direction: column;
  gap: 30px;
`
export default App
