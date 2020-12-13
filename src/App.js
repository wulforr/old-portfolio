import './App.module.css'
import Navbar from './components/Navbar'
import LandingPage from './components/LandingPage'
import About from './components/About/About'
import Project from './components/Project/Project'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'
import ContactPage from './components/ContactPage/ContactPage'
import MySkills from './components/MySkills/MySkills'
import Blogs from './components/Blogs/Blogs'

function App () {
  return (
    <div className='App'>
      <Navbar />
      <LandingPage />
      <About />
      <MySkills />
      <Project />
      <Contact />
      <Blogs />
      <Footer />
      <ContactPage />
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
