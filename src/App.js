import './App.css';

import React, { Component } from 'react'
import Navbar from './Components/Navbar';
import News from './Components/News';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

export default class App extends Component {

  render() {
    return (
      <>
      <BrowserRouter>
      <div>
        <Navbar/>
          <Routes>
            <Route exact path="business" element={<News pagesize={3} country="in" category="business"/>}/>
            <Route exact path="entertainment" element={<News pagesize={3} country="in" category="entertainment"/>}/>
            <Route exact path="general" element={<News pagesize={3} country="in" category="eneral"/>}/>
            <Route exact path="health" element={<News pagesize={3} country="in" category="health"/>}/>
            <Route exact path="science" element={<News pagesize={3} country="in" category="science"/>}/>
            <Route exact path="sports" element={<News pagesize={3} country="in" category="sports"/>}/>
            <Route exact path="technology" element={<News pagesize={3} country="in" category="technology"/>}/>
          </Routes>
        </div>
        </BrowserRouter>
      </>
    )
  }
}

