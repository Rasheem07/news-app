import logo from './logo.svg';
import './App.css';
import Nav from './navigation Bar/nav';
import Main from './main/main';
import Footer from './footer/footer';
import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

function App() {
  return (
    <Router>
      <Nav />
      <Routes>
        <Route path='/' element={<Main key="home" category="general" />} />
        <Route path='/business' element={<Main key="business" category="business" />} />
        <Route path='/entertainment' element={<Main key="entertainment" category="entertainment" />} />
        <Route path='/general' element={<Main key="general" category="general" />} />
        <Route path='/health' element={<Main key="health" category="health" />} />
        <Route path='/science' element={<Main key="science" category="science" />} />
        <Route path='/sports' element={<Main key="sports" category="sports" />} />
        <Route path='/technology' element={<Main key="technology" category="technology" />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
