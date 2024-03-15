import React, { useState } from 'react';
import '../App.css';

const questions = [
     "Can you code in Ruby?",
     "Can you code in JavaScript?",
     "Can you code in Swift?",
     "Can you code in Java?",
     "Can you code in C#?"
];

function Question() {
  const [answers, setAnswers] = useState([]);
  const [totalScore, setTotalScore] = useState(0);
  const [averageScore, setAverageScore] = useState(0);

  const handleAnswer = (index, answer) => {
    const newAnswers = [...answers];
    newAnswers[index] = answer;
    setAnswers(newAnswers);

    const yesCount = newAnswers.filter((a) => a === 'yes').length;
    const score = (yesCount / questions.length) * 100;
    setTotalScore(score);

    const totalScoreSum = score + (averageScore * (answers.length - 1));
    setAverageScore(totalScoreSum / answers.length);
  };

  const reset = () => {
    setAnswers([]);
    setTotalScore(0);
    setAverageScore(0);
  };

  return (
    <div className='container'>
      <h1>Yes/No Quiz</h1>
      {questions.map((question, index) => (
        <div key={index} className='question-cont'>
          <h3>{question}</h3>
          <button className='btn' onClick={() => handleAnswer(index, 'yes')}>Yes</button>
          <button className='btn' onClick={() => handleAnswer(index, 'no')}>No</button>
        </div>
      ))}
      <h2 className='score'>Score for this run: {totalScore.toFixed(2)}</h2>
      {averageScore > 0 && <h2>Average score: {averageScore.toFixed(2)}</h2>}
      <button onClick={reset} className='btn reset'>Reset</button>
    </div>
  );
}

export default Question;
