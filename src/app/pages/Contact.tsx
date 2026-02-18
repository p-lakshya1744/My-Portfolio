import { motion, AnimatePresence } from 'motion/react';
import { Canvas } from '@react-three/fiber';
import { Float } from '@react-three/drei';
import { Mail, Send, Twitter, Facebook, MessageSquare, Linkedin, Github, Instagram } from 'lucide-react';
import { PageTransition } from '../components/PageTransition';
import { WizardCharacter } from '../components/WizardCharacter';
import { useState, useEffect } from 'react';
import emailjs from '@emailjs/browser';


function OwlPostRoom() {
  return (
    <>
      <ambientLight intensity={0.5} />
      <pointLight position={[5, 5, 5]} intensity={2} color="#ffd700" />

      {/* Flying Owls */}
      {Array.from({ length: 3 }).map((_, i) => (
        <Float key={i} speed={2 + i} rotationIntensity={0.5} floatIntensity={2}>
          <mesh
            position={[
              Math.cos((i / 3) * Math.PI * 2) * 2,
              1 + i * 0.5,
              Math.sin((i / 3) * Math.PI * 2) * 2,
            ]}
          >
            <sphereGeometry args={[0.3, 16, 16]} />
            <meshStandardMaterial color="#8B7355" />
          </mesh>
        </Float>
      ))}
    </>
  );
}

