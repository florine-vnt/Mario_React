import './App.css';
import { marioCharacters } from './data.js';
import Footer from './components/Footer'
import Navbar from './components/Navbar'

function App() {

  return (
    <>
      <Navbar />
      <main>
        <section className='container'>
          <h1>Super Mario characters</h1>

        </section>
      </main>
      <Footer />
    </>
  )
}

export default App
