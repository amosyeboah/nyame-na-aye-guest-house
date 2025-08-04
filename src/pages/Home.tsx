import React from 'react';
import { Link } from 'react-router-dom';
import { Bed, Star, Phone, ArrowRight, Wifi, Coffee, Car } from 'lucide-react';
import Slider from '../components/Slider';
import Button from '../components/Button';

const Home = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section with Slider */}
      <section className="relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <Slider />
        </div>
      </section>

      {/* Welcome Message */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Welcome to Nyame Na Aye Guest House
          </h2>
          <p className="text-lg md:text-xl text-gray-600 leading-relaxed mb-8">
            Nestled in the heart of tranquil countryside, <b>Nyame na aye</b> offers the perfect blend 
            of comfort, luxury, and peaceful surroundings. Whether you're seeking a romantic getaway, 
            a family vacation, or a business retreat, our beautifully appointed guest house provides 
            an unforgettable experience.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" icon={Bed}>
              <Link to="/rooms">Explore Rooms</Link>
            </Button>
            <Button variant="outline" size="lg" icon={Phone}>
              <Link to="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Quick Links */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="text-2xl md:text-3xl font-bold text-center text-gray-900 mb-12">
            Discover What We Offer
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 p-8 text-center group">
              <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-yellow-600 transition-colors duration-300">
                <Bed className="w-8 h-8 text-yellow-600 group-hover:text-white" />
              </div>
              <h4 className="text-xl font-semibold text-gray-900 mb-4">Comfortable Rooms</h4>
              <p className="text-gray-600 mb-6">
                Choose from our selection of beautifully designed rooms, each offering modern amenities 
                and stunning views.
              </p>
              <Link 
                to="/rooms" 
                className="inline-flex items-center text-yellow-600 hover:text-yellow-700 font-medium group"
              >
                View Rooms <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

            <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 p-8 text-center group">
              <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-yellow-600 transition-colors duration-300">
                <Star className="w-8 h-8 text-yellow-600 group-hover:text-white" />
              </div>
              <h4 className="text-xl font-semibold text-gray-900 mb-4">Premium Amenities</h4>
              <p className="text-gray-600 mb-6">
                Enjoy complimentary Wi-Fi, delicious breakfast, air conditioning, and many more 
                thoughtful touches.
              </p>
              <Link 
                to="/amenities" 
                className="inline-flex items-center text-yellow-600 hover:text-yellow-700 font-medium group"
              >
                View Amenities <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

            <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 p-8 text-center group">
              <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-yellow-600 transition-colors duration-300">
                <Phone className="w-8 h-8 text-yellow-600 group-hover:text-white" />
              </div>
              <h4 className="text-xl font-semibold text-gray-900 mb-4">Easy Booking</h4>
              <p className="text-gray-600 mb-6">
                Ready to stay with us? Get in touch for reservations or any questions about 
                your upcoming visit.
              </p>
              <Link 
                to="/contact" 
                className="inline-flex items-center text-yellow-600 hover:text-yellow-700 font-medium group"
              >
                Contact Us <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Preview */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                Why Choose Us?
              </h3>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-yellow-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Wifi className="w-5 h-5 text-yellow-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Effortless internet access</h4>
                    <p className="text-gray-600">Stay connected with complimentary high-speed internet throughout the property.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-yellow-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Coffee className="w-5 h-5 text-yellow-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Complimentary Breakfast</h4>
                    <p className="text-gray-600">Start your day with our delicious continental breakfast served fresh daily.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-yellow-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Car className="w-5 h-5 text-yellow-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Free Parking</h4>
                    <p className="text-gray-600">Convenient on-site parking available for all guests at no additional charge.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Luxury room interior"
                className="rounded-lg shadow-xl w-full h-64 md:h-80 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-lg"></div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;