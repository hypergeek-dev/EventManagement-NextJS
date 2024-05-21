import React from 'react';
import '../LandingPage/LandingPage.css';

const HeroImage: React.FC = () => {
  return (
    <div className="relative bg-cover bg-center h-[47vh] flex items-center justify-start" style={{ backgroundImage: "url('https://res.cloudinary.com/dgvipn16a/image/upload/v1716073701/Banner_qa1wts.png')" }}>
      <div className="absolute inset-0 bg-black opacity-10 pointer-events-none"></div>
      <div className="relative z-10 text-white px-4 md:px-8 w-1/2 flex flex-col items-center justify-center h-full">
        <h1 className="text-2xl md:text-6xl mb-1 custom_shadow uppercase custom_font">Spiritual Awakenings</h1>
        <p className="text-md md:text-lg mb-1 text-shadow-sm">Let the journey begin</p>
      </div>
    </div>
  );
}

export default HeroImage;
