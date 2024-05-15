import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './Layouts/HoemPage/index';
import Footer from './Components/Footer';
import Nurses from './Layouts/Nurses';
import Header from './Components/Header';
import Navbar from './Components/Breadcrumbs_Nav/Navbar';
import HomeAttend from './Layouts/Sub-Pages/Home Attend';
import MedicalAttend from './Layouts/Sub-Pages/Medical Attend';

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
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
