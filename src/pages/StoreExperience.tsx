import { useState, FormEvent } from 'react';
import { Sparkles, Calendar, Clock, Users, ShieldCheck, MapPin, Check } from 'lucide-react';
import { BookingDetails } from '../types';

export default function StoreExperience() {
  const [booking, setBooking] = useState<BookingDetails>({
    name: '',
    email: '',
    date: '',
    time: '14:00',
    guests: 2,
    notes: ''
  });
  const [success, setSuccess] = useState(false);

  const handleBookingSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (booking.name.trim() === '' || booking.email.trim() === '' || booking.date === '') return;
    setSuccess(true);
  };

  const timeslots = ['11:00', '13:00', '14:30', '16:00', '17:30'];

  return (
    <div id="store-experience-page" className="bg-stone-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Editorial Header */}
        <div className="text-center max-w-xl mx-auto mb-20">
          <span className="text-[10px] uppercase tracking-[0.25em] font-mono text-amber-600 block mb-2 font-semibold">
            The Flagship Salon
          </span>
          <h1 className="font-serif text-3xl sm:text-4xl text-stone-900 font-semibold tracking-tight">
            Rue de l’Université Boutique
          </h1>
          <div className="w-12 h-[1px] bg-amber-600 mx-auto mt-4 mb-4" />
          <p className="text-xs text-stone-500 leading-relaxed">
            Our Paris boutique is an architectural tribute to the classical French patisserie salon. Featuring hand-molded plaster arches, Belgian dark oak shelving, and brushed brass details.
          </p>
        </div>

        {/* Boutique architecture details bento style */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-24">
          
          <div className="lg:col-span-7 aspect-[16/10] rounded-2xl overflow-hidden shadow-md bg-stone-100 border border-stone-200">
            <img
              src="https://images.unsplash.com/photo-1517433456452-f9633a875f6f?auto=format&fit=crop&w=1200&q=80"
              alt="Sweet Cookie store experience"
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>

          <div className="lg:col-span-5 text-left space-y-6">
            <div className="inline-flex items-center gap-1 bg-amber-50 text-amber-900 text-[9px] font-mono uppercase tracking-[0.2em] px-3.5 py-1 rounded-full">
              <Sparkles className="w-3.5 h-3.5 text-amber-500" />
              The Architecture
            </div>
            <h2 className="font-serif text-2xl lg:text-3xl text-stone-900 font-semibold leading-tight">
              A Sanctuary of Butter & Stone
            </h2>
            <p className="text-xs sm:text-sm text-stone-500 leading-relaxed">
              When entering our boutique, visitors are greeted by the rich, warm lactic aroma of double-baked Normandy sablés cooling on central marble displays. We have purposefully designed the environment with a hushed, museum-like acoustics, allowing our guests to savor their confections in quiet, uninterrupted reverence.
            </p>
            <ul className="space-y-3.5 text-xs text-stone-600">
              <li className="flex gap-2.5 items-center">
                <MapPin className="w-4 h-4 text-amber-600 flex-shrink-0" />
                <span>Private tasting alcove accommodates up to 4 guests</span>
              </li>
              <li className="flex gap-2.5 items-center">
                <ShieldCheck className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                <span>Complimentary warm tea infusions with each booking</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Booking Form Card Container */}
        <div className="bg-white rounded-3xl border border-stone-200/80 p-8 md:p-14 shadow-lg max-w-4xl mx-auto">
          {success ? (
            <div className="py-12 text-center space-y-5">
              <div className="w-16 h-16 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center mx-auto border border-emerald-200 shadow-xs">
                <Check className="w-8 h-8" />
              </div>
              <h3 className="font-serif text-2xl text-stone-900 font-semibold">Tasting Reserved Securely</h3>
              <p className="text-xs sm:text-sm text-stone-500 max-w-md mx-auto leading-relaxed">
                Dear <strong>{booking.name}</strong>, we have registered your private Tasting Salon alcove reservation for <strong>{booking.guests} guests</strong> on <strong>{booking.date} at {booking.time}</strong> under code <strong>#SC-{Math.floor(1000 + Math.random() * 9000)}</strong>.
              </p>
              <p className="text-[11px] text-stone-400 max-w-xs mx-auto italic">
                A formal wax-sealed calligraphy card with entry details has been queued to your email registry ({booking.email}).
              </p>
              <button
                id="reset-booking-btn"
                onClick={() => {
                  setSuccess(false);
                  setBooking({ name: '', email: '', date: '', time: '14:00', guests: 2, notes: '' });
                }}
                className="mt-4 text-xs uppercase tracking-widest font-mono text-amber-700 font-semibold border-b border-amber-700/40 hover:border-amber-700 pb-0.5"
              >
                Book Another Tasting
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 text-left">
              
              {/* Form Info left */}
              <div className="lg:col-span-5 space-y-6 lg:border-r lg:border-stone-100 lg:pr-8">
                <span className="text-[10px] uppercase tracking-wider font-mono text-stone-400 font-semibold">
                  Tasting Alcove Policy
                </span>
                <h3 className="font-serif text-xl font-medium text-stone-900">
                  Salon Reservation
                </h3>
                <p className="text-xs text-stone-500 leading-relaxed">
                  Due to our strict focus on micro-batch quality, we only seat 4 reservations daily. Seating is private and completely custom. Included is a multi-flavor curation of 8 warm cookies freshly baked from the oven and two organic tea or single-origin coffee pairings of your choice.
                </p>
                <div className="space-y-3 pt-4 border-t border-stone-100 text-[11px] text-stone-400 italic">
                  <p>• Alcove reservation fee is fully credited to any gift box purchase during your visit.</p>
                  <p>• Please arrive exactly 5 minutes prior to your allocated slot.</p>
                </div>
              </div>

              {/* Booking inputs right */}
              <form onSubmit={handleBookingSubmit} className="lg:col-span-7 space-y-6">
                
                {/* Full name and email */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-1.5">
                    <label htmlFor="booking-name" className="text-[9px] uppercase tracking-wider font-mono text-stone-400 font-semibold">
                      Full Name
                    </label>
                    <input
                      type="text"
                      required
                      id="booking-name"
                      value={booking.name}
                      onChange={(e) => setBooking({ ...booking, name: e.target.value })}
                      placeholder="e.g., Charles Monet"
                      className="w-full bg-stone-50 hover:bg-stone-100/60 focus:bg-white text-stone-900 text-xs px-4 py-3.5 rounded-lg border border-stone-200 focus:border-amber-600 focus:ring-1 focus:ring-amber-600/40 transition-all outline-hidden font-sans"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label htmlFor="booking-email" className="text-[9px] uppercase tracking-wider font-mono text-stone-400 font-semibold">
                      Email address
                    </label>
                    <input
                      type="email"
                      required
                      id="booking-email"
                      value={booking.email}
                      onChange={(e) => setBooking({ ...booking, email: e.target.value })}
                      placeholder="e.g., charles@monet.com"
                      className="w-full bg-stone-50 hover:bg-stone-100/60 focus:bg-white text-stone-900 text-xs px-4 py-3.5 rounded-lg border border-stone-200 focus:border-amber-600 focus:ring-1 focus:ring-amber-600/40 transition-all outline-hidden font-sans"
                    />
                  </div>
                </div>

                {/* Date and Time slots */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-1.5">
                    <label htmlFor="booking-date" className="text-[9px] uppercase tracking-wider font-mono text-stone-400 font-semibold flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5" /> Select Date
                    </label>
                    <input
                      type="date"
                      required
                      id="booking-date"
                      value={booking.date}
                      onChange={(e) => setBooking({ ...booking, date: e.target.value })}
                      className="w-full bg-stone-50 hover:bg-stone-100/60 focus:bg-white text-stone-900 text-xs px-4 py-3 rounded-lg border border-stone-200 focus:border-amber-600 focus:ring-1 focus:ring-amber-600/40 transition-all outline-hidden font-sans cursor-pointer"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label htmlFor="booking-time" className="text-[9px] uppercase tracking-wider font-mono text-stone-400 font-semibold flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5" /> Time Slot
                    </label>
                    <select
                      id="booking-time"
                      value={booking.time}
                      onChange={(e) => setBooking({ ...booking, time: e.target.value })}
                      className="w-full bg-stone-50 hover:bg-stone-100/60 focus:bg-white text-stone-900 text-xs px-4 py-3.5 rounded-lg border border-stone-200 focus:border-amber-600 focus:ring-1 focus:ring-amber-600/40 transition-all outline-hidden font-sans cursor-pointer"
                    >
                      {timeslots.map((t) => (
                        <option key={t} value={t}>
                          {t} Tasting Salon
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Number of guests & custom dietary notes */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                  <div className="space-y-1.5">
                    <label htmlFor="booking-guests" className="text-[9px] uppercase tracking-wider font-mono text-stone-400 font-semibold flex items-center gap-1">
                      <Users className="w-3.5 h-3.5" /> Guests
                    </label>
                    <select
                      id="booking-guests"
                      value={booking.guests}
                      onChange={(e) => setBooking({ ...booking, guests: parseInt(e.target.value) })}
                      className="w-full bg-stone-50 hover:bg-stone-100/60 focus:bg-white text-stone-900 text-xs px-4 py-3.5 rounded-lg border border-stone-200 focus:border-amber-600 focus:ring-1 focus:ring-amber-600/40 transition-all outline-hidden font-sans cursor-pointer"
                    >
                      {[1, 2, 3, 4].map((g) => (
                        <option key={g} value={g}>
                          {g} Guest{g > 1 ? 's' : ''} (Private)
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="sm:col-span-2 space-y-1.5">
                    <label htmlFor="booking-notes" className="text-[9px] uppercase tracking-wider font-mono text-stone-400 font-semibold">
                      Dietary or Custom Notes
                    </label>
                    <input
                      type="text"
                      id="booking-notes"
                      value={booking.notes}
                      onChange={(e) => setBooking({ ...booking, notes: e.target.value })}
                      placeholder="e.g., Peanut allergies, extra vanilla preference..."
                      className="w-full bg-stone-50 hover:bg-stone-100/60 focus:bg-white text-stone-900 text-xs px-4 py-3.5 rounded-lg border border-stone-200 focus:border-amber-600 focus:ring-1 focus:ring-amber-600/40 transition-all outline-hidden font-sans"
                    />
                  </div>
                </div>

                {/* Booking submit button */}
                <div className="pt-2">
                  <button
                    type="submit"
                    id="booking-submit-btn"
                    className="w-full bg-stone-900 hover:bg-stone-800 text-white font-mono text-xs uppercase tracking-widest font-semibold py-4 rounded-full transition-colors flex items-center justify-center gap-2 shadow-md"
                  >
                    Confirm Private Booking
                  </button>
                </div>

              </form>
            </div>
          )}
        </div>

      </div>
    </div>
  );
}
