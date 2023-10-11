import react from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/pages/Home';
import Services from './components/pages/Services';
import Products from './components/pages/Products';
import Login from './components/pages/Login';
import SignUp from './components/pages/SignUp';
import Footer from './components/Footer';
import Dashboard from './components/pages/Dashboard';
import About from './components/pages/About';
import Contact from './components/pages/ContactUs';
import Rights from './components/Rights';


function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' exact Component={Home} />
          <Route path='/services' Component={Services} />
          <Route path='/products'  Component={Products} />
          <Route path='/contact'  Component={Contact} />
          <Route path='/sign-up'  Component={SignUp} />
          <Route path='/login'  Component={Login} />
          <Route path="/dashboard" Component={Dashboard} />
          <Route path='/about'  Component={About} />
        </Routes>
        <Footer />
        {/* <Rights /> */}
      </Router>
    </>
  );
}

export default App;