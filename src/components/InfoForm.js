import React, { useState } from 'react';
import { useGlobalState } from '../GlobalStateContext';
import './InfoForm.css';

function InfoForm() {
  const [formData, setFormData] = useState({ name: '', description: '' });
  const [error, setError] = useState('');
  const [successMessage, setSuccessMessage] = useState(''); 
  const { dispatch } = useGlobalState();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (formData.name.trim() === '') {
      setError('Naziv ankete je obavezan.'); 
      setSuccessMessage(''); // Resetiraj uspešnu poruku ako se pojavi greška
      return;
    }


    setError('');
    setSuccessMessage('');

    // Spremanje podataka u globalno stanje
    dispatch({ type: 'SET_INFO', payload: formData });
    setSuccessMessage('Informacije su uspešno sačuvane!');
  };

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit}>
        <h2>Unesite informacije o anketi</h2>
        {error && <div className="error-message">{error}</div>}
        {successMessage && <div className="success-message">{successMessage}</div>}
        <div className="form-group">
          <label htmlFor="name">Naziv ankete:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="description">Opis ankete:</label>
          <textarea
            id="description"
            name="description"
            value={formData.description}
            onChange={handleInputChange}
          />
        </div>
        <button type="submit" className="submit-button">Spremi informacije</button>
      </form>
    </div>
  );
}

export default InfoForm;
