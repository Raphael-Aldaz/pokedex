import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import './App.css'
import Tags from './Tags/Tags'

function App() {
  const {data} = useQuery(['types'], () => 
  axios.get('https://pokeapi.co/api/v2/type/')
)

  return (
   <>
   {
    data && 
      data.data.results.map(item => (
        <Tags key={item.name} name={item.name} />
      ))
    
   }
    
   </>
  )
}

export default App
