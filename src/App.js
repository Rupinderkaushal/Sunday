import './App.css';
import NavbarOne from './Navbar';
import {BrowserRouter,Route,Routes} from 'react-router-dom';
import Home from './Home';
import HomeOne from './HomeOne';
import ProCoder from './ProCoder';
function App() {
  return (
    <>
      <BrowserRouter>
      <NavbarOne/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/home" element={<HomeOne/>} />
        <Route path="/procoder" element={<ProCoder/>} />
      </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
