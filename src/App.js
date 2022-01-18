import './App.css';

import React, { Component } from 'react'
import Navbar from './Components/Navbar';
import News from './Components/News';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

export default class App extends Component {
  pageSize = 10;
  render() {
    return (
      <div>
        <Router>
          <Navbar />
          <Routes>
            <Route exact path="/" element={<News pageSize={this.pageSize} key="general" category="general"/>}></Route>
            <Route exact path="/business" element={<News pageSize={this.pageSize} key="business" category="business"/>}></Route>
            <Route exact path="/entertainment" element={<News pageSize={this.pageSize} key="entertainment" category="entertainment"/>}></Route>
            <Route exact path="/general" element={<News pageSize={this.pageSize} key="general" category="general"/>}></Route>
            <Route exact path="/health" element={<News pageSize={this.pageSize} key="health" category="health"/>}></Route>
            <Route exact path="/science" element={<News pageSize={this.pageSize} key="science" category="science"/>}></Route>
            <Route exact path="/sports" element={<News pageSize={this.pageSize} key="sports" category="sports"/>}></Route>
            <Route exact path="/technology" element={<News pageSize={this.pageSize} key="technology" category="technology"/>}></Route>
          </Routes>
          
        </Router>
      </div>
    )
  }
}

