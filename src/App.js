import React from "react";
import Header from "./components/Header";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from "react-router-dom";
import Home from './page/Home'
import About from './page/About'
import Blog from './page/Blog'
import Contacts from './page/Contacts'

function App() {
  return (
    <>
      <Header/>
      <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/blog" element={<Blog/>}/>
          <Route path="/contacts" element={<Contacts/>}/>
      </Routes>
    </>
  );
}

export default App;
