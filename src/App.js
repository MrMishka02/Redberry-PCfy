import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { EntriesList, InfoPage, Landing, LaptopInfo, Modal, PersonalInfo } from "./pages/"

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