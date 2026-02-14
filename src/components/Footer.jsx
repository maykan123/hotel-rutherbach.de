import { Link } from 'react-router-dom'
import { Phone, Mail, MapPin, Clock } from 'lucide-react'

function Footer() {
  const currentYear = new Date().getFullYear()

  const scrollToSection = (id) => {
    const element = document.getElementById(id)
    if (element) {
      const offset = 80
      const elementPosition = element.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.pageYOffset - offset
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' })
    }
  }

  return (
    <footer className="bg-primary-light border-t border-gray-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {/* Contact Info */}
          <div>
            <h3 className="text-base sm:text-lg font-semibold text-accent mb-3 sm:mb-4">Kontakt</h3>
            <div className="space-y-2 sm:space-y-3">
              <p className="text-gray-300 text-sm sm:text-base">Makyan Saeed</p>
              <p className="text-gray-300 text-sm sm:text-base">HOTEL RUTHERBACH</p>
              <div className="flex items-start space-x-2 sm:space-x-3 text-gray-300">
                <MapPin size={16} className="mt-0.5 sm:mt-1 flex-shrink-0 text-accent" />
                <span className="text-sm sm:text-base">
                  Ruhrtalstraße 215 - 217<br />
                  D-45219 Essen-Kettwig
                </span>
              </div>
              <div className="flex items-center space-x-2 sm:space-x-3 text-gray-300">
                <Phone size={16} className="text-accent flex-shrink-0" />
                <a href="tel:+4920140883918" className="hover:text-accent transition-colors text-sm sm:text-base">
                  0201 - 40 88 39 18
                </a>
              </div>
              <div className="flex items-center space-x-2 sm:space-x-3 text-gray-300">
                <Mail size={16} className="text-accent flex-shrink-0" />
                <a href="mailto:info@hotel-rutherbach.de" className="hover:text-accent transition-colors text-sm sm:text-base">
                  info@hotel-rutherbach.de
                </a>
              </div>
              <div className="flex items-center space-x-2 sm:space-x-3 text-gray-400 text-xs sm:text-sm pt-1 sm:pt-2">
                <Clock size={14} className="text-accent flex-shrink-0" />
                <span>Check-in ab 15:00 · Check-out bis 11:00</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-base sm:text-lg font-semibold text-accent mb-3 sm:mb-4">Schnelllinks</h3>
            <ul className="space-y-2">
              <li>
                <button 
                  onClick={() => scrollToSection('start')}
                  className="text-gray-300 hover:text-accent transition-colors text-sm sm:text-base"
                >
                  Startseite
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('ueber-uns')}
                  className="text-gray-300 hover:text-accent transition-colors text-sm sm:text-base"
                >
                  Über uns
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('zimmer')}
                  className="text-gray-300 hover:text-accent transition-colors text-sm sm:text-base"
                >
                  Zimmer
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('kontakt')}
                  className="text-gray-300 hover:text-accent transition-colors text-sm sm:text-base"
                >
                  Kontakt
                </button>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div className="sm:col-span-2 lg:col-span-1">
            <h3 className="text-base sm:text-lg font-semibold text-accent mb-3 sm:mb-4">Rechtliches</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/impressum" className="text-gray-300 hover:text-accent transition-colors text-sm sm:text-base">
                  Impressum
                </Link>
              </li>
              <li>
                <Link to="/datenschutz" className="text-gray-300 hover:text-accent transition-colors text-sm sm:text-base">
                  Datenschutz
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 sm:mt-12 pt-6 sm:pt-8 border-t border-gray-700 text-center">
          <p className="text-gray-400 text-xs sm:text-sm">
            © {currentYear} Hotel Rutherbach. Alle Rechte vorbehalten.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
