import Navbar from "./components/navbar"
import Hero from "./components/Hero"
import Servicios from "./components/Servicios"
import Beneficios from "./components/Beneficios"
import Proceso from "./components/Proceso"
import Portafolio from "./components/Portafolio"
import FAQ from "./components/FAQ"
import Contacto from "./components/Contacto"
import Footer from "./components/Footer"
import FloatingButtons from "./components/FloatingButtons"

function App() {
  return (
    <div className="bg-black text-white overflow-x-hidden">
      <Navbar />
      <Hero />
      <Servicios />
      <Beneficios />
      <Proceso />
      <Portafolio />
      <FAQ />
      <Contacto />
      <Footer />
      <FloatingButtons />
    </div>
  )
}

export default App