import Home from './Pages/Home/Home'
import About from './Pages/About/About'
import Contact from './Pages/Contact/Contact'
import Gallery from './Pages/Gallery/Gallery'
import NotFound from './Pages/NotFound/NotFound'
import Plans from './Pages/Plans/Plans'
import Trainers from './Pages/Trainers/Trainers'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Navbar from './Navbar/Navbar'
import aboutImg from './Images/header3.jpg'
import SignUp from './SignUp/Signup'
import Footer from './Footer/Footer'

function App() {
  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route index path='/' element={<Home/>}/>
        <Route path='about' element={<About img={aboutImg}/>}/>
        <Route path='contact' element={<Contact/>}/>
        <Route path='gallery' element={<Gallery/>}/>
        <Route path='plans' element={<Plans/>}/>
        <Route path='trainers' element={<Trainers/>}/>
        <Route path='*' element={<NotFound/>}/>
        <Route path='/signup' element={<SignUp/>}/>
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
