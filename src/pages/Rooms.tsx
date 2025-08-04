import React from 'react';
import { Link } from 'react-router-dom';
import { Users, Wifi, Coffee, Bath, Tv, Car, Calendar } from 'lucide-react';
import Button from '../components/Button';
import room from '../asset/room1.jpg';
import room2 from '../asset/room2.jpg';

// import reception1 from '../asset/reception1.jpg';
// import front1 from '../asset/front1.jpg';

const rooms = [
  {
    id: 1,
    name: 'Executive Double Bed Room',
    image: room,
    price: 200,
    capacity: 2,
    features: ['Queen Bed', 'Private Bathroom', 'Air Condition', 'Work Desk'],
    amenities: [Wifi, Coffee, Bath, Tv, Car],
    description: 'Spacious and elegant room featuring a comfortable queen bed, modern furnishings, and beautiful city views. Perfect for couples or business travelers.'
  },
  {
    id: 2,
    name: 'Standard Suite',
    image: room2,
    price: 150,
    capacity: 2,
    features: ['Single Bed', 'Work Desk', 'Private Batroom'],
    amenities: [Wifi, Coffee, Bath, Tv],
    description: 'A cozy and comfortable retreat designed for the solo traveler. Features a single bed and all the essentials for a relaxing stay.'
  }
  // {
  //   id: 3,
  //   name: 'Luxury King Suite',
  //   image: 'https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg?auto=compress&cs=tinysrgb&w=800',
  //   price: 220,
  //   capacity: 2,
  //   features: ['King Bed', 'Balcony', 'Mountain View', 'Jacuzzi Tub'],
  //   amenities: [Wifi, Coffee, Bath, Tv, Car],
  //   description: 'Our premium suite featuring a king bed, private balcony with mountain views, and luxurious jacuzzi tub for the ultimate relaxation experience.'
  // },
  // {
  //   id: 4,
  //   name: 'Standard Double Room',
  //   image: 'https://images.pexels.com/photos/1743231/pexels-photo-1743231.jpeg?auto=compress&cs=tinysrgb&w=800',
  //   price: 95,
  //   capacity: 2,
  //   features: ['Double Bed', 'Compact Design', 'Street View', 'Work Station'],
  //   amenities: [Wifi, Coffee, Bath, Tv],
  //   description: 'Comfortable and affordable room with modern amenities. Ideal for budget-conscious travelers who don\'t want to compromise on quality.'
  // }
];

const Rooms = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Rooms & Rates
          </h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            Choose from our carefully designed accommodations, each offering comfort, style, and modern amenities 
            to make your stay memorable.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {rooms.map((room) => (
            <div key={room.id} className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden">
              <div className="relative">
                <img
                  src={room.image}
                  alt={room.name}
                  className="w-full h-64 object-cover"
                />
                <div className="absolute top-4 right-4 bg-yellow-600 text-white px-3 py-1 rounded-full font-semibold">
                  GH₵ {room.price}/night
                </div>
              </div>

              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-bold text-gray-900">{room.name}</h3>
                  <div className="flex items-center text-gray-600">
                    <Users className="w-4 h-4 mr-1" />
                    <span className="text-sm">Up to {room.capacity} guests</span>
                  </div>
                </div>

                <p className="text-gray-600 mb-4">{room.description}</p>

                <div className="mb-4">
                  <h4 className="font-semibold text-gray-900 mb-2">Room Features:</h4>
                  <div className="grid grid-cols-2 gap-2">
                    {room.features.map((feature, index) => (
                      <div key={index} className="flex items-center text-sm text-gray-600">
                        <div className="w-1.5 h-1.5 bg-yellow-600 rounded-full mr-2"></div>
                        {feature}
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-2">Amenities:</h4>
                  <div className="flex space-x-3">
                    {room.amenities.map((Amenity, index) => (
                      <div key={index} className="w-8 h-8 bg-yellow-100 rounded-lg flex items-center justify-center">
                        <Amenity className="w-4 h-4 text-yellow-600" />
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-3">
                  <Link to="/booking" className="flex-1">
                    <Button className="w-full" icon={Calendar}>
                      Book Now
                    </Button>
                  </Link>
                  <Link to="/contact" className="flex-1">
                    <Button variant="outline" className="w-full">
                      Inquire
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-white rounded-xl shadow-lg p-8 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Need Help Choosing?</h3>
          <p className="text-gray-600 mb-6">
            Our friendly staff is here to help you find the perfect room for your stay. 
            Contact us for personalized recommendations.
          </p>
          <Link to="/contact">
            <Button size="lg">Contact Us</Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Rooms;