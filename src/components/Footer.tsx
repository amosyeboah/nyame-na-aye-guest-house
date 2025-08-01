import React from 'react';
import { MapPin, Phone, Mail, Facebook, Instagram, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Nyame Na Aye Executive Guest House</h3>
            <p className="text-gray-300 mb-4">
              Experience comfort and tranquility at our beautifully appointed guest house. 
              Your home away from home.
            </p>
            <div className="flex space-x-4">
              <Facebook className="w-5 h-5 text-gray-400 hover:text-white cursor-pointer transition-colors" />
              <Instagram className="w-5 h-5 text-gray-400 hover:text-white cursor-pointer transition-colors" />
              <Twitter className="w-5 h-5 text-gray-400 hover:text-white cursor-pointer transition-colors" />
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-2">
                <MapPin className="w-4 h-4 text-yellow-600" />
                <span className="text-gray-300">Akropong-Esaase, Manager Junction</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4 text-yellow-600" />
                <span className="text-gray-300">+233 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4 text-yellow-600" />
                <span className="text-gray-300">info@nyamenaaye.com</span>
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <div className="space-y-2">
              <a href="/rooms" className="block text-gray-300 hover:text-white transition-colors">Rooms & Rates</a>
              <a href="/amenities" className="block text-gray-300 hover:text-white transition-colors">Amenities</a>
              <a href="/gallery" className="block text-gray-300 hover:text-white transition-colors">Gallery</a>
              <a href="/booking" className="block text-gray-300 hover:text-white transition-colors">Book Now</a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            © 2025 Nyame na aye. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;