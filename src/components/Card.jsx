import React from 'react';
import Mark from '../assets/pic.jpg';

function Card() {
  return (
    <div className="card">
        <img className="card-image" src={Mark} alt="markpicture" />
        <h2 className='card-title'>M4rk Bello</h2>
        <p className='card-text'>I want to be a Fullstack Developer!</p>
      <div className='card-static'>
      <input type=""></input>
      <button className='card-update-btn'>update</button>
      <button className='card-delete-btn'>delete</button>
      </div>
    </div>
  );
}

export default Card;
