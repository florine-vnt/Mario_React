import './App.css';
import { marioCharacters } from './data.js';
import Footer from './components/Footer'
import Navbar from './components/Navbar'

function App() {

  return (
    <>
      <Navbar />
      <h1>Super Mario characters</h1>
      <Footer />
    </>
  )
}

export default App
