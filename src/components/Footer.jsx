import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white p-6 mt-12">
      <div className="max-w-7xl mx-auto text-center">
        <p className="text-sm">© {new Date().getFullYear()} Vasudhaiva Kutumbkam. All rights reserved.</p>
        <p className="mt-2 text-xs">Designed with love & light 🌿</p>
      </div>
    </footer>
  );
};

export default Footer;
