import './App.css'
import Contacto from './components/Contacto/Contacto'
import Footer from './components/Footer/Footer'
import Hero from './components/Hero/Hero'
import IconsSection from './components/IconsSection/IconsSection'
import NavBar from './components/NavBar/NavBar'
import NosotrosSection from './components/NosotrosSection/NosotrosSection'
import OurWork from './components/OurWork/OurWork'

function App() {

  return (
    <>
        <NavBar/>  
        <Hero/>
        <IconsSection/>
        <NosotrosSection/>
        <OurWork/>
        <Contacto/>
        <Footer/>
    </>
  )
}

export default App
