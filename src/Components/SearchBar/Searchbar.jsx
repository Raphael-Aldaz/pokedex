import './SearchBar.scss'
import styled from 'styled-components'
import searchIcon from '../../assets/Icons/Search.svg'
const SearchBar = () => {
  return (
    <FormSearch>
      <SearchIcon src={searchIcon} />
      <SearchInput placeholder='What Pokémon are you looking for ?' />
    </FormSearch>
  )
}

const FormSearch = styled.form`
display: flex;
flex-direction: row;
justify-content: center;
align-items: flex-start;
padding: 20px 25px;
gap: 10px;
position: absolute;
left: 40px;
top: 211px;
background: #F2F2F2;
border-radius: 10px;
`
const SearchIcon = styled.img`
  width: 16px;
  height: 16px;
`
const SearchInput = styled.input`
  font-family: 'SF Pro Display';
  font-size: 16px;
  font-weight: 400;
  border: none;
  outline: none;
  width: 254px;
  background: #F2F2F2;
`
export default SearchBar