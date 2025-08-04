import React, { useState } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import room1 from '../asset/room1.jpg';
import reception1 from '../asset/reception1.jpg';
import recept from '../asset/recept.jpg';
import outside from '../asset/outside.jpg'
import interior1 from '../asset/interior1.jpg'
import front1 from '../asset/front1.jpg';
import room2 from '../asset/room2.jpg';
import room3 from '../asset/room3.jpg';
import room4 from '../asset/room4.jpg';
import bathroom from '../asset/bathroom.jpg';

const galleryImages = [
  {
    id: 1,
    src: room1,
    title: 'Deluxe Queen Room',
    category: 'rooms'
  },
  {
    id: 2,
    src: room2,
    title: 'Standard suite room',
    category: 'rooms'
  },
  {
    id: 3,
    src: room3,
    title: 'Single Bed suite',
    category: 'rooms'
  },
  {
    id: 4,
    src: room4,
    title: 'Luxury King Suite',
    category: 'rooms'
  },
  {
    id: 5,
    src: 'https://images.pexels.com/photos/1743231/pexels-photo-1743231.jpeg?auto=compress&cs=tinysrgb&w=800',
    title: 'Standard Double Room',
    category: 'rooms'
  },
  {
    id: 6,
    src: reception1,
    title: 'Elegant Bathroom',
    category: 'exterior'
  },
  {
    id: 7,
    src: 'https://images.pexels.com/photos/941861/pexels-photo-941861.jpeg?auto=compress&cs=tinysrgb&w=800',
    title: 'Outdoor Pool Area',
    category: 'exterior'
  },
  {
    id: 8,
    src: interior1,
    title: 'front Desk Space',
    category: 'exterior'
  },
  {
    id: 9,
    src: front1,
    title: 'Beautiful Gardens',
    category: 'exterior'
  },
  {
    id: 10,
    src: recept,
    title: 'Cozy Lounge Area',
    category: 'exterior'
  },
  {
    id: 11,
    src: outside,
    title: 'Sunset View',
    category: 'exterior'
  },
  {
    id: 12,
    src: bathroom,
    title: 'Fitness Center',
    category: 'amenities'
  }
];

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [filter, setFilter] = useState('all');

  const categories = [
    { id: 'all', label: 'All Photos' },
    { id: 'rooms', label: 'Rooms' },
    { id: 'amenities', label: 'Amenities' },
    { id: 'exterior', label: 'Exterior' }
  ];

  const filteredImages = filter === 'all' 
    ? galleryImages 
    : galleryImages.filter(img => img.category === filter);

  const openLightbox = (imageId: number) => {
    setSelectedImage(imageId);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  const navigateImage = (direction: 'prev' | 'next') => {
    if (selectedImage === null) return;
    
    const currentIndex = filteredImages.findIndex(img => img.id === selectedImage);
    let newIndex;
    
    if (direction === 'prev') {
      newIndex = currentIndex > 0 ? currentIndex - 1 : filteredImages.length - 1;
    } else {
      newIndex = currentIndex < filteredImages.length - 1 ? currentIndex + 1 : 0;
    }
    
    setSelectedImage(filteredImages[newIndex].id);
  };

  const selectedImageData = selectedImage 
    ? filteredImages.find(img => img.id === selectedImage)
    : null;

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Photo Gallery
          </h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            Take a visual tour of <b>Nyame na aye</b> and discover the beauty, comfort, and elegance 
            that awaits you during your stay.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setFilter(category.id)}
              className={`px-6 py-2 rounded-full font-medium transition-all duration-200 ${
                filter === category.id
                  ? 'bg-yellow-600 text-white shadow-lg'
                  : 'bg-white text-gray-700 hover:bg-yellow-50 hover:text-yellow-600 shadow-md'
              }`}
            >
              {category.label}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {filteredImages.map((image) => (
            <div
              key={image.id}
              className="relative group cursor-pointer overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
              onClick={() => openLightbox(image.id)}
            >
              <img
                src={image.src}
                alt={image.title}
                className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 transition-all duration-300 flex items-end">
                <div className="p-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <h3 className="font-semibold">{image.title}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox */}
        {selectedImage && selectedImageData && (
          <div className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50 p-4">
            <div className="relative max-w-4xl max-h-full">
              <img
                src={selectedImageData.src}
                alt={selectedImageData.title}
                className="max-w-full max-h-full object-contain"
              />
              
              <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-4 text-center">
                <h3 className="text-lg font-semibold">{selectedImageData.title}</h3>
              </div>

              <button
                onClick={closeLightbox}
                className="absolute top-4 right-4 text-white hover:text-yellow-400 transition-colors"
              >
                <X className="w-8 h-8" />
              </button>

              <button
                onClick={() => navigateImage('prev')}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white hover:text-yellow-400 transition-colors"
              >
                <ChevronLeft className="w-8 h-8" />
              </button>

              <button
                onClick={() => navigateImage('next')}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white hover:text-yellow-400 transition-colors"
              >
                <ChevronRight className="w-8 h-8" />
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Gallery;