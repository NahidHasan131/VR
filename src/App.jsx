import './App.css'
import Features from './Components/Features'
import Footer from './Components/Footer'
import Hero from './Components/Hero'
import Navbar from './Components/Navbar'
import Pricing from './Components/Pricing'
import Testimonial from './Components/Testimonial'
import Workflow from './Components/Workflow'

function App() {
  

  return (
    <>
      <Navbar></Navbar>
      <div className="max-w-7xl mx-auto pt-20 px-6">
        <Hero></Hero>
        <Features></Features>
        <Workflow></Workflow>
        <Pricing></Pricing>
        <Testimonial></Testimonial>
        <Footer></Footer>
      </div>   
    </>
  )
}

export default App
