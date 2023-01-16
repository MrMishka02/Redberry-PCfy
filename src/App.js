import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Landing from './pages/Landing/LandingPage';
import PersonalInfo from './pages/InfoLaptop/PersonalInfo';
import LaptopInfo from './pages/InfoLaptop/LaptopInfo';
import Modal from './pages/Modal/Modal';
import EntriesList from './pages/EntriesList/EntriesList';
import InfoPage from './pages/InfoPage/InfoPage';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Landing />}/>
      <Route path='personal-info' element={<PersonalInfo />}/>
      <Route path='laptop-info' element={<LaptopInfo />}/>
      <Route path='show-modal' element={<Modal />} />
      <Route path='entries-list' element={<EntriesList />}/>
      <Route path='info-page' element={<InfoPage />}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;