// src/App.js
import React from 'react';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import MainContent from './components/MainContent';

function App() {
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-grow flex flex-col">
        <Header />
        <MainContent />
      </div>
    </div>
  );
}

export default App;
