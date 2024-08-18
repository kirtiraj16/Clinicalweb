import React from 'react';

function WelcomeSection() {
  return (
    <div 
      className="h-screen flex items-center justify-center relative text-white"
      style={{
        backgroundImage: `url('https://wallpaperaccess.com/full/186125.jpg')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        zIndex: 10,
      }}
    >
      <h1 
        className="text-end text-4xl bg-opacity-50 p-4 rounded-lg"
        style={{
          position: 'relative',
          zIndex: 10,
        }}
      >
        Welcome to Our Health Portal
      </h1>
    </div>
  );
}

export default WelcomeSection;
