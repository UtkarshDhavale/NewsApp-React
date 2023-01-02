import './App.css';

import React, { Component } from 'react'
import Navbar from './Components/Navbar';
import News from './Components/News';
import {
  Routes,
  Route
} from "react-router-dom";

export default class App extends Component {

  APIKey = "abad17fdf79441879a9a58830043da71";

  render() {

    return (
      <>
      <div>
        <Navbar/>
          <Routes>
            <Route exact path="business" element={<News key="business" pagesize={5} country="in" category="business" apikey = {this.APIKey}/>}/>
            <Route exact path="entertainment" element={<News key="entertainment" pagesize={5} country="in" category="entertainment" apikey = {this.APIKey}/>}/>
            <Route exact path="/" element={<News key="general" pagesize={5} country="in" category="general" apikey = {this.APIKey}/>}/>
            <Route exact path="general" element={<News key="general" pagesize={5} country="in" category="general" apikey = {this.APIKey}/>}/>
            <Route exact path="health" element={<News key="health" pagesize={5} country="in" category="health" apikey = {this.APIKey}/>}/>
            <Route exact path="science" element={<News key="science" pagesize={5} country="in" category="science" apikey = {this.APIKey}/>}/>
            <Route exact path="sports" element={<News key="sports" pagesize={5} country="in" category="sports" apikey = {this.APIKey}/>}/>
            <Route exact path="technology" element={<News key="technology" pagesize={5} country="in" category="technology" apikey = {this.APIKey}/>}/>
          </Routes>
        </div>
      </>
    )
  }
}

