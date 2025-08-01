import React, { useState } from 'react';
import { Calendar, Users, CreditCard, Check, AlertCircle } from 'lucide-react';
import Button from '../components/Button';

const Booking = () => {
  const [bookingData, setBookingData] = useState({
    checkIn: '',
    checkOut: '',
    guests: 2,
    roomType: '',
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    specialRequests: ''
  });

  const [step, setStep] = useState(1);

  const roomTypes = [
    { id: 'standard', name: 'Standard Room', price: 100, description: 'Comfortable room with modern amenities' },
    { id: 'deluxe', name: 'Standard Room', price: 150, description: 'Spacious room with queen bed and city view' },
    { id: 'family', name: 'Executive', price: 150, description: 'Large suite perfect for families' },
    { id: 'luxury', name: 'Executive Suite', price: 200, description: 'Premium suite with mountain view and jacuzzi' }
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setBookingData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (step < 3) {
      setStep(step + 1);
    } else {
      console.log('Booking submitted:', bookingData);
      alert('Thank you for your booking! We\'ll send you a confirmation email shortly.');
      setStep(4);
    }
  };

  const calculateNights = () => {
    if (bookingData.checkIn && bookingData.checkOut) {
      const checkIn = new Date(bookingData.checkIn);
      const checkOut = new Date(bookingData.checkOut);
      const timeDiff = checkOut.getTime() - checkIn.getTime();
      const nights = Math.ceil(timeDiff / (1000 * 3600 * 24));
      return nights > 0 ? nights : 0;
    }
    return 0;
  };

  const calculateTotal = () => {
    const selectedRoom = roomTypes.find(room => room.id === bookingData.roomType);
    if (selectedRoom) {
      const nights = calculateNights();
      return selectedRoom.price * nights;
    }
    return 0;
  };

  const selectedRoom = roomTypes.find(room => room.id === bookingData.roomType);

  if (step === 4) {
    return (
      <div className="min-h-screen bg-gray-50 py-12 flex items-center justify-center">
        <div className="max-w-md mx-auto">
          <div className="bg-white rounded-xl shadow-lg p-8 text-center">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <Check className="w-8 h-8 text-green-600" />
            </div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Booking Confirmed!</h2>
            <p className="text-gray-600 mb-6">
              Thank you for choosing Serenity Inn. We've sent a confirmation email to {bookingData.email}.
            </p>
            <Button onClick={() => { setStep(1); setBookingData({ checkIn: '', checkOut: '', guests: 2, roomType: '', firstName: '', lastName: '', email: '', phone: '', specialRequests: '' }); }}>
              Book Another Room
            </Button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Book Your Stay
          </h1>
          <p className="text-lg text-gray-600">
            Reserve your perfect room at Serenity Inn in just a few simple steps.
          </p>
        </div>

        {/* Progress Indicator */}
        <div className="flex justify-center mb-8">
          <div className="flex items-center space-x-4">
            {[1, 2, 3].map((stepNumber) => (
              <React.Fragment key={stepNumber}>
                <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium ${
                  step >= stepNumber 
                    ? 'bg-yellow-600 text-white' 
                    : 'bg-gray-200 text-gray-600'
                }`}>
                  {stepNumber}
                </div>
                {stepNumber < 3 && (
                  <div className={`w-12 h-0.5 ${
                    step > stepNumber ? 'bg-yellow-600' : 'bg-gray-200'
                  }`} />
                )}
              </React.Fragment>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Booking Form */}
          <div className="lg:col-span-2">
            <form onSubmit={handleSubmit} className="bg-white rounded-xl shadow-lg p-6 space-y-6">
              {step === 1 && (
                <>
                  <h2 className="text-xl font-bold text-gray-900 mb-4">Step 1: Select Dates & Room</h2>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="checkIn" className="block text-sm font-medium text-gray-700 mb-2">
                        Check-in Date *
                      </label>
                      <input
                        type="date"
                        id="checkIn"
                        name="checkIn"
                        value={bookingData.checkIn}
                        onChange={handleInputChange}
                        required
                        min={new Date().toISOString().split('T')[0]}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="checkOut" className="block text-sm font-medium text-gray-700 mb-2">
                        Check-out Date *
                      </label>
                      <input
                        type="date"
                        id="checkOut"
                        name="checkOut"
                        value={bookingData.checkOut}
                        onChange={handleInputChange}
                        required
                        min={bookingData.checkIn || new Date().toISOString().split('T')[0]}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="guests" className="block text-sm font-medium text-gray-700 mb-2">
                      Number of Guests *
                    </label>
                    <select
                      id="guests"
                      name="guests"
                      value={bookingData.guests}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500"
                    >
                      <option value={1}>1 Guest</option>
                      <option value={2}>2 Guests</option>
                      <option value={3}>3 Guests</option>
                      <option value={4}>4 Guests</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-4">
                      Select Room Type *
                    </label>
                    <div className="space-y-3">
                      {roomTypes.map((room) => (
                        <label key={room.id} className="flex items-center p-4 border rounded-lg hover:bg-gray-50 cursor-pointer">
                          <input
                            type="radio"
                            name="roomType"
                            value={room.id}
                            checked={bookingData.roomType === room.id}
                            onChange={handleInputChange}
                            className="text-yellow-600 focus:ring-yellow-500"
                            required
                          />
                          <div className="ml-3 flex-grow">
                            <div className="flex justify-between items-center">
                              <h4 className="font-medium text-gray-900">{room.name}</h4>
                              <span className="font-bold text-yellow-600">${room.price}/night</span>
                            </div>
                            <p className="text-sm text-gray-600">{room.description}</p>
                          </div>
                        </label>
                      ))}
                    </div>
                  </div>
                </>
              )}

              {step === 2 && (
                <>
                  <h2 className="text-xl font-bold text-gray-900 mb-4">Step 2: Guest Information</h2>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">
                        First Name *
                      </label>
                      <input
                        type="text"
                        id="firstName"
                        name="firstName"
                        value={bookingData.firstName}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500"
                        placeholder="Your first name"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-2">
                        Last Name *
                      </label>
                      <input
                        type="text"
                        id="lastName"
                        name="lastName"
                        value={bookingData.lastName}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500"
                        placeholder="Your last name"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={bookingData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500"
                      placeholder="your@email.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={bookingData.phone}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500"
                      placeholder="(555) 123-4567"
                    />
                  </div>

                  <div>
                    <label htmlFor="specialRequests" className="block text-sm font-medium text-gray-700 mb-2">
                      Special Requests
                    </label>
                    <textarea
                      id="specialRequests"
                      name="specialRequests"
                      value={bookingData.specialRequests}
                      onChange={handleInputChange}
                      rows={3}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500"
                      placeholder="Any special requests or requirements..."
                    />
                  </div>
                </>
              )}

              {step === 3 && (
                <>
                  <h2 className="text-xl font-bold text-gray-900 mb-4">Step 3: Review & Confirm</h2>
                  
                  <div className="bg-gray-50 p-4 rounded-lg space-y-2">
                    <h3 className="font-semibold text-gray-900">Booking Summary</h3>
                    <p><span className="text-gray-600">Guest:</span> {bookingData.firstName} {bookingData.lastName}</p>
                    <p><span className="text-gray-600">Email:</span> {bookingData.email}</p>
                    <p><span className="text-gray-600">Phone:</span> {bookingData.phone}</p>
                    <p><span className="text-gray-600">Check-in:</span> {bookingData.checkIn}</p>
                    <p><span className="text-gray-600">Check-out:</span> {bookingData.checkOut}</p>
                    <p><span className="text-gray-600">Nights:</span> {calculateNights()}</p>
                    <p><span className="text-gray-600">Guests:</span> {bookingData.guests}</p>
                    <p><span className="text-gray-600">Room:</span> {selectedRoom?.name}</p>
                    {bookingData.specialRequests && (
                      <p><span className="text-gray-600">Special Requests:</span> {bookingData.specialRequests}</p>
                    )}
                  </div>

                  <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 flex items-start space-x-2">
                    <AlertCircle className="w-5 h-5 text-yellow-600 flex-shrink-0 mt-0.5" />
                    <div className="text-sm text-yellow-800">
                      <p className="font-medium">Important:</p>
                      <p>By confirming this booking, you agree to our terms and conditions. A confirmation email will be sent to your provided email address.</p>
                    </div>
                  </div>
                </>
              )}

              <div className="flex justify-between pt-4">
                {step > 1 && (
                  <Button
                    type="button"
                    variant="outline"
                    onClick={() => setStep(step - 1)}
                  >
                    Previous
                  </Button>
                )}
                <div className="ml-auto">
                  <Button type="submit" icon={step === 3 ? CreditCard : undefined}>
                    {step === 3 ? 'Confirm Booking' : 'Continue'}
                  </Button>
                </div>
              </div>
            </form>
          </div>

          {/* Booking Summary Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-xl shadow-lg p-6 sticky top-24">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Booking Summary</h3>
              
              {bookingData.roomType && selectedRoom && (
                <div className="space-y-4">
                  <div>
                    <h4 className="font-medium text-gray-900">{selectedRoom.name}</h4>
                    <p className="text-sm text-gray-600">${selectedRoom.price} per night</p>
                  </div>

                  {bookingData.checkIn && bookingData.checkOut && (
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span className="text-gray-600">Check-in:</span>
                        <span>{bookingData.checkIn}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Check-out:</span>
                        <span>{bookingData.checkOut}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Nights:</span>
                        <span>{calculateNights()}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Guests:</span>
                        <span>{bookingData.guests}</span>
                      </div>
                      <hr className="my-2" />
                      <div className="flex justify-between font-semibold">
                        <span>Total:</span>
                        <span className="text-yellow-600">${calculateTotal()}</span>
                      </div>
                    </div>
                  )}
                </div>
              )}

              {!bookingData.roomType && (
                <p className="text-gray-500 text-sm">Select your dates and room type to see pricing details.</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Booking;