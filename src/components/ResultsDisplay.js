import React from 'react'
import './ResultDisplay.scss';
const ResultsDisplay = ({ votes }) => {
    const totalVotes = votes.optionA + votes.optionB;
    const percentA = totalVotes ? (votes.optionA / totalVotes) * 100 : 0;
    const percentB = totalVotes ? (votes.optionB / totalVotes) * 100 : 0;

  return (
    <div className='results-display'>
        <div className='result-bar optionA' style={{ width: `${percentA}%` }}>
            Option A: {votes.optionA} ({percentA.toFixed(2)}%)
        </div>
        <div className='result-bar optionB' style={{ width: `${percentB}% `}}>
            Option B: {votes.optionB} ({percentB.toFixed(2)}%)
        </div>
    </div>
  );
};

export default ResultsDisplay;