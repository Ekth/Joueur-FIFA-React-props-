import React from 'react';
import Player from './Player';
import { players } from './Players';

const PlayersList = () => {
  const containerStyle = {
    backgroundColor: '#f8f9fa',
    minHeight: '100vh',
    padding: '20px'
  };

  const titleStyle = {
    textAlign: 'center',
    color: '#333',
    marginBottom: '30px',
    fontSize: '2.5rem',
    fontWeight: 'bold',
    textShadow: '2px 2px 4px rgba(0,0,0,0.1)'
  };

  const playersContainerStyle = {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'flex-start'
  };

  return (
    <div style={containerStyle}>
      <h1 style={titleStyle}> JOUEURS DE FOOTBALL </h1>
      <div style={playersContainerStyle}>
        {players.map((player, index) => (
          <Player 
            key={index}
            {...player}
          />
        ))}
      </div>
    </div>
  );
};

export default PlayersList;
