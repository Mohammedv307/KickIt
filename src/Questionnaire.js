import React, { useState } from 'react';
import './Questionnaire.css';

const Questionnaire = () => {
  const [step, setStep] = useState(1);
  const [answers, setAnswers] = useState({
    yearsPlayed: '',
    highestLevel: '',
    selfAssessment: '',
  });
  const [suggestedLevel, setSuggestedLevel] = useState('');

  const handleChange = (e) => {
    setAnswers({ ...answers, [e.target.name]: e.target.value });
  };

  const handleNext = () => {
    setStep(step + 1);
  };

  const handleSubmit = () => {
    let level = '';
    if (answers.yearsPlayed < 1 || answers.selfAssessment === 'Beginner') {
      level = 'Beginner';
    } else if (
      (answers.yearsPlayed >= 1 && answers.yearsPlayed <= 3) ||
      answers.selfAssessment === 'Amateur'
    ) {
      level = 'Amateur';
    } else if (
      (answers.yearsPlayed > 3 && answers.yearsPlayed <= 5) ||
      answers.selfAssessment === 'Semi-Pro'
    ) {
      level = 'Semi-Pro';
    } else if (
      answers.yearsPlayed > 5 ||
      answers.selfAssessment === 'Professional'
    ) {
      level = 'Professional';
    }
    setSuggestedLevel(level);
    console.log('User Answers:', answers);
  };

  return (
    <div className="questionnaire">
      <h2 className="questionnaire-header">Determine your level</h2>
      {step === 1 && (
        <div className="question">
          <label>How many years have you played football?</label>
          <input
            type="number"
            name="yearsPlayed"
            value={answers.yearsPlayed}
            onChange={handleChange}
          />
          <button onClick={handleNext}>Next</button>
        </div>
      )}
      {step === 2 && (
        <div className="question">
          <label>What's the highest level you have played?</label>
          <select
            name="highestLevel"
            value={answers.highestLevel}
            onChange={handleChange}
          >
            <option value="" disabled>Select one</option>
            <option value="Youth">Youth</option>
            <option value="High School">High School</option>
            <option value="College">College</option>
            <option value="Amateur">Amateur</option>
            <option value="Professional">Professional</option>
          </select>
          <button onClick={handleNext}>Next</button>
        </div>
      )}
      {step === 3 && (
        <div className="question">
          <label>What level do you think best describes you?</label>
          <select
            name="selfAssessment"
            value={answers.selfAssessment}
            onChange={handleChange}
          >
            <option value="" disabled>Select one</option>
            <option value="Beginner">Beginner</option>
            <option value="Amateur">Amateur</option>
            <option value="Semi-Pro">Semi-Pro</option>
            <option value="Professional">Professional</option>
          </select>
          <button onClick={handleSubmit}>Submit</button>
        </div>
      )}
      {suggestedLevel && (
        <div className="suggested-level">
          <h3>We suggest you are at the {suggestedLevel} level.</h3>
        </div>
      )}
    </div>
  );
};

export default Questionnaire;
