import './App.css'
import Contacto from './components/Contacto/Contacto'
import Hero from './components/Hero/Hero'
import IconsSection from './components/IconsSection/IconsSection'
import NavBar from './components/NavBar/NavBar'
import NosotrosSection from './components/NosotrosSection/NosotrosSection'

function App() {

  return (
    <>
        <NavBar/>  
        <Hero/>
        <IconsSection/>
        <NosotrosSection/>
        <Contacto/>
    </>
  )
}

export default App
