import { motion } from 'framer-motion'
import { ChevronDown, Phone, MapPin, Mail, ExternalLink } from 'lucide-react'

function Hero() {
  const scrollToSection = (id) => {
    const element = document.getElementById(id)
    if (element) {
      const offset = 80
      const elementPosition = element.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.pageYOffset - offset
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' })
    }
  }

  const handleBooking = () => {
    window.open('https://booking.roomraccoon.de/hotel-rutherbach/de/', '_blank', 'noopener,noreferrer')
  }

  return (
    <section id="start" className="relative min-h-screen flex flex-col justify-center overflow-hidden">
      {/* Background Image - volles Bild wie vorher */}
      <div className="absolute inset-0 z-0">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url('/images/hero.webp')` }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-primary/80 via-primary/60 to-primary" />
        </div>
      </div>

      {/* Quick Info Bar - wieder dunkelblau */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="absolute top-24 sm:top-28 left-0 right-0 z-20"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-6 text-xs sm:text-sm bg-primary/60 backdrop-blur-sm rounded-2xl sm:rounded-full px-4 sm:px-6 py-3 border border-gray-700/30">
            <a href="tel:+4920140883918" className="flex items-center space-x-2 text-gray-300 hover:text-accent transition-colors">
              <Phone size={14} className="text-accent flex-shrink-0" />
              <span>0201 - 40 88 39 18</span>
            </a>
            <span className="hidden sm:block text-gray-600">|</span>
            <div className="flex items-center space-x-2 text-gray-300">
              <MapPin size={14} className="text-accent flex-shrink-0" />
              <span>Ruhrtalstraße 215-217, Essen-Kettwig</span>
            </div>
            <span className="hidden lg:block text-gray-600">|</span>
            <a href="mailto:info@hotel-rutherbach.de" className="hidden lg:flex items-center space-x-2 text-gray-300 hover:text-accent transition-colors">
              <Mail size={14} className="text-accent flex-shrink-0" />
              <span>info@hotel-rutherbach.de</span>
            </a>
          </div>
        </div>
      </motion.div>

      {/* Main Content - zentriert wie vorher */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-28 sm:pt-32">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-accent font-semibold tracking-wider uppercase mb-4 text-sm sm:text-base"
          >
            Hotel in Essen-Kettwig
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-4 sm:mb-6 text-shadow"
          >
            Willkommen im{' '}
            <span className="text-accent">Hotel Rutherbach</span>
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="text-lg sm:text-2xl md:text-3xl text-gray-200 mb-3 sm:mb-4 font-light"
          >
            Komfort trifft Ruhe direkt an der Ruhr
          </motion.p>
          
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-base sm:text-lg text-gray-300 mb-6 sm:mb-8 max-w-2xl mx-auto px-2 sm:px-0"
          >
            Erleben Sie entspannte Tage in unseren komfortablen Zimmern und Apartments 
            – mit herzlichem Service und wunderschöner Lage am Ruhrtal.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4"
          >
            <button
              onClick={handleBooking}
              className="btn-primary text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4 w-full sm:w-auto inline-flex items-center justify-center"
            >
              <ExternalLink size={20} className="mr-2" />
              Jetzt buchen
            </button>
            <button
              onClick={() => scrollToSection('kontakt')}
              className="btn-secondary text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4 w-full sm:w-auto"
            >
              Jetzt anfragen
            </button>
          </motion.div>

          {/* Direktbuchung Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.9 }}
            className="mt-6 sm:mt-8"
          >
            <span className="inline-block bg-accent/20 text-accent border border-accent/40 px-4 py-2 rounded-full text-xs sm:text-sm font-semibold">
              💰 Bei Direktbuchung sparen Sie sich die Buchungsgebühren!
            </span>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator - nur auf größeren Bildschirmen */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.6 }}
        className="hidden sm:block absolute bottom-6 left-1/2 transform -translate-x-1/2 z-10"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
          className="cursor-pointer p-2"
          onClick={() => scrollToSection('ueber-uns')}
          aria-label="Weiter scrollen"
        >
          <ChevronDown size={28} className="text-white/60 hover:text-accent transition-colors" />
        </motion.div>
      </motion.div>
    </section>
  )
}

export default Hero
