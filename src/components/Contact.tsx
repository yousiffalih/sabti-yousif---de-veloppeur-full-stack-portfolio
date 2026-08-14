import React, { useState } from 'react';
import { Mail, Linkedin, Github, MapPin, Send, Copy, Check, MessageSquare, Clock, CheckCircle2, Phone } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { ContactFormData } from '../types';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [copied, setCopied] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
      setFormData({ name: '', email: '', subject: '', message: '' });

      setTimeout(() => {
        setSubmitSuccess(false);
      }, 5000);
    }, 1000);
  };

  return (
    <section id="contact" className="py-20 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-mono font-semibold uppercase tracking-wider">
            <MessageSquare className="w-3.5 h-3.5" /> Me Contacter
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-zinc-100 tracking-tight">
            Restons en Contact
          </h2>
          <p className="text-zinc-400 text-sm sm:text-base leading-relaxed">
            Vous souhaitez discuter d'un projet web/mobile, d'une opportunité d'embauche ou en savoir plus sur mon parcours ? Contactez-moi directement.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Info Cards */}
          <div className="lg:col-span-5 space-y-4">
            
            {/* Email Card with Copy button */}
            <div className="bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-md hover:border-blue-500/30 transition-all duration-300 space-y-3 group">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400 group-hover:bg-blue-500 group-hover:text-zinc-950 transition-colors">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-xs font-mono font-semibold text-zinc-400 uppercase">Email</h3>
                    <p className="text-sm font-semibold text-zinc-100 group-hover:text-blue-300 transition-colors">
                      {PERSONAL_INFO.email}
                    </p>
                  </div>
                </div>

                <button
                  onClick={handleCopyEmail}
                  className="p-2 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 text-zinc-300 transition-colors"
                  title="Copier l'email"
                >
                  {copied ? <Check className="w-4 h-4 text-blue-400" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>
            </div>

            {/* Phone Card */}
            <div className="bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-md hover:border-blue-500/30 transition-all duration-300 space-y-3 group">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400 group-hover:bg-blue-500 group-hover:text-zinc-950 transition-colors">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-xs font-mono font-semibold text-zinc-400 uppercase">Téléphone</h3>
                  <p className="text-sm font-semibold text-zinc-100 group-hover:text-blue-300 transition-colors">
                    {PERSONAL_INFO.phone}
                  </p>
                </div>
              </div>
            </div>

            {/* LinkedIn & GitHub Grid */}
            <div className="grid grid-cols-2 gap-4">
              <a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/5 border border-white/10 rounded-2xl p-5 backdrop-blur-md hover:border-blue-500/40 hover:bg-white/10 transition-all duration-300 space-y-2 group block"
              >
                <div className="w-9 h-9 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400 group-hover:bg-cyan-500 group-hover:text-zinc-950 transition-colors">
                  <Linkedin className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-xs font-mono font-semibold text-zinc-400">LinkedIn</h4>
                  <p className="text-xs font-semibold text-zinc-200 group-hover:text-cyan-300">
                    /in/sabti-yousif
                  </p>
                </div>
              </a>

              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/5 border border-white/10 rounded-2xl p-5 backdrop-blur-md hover:border-blue-500/40 hover:bg-white/10 transition-all duration-300 space-y-2 group block"
              >
                <div className="w-9 h-9 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-zinc-200 group-hover:bg-white group-hover:text-zinc-950 transition-colors">
                  <Github className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-xs font-mono font-semibold text-zinc-400">GitHub</h4>
                  <p className="text-xs font-semibold text-zinc-200 group-hover:text-blue-300">
                    @yfalih47
                  </p>
                </div>
              </a>
            </div>

            {/* Location & Response Time */}
            <div className="bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-md space-y-3">
              <div className="flex items-center gap-3">
                <MapPin className="w-5 h-5 text-blue-400" />
                <div>
                  <h4 className="text-xs font-mono text-zinc-400 uppercase">Localisation</h4>
                  <p className="text-sm font-semibold text-zinc-200">{PERSONAL_INFO.location}</p>
                </div>
              </div>

              <div className="pt-3 border-t border-white/10 flex items-center gap-2 text-xs text-zinc-400 font-mono">
                <Clock className="w-3.5 h-3.5 text-blue-400" />
                <span>Réponse rapide sous 12 heures</span>
              </div>
            </div>

          </div>

          {/* Right Contact Form */}
          <div className="lg:col-span-7 bg-white/5 border border-white/10 rounded-2xl p-6 sm:p-8 backdrop-blur-md space-y-6">
            
            <h3 className="text-xl font-bold text-zinc-100 flex items-center gap-2">
              <Send className="w-5 h-5 text-blue-400" />
              <span>Envoyer un Message</span>
            </h3>

            {submitSuccess && (
              <div className="p-4 rounded-xl bg-blue-500/10 border border-blue-500/30 text-blue-300 text-xs sm:text-sm flex items-center gap-2.5 animate-fadeIn">
                <CheckCircle2 className="w-5 h-5 text-blue-400 shrink-0" />
                <span>Merci ! Votre message a bien été envoyé. Je vous répondrai dans les plus brefs délais.</span>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="text-xs font-mono font-semibold text-zinc-300">Votre Nom *</label>
                  <input
                    type="text"
                    required
                    placeholder="Jean Dupont"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-black/60 border border-white/10 text-zinc-100 text-sm focus:outline-none focus:border-blue-500 transition-colors"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-mono font-semibold text-zinc-300">Votre Email *</label>
                  <input
                    type="email"
                    required
                    placeholder="jean@entreprise.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-black/60 border border-white/10 text-zinc-100 text-sm focus:outline-none focus:border-blue-500 transition-colors"
                  />
                </div>
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-mono font-semibold text-zinc-300">Sujet</label>
                <input
                  type="text"
                  placeholder="Opportunité de recrutement Full-Stack / Projet"
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl bg-black/60 border border-white/10 text-zinc-100 text-sm focus:outline-none focus:border-blue-500 transition-colors"
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-mono font-semibold text-zinc-300">Message *</label>
                <textarea
                  required
                  rows={4}
                  placeholder="Bonjour Sabti, nous avons pris connaissance de votre CV et nous souhaiterions échanger au sujet d'un poste..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl bg-black/60 border border-white/10 text-zinc-100 text-sm focus:outline-none focus:border-blue-500 transition-colors resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-3.5 rounded-xl bg-white hover:bg-zinc-200 text-zinc-950 font-bold text-sm flex items-center justify-center gap-2 transition-all duration-200 shadow-lg disabled:opacity-50"
              >
                {isSubmitting ? (
                  <>
                    <span className="w-4 h-4 rounded-full border-2 border-zinc-950 border-t-transparent animate-spin" />
                    <span>Envoi du message...</span>
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4 text-zinc-950" />
                    <span>Envoyer le Message</span>
                  </>
                )}
              </button>
            </form>

          </div>

        </div>

      </div>
    </section>
  );
};

