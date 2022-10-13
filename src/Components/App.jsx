import './App.scss'
import logoPokeball from '../assets/Icons/Pokeball.svg'
import Generation from '../assets/Icons/Generation.svg'
import Sort from '../assets/Icons/Sort.svg'
import FilterIcon from '../assets/Icons/Filter.svg'
import styled from 'styled-components'
import SearchBar from './SearchBar/Searchbar'


function App() {
  return (
    <div className='App'>
      <LogoPokeballHeader src={logoPokeball} />
      <IconsGroup>
        <HeaderIcon src={Generation} />
        <HeaderIcon src={Sort} />
        <HeaderIcon src={FilterIcon} />
      </IconsGroup>
      <HeaderTitle>Pokédex</HeaderTitle>
      <HeaderDescription>Search for Pokémon by name or using the National Pokédex number</HeaderDescription>
      <SearchBar />
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
const IconsGroup = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0px;
  gap: 20px;
  position: absolute;
  width: 115px;
  height: 25px;
  left: 259px;
  top: 40px;
`
const HeaderIcon = styled.img`
  width: 20px;
  height: 20px;
`
const HeaderTitle = styled.h1`
  position: absolute;
  width: 334px;
  height: 38px;
  left: 40px;
  top: 100px;
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
  left: 40px;
  top: 148px;
  font-family: 'SF Pro Display';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
  color: #747476;
`
export default App
