import React from 'react';
import { Wifi, Car, Utensils, Minimize as Swimming, Shield, Headphones, MapPin, Camera, TreePine } from 'lucide-react';

const amenities = [

  {
    icon: Car,
    title: 'Free Parking',
    description: 'Convenient on-site parking for all guests'
  },
  {
    icon: Wifi,
    title: 'Effortless internet access',
    description: 'Complimentary internet access throughout the property'
  },
  
  {
    icon: Utensils,
    title: 'Restaurant & Bar',
    description: 'On-site dining with local cuisine and signature cocktails'
  },
  {
    icon: Shield,
    title: '24/7 Security',
    description: 'Round-the-clock security for your peace of mind'
  },
  {
    icon: Camera,
    title: 'Media Lounge',
    description: 'Unwind in our Media Lounge, featuring a large-screen TV and cozy seating.'
  },
  {
    icon: Headphones,
    title: 'Business Center',
    description: 'Meeting rooms and business facilities for corporate travelers'
  }
];

const nearbyAttractions = [
  
  {
    icon: TreePine,
    name: 'Owabi National Park',
    distance: '5 miles',
    description: 'Beautiful hiking trails, wildlife viewing, and scenic overlooks'
  },
  {
    icon: MapPin,
    name: 'Downtown',
    distance: '2 miles',
    description: 'Charming downtown area with shops, restaurants'
  },
  {
    icon: Swimming,
    name: 'Owabi water works',
    distance: '5 miles',
    description: 'Relaxing lakeside area with picnic spots and water activities'
  }
];

const Amenities = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Amenities & Services
          </h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            Enjoy a wide range of thoughtfully curated amenities designed to enhance your comfort 
            and make your stay truly memorable.
          </p>
        </div>

        {/* Main Amenities */}
        <div className="mb-16">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8 text-center">
            Guest Amenities
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {amenities.map((amenity, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 p-6 group">
                <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-yellow-600 transition-colors duration-300">
                  <amenity.icon className="w-6 h-6 text-yellow-600 group-hover:text-white" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{amenity.title}</h3>
                <p className="text-gray-600">{amenity.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Nearby Attractions */}
        <div className="mb-16">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8 text-center">
            Nearby Attractions
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {nearbyAttractions.map((attraction, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 p-6 group">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-yellow-600 transition-colors duration-300">
                    <attraction.icon className="w-6 h-6 text-yellow-600 group-hover:text-white" />
                  </div>
                  <div className="flex-grow">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="text-lg font-semibold text-gray-900">{attraction.name}</h3>
                      <span className="text-sm text-yellow-600 font-medium bg-yellow-50 px-2 py-1 rounded">
                        {attraction.distance}
                      </span>
                    </div>
                    <p className="text-gray-600">{attraction.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Additional Services
        <div className="bg-white rounded-xl shadow-lg p-8">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8 text-center">
            Additional Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Laundry Service</h3>
              <p className="text-gray-600">Same-day laundry and dry cleaning services available upon request.</p>
            </div>
            <div className="text-center">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Airport Shuttle</h3>
              <p className="text-gray-600">Complimentary shuttle service to and from the local airport.</p>
            </div>
            <div className="text-center">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Pet-Friendly</h3>
              <p className="text-gray-600">Well-behaved pets are welcome with prior arrangement.</p>
            </div>
            <div className="text-center">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Room Service</h3>
              <p className="text-gray-600">In-room dining available daily from 6:00 AM to 11:00 PM.</p>
            </div>
            <div className="text-center">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Event Planning</h3>
              <p className="text-gray-600">Assistance with planning special occasions and group events.</p>
            </div>
            <div className="text-center">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Tour Booking</h3>
              <p className="text-gray-600">Local tour reservations and activity planning assistance.</p>
            </div>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default Amenities;