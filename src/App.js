 import React, { Component } from 'react';
import Sidebar from './components/sidebar';
import Content from './components/content';
import profile from './profile.json';
import './App.css';

class App extends Component {
  render() {
    return (
        <div className="App">
            <Sidebar
                className="sidebar"
                profile={profile}
            />
            <Content className="content" />
        </div>
    );
  }
}

export default App;
