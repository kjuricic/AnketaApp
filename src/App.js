import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { GlobalStateProvider } from './GlobalStateContext'; 

import Pocetna from './pages/Pocetna';
import DetaljiAnkete from './pages/DetaljiAnkete';
import DijeljenjeAnkete from './pages/DijeljenjeAnkete';
import KreiranjeAnkete from './pages/KreiranjeAnkete';

import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <GlobalStateProvider> 
          <Routes>
            <Route index element={<Pocetna />} />
            <Route path="/KreiranjeAnkete" element={<KreiranjeAnkete />} />
            <Route path="/DetaljiAnkete" element={<DetaljiAnkete />} />
            <Route path="/DijeljenjeAnkete" element={<DijeljenjeAnkete />} />
          </Routes>
        </GlobalStateProvider> 
      </BrowserRouter>
    </div>
  );
}

export default App;