export default function Contact() {
  const [showMessage, setShowMessage] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [owlFlying, setOwlFlying] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    const timer = setTimeout(() => setShowMessage(true), 1000);
    return () => clearTimeout(timer);
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    setStatus('loading');
    setOwlFlying(true);

    const templateParams = {
      name: formData.name,
      email: formData.email,
      subject: formData.subject,
      message: formData.message,
    };

    try {
      await emailjs.send(
        import.meta.env.VITE_EMAIL_SERVICE,
        import.meta.env.VITE_EMAIL_TEMPLATE,
        templateParams,
        import.meta.env.VITE_EMAIL_PUBLIC
      );

      setStatus('success');

      setTimeout(() => {
        setOwlFlying(false);
        setFormData({ name: '', email: '', subject: '', message: '' });
      }, 2000);

      setTimeout(() => {
        setStatus('idle');
      }, 5000);

    } catch (error) {
      console.error(error);
      setOwlFlying(false);
      setStatus('error');

      setTimeout(() => {
        setStatus('idle');
      }, 5000);
    }
  };



  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const socialLinks = [
    { icon: Linkedin, label: 'LinkedIn', url: 'https://www.linkedin.com/in/lakshya-patel-lp/', color: '#0A66C2' },
    { icon: Github, label: 'GitHub', url: 'https://github.com/p-lakshya1744', color: '#333' },
    { icon: MessageSquare, label: 'WhatsApp', url: 'https://wa.me/9057356731', color: '#25D366' },
    { icon: Instagram, label: 'Instagram', url: 'https://www.instagram.com/__lakshya.patel?igsh=MWd0MzlzZWlzY210Nw==', color: '#E4405F' },
    { icon: Twitter, label: 'Twitter', url: 'https://x.com/p_lakshya1744', color: '#1DA1F2' },
    { icon: Facebook, label: 'Facebook', url: 'https://www.facebook.com/share/18J1AJHz28/', color: '#1877F2' },


  ];

  return (
    <PageTransition>
      <div className="relative min-h-screen bg-[var(--castle-dark)] overflow-hidden">
        {/* 3D Background */}
        <div className="absolute inset-0 opacity-20">
          <Canvas camera={{ position: [0, 0, 8], fov: 50 }}>
            <color attach="background" args={['#0a0a0f']} />
            <OwlPostRoom />
          </Canvas>
        </div>

        {/* Flying Owl Animation */}
        <AnimatePresence>
          {owlFlying && (
            <motion.div
              initial={{ x: '50%', y: '80%', opacity: 1 }}
              animate={{ x: '150%', y: '-20%', opacity: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 3, ease: 'easeInOut' }}
              className="fixed z-50 pointer-events-none"
            >
              <div className="relative w-16 h-16 bg-gradient-to-b from-[#8B7355] to-[#5C4033] rounded-full">
                <div className="absolute -left-4 top-4 w-12 h-6 bg-[#8B7355] rounded-full -rotate-12 animate-pulse" />
                <div className="absolute -right-4 top-4 w-12 h-6 bg-[#8B7355] rounded-full rotate-12 animate-pulse" />
                <div className="absolute top-2 left-1/2 -translate-x-1/2 flex gap-2">
                  <div className="w-3 h-3 bg-yellow-500 rounded-full" />
                  <div className="w-3 h-3 bg-yellow-500 rounded-full" />
                </div>
                <Mail className="absolute bottom-2 left-1/2 -translate-x-1/2 w-6 h-6 text-[var(--gryffindor-gold)]" />
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Content */}
        <div className="relative z-10 pt-24 md:pt-32 px-6 md:px-8 max-w-6xl mx-auto pb-20 md:pb-32">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h1 className="font-magical text-4xl md:text-6xl mb-4 text-[var(--gryffindor-gold)]">
              Owl Post Room
            </h1>
            <p className="font-modern text-lg md:text-xl text-[var(--parchment)]/80">
              Send your message via magical delivery
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
            >
              <div className="p-6 md:p-8 bg-gradient-to-br from-[var(--parchment)] to-[#d4c5a9] rounded-2xl shadow-2xl border-4 border-[var(--gryffindor-gold)]/50">
                <h2 className="font-magical text-3xl text-[var(--gryffindor-red)] mb-6">
                  Send a Message
                </h2>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label className="block font-modern text-sm text-[var(--castle-dark)] mb-2">
                      Your Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-white/50 border-2 border-[var(--gryffindor-gold)]/30 rounded-lg font-modern text-[var(--castle-dark)] focus:border-[var(--gryffindor-gold)] focus:outline-none transition-colors duration-300"
                      placeholder="Enter your name"
                    />
                  </div>

                  <div>
                    <label className="block font-modern text-sm text-[var(--castle-dark)] mb-2">
                      Your Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-white/50 border-2 border-[var(--gryffindor-gold)]/30 rounded-lg font-modern text-[var(--castle-dark)] focus:border-[var(--gryffindor-gold)] focus:outline-none transition-colors duration-300"
                      placeholder="your.email@example.com"
                    />
                  </div>

                  <div>
                    <label className="block font-modern text-sm text-[var(--castle-dark)] mb-2">
                      Subject
                    </label>
                    <input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-white/50 border-2 border-[var(--gryffindor-gold)]/30 rounded-lg font-modern text-[var(--castle-dark)] focus:border-[var(--gryffindor-gold)] focus:outline-none transition-colors duration-300"
                      placeholder="What's this about?"
                    />
                  </div>

                  <div>
                    <label className="block font-modern text-sm text-[var(--castle-dark)] mb-2">
                      Message
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="w-full px-4 py-3 bg-white/50 border-2 border-[var(--gryffindor-gold)]/30 rounded-lg font-modern text-[var(--castle-dark)] focus:border-[var(--gryffindor-gold)] focus:outline-none transition-colors duration-300 resize-none"
                      placeholder="Write your message here..."
                    />
                  </div>

                  <motion.button
                    type="submit"
                    disabled={status === 'loading'}
                    whileHover={status !== 'loading' ? { scale: 1.05 } : {}}
                    whileTap={status !== 'loading' ? { scale: 0.95 } : {}}
                    className={`w-full py-4 font-magical text-xl rounded-lg shadow-xl flex items-center justify-center gap-3 transition-all duration-300
                      ${status === 'loading'
                        ? 'bg-gray-600 cursor-not-allowed'
                        : 'bg-gradient-to-r from-[var(--gryffindor-red)] to-[#5a0000] text-[var(--gryffindor-gold)] hover:shadow-2xl hover:shadow-[var(--gryffindor-gold)]/30'
                      }
                    `}
                  >
                    {status === 'loading' ? (
                      <>
                        <motion.div
                          animate={{ rotate: 360 }}
                          transition={{ repeat: Infinity, duration: 1, ease: 'linear' }}
                          className="w-5 h-5 border-2 border-white border-t-transparent rounded-full"
                        />
                        Sending Owl...
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5" />
                        Send via Owl Post
                      </>
                    )}
                  </motion.button>

                  <AnimatePresence>
                    {status === 'success' && (
                      <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="mb-6 p-4 rounded-lg bg-green-600/20 border border-green-500 text-green-300 font-modern text-center"
                      >
                        🦉 Message delivered successfully! The owl has reached its destination.
                      </motion.div>
                    )}

                    {status === 'error' && (
                      <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="mb-6 p-4 rounded-lg bg-red-600/20 border border-red-500 text-red-300 font-modern text-center"
                      >
                        ⚠️ Something went wrong. Please try again.
                      </motion.div>
                    )}
                  </AnimatePresence>

                </form>
              </div>
            </motion.div>

            {/* Social Links & Info */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5 }}
              className="space-y-8"
            >
              {/* Social Media */}
              <div className="p-5 md:p-8 bg-gradient-to-br from-[var(--card)]/90 to-[var(--card)]/60 backdrop-blur-sm border border-[var(--gryffindor-gold)]/30 rounded-2xl shadow-2xl">
                <h2 className="font-magical text-2xl md:text-3xl text-[var(--gryffindor-gold)] mb-6">
                  Connect on Social
                </h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4">
                  {socialLinks.map((social, index) => (
                    <motion.a
                      key={social.label}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      initial={{ opacity: 0, scale: 0.5 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.6 + index * 0.05 }}
                      whileHover={{ scale: 1.1, y: -5 }}
                      className="group relative p-3 md:p-4 bg-[var(--card)]/50 border border-[var(--gryffindor-gold)]/20 rounded-xl hover:border-[var(--gryffindor-gold)] transition-all duration-300"
                    >
                      <div
                        className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-10 transition-opacity duration-300"
                        style={{ backgroundColor: social.color }}
                      />

                      <div className="flex items-center gap-3">
                        <div
                          className="w-8 h-8 md:w-10 md:h-10 rounded-full flex items-center justify-center shrink-0"
                          style={{ backgroundColor: `${social.color}20` }}
                        >
                          <social.icon className="w-4 h-4 md:w-5 md:h-5" style={{ color: social.color }} />
                        </div>
                        <span className="font-modern text-sm md:text-base text-[var(--parchment)] truncate">
                          {social.label}
                        </span>
                      </div>
                    </motion.a>
                  ))}
                </div>
              </div>

              {/* Direct Contact */}
              <div className="p-6 md:p-8 bg-gradient-to-br from-[var(--card)]/90 to-[var(--card)]/60 backdrop-blur-sm border border-[var(--gryffindor-gold)]/30 rounded-2xl shadow-2xl">
                <h2 className="font-magical text-3xl text-[var(--gryffindor-gold)] mb-6">
                  Direct Contact
                </h2>

                <div className="space-y-4">
                  <div className="flex items-center gap-3 p-4 bg-[var(--card)]/50 rounded-lg border border-[var(--gryffindor-gold)]/20">
                    <Mail className="w-5 h-5 text-[var(--gryffindor-gold)]" />
                    <div>
                      <p className="font-modern text-xs text-[var(--parchment)]/60 mb-1">
                        Email
                      </p>
                      <p className="font-modern text-[var(--parchment)] break-all">
                        23f3001274@ds.study.iitm.ac.in
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Availability */}
              <div className="p-6 md:p-8 bg-gradient-to-br from-[var(--parchment)] to-[#d4c5a9] rounded-2xl shadow-2xl border-4 border-[var(--gryffindor-gold)]/50">
                <h3 className="font-magical text-2xl text-[var(--gryffindor-red)] mb-4">
                  Availability
                </h3>
                <p className="font-modern text-[var(--castle-dark)] leading-relaxed">
                  Currently open to exciting opportunities in AI/ML, full-stack development,
                  and innovative tech projects. Let's create something magical together!
                </p>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Wizard Character */}
        <WizardCharacter
          message="Your message will reach me faster than a Firebolt!"
          showMessage={showMessage}
        />
      </div>
    </PageTransition>
  );
}
