import Home from './pages/Home';
import './App.css';
import { Route, Routes } from 'react-router';
import Constacts from './pages/Contacts';
import DevenirPartenaire from './pages/DevenirPartenaire';
import Apropos from './pages/Apropos';
import Mission from './pages/Mission';
const App=()=> {
  return (
   <>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/contact' element={<Constacts/>}/>
        <Route path='/partenaire' element={<DevenirPartenaire/>}/>
        <Route path='/à-propos' element={<Apropos/>}/>
        <Route path='/nos-missions' element={<Mission/>}/>
      </Routes>
   </>
  );
}

export default App;
