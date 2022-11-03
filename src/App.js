import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from 'react-router-dom';

import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import Home from './Home';
import Contact from './Contact';
import About from './About';
import Review from './Review';

function App() {
 return(
  <div>
  <Router>
    <nav>
      <Link className='link' to = '/'>Shop</Link>
      <Link className='link' to = '/about'>About</Link>
      <Link className='link' to = '/contact'>Contact Us</Link>
      <Link className='link' to = '/review'>Review</Link>
    </nav>

    <Routes>
      <Route path = '/' element = {<Home/>}/>
      <Route path = '/review' element = {<Review/>} />
      <Route path ='/about' element = {<About/>}/>
      <Route path = '/contact' element ={<Contact/>} />
     
    </Routes>
  </Router>
  </div>
 );
}

export default App;
