import './App.module.css'
import Navbar from './components/Navbar'
import LandingPage from './components/LandingPage'
import About from './components/About/About'
import Project from './components/Project/Project'

function App () {
  return (
    <div className='App'>
      <Navbar />
      <LandingPage />
      <About />
      <Project />
      {/*
      navbar
      LandingPage
      About in Primary
      Recent Work (heading in primary background_color and then content in white background_color)
      Footer
      */}
    </div>
  )
}

export default App
