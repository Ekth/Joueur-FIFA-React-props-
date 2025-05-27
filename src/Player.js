import React from 'react';
const Player = ({ name, team, nationality, jerseyNumber, age, imageUrl }) => {
  // Inline styling for the Player component
  const cardStyle = {
    width: '18rem',
    boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
    borderRadius: '10px',
    transition: 'transform 0.3s ease-in-out',
    margin: '15px',
    marginBottom: '0px',
  };
  const cardTextStyle = {
    fontSize: '14px',
    lineHeight: '1.5',
    margin: '10px 0px 0px 5px',
  };

  const imageStyle = {
    height: '100%',
    objectFit: 'contain',
    borderTopLeftRadius: '10px',
    borderTopRightRadius: '10px',
    width: '100%',
  };

  const cardBodyStyle = {
    background: 'linear-gradient(135deg, #f5f7fa 0%, #e4e8eb 100%)',
    color: '#333',
    borderBottomLeftRadius: '10px',
    borderBottomRightRadius: '10px',
  };

  const jerseyStyle = {
    backgroundColor: '#7d9abb',
    color: 'white',
    borderRadius: '50%',
    width: '40px',
    height: '40px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontWeight: 'bold',
    fontSize: '18px',
    margin: '10px auto'
  };

  return (
    <div 
      className="card" 
      style={cardStyle}
      onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
      onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
    >
      <div className="card-body" style={cardBodyStyle}>
         <img 
        src={imageUrl} 
        className="card-img-top" 
        alt={name}
        style={imageStyle}
      />
        <h5 className="card-title text-center">{name}</h5>
        <div style={jerseyStyle}>#{jerseyNumber}</div>
        <p className="card-text" style={cardTextStyle}>
          <strong>Equipe:</strong> {team}<br/>
          <strong>Nationalité:</strong> {nationality}<br/>
          <strong>Age:</strong> {age} ans
        </p>
      </div>
    </div>
  );
};


Player.defaultProps = {
  name: "Unknown Player",
  team: "No Team",
  nationality: "Unknown",
  jerseyNumber: 0,
  age: 0,
  imageUrl: "https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=300&h=400&fit=crop&crop=face"
};
export default Player;