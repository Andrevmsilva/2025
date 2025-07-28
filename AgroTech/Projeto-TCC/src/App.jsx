import Topo from './components/Topo.jsx'
import Menu from './components/Menu.jsx'
import Carro from './components/Carro.jsx'
import Cards from './components/Cards.jsx'
import './App.css'
import { Card } from 'react-bootstrap'



function App() {


  return (
    <div className="App">
    <Topo/>
    <Menu/>
    <Carro/>  
    <Cards/>

  </div>
  
  )
}

export default App
