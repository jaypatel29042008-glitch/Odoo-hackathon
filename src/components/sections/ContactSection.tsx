import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, Phone, Send, ArrowRight } from 'lucide-react';
import { fadeInLeft, fadeInRight } from '@/lib/animations';
import SectionHeader from '../ui/SectionHeader';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    organization: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API request
    setTimeout(() => {
      alert(`Thank you, ${formData.name}! Your message has been sent to the EcoSphere Odoo team. We will contact you soon.`);
      setFormData({ name: '', email: '', organization: '', message: '' });
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <section id="contact" className="py-24 bg-surface relative overflow-hidden">
      <div className="absolute top-1/2 left-0 w-80 h-80 rounded-full bg-eco-950/10 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-8 relative z-10">
        <SectionHeader
          eyebrow="GET IN TOUCH"
          title="Ready to Transform Your ESG Operations?"
          subtitle="Have questions about the Odoo 17 module integration? Reach out to discuss pilot programs or schedule a live demo presentation."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch max-w-5xl mx-auto">
          {/* Left Column: Contact Details */}
          <motion.div
            variants={fadeInLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            className="lg:col-span-5 flex flex-col justify-between gap-8"
          >
            <div className="flex flex-col gap-6">
              <h3 className="font-heading font-extrabold text-2xl text-white">
                Contact Information
              </h3>
              <p className="text-on-surface-variant text-sm leading-relaxed">
                Connect with our product development office. We are happy to walk mentors, investors, and developers through our Odoo configurations and custom OWL components.
              </p>
            </div>

            {/* Details Cards */}
            <div className="flex flex-col gap-5">
              {/* Mail */}
              <div className="glass-card border-outline-variant/30 p-5 rounded-2xl flex items-center gap-4 hover:border-primary/20 transition-colors">
                <div className="w-10 h-10 rounded-xl bg-primary-container/20 border border-eco-500/25 flex items-center justify-center text-primary shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-mono font-medium text-outline uppercase">Email Us</h4>
                  <a href="mailto:hello@ecosphere.dev" className="text-sm font-semibold text-white hover:text-primary transition-colors mt-0.5 block">
                    hello@ecosphere.dev
                  </a>
                </div>
              </div>

              {/* Phone */}
              <div className="glass-card border-outline-variant/30 p-5 rounded-2xl flex items-center gap-4 hover:border-primary/20 transition-colors">
                <div className="w-10 h-10 rounded-xl bg-primary-container/20 border border-eco-500/25 flex items-center justify-center text-primary shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-mono font-medium text-outline uppercase">Call Us</h4>
                  <a href="tel:+919876543210" className="text-sm font-semibold text-white hover:text-primary transition-colors mt-0.5 block">
                    +91 98765 43210
                  </a>
                </div>
              </div>

              {/* Location */}
              <div className="glass-card border-outline-variant/30 p-5 rounded-2xl flex items-center gap-4 hover:border-primary/20 transition-colors">
                <div className="w-10 h-10 rounded-xl bg-primary-container/20 border border-eco-500/25 flex items-center justify-center text-primary shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-mono font-medium text-outline uppercase">Headquarters</h4>
                  <p className="text-sm font-semibold text-white mt-0.5">
                    Pune, Maharashtra, India
                  </p>
                </div>
              </div>
            </div>

            <div className="h-px bg-surface-container-low/50 w-full" />

            <span className="text-xs font-mono text-outline">
              * Active response time: within 2 hours during hackathon duration.
            </span>
          </motion.div>

          {/* Right Column: Contact Form */}
          <motion.div
            variants={fadeInRight}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            className="lg:col-span-7"
          >
            <form onSubmit={handleSubmit} className="glass-card border-outline-variant/30 p-8 rounded-3xl flex flex-col gap-6 h-full justify-between">
              <div className="flex flex-col gap-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  {/* Name */}
                  <div className="flex flex-col gap-2">
                    <label htmlFor="name" className="text-xs font-mono font-medium text-on-surface-variant uppercase tracking-wider">
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Rahul Sharma"
                      className="bg-surface-container-low/50 border border-outline-variant/50 hover:border-white/15 focus:border-primary rounded-xl px-4 py-3.5 text-sm text-on-surface placeholder-slate-400 outline-none transition-colors"
                    />
                  </div>

                  {/* Email */}
                  <div className="flex flex-col gap-2">
                    <label htmlFor="email" className="text-xs font-mono font-medium text-on-surface-variant uppercase tracking-wider">
                      Corporate Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="e.g. rahul@tata.com"
                      className="bg-surface-container-low/50 border border-outline-variant/50 hover:border-white/15 focus:border-primary rounded-xl px-4 py-3.5 text-sm text-on-surface placeholder-slate-400 outline-none transition-colors"
                    />
                  </div>
                </div>

                {/* Organization */}
                <div className="flex flex-col gap-2">
                  <label htmlFor="organization" className="text-xs font-mono font-medium text-on-surface-variant uppercase tracking-wider">
                    Organization / Company
                  </label>
                  <input
                    type="text"
                    id="organization"
                    required
                    value={formData.organization}
                    onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                    placeholder="e.g. Tata Sustainability Group"
                    className="bg-surface-container-low/50 border border-outline-variant/50 hover:border-white/15 focus:border-primary rounded-xl px-4 py-3.5 text-sm text-on-surface placeholder-slate-400 outline-none transition-colors"
                  />
                </div>

                {/* Message */}
                <div className="flex flex-col gap-2">
                  <label htmlFor="message" className="text-xs font-mono font-medium text-on-surface-variant uppercase tracking-wider">
                    Message / Inquiry Details
                  </label>
                  <textarea
                    id="message"
                    required
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Describe your ESG integration needs..."
                    className="bg-surface-container-low/50 border border-outline-variant/50 hover:border-white/15 focus:border-primary rounded-xl px-4 py-3.5 text-sm text-on-surface placeholder-slate-400 outline-none resize-none transition-colors"
                  />
                </div>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full mt-6 py-4 rounded-xl bg-primary hover:bg-primary-container text-on-surface font-heading font-semibold text-sm transition-all duration-200 hover:shadow-lg hover:shadow-eco-600/25 flex items-center justify-center gap-2 active:scale-95 cursor-pointer disabled:opacity-50"
              >
                {isSubmitting ? (
                  <span>Sending message...</span>
                ) : (
                  <>
                    <span>Send Message</span>
                    <Send className="w-4 h-4" />
                  </>
                )}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
