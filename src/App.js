import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './Layouts/HoemPage/index';
import Footer from './Components/Footer';
import Nurses from './Layouts/Nurses';

function App() {
  return (
    <>
      <BrowserRouter>
        {/* <Header /> */}
        <Routes>
          <Route path='/' element={<HomePage />} />
        </Routes>
        <Routes>
          <Route path='/Nurses' element={<Nurses />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
