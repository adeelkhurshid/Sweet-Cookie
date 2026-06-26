import { useState, FormEvent } from 'react';
import { Mail, Phone, MapPin, Sparkles, Send, CheckCircle } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: 'general',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (formData.name.trim() === '' || formData.email.trim() === '') return;
    setSubmitted(true);
  };

  return (
    <div id="contact-inquiry-page" className="bg-stone-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Editorial Header */}
        <div className="text-center max-w-xl mx-auto mb-16">
          <span className="text-[10px] uppercase tracking-[0.25em] font-mono text-amber-600 block mb-2 font-semibold">
            Bespoke Requests
          </span>
          <h1 className="font-serif text-3xl sm:text-4xl text-stone-900 font-semibold tracking-tight">
            Contact & Custom Inquiries
          </h1>
          <div className="w-12 h-[1px] bg-amber-600 mx-auto mt-4 mb-4" />
          <p className="text-xs text-stone-500 leading-relaxed">
            Need customized leather hampers for private occasions, corporate gifting, or wedding tasting arrangements? Submit your coordinates below, and our concierges will attend to you.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 max-w-5xl mx-auto items-start">
          
          {/* Left Column: Direct Boutique Info cards */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Headquarters card */}
            <div className="bg-white rounded-2xl border border-stone-200/60 p-6 text-left shadow-xs space-y-4">
              <div className="flex gap-4 items-start">
                <div className="w-9 h-9 rounded-full bg-amber-50 text-amber-700 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-4 h-4" />
                </div>
                <div className="space-y-1">
                  <h3 className="font-serif text-sm font-semibold text-stone-900">Paris Flagship</h3>
                  <p className="text-xs text-stone-500 leading-relaxed">
                    42 Rue de l’Université, 75007 Paris, France
                  </p>
                </div>
              </div>
            </div>

            {/* Direct Line card */}
            <div className="bg-white rounded-2xl border border-stone-200/60 p-6 text-left shadow-xs space-y-4">
              <div className="flex gap-4 items-start">
                <div className="w-9 h-9 rounded-full bg-amber-50 text-amber-700 flex items-center justify-center flex-shrink-0">
                  <Phone className="w-4 h-4" />
                </div>
                <div className="space-y-1">
                  <h3 className="font-serif text-sm font-semibold text-stone-900">Private Telephone</h3>
                  <p className="text-xs text-stone-500 font-mono">
                    +33 (0) 1 45 44 23 88
                  </p>
                  <p className="text-[10px] text-stone-400 italic">
                    Open Mon–Sat, 09:00 – 19:00 CET
                  </p>
                </div>
              </div>
            </div>

            {/* Digital Ledger card */}
            <div className="bg-white rounded-2xl border border-stone-200/60 p-6 text-left shadow-xs space-y-4">
              <div className="flex gap-4 items-start">
                <div className="w-9 h-9 rounded-full bg-amber-50 text-amber-700 flex items-center justify-center flex-shrink-0">
                  <Mail className="w-4 h-4" />
                </div>
                <div className="space-y-1">
                  <h3 className="font-serif text-sm font-semibold text-stone-900">Digital Registry</h3>
                  <p className="text-xs text-stone-500 font-mono">
                    orders@sweetcookie.com
                  </p>
                  <p className="text-[10px] text-stone-400 italic">
                    Concierge response within 3 baking hours.
                  </p>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Custom Inquiry Form */}
          <div className="lg:col-span-7 bg-white rounded-3xl border border-stone-200/80 p-8 shadow-md text-left">
            {submitted ? (
              <div className="py-12 text-center space-y-4">
                <CheckCircle className="w-12 h-12 text-emerald-600 mx-auto" />
                <h3 className="font-serif text-xl font-medium text-stone-900">Inquiry Logged Successfully</h3>
                <p className="text-xs text-stone-500 max-w-sm mx-auto leading-relaxed">
                  Thank you, <strong>{formData.name}</strong>. Your custom recipe request or event reservation has been registered under seal. An allocation counselor will reply to <strong>{formData.email}</strong> within 120 minutes.
                </p>
                <button
                  id="reset-contact-form-btn"
                  onClick={() => {
                    setSubmitted(false);
                    setFormData({ name: '', email: '', subject: 'general', message: '' });
                  }}
                  className="mt-6 text-xs uppercase tracking-widest font-mono text-amber-700 font-semibold border-b border-amber-700/40 hover:border-amber-700 pb-0.5"
                >
                  Submit Another Inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="flex flex-col sm:flex-row gap-6">
                  {/* Full Name */}
                  <div className="flex-grow space-y-1.5">
                    <label htmlFor="contact-name" className="text-[10px] uppercase tracking-wider font-mono text-stone-400 font-semibold">
                      Your Full Name
                    </label>
                    <input
                      type="text"
                      required
                      id="contact-name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g., Madeleine Laroche"
                      className="w-full bg-stone-50 hover:bg-stone-100/60 focus:bg-white text-stone-900 text-xs px-4 py-3.5 rounded-lg border border-stone-200 focus:border-amber-600 focus:ring-1 focus:ring-amber-600/40 transition-all outline-hidden font-sans"
                    />
                  </div>

                  {/* Email address */}
                  <div className="flex-grow space-y-1.5">
                    <label htmlFor="contact-email" className="text-[10px] uppercase tracking-wider font-mono text-stone-400 font-semibold">
                      Email Address
                    </label>
                    <input
                      type="email"
                      required
                      id="contact-email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="e.g., madeleine@domain.com"
                      className="w-full bg-stone-50 hover:bg-stone-100/60 focus:bg-white text-stone-900 text-xs px-4 py-3.5 rounded-lg border border-stone-200 focus:border-amber-600 focus:ring-1 focus:ring-amber-600/40 transition-all outline-hidden font-sans"
                    />
                  </div>
                </div>

                {/* Inquiry Subject */}
                <div className="space-y-1.5">
                  <label htmlFor="contact-subject" className="text-[10px] uppercase tracking-wider font-mono text-stone-400 font-semibold">
                    Inquiry Discipline
                  </label>
                  <select
                    id="contact-subject"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full bg-stone-50 hover:bg-stone-100/60 focus:bg-white text-stone-900 text-xs px-4 py-3.5 rounded-lg border border-stone-200 focus:border-amber-600 focus:ring-1 focus:ring-amber-600/40 transition-all outline-hidden font-sans cursor-pointer"
                  >
                    <option value="general">General Culinary Question</option>
                    <option value="corporate">Bespoke Corporate Caskets (50+ Boxes)</option>
                    <option value="event">Private Tasting Room Salon Bookings</option>
                    <option value="collab">Flavor Recipe Collaborations</option>
                  </select>
                </div>

                {/* Custom message details */}
                <div className="space-y-1.5">
                  <label htmlFor="contact-message" className="text-[10px] uppercase tracking-wider font-mono text-stone-400 font-semibold">
                    Describe Your Requirement
                  </label>
                  <textarea
                    required
                    id="contact-message"
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Describe specific quantities, event dates, allergy boundaries, or recipient profiles..."
                    className="w-full bg-stone-50 hover:bg-stone-100/60 focus:bg-white text-stone-900 text-xs p-4 rounded-lg border border-stone-200 focus:border-amber-600 focus:ring-1 focus:ring-amber-600/40 transition-all outline-hidden font-sans resize-none"
                  />
                </div>

                {/* Submit button */}
                <div>
                  <button
                    type="submit"
                    id="contact-submit-btn"
                    className="w-full bg-stone-900 hover:bg-stone-800 text-white font-mono text-xs uppercase tracking-widest font-semibold py-4 rounded-full transition-colors flex items-center justify-center gap-2 shadow-md"
                  >
                    Send sealed envelope
                    <Send className="w-3.5 h-3.5" />
                  </button>
                </div>

              </form>
            )}
          </div>

        </div>

      </div>
    </div>
  );
}
