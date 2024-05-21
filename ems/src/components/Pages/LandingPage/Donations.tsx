import React from 'react';

const Donation: React.FC = () => {
  return (
    <div className="flex flex-col items-center">
      <h2 className="text-2xl font-semibold mb-4 ">Support Our Meeting</h2>
      <div className="mb-4">
        <img src="https://res.cloudinary.com/dgvipn16a/image/upload/v1716147188/qrcode_a9dh2u.png" alt="Donate via PayPal" className="w-48 h-48" />
      </div>
      <a
        href="https://paypal.me/Spiritual0Awakening"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white custom_button focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
      >
        Donate via PayPal
      </a>
    </div>
  );
};

export default Donation;
