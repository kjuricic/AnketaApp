import React, { useState } from 'react';
import { useGlobalState } from '../GlobalStateContext';
import { Link } from 'react-router-dom'; 

function DijeljenjeAnkete() {
  const { state } = useGlobalState();
  const { info, survey } = state;
  const [surveyLink, setSurveyLink] = useState('');

  
  const generateSurveyLink = () => {
    if (survey) {
      
      const surveyID = survey.id; 
      const sharingURL = `http....../detalji-ankete`;
     // const sharingURL = `http....../detalji-ankete/${surveyID}`;
      setSurveyLink(sharingURL);
    }
  };

  // Funkcija za kopiranje generiranog linka 
  const copySurveyLink = () => {
    if (surveyLink) {
      navigator.clipboard.writeText(surveyLink)
        .then(() => {
          alert('Link je kopiran u međuspremnik!');
        })
        .catch((error) => {
          console.error('Greška prilikom kopiranja linka: ', error);
        });
    }
  };

  return (
    <div>
      <h2>Dijeljenje Ankete</h2>
      <p>Naziv ankete: {info && info.name}</p>
      <p>Opis ankete: {info && info.description}</p>
      <button onClick={generateSurveyLink}>Generiraj Link za Dijeljenje</button>
      {surveyLink && (
        <div>
          <p>Generirani Link:</p>
          <input type="text" value={surveyLink} readOnly />
          <button onClick={copySurveyLink}>Kopiraj Link</button>
        </div>
      )}
      {/* veza za prikaz detalja ankete */}
      {survey && (
          <Link to={`/DetaljiAnkete`}>Prikaži detalje ankete</Link>
       // <Link to={`/DetaljiAnkete/${survey.id}`}>Prikaži detalje ankete</Link>
      )}
    </div>
  );
}

export default DijeljenjeAnkete;
