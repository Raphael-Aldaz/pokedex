import styled from "styled-components"
export const Badges = ({name, colorFamilly, typesIcons}) => {
  return (
    <Badge bgColor={colorFamilly}>
 
    <BadgeLogo src={typesIcons} />
      <BadgeName>
      {name}
      </BadgeName>
    </Badge>
  )
}
const Badge = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  width: 62px;
  border: solid 1px black;
  background-color: ${props => props.bgColor };
  margin-top: 5px;
  border-radius: 3px;
  border: none;
  gap: 5px;
  text-transform: capitalize;

`
const BadgeLogo = styled.img`
  width: 13.88px;
  height: 15px;
  
`
const BadgeName = styled.p`
  color: #FFFF;
  font-style: normal;
  font-weight: 400;
  font-size: 12px;


`