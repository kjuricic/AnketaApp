import React, { useState } from 'react';
import './Question.css';

const Question = ({
  question,
  onQuestionChange,
  onAddChoice,
  onRemoveQuestion,
  onChoiceChange,
  onRemoveChoice,
}) => {
  const [newChoice, setNewChoice] = useState(''); 
  const [selectedChoiceIndex, setSelectedChoiceIndex] = useState(null); 

  const handleRemoveChoice = (choiceIndex) => {
    onRemoveChoice(choiceIndex);
  };

  const handleAddNewChoice = () => {
    if (newChoice.trim() === '') return;

    if (selectedChoiceIndex !== null) {
      
      onChoiceChange(selectedChoiceIndex, newChoice);
      setSelectedChoiceIndex(null); 
    } else {
      
      onAddChoice(newChoice);
    }

 
    setNewChoice('');
  };

  const handleSelectChoiceForUpdate = (choiceIndex) => {
    setSelectedChoiceIndex(choiceIndex); 
    setNewChoice(question.choices[choiceIndex].label); 
  };

  return (
    <div>
      <button onClick={onRemoveQuestion} className="button delete-button">
        Izbriši pitanje
      </button>
      <input
        type="text"
        placeholder="Unesite pitanje"
        value={question.question}
        onChange={(e) => onQuestionChange(e.target.value)}
      />
      <label>
        Višestruki odabir:
        <input
          type="checkbox"
          checked={question.isMultiChoice}
          onChange={(e) => onQuestionChange('isMultiChoice', e.target.checked)}
        />
      </label>
      <h4>Opcije:</h4>
      {question.choices.map((choice, choiceIndex) => (
        <div key={choiceIndex} className="choice-container">
          <input
            type="text"
            value={choice.label}
            placeholder={`IZBOR ${choiceIndex + 1}`}
            onChange={(e) => onChoiceChange(choiceIndex, e.target.value)}
          />
          <div className="choice-buttons">
            <button onClick={() => handleSelectChoiceForUpdate(choiceIndex)} className="button update-button">
              Ažuriraj izbor
            </button>
            <button onClick={() => handleRemoveChoice(choiceIndex)} className="delete-button">
              Izbriši izbor
            </button>
          </div>
        </div>
      ))}
      <div>
        <input
          type="text"
          placeholder="Unesite naziv novog izbora"
          value={newChoice}
          onChange={(e) => setNewChoice(e.target.value)}
        />
        <button onClick={handleAddNewChoice} className="button update-button">
          {selectedChoiceIndex !== null ? "Ažuriraj izbor" : "Spremi izbor"}
        </button>
      </div>
     
    </div>
  );
};

export default Question;
