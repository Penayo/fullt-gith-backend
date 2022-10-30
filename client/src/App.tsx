import React from 'react';
import './App.css';
import { AppSidebar } from './components/app-sidebar';
import { MainMenu } from './components/main-menu';

function App() {
  return (
    <div className="App">
      <div className="container mx-auto">
        <MainMenu />
        <AppSidebar />
        
      </div>
    </div>
  );
}

export default App;
