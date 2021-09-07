import './App.css';
import Navbar from './components/Navbar';
import Textform from './components/Textform';

function App() {
  return (
    <>
      <Navbar title="Text Utils" aboutTect="About Us" />
      <div className="container">
      <Textform />
      </div>
    </>
  );
}

export default App;
