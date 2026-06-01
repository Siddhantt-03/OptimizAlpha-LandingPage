import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Globe, MapPin, Linkedin, CheckCircle2, AlertCircle } from 'lucide-react';

interface FormState {
  fullName: string;
  email: string;
  firmName: string;
  aumRange: string;
  role: string;
  message: string;
}

export default function Contact() {
  const [formData, setFormData] = useState<FormState>({
    fullName: '',
    email: '',
    firmName: '',
    aumRange: '',
    role: '',
    message: ''
  });

  const [errors, setErrors] = useState<Partial<FormState>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const validate = () => {
    const newErrors: Partial<FormState> = {};
    if (!formData.fullName.trim()) newErrors.fullName = 'Full Name is required';
    
    if (!formData.email.trim()) {
      newErrors.email = 'Work Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please provide a valid business email';
    }
    
    if (!formData.firmName.trim()) newErrors.firmName = 'Firm Name is required';
    if (!formData.aumRange) newErrors.aumRange = 'AUM Range selection is required';
    if (!formData.role) newErrors.role = 'Role selection is required';
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);

    const accessKey = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY || '1f0cf376-e3f1-4422-99b8-9a9b9ab20b71';
    console.log("Web3Forms submitting with Access Key:", accessKey);

    fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({
        access_key: accessKey,
        name: formData.fullName,
        email: formData.email,
        subject: `New Lead: ${formData.firmName} (${formData.role})`,
        message: `
Full Name: ${formData.fullName}
Work Email: ${formData.email}
Firm Name: ${formData.firmName}
AUM Range: ${formData.aumRange}
Role: ${formData.role}

Message:
${formData.message}
        `
      })
    })
      .then(async (response) => {
        if (response.ok) {
          setIsSuccess(true);
          setFormData({
            fullName: '',
            email: '',
            firmName: '',
            aumRange: '',
            role: '',
            message: ''
          });
        } else {
          const data = await response.json();
          alert(`Error (Key: ${accessKey}): ` + (data.message || 'Failed to submit. Please contact support@optimizalpha.com directly.'));
        }
      })
      .catch(() => {
        alert(`Network error (Key: ${accessKey}). Please contact support@optimizalpha.com directly.`);
      })
      .finally(() => {
        setIsSubmitting(false);
      });
  };

  return (
    <div className="bg-navy min-h-screen pt-32 pb-24 text-pearl">
      <div className="max-w-[1600px] mx-auto px-6 md:px-12">
        {/* Header Hero */}
        <section className="text-center mb-16 relative">
          <div className="absolute top-10 left-1/2 -translate-x-1/2 w-80 h-80 rounded-full bg-ocean/10 blur-[100px] pointer-events-none" />
          
          <span className="font-mono text-xs text-tealmint uppercase tracking-widest block mb-3">
            Institutional Portfolio Intelligence
          </span>
          <h1 className="font-display text-5xl md:text-7xl font-bold tracking-tight text-pearl mb-6">
            Let's establish your golden source of truth.
          </h1>
          <p className="text-sm md:text-base text-pearl/70 max-w-2xl mx-auto leading-relaxed">
            Connect with our advisory quants to discover how OptimizAlpha can consolidate your multi-asset portfolio, automate custodian feeds, and elevate your analytical command centre.
          </p>
        </section>

        {/* Two-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mt-8">
          {/* Left Column: Form */}
          <div className="lg:col-span-7 bg-[#050c12] border border-tealmint/10 rounded-2xl p-8 relative">
            <AnimatePresence mode="wait">
              {!isSuccess ? (
                <motion.form
                  key="contact-form"
                  initial={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onSubmit={handleSubmit}
                  className="space-y-6 text-left"
                >
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Full Name */}
                    <div className="flex flex-col gap-2">
                      <label className="font-mono text-[10px] text-pearl/65 uppercase tracking-wider">Full Name *</label>
                      <input
                        type="text"
                        value={formData.fullName}
                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                        className={`w-full px-4 py-3 rounded-lg bg-navy border ${errors.fullName ? 'border-red-400' : 'border-tealmint/20'} text-sm text-pearl placeholder-pearl/30 focus:outline-none focus:border-tealmint transition-colors`}
                        placeholder="John Doe"
                      />
                      {errors.fullName && (
                        <span className="text-[10px] text-red-400 flex items-center gap-1 font-mono">
                          <AlertCircle size={10} />
                          {errors.fullName}
                        </span>
                      )}
                    </div>

                    {/* Email */}
                    <div className="flex flex-col gap-2">
                      <label className="font-mono text-[10px] text-pearl/65 uppercase tracking-wider">Work Email *</label>
                      <input
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className={`w-full px-4 py-3 rounded-lg bg-navy border ${errors.email ? 'border-red-400' : 'border-tealmint/20'} text-sm text-pearl placeholder-pearl/30 focus:outline-none focus:border-tealmint transition-colors`}
                        placeholder="jdoe@firm.com"
                      />
                      {errors.email && (
                        <span className="text-[10px] text-red-400 flex items-center gap-1 font-mono">
                          <AlertCircle size={10} />
                          {errors.email}
                        </span>
                      )}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {/* Firm Name */}
                    <div className="flex flex-col gap-2 md:col-span-1">
                      <label className="font-mono text-[10px] text-pearl/65 uppercase tracking-wider">Firm Name *</label>
                      <input
                        type="text"
                        value={formData.firmName}
                        onChange={(e) => setFormData({ ...formData, firmName: e.target.value })}
                        className={`w-full px-4 py-3 rounded-lg bg-navy border ${errors.firmName ? 'border-red-400' : 'border-tealmint/20'} text-sm text-pearl placeholder-pearl/30 focus:outline-none focus:border-tealmint transition-colors`}
                        placeholder="Apex Capital"
                      />
                      {errors.firmName && (
                        <span className="text-[10px] text-red-400 flex items-center gap-1 font-mono">
                          <AlertCircle size={10} />
                          {errors.firmName}
                        </span>
                      )}
                    </div>

                    {/* AUM Range */}
                    <div className="flex flex-col gap-2">
                      <label className="font-mono text-[10px] text-pearl/65 uppercase tracking-wider">AUM Range *</label>
                      <select
                        value={formData.aumRange}
                        onChange={(e) => setFormData({ ...formData, aumRange: e.target.value })}
                        className={`w-full px-4 py-3 rounded-lg bg-navy border ${errors.aumRange ? 'border-red-400' : 'border-tealmint/20'} text-sm text-pearl focus:outline-none focus:border-tealmint transition-colors`}
                      >
                        <option value="" disabled>Select Range</option>
                        <option value="<$100M">&lt;$100M</option>
                        <option value="$100M-$500M">$100M–$500M</option>
                        <option value="$500M-$2B">$500M–$2B</option>
                        <option value="$2B-$10B">$2B–$10B</option>
                        <option value="$10B+">$10B+</option>
                      </select>
                      {errors.aumRange && (
                        <span className="text-[10px] text-red-400 flex items-center gap-1 font-mono">
                          <AlertCircle size={10} />
                          {errors.aumRange}
                        </span>
                      )}
                    </div>

                    {/* Role */}
                    <div className="flex flex-col gap-2">
                      <label className="font-mono text-[10px] text-pearl/65 uppercase tracking-wider">Role *</label>
                      <select
                        value={formData.role}
                        onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                        className={`w-full px-4 py-3 rounded-lg bg-navy border ${errors.role ? 'border-red-400' : 'border-tealmint/20'} text-sm text-pearl focus:outline-none focus:border-tealmint transition-colors`}
                      >
                        <option value="" disabled>Select Role</option>
                        <option value="CIO">CIO</option>
                        <option value="Portfolio Manager">Portfolio Manager</option>
                        <option value="Head of Operations">Head of Operations</option>
                        <option value="Technology">Technology</option>
                        <option value="Other">Other</option>
                      </select>
                      {errors.role && (
                        <span className="text-[10px] text-red-400 flex items-center gap-1 font-mono">
                          <AlertCircle size={10} />
                          {errors.role}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Message */}
                  <div className="flex flex-col gap-2">
                    <label className="font-mono text-[10px] text-pearl/65 uppercase tracking-wider">How can we help?</label>
                    <textarea
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg bg-navy border border-tealmint/20 text-sm text-pearl placeholder-pearl/30 focus:outline-none focus:border-tealmint transition-colors"
                      placeholder="Attribution customization, vintage PE support, SOC 2 details..."
                    />
                  </div>

                  {/* Submit button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="btn-glow w-full py-3.5 rounded-full bg-ocean border border-tealmint/30 text-pearl font-semibold text-sm hover:bg-tealmint hover:text-navy transition-all duration-300 flex justify-center items-center gap-2"
                  >
                    {isSubmitting ? (
                      <span className="w-5 h-5 rounded-full border-2 border-pearl border-t-transparent animate-spin" />
                    ) : (
                      <span>Send Message →</span>
                    )}
                  </button>
                </motion.form>
              ) : (
                <motion.div
                  key="success-card"
                  initial={{ scale: 0.95, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.4, type: "spring" }}
                  className="py-16 text-center flex flex-col items-center gap-6"
                >
                  <CheckCircle2 size={64} className="text-tealmint animate-bounce" />
                  <div className="flex flex-col gap-2">
                    <h3 className="font-display text-2xl font-bold text-pearl">Message Sent Successfully</h3>
                    <p className="text-sm text-pearl/70 max-w-sm leading-relaxed mt-1">
                      Thank you for contacting OptimizAlpha. An advisory quantitative manager will review your submission and connect with you within 4 business hours.
                    </p>
                  </div>
                  <button
                    onClick={() => setIsSuccess(false)}
                    className="font-mono text-[11px] text-tealmint uppercase tracking-widest hover:text-pearl transition-colors"
                  >
                    ← Back to form
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Right Column: Info */}
          <div className="lg:col-span-5 flex flex-col gap-8 text-left">
            <div className="bg-[#050c12] border border-tealmint/10 rounded-2xl p-8 space-y-6">
              <h3 className="font-display text-xl font-bold text-pearl pb-3 border-b border-pearl/10">
                Direct Contact
              </h3>

              <div className="space-y-4">
                <div className="flex gap-4 items-center">
                  <div className="p-3 rounded-lg bg-ocean/20 text-tealmint">
                    <Mail size={18} />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono text-pearl/40 uppercase tracking-widest block">Email inquiry</span>
                    <a href="mailto:support@optimizalpha.com" className="text-sm font-mono text-tealmint hover:underline">
                      support@optimizalpha.com
                    </a>
                  </div>
                </div>

                <div className="flex gap-4 items-center">
                  <div className="p-3 rounded-lg bg-ocean/20 text-tealmint">
                    <Globe size={18} />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono text-pearl/40 uppercase tracking-widest block">Web platform</span>
                    <span className="text-sm font-mono text-pearl">optimizalpha.com</span>
                  </div>
                </div>

                <div className="flex gap-4 items-center">
                  <div className="p-3 rounded-lg bg-ocean/20 text-tealmint">
                    <MapPin size={18} />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono text-pearl/40 uppercase tracking-widest block">Locations</span>
                    <span className="text-sm font-mono text-pearl">India (HQ serving APAC & Middle East)</span>
                  </div>
                </div>
              </div>

              <div className="pt-6 border-t border-pearl/10 flex justify-between items-center">
                <span className="text-xs text-pearl/50 font-mono">Follow on professional channels</span>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noreferrer"
                  className="p-2 rounded-full border border-pearl/10 hover:border-tealmint hover:text-tealmint transition-colors duration-200"
                >
                  <Linkedin size={16} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
