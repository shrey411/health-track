import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './Layouts/HoemPage/index';
import Footer from './Components/Footer';
import Nurses from './Layouts/Nurses';
import Header from './Components/Header';
import Navbar from './Components/Breadcrumbs_Nav/Navbar';
import HomeAttend from './Layouts/Sub-Pages/Home Attend';
import MedicalAttend from './Layouts/Sub-Pages/Medical Attend';
import ICUCare from './Layouts/Sub-Pages/ICU Care Page';
import  Physiotherapy  from './Layouts/Sub-Pages/Physiotherapy';
import EmergencyNursingCare from './Layouts/Sub-Pages/Emergency Nursing Care Page';

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Navbar/>
        <Routes>
          <Route path='/' element={<HomePage />} />
        </Routes>
        <Routes>
          <Route path='/Nursing Services' element={<Nurses />} />
        </Routes>        
        <Routes>
          <Route path='/Nursing Services/Home Attend' element={<HomeAttend />} />
        </Routes> 
        <Routes>
          <Route path='/Nursing Services/Medical Attend' element={<MedicalAttend />} />
        </Routes>
        <Routes>
          <Route path='/Nursing Services/ICU Care' element={<ICUCare />} />
        </Routes>        
        <Routes>
          <Route path='/Nursing Services/Physiotherapy' element={<Physiotherapy />} />
        </Routes>     
        <Routes>
          <Route path='/Nursing Services/EmergencyNursingCare' element={<EmergencyNursingCare />} />
        </Routes>       
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
