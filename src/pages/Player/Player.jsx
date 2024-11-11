import React from 'react';
import './Player.css';
import back_arrow_icon from '../../assets/back_arrow_icon.png';
import { useNavigate, useParams } from 'react-router-dom';
import cards_data from '../../assets/cards/Cards_data';  // Import your local cards data

const Player = () => {
  const { id } = useParams();  // Get the ID from the URL
  const navigate = useNavigate();
  const videoData = cards_data[id];  // Find the video data from cards_data

  // Ensure video data exists before rendering
  if (!videoData) {
    return <p>Video not found</p>;
  }

  return (
    <div className='player'>
      <img src={back_arrow_icon} alt="Back" onClick={() => navigate(-1)} />
      <video width="90%" height="90%" controls>
        <source src={videoData.video} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="player-info">
        <p>{videoData.name}</p>
      </div>
    </div>
  );
};

export default Player;
