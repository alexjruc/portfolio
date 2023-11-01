import './App.css'
import About from './components/About'
import Header from './components/Header'
import Home from './components/Home'
import Portfolio from './components/Portfolio'

function App() {

  return (
    <main className='min-h-screen bg-gradient-to-t from-principal to-dark font-poppins'>
      <Header/>
      <Home/>
      <About/>
      <Portfolio/>
    </main>
  )
}

export default App
