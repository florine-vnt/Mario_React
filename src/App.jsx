import './App.css';
import { marioCharacters } from './data.js';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import CardList from "./components/CardList.jsx";

function App() {

  return (
    <>
      <Navbar />
      <h1>Super Mario characters</h1>
      <ul>
        <CardList>
          <CardGoodBoy></CardGoodBoy>
          <CardBadBoy></CardBadBoy>
        </CardList>
      </ul>
      <Footer />
    </>
  )
}

export default App;
