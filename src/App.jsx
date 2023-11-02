import './App.css'
import About from './components/About'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Home from './components/Home'
import Portfolio from './components/Portfolio'
import Top from './components/shared/Top'

function App() {

  return (
    <main className='text-white min-h-screen bg-gradient-to-t from-principal to-dark font-poppins'>
      <Home/>
      <About/>
      <Portfolio/>
      <Contact/>
      <Footer/>
      <Top/>
    </main>
  )
}

export default App
