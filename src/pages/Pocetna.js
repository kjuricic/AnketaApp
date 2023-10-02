import React from 'react';
import { useGlobalState } from '../GlobalStateContext';
import { useNavigate } from 'react-router-dom'; 

import './Pocetna.css';

function Pocetna() {
  const { state, dispatch } = useGlobalState(); 
  const navigate = useNavigate(); 

  const handleKreirajAnketuClick = () => {
 
    navigate('/KreiranjeAnkete');
  };

  return (
    <div className="pocetna-container">
      <h1>Dobrodošli na Početnu stranicu</h1>
    
      <button className="kreiraj-anketu-button" onClick={handleKreirajAnketuClick}>
        Kreiraj novu anketu
      </button>
    </div>
  );
}

export default Pocetna;
