import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './components/Home';
import Contact from './components/Contact';
import About from './components/Aboutus';
import Menu from './menu';

function App() {
  return (
   <>
   <BrowserRouter>
   <Routes>
    <Route path="/" element={[<Menu/>,<Home/>]}/>
    <Route path="/AboutUs" element={[<Menu/>,<About/>]}/>
    <Route path="/ContactUs" element={[<Menu/>,<Contact/>]}/>
   </Routes>
   </BrowserRouter>
   </>
  );
}

export default App;
