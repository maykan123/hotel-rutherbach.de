import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, Settings, Shield } from 'lucide-react'

const COOKIE_CONSENT_KEY = 'hotel-rutherbach-consent'

const cookieCategories = [
  {
    id: 'essential',
    name: 'Essentiell',
    description: 'Notwendige Cookies für die grundlegende Funktionalität der Website.',
    required: true,
  },
  {
    id: 'statistics',
    name: 'Statistik',
    description: 'Helfen uns zu verstehen, wie Besucher mit der Website interagieren.',
    required: false,
  },
  {
    id: 'marketing',
    name: 'Marketing',
    description: 'Werden verwendet, um Besuchern relevante Werbung anzuzeigen.',
    required: false,
  },
]

function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false)
  const [showSettings, setShowSettings] = useState(false)
  const [consent, setConsent] = useState({
    essential: true,
    statistics: false,
    marketing: false,
  })

  useEffect(() => {
    // Check if user has already made a choice
    const storedConsent = localStorage.getItem(COOKIE_CONSENT_KEY)
    if (!storedConsent) {
      setIsVisible(true)
    } else {
      try {
        const parsed = JSON.parse(storedConsent)
        setConsent(parsed)
      } catch (e) {
        setIsVisible(true)
      }
    }
  }, [])

  const saveConsent = (newConsent) => {
    localStorage.setItem(COOKIE_CONSENT_KEY, JSON.stringify(newConsent))
    setConsent(newConsent)
    setIsVisible(false)
    setShowSettings(false)

    // Dispatch event for other components
    window.dispatchEvent(new CustomEvent('cookieConsentChanged', { detail: newConsent }))
  }

  const acceptAll = () => {
    const allConsent = {
      essential: true,
      statistics: true,
      marketing: true,
    }
    saveConsent(allConsent)
  }

  const acceptSelected = () => {
    saveConsent(consent)
  }

  const acceptEssential = () => {
    const essentialOnly = {
      essential: true,
      statistics: false,
      marketing: false,
    }
    saveConsent(essentialOnly)
  }

  const toggleCategory = (categoryId) => {
    if (categoryId === 'essential') return // Cannot toggle essential
    setConsent(prev => ({
      ...prev,
      [categoryId]: !prev[categoryId],
    }))
  }

  if (!isVisible) return null

  return (
    <AnimatePresence>
      {isVisible && (
        <>
          {/* Main Banner - weißes Design */}
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 100 }}
            transition={{ duration: 0.3 }}
            className="fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-gray-200 shadow-2xl"
          >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
              <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
                <div className="flex-1">
                  <div className="flex items-center space-x-2 mb-2">
                    <Shield size={20} className="text-accent" />
                    <h3 className="text-lg font-semibold text-gray-800">Datenschutzeinstellungen</h3>
                  </div>
                  <p className="text-gray-600 text-sm max-w-2xl">
                    Wir verwenden Cookies, um Ihnen die bestmögliche Erfahrung auf unserer Website zu bieten. 
                    Sie können Ihre Präferenzen anpassen oder alle Cookies akzeptieren. 
                    Weitere Informationen finden Sie in unserer{' '}
                    <a href="/datenschutz" className="text-accent-dark hover:underline">
                      Datenschutzerklärung
                    </a>.
                  </p>
                </div>

                <div className="flex flex-wrap items-center gap-3">
                  <button
                    onClick={() => setShowSettings(true)}
                    className="flex items-center space-x-2 px-4 py-2 text-gray-600 hover:text-gray-800 transition-colors"
                  >
                    <Settings size={18} />
                    <span>Einstellungen</span>
                  </button>
                  <button
                    onClick={acceptEssential}
                    className="px-4 py-2 text-gray-600 hover:text-gray-800 transition-colors"
                  >
                    Nur Essenzielle
                  </button>
                  <button
                    onClick={acceptAll}
                    className="btn-primary"
                  >
                    Alle akzeptieren
                  </button>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Settings Modal */}
          <AnimatePresence>
            {showSettings && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 z-[60] bg-black/70 flex items-center justify-center p-4"
                onClick={() => setShowSettings(false)}
              >
                <motion.div
                  initial={{ scale: 0.95, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0.95, opacity: 0 }}
                  onClick={(e) => e.stopPropagation()}
                  className="bg-white rounded-xl border border-gray-200 max-w-lg w-full max-h-[90vh] overflow-y-auto shadow-2xl"
                >
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-6">
                      <h3 className="text-xl font-bold text-gray-800">Cookie-Einstellungen</h3>
                      <button
                        onClick={() => setShowSettings(false)}
                        className="text-gray-400 hover:text-gray-800 transition-colors"
                        aria-label="Schließen"
                      >
                        <X size={24} />
                      </button>
                    </div>

                    <div className="space-y-4 mb-6">
                      {cookieCategories.map((category) => (
                        <div
                          key={category.id}
                          className="p-4 bg-gray-50 rounded-lg border border-gray-200"
                        >
                          <div className="flex items-start justify-between">
                            <div className="flex-1">
                              <div className="flex items-center space-x-2">
                                <h4 className="font-semibold text-gray-800">{category.name}</h4>
                                {category.required && (
                                  <span className="text-xs bg-accent/20 text-accent px-2 py-0.5 rounded">
                                    Erforderlich
                                  </span>
                                )}
                              </div>
                              <p className="text-sm text-gray-600 mt-1">{category.description}</p>
                            </div>
                            <label className="relative inline-flex items-center cursor-pointer ml-4">
                              <input
                                type="checkbox"
                                checked={consent[category.id]}
                                onChange={() => toggleCategory(category.id)}
                                disabled={category.required}
                                className="sr-only peer"
                              />
                              <div
                                className={`w-11 h-6 rounded-full peer transition-colors ${
                                  consent[category.id] ? 'bg-accent' : 'bg-gray-300'
                                } ${category.required ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}`}
                              >
                                <div
                                  className={`absolute top-0.5 left-0.5 w-5 h-5 bg-white rounded-full transition-transform ${
                                    consent[category.id] ? 'translate-x-5' : 'translate-x-0'
                                  }`}
                                />
                              </div>
                            </label>
                          </div>
                        </div>
                      ))}
                    </div>

                    <div className="flex flex-col sm:flex-row gap-3">
                      <button
                        onClick={() => setShowSettings(false)}
                        className="flex-1 px-4 py-2 text-gray-600 hover:text-gray-800 transition-colors"
                      >
                        Abbrechen
                      </button>
                      <button
                        onClick={acceptSelected}
                        className="flex-1 btn-primary"
                      >
                        Auswahl speichern
                      </button>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </>
      )}
    </AnimatePresence>
  )
}

export default CookieBanner
