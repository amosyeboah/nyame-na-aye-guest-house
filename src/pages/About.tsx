import React from 'react';
import { Heart, Award, Users, Leaf } from 'lucide-react';

const About = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            About Nyame Na Aye Executive Guest House
          </h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            Discover the story behind our beautiful guest house and the passionate people 
            who make your stay unforgettable.
          </p>
        </div>

        {/* Our Story */}
        <div className="mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">Our Story</h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  Nyame Na Aye Executive Guest House was born from a dream to create a place where travelers could find 
                  true peace and comfort away from home. Established in 2024, our boutique guest house 
                  has been lovingly restored from a historic 1920s mansion, preserving its original 
                  charm while adding modern luxury amenities.
                </p>
                <p>
                  Located in the heart of the countryside, surrounded by rolling hills and Serenity environment, 
                 Nyame Na Aye Executive Guest House offers a perfect escape from the hustle and bustle of city life. Every room 
                  has been thoughtfully designed to provide maximum comfort while maintaining the property's 
                  historic character.
                </p>
                <p>
                  Over the years, we've welcomed thousands of guests from around the world, each leaving 
                  with cherished memories and a desire to return. Our commitment to exceptional hospitality 
                  and attention to detail has made us a favorite destination for romantic getaways, 
                  family vacations, and business retreats.
                </p>
              </div>
            </div>
            
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/261102/pexels-photo-261102.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Historic Serenity Inn exterior"
                className="rounded-lg shadow-xl w-full h-80 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-lg"></div>
            </div>
          </div>
        </div>

        {/* Owner Message */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
            <div className="lg:col-span-1">
              <img
                src="https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=400"
                alt="Sarah & Michael Thompson"
                className="rounded-lg shadow-lg w-full h-64 object-cover mx-auto"
              />
            </div>
            <div className="lg:col-span-2">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">A Message from the Owners</h3>
              <blockquote className="text-gray-600 text-lg italic mb-4">
                "When we first laid eyes on this beautiful property, we knew it was meant to be shared 
                with others. Our vision was simple: create a place where every guest feels like family, 
                where comfort meets elegance, and where memories are made to last a lifetime."
              </blockquote>
              <div className="text-gray-800">
                <p className="font-semibold">CEO</p>
                <p className="text-sm text-gray-600">Owners & Hosts</p>
              </div>
            </div>
          </div>
        </div>

        {/* Values & Mission */}
        <div className="mb-16">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8 text-center">
            Our Values & Mission
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white rounded-xl shadow-lg p-6 text-center group hover:shadow-xl transition-shadow duration-300">
              <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-yellow-600 transition-colors duration-300">
                <Heart className="w-8 h-8 text-yellow-600 group-hover:text-white" />
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">Hospitality</h4>
              <p className="text-gray-600 text-sm">
                We believe in genuine warmth and personal service that makes every guest feel welcomed and valued.
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-6 text-center group hover:shadow-xl transition-shadow duration-300">
              <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-yellow-600 transition-colors duration-300">
                <Award className="w-8 h-8 text-yellow-600 group-hover:text-white" />
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">Excellence</h4>
              <p className="text-gray-600 text-sm">
                We maintain the highest standards in everything we do, from room cleanliness to guest services.
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-6 text-center group hover:shadow-xl transition-shadow duration-300">
              <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-yellow-600 transition-colors duration-300">
                <Users className="w-8 h-8 text-yellow-600 group-hover:text-white" />
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">Community</h4>
              <p className="text-gray-600 text-sm">
                We're proud to be part of the local community and support local businesses and artisans.
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-6 text-center group hover:shadow-xl transition-shadow duration-300">
              <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-yellow-600 transition-colors duration-300">
                <Leaf className="w-8 h-8 text-yellow-600 group-hover:text-white" />
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">Sustainability</h4>
              <p className="text-gray-600 text-sm">
                We're committed to eco-friendly practices and preserving the natural beauty around us.
              </p>
            </div>
          </div>
        </div>

        {/* Awards & Recognition */}
        <div className="bg-white rounded-xl shadow-lg p-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Awards & Recognition</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div>
              <div className="text-3xl font-bold text-yellow-600 mb-2">2023</div>
              <h4 className="font-semibold text-gray-900 mb-1">TripAdvisor Travelers' Choice</h4>
              <p className="text-sm text-gray-600">Top 10% of accommodations worldwide</p>
            </div>
            <div>
              <div className="text-3xl font-bold text-yellow-600 mb-2">2022</div>
              <h4 className="font-semibold text-gray-900 mb-1">Boutique Hotel Awards</h4>
              <p className="text-sm text-gray-600">Best Small Luxury Property</p>
            </div>
            <div>
              <div className="text-3xl font-bold text-yellow-600 mb-2">2024</div>
              <h4 className="font-semibold text-gray-900 mb-1">Green Key Certification</h4>
              <p className="text-sm text-gray-600">Environmental excellence in hospitality</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;