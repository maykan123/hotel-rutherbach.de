import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Home, Search } from 'lucide-react'

function NotFound() {
  return (
    <div className="pt-20 min-h-screen bg-white flex items-center justify-center">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {/* 404 Number */}
          <div className="mb-8">
            <span className="text-8xl sm:text-9xl font-bold text-gray-200">404</span>
          </div>

          {/* Content in blauer Insel */}
          <div className="blue-island p-8 sm:p-12">
            <div className="w-20 h-20 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-6">
              <Search size={40} className="text-accent" />
            </div>

            <h1 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Seite nicht gefunden
            </h1>

            <p className="text-gray-300 text-lg mb-8">
              Die von Ihnen gesuchte Seite existiert leider nicht. 
              Vielleicht wurde sie verschoben oder gelöscht.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                to="/"
                className="btn-primary inline-flex items-center"
              >
                <Home size={20} className="mr-2" />
                Zurück zur Startseite
              </Link>

              <Link
                to="/kontakt"
                className="btn-secondary"
              >
                Kontakt aufnehmen
              </Link>
            </div>
          </div>

          {/* Hilfreiche Links */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="mt-12"
          >
            <p className="text-gray-600 mb-4">Oder besuchen Sie eine dieser Seiten:</p>
            <div className="flex flex-wrap items-center justify-center gap-4 text-sm">
              <Link to="/" className="text-accent-dark hover:underline">
                Startseite
              </Link>
              <span className="text-gray-300">|</span>
              <a href="/#zimmer" className="text-accent-dark hover:underline">
                Zimmer
              </a>
              <span className="text-gray-300">|</span>
              <a href="/#kontakt" className="text-accent-dark hover:underline">
                Kontakt
              </a>
              <span className="text-gray-300">|</span>
              <Link to="/datenschutz" className="text-accent-dark hover:underline">
                Datenschutz
              </Link>
              <span className="text-gray-300">|</span>
              <Link to="/impressum" className="text-accent-dark hover:underline">
                Impressum
              </Link>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
}

export default NotFound
