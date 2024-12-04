import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
  
          <div>
            <h3 className="text-2xl font-semibold mb-4">About Us</h3>
            <p>Chill Gamer is a platform where gaming enthusiasts can find reviews, updates, and upcoming releases. Join our community to stay updated with the latest trends in gaming.</p>
          </div>

    
          <div>
            <h3 className="text-2xl font-semibold mb-4">Quick Links</h3>
            <ul>
              <li><a href="/" className="text-gray-400 hover:text-white">Home</a></li>
              <li><a href="/reviews" className="text-gray-400 hover:text-white">All Reviews</a></li>
              <li><a href="/contact" className="text-gray-400 hover:text-white">Contact Us</a></li>
              <li><a href="/about" className="text-gray-400 hover:text-white">About</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-2xl font-semibold mb-4">Contact Us</h3>
            <p>Email: shaikatahmed78@gmail.com</p>
            <p>Phone: +880 130339718</p>
            <p>Address: 123 Mithapukur Street, Rangpure City, Bangladesh</p>
          </div>
        </div>

        <div className="mt-10 border-t border-gray-700 pt-6 text-center">
          <p className="text-gray-500">&copy; 2023 Chill Gamer. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
