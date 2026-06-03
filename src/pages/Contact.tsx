import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Globe, Linkedin, CheckCircle2, AlertCircle } from 'lucide-react';
import SpotlightEffect from '../components/SpotlightEffect';

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
    <SpotlightEffect opacity={0.12} className="bg-navy min-h-screen pt-32 pb-24 text-pearl bg-financial-grid relative">
      {/* Dynamic ambient backdrop glows */}
      <div className="absolute top-1/4 left-1/10 w-96 h-96 rounded-full bg-ocean/5 blur-[120px] pointer-events-none animate-aurora-1" />
      <div className="absolute bottom-1/4 right-1/10 w-96 h-96 rounded-full bg-tealmint/5 blur-[120px] pointer-events-none animate-aurora-2" />

      <div className="max-w-[1600px] mx-auto px-6 md:px-12 relative z-10">
        
        {/* Header Hero Title */}
        <section className="text-center mb-16 relative">
          <div className="absolute top-10 left-1/2 -translate-x-1/2 w-80 h-80 rounded-full bg-ocean/10 blur-[100px] pointer-events-none" />
          
          {/* Eyebrow Pill */}
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-tealmint/10 border border-tealmint/25 backdrop-blur-md mb-4 shadow-md">
            <span className="w-1.5 h-1.5 rounded-full bg-tealmint animate-pulse" />
            <span className="font-mono text-xs font-semibold text-tealmint uppercase tracking-wider">
              Institutional Portfolio Intelligence
            </span>
          </div>

          <h1 className="font-display text-5xl md:text-7xl font-bold tracking-tight text-pearl mb-6">
            Let's establish your <br />
            <span className="bg-gradient-to-r from-ocean to-tealmint bg-clip-text text-transparent">golden source of truth.</span>
          </h1>
          <p className="text-sm md:text-base text-pearl/70 max-w-2xl mx-auto leading-relaxed">
            Connect with our advisory quants to discover how OptimizAlpha can consolidate your multi-asset portfolio, automate custodian feeds, and elevate your analytical command centre.
          </p>
        </section>

        {/* Two-Column Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mt-8">
          
          {/* Left Column: Intake Form (lg:col-span-7) */}
          <div className="lg:col-span-7 bg-[#050c12]/80 border border-tealmint/15 rounded-3xl p-8 md:p-10 shadow-2xl premium-glow-shadow relative transition-all duration-500 hover:border-tealmint/30">
            <div className="absolute inset-0 bg-gradient-to-b from-ocean/5 to-transparent pointer-events-none rounded-3xl" />
            
            <AnimatePresence mode="wait">
              {!isSuccess ? (
                <motion.form
                  key="contact-form"
                  initial={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onSubmit={handleSubmit}
                  className="space-y-6 text-left relative z-10"
                >
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Full Name */}
                    <div className="flex flex-col gap-2">
                      <label className="font-mono text-[10px] text-pearl/65 uppercase tracking-wider font-bold">Full Name *</label>
                      <input
                        type="text"
                        value={formData.fullName}
                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                        className={`w-full px-4 py-3 rounded-xl bg-navy/60 border ${
                          errors.fullName ? 'border-red-400 focus:border-red-400' : 'border-tealmint/20 focus:border-tealmint'
                        } text-sm text-pearl placeholder-pearl/30 focus:outline-none focus:ring-1 focus:ring-tealmint/30 transition-all shadow-inner`}
                        placeholder="John Doe"
                      />
                      {errors.fullName && (
                        <span className="text-[10px] text-red-400 flex items-center gap-1 font-mono mt-0.5">
                          <AlertCircle size={10} />
                          {errors.fullName}
                        </span>
                      )}
                    </div>

                    {/* Email */}
                    <div className="flex flex-col gap-2">
                      <label className="font-mono text-[10px] text-pearl/65 uppercase tracking-wider font-bold">Work Email *</label>
                      <input
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className={`w-full px-4 py-3 rounded-xl bg-navy/60 border ${
                          errors.email ? 'border-red-400 focus:border-red-400' : 'border-tealmint/20 focus:border-tealmint'
                        } text-sm text-pearl placeholder-pearl/30 focus:outline-none focus:ring-1 focus:ring-tealmint/30 transition-all shadow-inner`}
                        placeholder="jdoe@firm.com"
                      />
                      {errors.email && (
                        <span className="text-[10px] text-red-400 flex items-center gap-1 font-mono mt-0.5">
                          <AlertCircle size={10} />
                          {errors.email}
                        </span>
                      )}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {/* Firm Name */}
                    <div className="flex flex-col gap-2 md:col-span-1">
                      <label className="font-mono text-[10px] text-pearl/65 uppercase tracking-wider font-bold">Firm Name *</label>
                      <input
                        type="text"
                        value={formData.firmName}
                        onChange={(e) => setFormData({ ...formData, firmName: e.target.value })}
                        className={`w-full px-4 py-3 rounded-xl bg-navy/60 border ${
                          errors.firmName ? 'border-red-400 focus:border-red-400' : 'border-tealmint/20 focus:border-tealmint'
                        } text-sm text-pearl placeholder-pearl/30 focus:outline-none focus:ring-1 focus:ring-tealmint/30 transition-all shadow-inner`}
                        placeholder="Apex Capital"
                      />
                      {errors.firmName && (
                        <span className="text-[10px] text-red-400 flex items-center gap-1 font-mono mt-0.5">
                          <AlertCircle size={10} />
                          {errors.firmName}
                        </span>
                      )}
                    </div>

                    {/* AUM Range */}
                    <div className="flex flex-col gap-2">
                      <label className="font-mono text-[10px] text-pearl/65 uppercase tracking-wider font-bold">AUM Range *</label>
                      <select
                        value={formData.aumRange}
                        onChange={(e) => setFormData({ ...formData, aumRange: e.target.value })}
                        className={`w-full px-4 py-3 rounded-xl bg-navy/60 border ${
                          errors.aumRange ? 'border-red-400 focus:border-red-400' : 'border-tealmint/20 focus:border-tealmint'
                        } text-sm text-pearl focus:outline-none focus:ring-1 focus:ring-tealmint/30 transition-all cursor-pointer`}
                      >
                        <option value="" disabled className="bg-navy text-pearl/40">Select Range</option>
                        <option value="<$100M" className="bg-navy">{"<$100M"}</option>
                        <option value="$100M-$500M" className="bg-navy">$100M–$500M</option>
                        <option value="$500M-$2B" className="bg-navy">$500M–$2B</option>
                        <option value="$2B-$10B" className="bg-navy">$2B–$10B</option>
                        <option value="$10B+" className="bg-navy">$10B+</option>
                      </select>
                      {errors.aumRange && (
                        <span className="text-[10px] text-red-400 flex items-center gap-1 font-mono mt-0.5">
                          <AlertCircle size={10} />
                          {errors.aumRange}
                        </span>
                      )}
                    </div>

                    {/* Role */}
                    <div className="flex flex-col gap-2">
                      <label className="font-mono text-[10px] text-pearl/65 uppercase tracking-wider font-bold">Role *</label>
                      <select
                        value={formData.role}
                        onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                        className={`w-full px-4 py-3 rounded-xl bg-navy/60 border ${
                          errors.role ? 'border-red-400 focus:border-red-400' : 'border-tealmint/20 focus:border-tealmint'
                        } text-sm text-pearl focus:outline-none focus:ring-1 focus:ring-tealmint/30 transition-all cursor-pointer`}
                      >
                        <option value="" disabled className="bg-navy text-pearl/40">Select Role</option>
                        <option value="CIO" className="bg-navy">CIO</option>
                        <option value="Portfolio Manager" className="bg-navy">Portfolio Manager</option>
                        <option value="Head of Operations" className="bg-navy">Head of Operations</option>
                        <option value="Technology" className="bg-navy">Technology</option>
                        <option value="Other" className="bg-navy">Other</option>
                      </select>
                      {errors.role && (
                        <span className="text-[10px] text-red-400 flex items-center gap-1 font-mono mt-0.5">
                          <AlertCircle size={10} />
                          {errors.role}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Message */}
                  <div className="flex flex-col gap-2">
                    <label className="font-mono text-[10px] text-pearl/65 uppercase tracking-wider font-bold">How can we help?</label>
                    <textarea
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-navy/60 border border-tealmint/20 text-sm text-pearl placeholder-pearl/30 focus:outline-none focus:border-tealmint focus:ring-1 focus:ring-tealmint/30 transition-all shadow-inner"
                      placeholder="Attribution customization, vintage PE support, SOC 2 details..."
                    />
                  </div>

                  {/* Submit button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="btn-glow w-full py-4 rounded-full bg-ocean border border-tealmint/30 text-pearl font-bold text-sm hover:bg-tealmint hover:text-navy transition-all duration-300 flex justify-center items-center gap-2 cursor-pointer shadow-lg"
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
                  exit={{ scale: 0.95, opacity: 0 }}
                  transition={{ duration: 0.4, type: "spring" }}
                  className="py-16 text-center flex flex-col items-center gap-6 relative z-10"
                >
                  <div className="p-4 rounded-full bg-tealmint/10 border border-tealmint/30 shadow-lg animate-bounce">
                    <CheckCircle2 size={56} className="text-tealmint" />
                  </div>
                  <div className="flex flex-col gap-2 max-w-sm">
                    <h3 className="font-display text-3xl font-bold text-pearl">Message Sent Successfully</h3>
                    <p className="text-xs md:text-sm text-pearl/70 leading-relaxed mt-2">
                      Thank you for contacting OptimizAlpha. An advisory quantitative manager will review your submission and connect with you within 4 business hours.
                    </p>
                  </div>
                  <button
                    onClick={() => setIsSuccess(false)}
                    className="font-mono text-[10px] text-tealmint uppercase tracking-widest hover:text-pearl border border-tealmint/25 hover:border-tealmint px-5 py-2.5 rounded-full transition-all duration-300 cursor-pointer mt-4"
                  >
                    ← Back to form
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Right Column: Direct Contact Info (lg:col-span-5) */}
          <div className="lg:col-span-5 flex flex-col gap-8 text-left h-full">
            <div className="bg-[#050c12]/80 border border-tealmint/15 rounded-3xl p-8 md:p-10 shadow-2xl premium-glow-shadow relative transition-all duration-500 hover:border-tealmint/30">
              <div className="absolute inset-0 bg-gradient-to-b from-ocean/5 to-transparent pointer-events-none rounded-3xl" />
              
              <h3 className="font-display text-2xl font-bold text-pearl pb-4 border-b border-pearl/10 relative z-10 mb-6">
                Direct Contact
              </h3>

              <div className="space-y-6 relative z-10">
                {/* Email item */}
                <div className="flex gap-4 items-center group cursor-pointer">
                  <div className="p-3.5 rounded-full bg-tealmint/5 border border-tealmint/25 text-tealmint group-hover:bg-tealmint group-hover:text-navy transition-all duration-300 shadow-md group-hover:shadow-lg group-hover:shadow-tealmint/20">
                    <Mail size={18} />
                  </div>
                  <div>
                    <span className="text-[9px] font-mono text-pearl/40 uppercase tracking-widest block font-bold group-hover:text-tealmint/60 transition-colors">
                      [email_inquiry]
                    </span>
                    <a href="mailto:support@optimizalpha.com" className="text-sm font-mono text-tealmint hover:underline font-semibold block mt-0.5">
                      support@optimizalpha.com
                    </a>
                  </div>
                </div>

                {/* Web item */}
                <div className="flex gap-4 items-center group cursor-pointer">
                  <div className="p-3.5 rounded-full bg-tealmint/5 border border-tealmint/25 text-tealmint group-hover:bg-tealmint group-hover:text-navy transition-all duration-300 shadow-md group-hover:shadow-lg group-hover:shadow-tealmint/20">
                    <Globe size={18} />
                  </div>
                  <div>
                    <span className="text-[9px] font-mono text-pearl/40 uppercase tracking-widest block font-bold group-hover:text-tealmint/60 transition-colors">
                      [web_platform]
                    </span>
                    <span className="text-sm font-mono text-pearl font-semibold block mt-0.5">optimizalpha.com</span>
                  </div>
                </div>

                {/* Classification item */}
                <div className="flex gap-4 items-center group cursor-pointer">
                  <div className="p-3.5 rounded-full bg-tealmint/5 border border-tealmint/25 text-tealmint group-hover:bg-tealmint group-hover:text-navy transition-all duration-300 shadow-md group-hover:shadow-lg group-hover:shadow-tealmint/20">
                    <Globe size={18} />
                  </div>
                  <div>
                    <span className="text-[9px] font-mono text-pearl/40 uppercase tracking-widest block font-bold group-hover:text-tealmint/60 transition-colors">
                      [classification]
                    </span>
                    <span className="text-sm font-mono text-pearl font-semibold block mt-0.5">Confidential · Institutional Investors</span>
                  </div>
                </div>
              </div>

              {/* LinkedIn follow ribbon */}
              <div className="pt-6 border-t border-pearl/10 flex justify-between items-center group mt-8 relative z-10">
                <span className="text-xs text-pearl/50 font-mono group-hover:text-pearl/75 transition-colors">Follow on professional channels</span>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noreferrer"
                  className="p-2.5 rounded-full border border-pearl/10 hover:border-tealmint hover:text-tealmint bg-tealmint/5 hover:bg-tealmint/15 transition-all duration-300 hover:scale-110 shadow-md"
                >
                  <Linkedin size={16} />
                </a>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </SpotlightEffect>
  );
}
