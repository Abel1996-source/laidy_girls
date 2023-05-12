import Home from './pages/Home';
import './App.css';
import { Route, Routes } from 'react-router';
import Constacts from './pages/Contacts';
import DevenirPartenaire from './pages/DevenirPartenaire';
const App=()=> {
  return (
   <>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/contact' element={<Constacts/>}/>
        <Route path='/partenaire' element={<DevenirPartenaire/>}/>
      </Routes>
   </>
  );
}

export default App;
