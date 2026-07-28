import { useState, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'

const navLinks = [
  { id: 'start' },
  { id: 'ueber-uns' },
  { id: 'zimmer' },
  { id: 'fruehstueck' },
  { id: 'lage' },
  { id: 'kontakt' },
]

function LanguageSwitcher({ className = '' }) {
  const { i18n, t } = useTranslation()

  const languages = [
    { code: 'de', flag: '🇩🇪', short: 'DE' },
    { code: 'en', flag: '🇬🇧', short: 'EN' },
  ]

  return (
    <div className={`flex items-center space-x-2 ${className}`} aria-label={t('langSwitcher.label')} role="group">
      {languages.map((lang, index) => (
        <span key={lang.code} className="flex items-center space-x-2">
          {index > 0 && <span className="text-gray-600">|</span>}
          <button
            onClick={() => i18n.changeLanguage(lang.code)}
            className={`px-1 py-1 text-sm font-medium transition-colors duration-200 rounded ${
              i18n.language === lang.code
                ? 'text-accent underline underline-offset-4'
                : 'text-gray-400 hover:text-white'
            }`}
            aria-pressed={i18n.language === lang.code}
            aria-label={`${t('langSwitcher.label')}: ${t(`langSwitcher.${lang.code}`)}`}
          >
            {lang.flag} {lang.short}
          </button>
        </span>
      ))}
    </div>
  )
}

function Header() {
  const { t } = useTranslation()
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('start')

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)

      // Active section detection
      const sections = navLinks.map(link => document.getElementById(link.id))
      const scrollPosition = window.scrollY + 100

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i]
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(navLinks[i].id)
          break
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (id) => {
    const element = document.getElementById(id)
    if (element) {
      const offset = 80 // Header height
      const elementPosition = element.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.pageYOffset - offset

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      })
    }
    setIsMobileMenuOpen(false)
  }

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 bg-primary/95 backdrop-blur-md shadow-lg"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-24">
          {/* Logo */}
          <button 
            onClick={() => scrollToSection('start')}
            className="flex items-center"
          >
            <img 
              src="/images/logo.jpeg" 
              alt="Hotel Rutherbach Logo" 
              className="w-20 h-20 sm:w-24 sm:h-24 object-contain"
            />
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className={`px-3 py-2 text-sm font-medium transition-colors duration-200 rounded-lg hover:text-accent hover:bg-white/5 ${
                  activeSection === link.id ? 'text-accent bg-accent/10' : 'text-white'
                }`}
              >
                {t(`nav.${link.id}`)}
              </button>
            ))}
            <LanguageSwitcher className="ml-4" />
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 text-white hover:text-accent transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label={isMobileMenuOpen ? t('nav.menuClose') : t('nav.menuOpen')}
            aria-expanded={isMobileMenuOpen}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.nav
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden bg-primary-light border-t border-gray-700 max-h-[80vh] overflow-y-auto"
          >
            <div className="px-4 py-4 space-y-2">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => scrollToSection(link.id)}
                  className={`block w-full text-left px-4 py-3 rounded-lg text-base font-medium transition-colors ${
                    activeSection === link.id
                      ? 'bg-accent/10 text-accent'
                      : 'text-white hover:bg-white/5 hover:text-accent'
                  }`}
                >
                  {t(`nav.${link.id}`)}
                </button>
              ))}
              <div className="px-4 py-3 border-t border-gray-700">
                <LanguageSwitcher />
              </div>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  )
}

export default Header
