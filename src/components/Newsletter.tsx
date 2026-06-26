import { useState, FormEvent } from 'react';
import { Mail, Sparkles, Send } from 'lucide-react';

export default function Newsletter() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (email.trim() === '') return;
    setSubscribed(true);
    setEmail('');
  };

  return (
    <section id="luxury-newsletter-section" className="bg-stone-100 py-20 px-4 sm:px-6 lg:px-8 border-t border-stone-200">
      <div className="max-w-4xl mx-auto bg-white rounded-3xl border border-stone-200/80 p-8 md:p-14 shadow-xl relative overflow-hidden">
        {/* Background Decorative Gold Arch */}
        <div className="absolute -top-12 -right-12 w-48 h-48 rounded-full bg-amber-500/5 blur-3xl pointer-events-none" />
        <div className="absolute -bottom-12 -left-12 w-48 h-48 rounded-full bg-amber-500/5 blur-3xl pointer-events-none" />

        <div className="relative z-10 text-center max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-1 bg-amber-50 text-amber-800 text-[10px] font-mono uppercase tracking-[0.2em] px-3.5 py-1 rounded-full mb-6">
            <Sparkles className="w-3 h-3 text-amber-500" />
            Bespoke Confectionery Circle
          </div>

          <h2 className="font-serif text-2xl md:text-3xl text-stone-900 font-semibold tracking-tight mb-4">
            Receive Private Baking Allocations
          </h2>
          <p className="text-xs md:text-sm text-stone-500 leading-relaxed mb-8">
            Our micro-batches sell out in hours. Join our private ledger to receive early invitation codes for seasonal collections, limited-edition flavor collaborations, and custom leather hampers.
          </p>

          {subscribed ? (
            <div className="p-6 bg-amber-50/60 rounded-2xl border border-amber-200/60 text-center">
              <p className="font-serif text-stone-800 font-medium text-base mb-1">
                You Are Now Enrolled
              </p>
              <p className="text-xs text-stone-500">
                A letterpress validation email has been queued. Look for "Sweet Cookie Allocation" in your inbox.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <div className="relative flex-grow">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-stone-400">
                  <Mail className="w-4 h-4" />
                </div>
                <input
                  type="email"
                  required
                  id="newsletter-email-input"
                  placeholder="Enter your email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full bg-stone-50 hover:bg-stone-100/60 focus:bg-white text-stone-900 text-xs px-12 py-4 rounded-full border border-stone-200 focus:border-amber-600 focus:ring-1 focus:ring-amber-600/40 transition-all outline-hidden font-sans"
                />
              </div>
              <button
                type="submit"
                id="newsletter-submit-btn"
                className="bg-stone-900 hover:bg-stone-800 text-white text-xs font-mono uppercase tracking-widest font-semibold py-4 px-8 rounded-full transition-colors flex items-center justify-center gap-2 shadow-md group"
              >
                Subscribe
                <Send className="w-3 h-3 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </button>
            </form>
          )}

          <p className="text-[10px] text-stone-400 italic mt-6">
            We honor your privacy with absolute discretion. Unsubscribe with a single click.
          </p>
        </div>
      </div>
    </section>
  );
}
