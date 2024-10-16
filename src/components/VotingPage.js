import React, { useEffect, useState } from 'react'
import { io } from 'socket.io-client'
import ResultsDisplay from './ResultsDisplay';
import './VotingPage.scss';
const socket = io("http://localhost:3001");
const VotingPage = () => {
    const [votes, setVotes] = useState({ optionA: 0, optionB: 0 });

    useEffect(() => {
        socket.on("updateVotes", (updatedVotes) => {
            setVotes(updatedVotes)
        });
    }, []);

    const handleVote = (option) => {
        socket.emit("vote", option);
    };
  return (
    <div className='voting-page'>
        <h1>Real-Time Voting App</h1>
        <div className='voting-buttons'>
            <button className='vote-btn optionA' onClick={() => handleVote("optionA")}>
                Vote for A
            </button>
            <button className='vote-btn optionB' onClick={() => handleVote("optionB")}>
                Vote for B
            </button>
        </div>
        <ResultsDisplay votes={votes} />
    </div>
  );
};

export default VotingPage;