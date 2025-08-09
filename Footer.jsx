// src/components/Footer.jsx
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-100 text-gray-700 py-10">
      <div className="max-w-4xl mx-auto text-center space-y-4">
        <div className="flex justify-center gap-8 text-lg">
          <span>📧 contact@dogworld.com</span>
          <span>📞 +1 234 567 890</span>
          <span>📍 New York, USA</span>
        </div>

        <div className="flex justify-center gap-6 text-2xl">
          <a href="#" className="hover:opacity-70">Instagram</a>
          <a href="#" className="hover:opacity-70">Facebook</a>
          <a href="#" className="hover:opacity-70">Twitter</a>
        </div>

        <p className="text-sm text-gray-500">
          © {new Date().getFullYear()} Dog World. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
