
import './App.css'
import CharactersList from './components/CharactersList '
import { Header } from './components/Header'
import { BrowserRouter,Route,Routes } from 'react-router-dom'

function App() {

  return (
    <>
    <BrowserRouter>
    <Header/>
    
    <Routes>  
      <Route path="/"  element={<CharactersList/>} />
    </Routes>
    
      </BrowserRouter>
    </>
  )
}

export default App

// <Route path="/"  element={<Character/>} />