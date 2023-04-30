import React from 'react';
import './Loader.css'; // import your CSS file for styling

const Loader: React.FC = () => {
  return (
    <div className="loader-container">
      <div className="dot-container">
        <div className="dot"></div>
        <div className="dot"></div>
        <div className="dot"></div>
      </div>
    </div>
  );
}

export default Loader;
