import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Landing from './pages/Landing/LandingPage';
import PersonalInfo from './pages/InfoLaptop/PersonalInfo';
import LaptopInfo from './pages/InfoLaptop/LaptopInfo'

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Landing />}/>
      <Route path='personal-info' element={<PersonalInfo />}/>
      <Route path='laptop-info' element={<LaptopInfo />}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;