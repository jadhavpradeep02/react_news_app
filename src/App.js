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
  apiKey = process.env.REACT_APP_API_KEY;

  render() {
    return (
      <div>
        <Router>
          <Navbar />
          <Routes>
            <Route exact path="/" element={<News pageSize={this.pageSize} key="general" apiKey={this.apiKey} category="general"/>}></Route>
            <Route exact path="/business" element={<News pageSize={this.pageSize} key="business" apiKey={this.apiKey} category="business"/>}></Route>
            <Route exact path="/entertainment" element={<News pageSize={this.pageSize} key="entertainment" apiKey={this.apiKey} category="entertainment"/>}></Route>
            <Route exact path="/general" element={<News pageSize={this.pageSize} key="general" apiKey={this.apiKey} category="general"/>}></Route>
            <Route exact path="/health" element={<News pageSize={this.pageSize} key="health" apiKey={this.apiKey} category="health"/>}></Route>
            <Route exact path="/science" element={<News pageSize={this.pageSize} key="science" apiKey={this.apiKey} category="science"/>}></Route>
            <Route exact path="/sports" element={<News pageSize={this.pageSize} key="sports" apiKey={this.apiKey} category="sports"/>}></Route>
            <Route exact path="/technology" element={<News pageSize={this.pageSize} key="technology" apiKey={this.apiKey} category="technology"/>}></Route>
          </Routes>
          
        </Router>
      </div>
    )
  }
}

