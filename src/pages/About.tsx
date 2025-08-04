import React from 'react';
import { Heart, Award, Users, Leaf } from 'lucide-react';
import front1 from '../asset/front1.jpg'; 
import recept from '../asset/recept.jpg'


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
                  true peace and comfort away from home. Established in 2025, our new guest house offers a perfect blend of rustic charm and modern comfort, set against the backdrop of serene countryside landscapes.
                </p>
                <p>
                  Located in the heart of the countryside and Serenity environment, 
                 Nyame Na Aye Executive Guest House offers a perfect escape from the hustle and bustle of city life. Every room 
                  has been thoughtfully designed to provide maximum comfort while maintaining the property's 
                  historic character.
                </p>
                <p>
                 We are excited to begin our journey and to welcome our new guests. Our promise is to offer more than just a place to sleep; we aim to create an unforgettable experience, with warm hospitality and a genuine connection to the peaceful environment that defines us. We look forward to sharing our slice of paradise with you.
                </p>
              </div>
            </div>
            
            <div className="relative">
              <img
                src="src/asset/front1.jpg"
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
                src="src/asset/recept.jpg"
                alt="Sarah & Michael Thompson"
                className="rounded-lg shadow-lg w-full h-64 object-cover mx-auto"
              />
            </div>
            <div className="lg:col-span-2">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">A heartfelt welcome from our home to yours.</h3>
              <blockquote className="text-gray-600 text-lg italic mb-4">
                "When we envisioned our guest house, we dreamed of creating a place where guests could truly feel at home. Every detail, from the comfortable furnishings to the warm, inviting atmosphere, has been chosen with your comfort in mind. We believe that true hospitality lies in the small things—a warm greeting, a peaceful night's sleep, and the feeling of being genuinely cared for."
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
      </div>
    </div>
  );
};

export default About;