import { useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Check, Loader2, Send } from 'lucide-react'
import { roomsData, BREAKFAST_PRICE } from '../data/rooms'

// WICHTIG: Ersetze diesen Platzhalter durch deinen Web3Forms Access Key
const WEB3FORMS_ACCESS_KEY = 'YOUR_ACCESS_KEY_HERE'

function ContactForm() {
  const [searchParams] = useSearchParams()
  const preselectedRoom = searchParams.get('zimmer')

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    telefon: '',
    zimmer: preselectedRoom || '',
    anreise: '',
    abreise: '',
    gaeste: '1',
    nachricht: '',
    dsgvo: false,
  })

  const [errors, setErrors] = useState({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [touched, setTouched] = useState({})

  // Validate form
  const validate = (data) => {
    const newErrors = {}
    
    if (!data.name.trim()) {
      newErrors.name = 'Bitte geben Sie Ihren Namen ein.'
    }
    
    if (!data.email.trim()) {
      newErrors.email = 'Bitte geben Sie Ihre E-Mail-Adresse ein.'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
      newErrors.email = 'Bitte geben Sie eine gültige E-Mail-Adresse ein.'
    }
    
    if (!data.zimmer) {
      newErrors.zimmer = 'Bitte wählen Sie einen Zimmertyp.'
    }
    
    if (!data.nachricht.trim()) {
      newErrors.nachricht = 'Bitte geben Sie eine Nachricht ein.'
    }
    
    if (!data.dsgvo) {
      newErrors.dsgvo = 'Bitte stimmen Sie der Datenspeicherung zu.'
    }

    return newErrors
  }

  // Real-time validation on blur
  const handleBlur = (field) => {
    setTouched(prev => ({ ...prev, [field]: true }))
    const validationErrors = validate({ ...formData, [field]: formData[field] })
    setErrors(prev => ({ ...prev, [field]: validationErrors[field] }))
  }

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target
    const newValue = type === 'checkbox' ? checked : value
    
    setFormData(prev => ({ ...prev, [name]: newValue }))
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: null }))
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    
    const validationErrors = validate(formData)
    setErrors(validationErrors)
    setTouched({
      name: true,
      email: true,
      zimmer: true,
      nachricht: true,
      dsgvo: true,
    })

    if (Object.keys(validationErrors).length > 0) {
      return
    }

    setIsSubmitting(true)

    // Web3Forms API Call
    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          access_key: WEB3FORMS_ACCESS_KEY,
          subject: `Neue Anfrage: ${formData.zimmer} - ${formData.name}`,
          from_name: 'Hotel Rutherbach Website',
          name: formData.name,
          email: formData.email,
          telefon: formData.telefon,
          zimmer: formData.zimmer,
          anreise: formData.anreise,
          abreise: formData.abreise,
          gaeste: formData.gaeste,
          nachricht: formData.nachricht,
          // Optionale Felder für bessere Formatierung
          replyto: formData.email,
          botcheck: '' // Honeypot für Spam-Schutz
        })
      })

      const result = await response.json()

      if (result.success) {
        setIsSubmitted(true)
        setFormData({
          name: '',
          email: '',
          telefon: '',
          zimmer: '',
          anreise: '',
          abreise: '',
          gaeste: '1',
          nachricht: '',
          dsgvo: false,
        })
      } else {
        throw new Error(result.message || 'Form submission failed')
      }
    } catch (error) {
      setErrors({ submit: 'Es ist ein Fehler aufgetreten. Bitte versuchen Sie es später erneut oder rufen Sie uns an: 0201 - 40 88 39 18' })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="kontakt" className="py-24 sm:py-32 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-8 sm:mb-12"
        >
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-800 mb-4">
            Kontakt & <span className="text-accent-dark">Anfrage</span>
          </h2>
          <p className="text-gray-600 text-base sm:text-lg px-2 sm:px-0">
            Senden Sie uns Ihre Anfrage – wir melden uns schnellstmöglich bei Ihnen. 
            <span className="text-accent-dark font-semibold block sm:inline mt-2 sm:mt-0">Bei Direktbuchung über uns sparen Sie sich die Buchungsgebühren!</span>
          </p>
        </motion.div>

        <AnimatePresence mode="wait">
          {isSubmitted ? (
            <motion.div
              key="success"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="blue-island p-6 sm:p-8 text-center"
            >
              <div className="w-14 h-14 sm:w-16 sm:h-16 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6">
                <Check size={28} className="text-accent sm:w-8 sm:h-8" />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4">Vielen Dank für Ihre Anfrage!</h3>
              <p className="text-gray-300 text-sm sm:text-base mb-2">
                Wir haben Ihre Nachricht erhalten und werden uns in Kürze bei Ihnen melden.
              </p>
              <p className="text-gray-400 text-xs sm:text-sm">
                Eine Bestätigung wurde an Ihre E-Mail-Adresse gesendet.
              </p>
            </motion.div>
          ) : (
            <motion.form
              key="form"
              onSubmit={handleSubmit}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="blue-island p-4 sm:p-6 lg:p-8"
            >
              {/* Honeypot für Spam-Schutz */}
              <input type="checkbox" name="botcheck" style={{ display: 'none' }} />

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                {/* Name */}
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                    Name <span className="text-accent-dark">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    onBlur={() => handleBlur('name')}
                    className={`w-full px-4 py-3 bg-primary border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-accent focus:ring-1 focus:ring-accent transition-colors duration-200 text-sm sm:text-base ${errors.name && touched.name ? 'border-red-500' : ''}`}
                    placeholder="Ihr vollständiger Name"
                    aria-invalid={errors.name && touched.name ? 'true' : 'false'}
                    aria-describedby={errors.name && touched.name ? 'name-error' : undefined}
                  />
                  {errors.name && touched.name && (
                    <p id="name-error" className="mt-1 text-xs sm:text-sm text-red-400">{errors.name}</p>
                  )}
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                    E-Mail <span className="text-accent-dark">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    onBlur={() => handleBlur('email')}
                    className={`w-full px-4 py-3 bg-primary border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-accent focus:ring-1 focus:ring-accent transition-colors duration-200 text-sm sm:text-base ${errors.email && touched.email ? 'border-red-500' : ''}`}
                    placeholder="ihre@email.de"
                    aria-invalid={errors.email && touched.email ? 'true' : 'false'}
                    aria-describedby={errors.email && touched.email ? 'email-error' : undefined}
                  />
                  {errors.email && touched.email && (
                    <p id="email-error" className="mt-1 text-xs sm:text-sm text-red-400">{errors.email}</p>
                  )}
                </div>

                {/* Telefon */}
                <div>
                  <label htmlFor="telefon" className="block text-sm font-medium text-gray-300 mb-2">
                    Telefon <span className="text-gray-500">(optional)</span>
                  </label>
                  <input
                    type="tel"
                    id="telefon"
                    name="telefon"
                    value={formData.telefon}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-primary border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-accent focus:ring-1 focus:ring-accent transition-colors duration-200 text-sm sm:text-base"
                    placeholder="0201 - 123456"
                  />
                </div>

                {/* Zimmer */}
                <div>
                  <label htmlFor="zimmer" className="block text-sm font-medium text-gray-300 mb-2">
                    Gewünschter Zimmer-Typ <span className="text-accent-dark">*</span>
                  </label>
                  <select
                    id="zimmer"
                    name="zimmer"
                    value={formData.zimmer}
                    onChange={handleChange}
                    onBlur={() => handleBlur('zimmer')}
                    className={`w-full px-4 py-3 bg-primary border border-gray-600 rounded-lg text-white focus:border-accent focus:ring-1 focus:ring-accent transition-colors duration-200 text-sm sm:text-base ${errors.zimmer && touched.zimmer ? 'border-red-500' : ''}`}
                    aria-invalid={errors.zimmer && touched.zimmer ? 'true' : 'false'}
                    aria-describedby={errors.zimmer && touched.zimmer ? 'zimmer-error' : undefined}
                  >
                    <option value="">Bitte wählen</option>
                    {roomsData.map(room => (
                      <option key={room.id} value={room.name}>
                        {room.name} (ab {room.price} €)
                      </option>
                    ))}
                  </select>
                  {errors.zimmer && touched.zimmer && (
                    <p id="zimmer-error" className="mt-1 text-xs sm:text-sm text-red-400">{errors.zimmer}</p>
                  )}
                </div>

                {/* Anreise */}
                <div>
                  <label htmlFor="anreise" className="block text-sm font-medium text-gray-300 mb-2">Anreise</label>
                  <input
                    type="date"
                    id="anreise"
                    name="anreise"
                    value={formData.anreise}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-primary border border-gray-600 rounded-lg text-white focus:border-accent focus:ring-1 focus:ring-accent transition-colors duration-200 text-sm sm:text-base"
                  />
                </div>

                {/* Abreise */}
                <div>
                  <label htmlFor="abreise" className="block text-sm font-medium text-gray-300 mb-2">Abreise</label>
                  <input
                    type="date"
                    id="abreise"
                    name="abreise"
                    value={formData.abreise}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-primary border border-gray-600 rounded-lg text-white focus:border-accent focus:ring-1 focus:ring-accent transition-colors duration-200 text-sm sm:text-base"
                  />
                </div>

                {/* Gäste */}
                <div>
                  <label htmlFor="gaeste" className="block text-sm font-medium text-gray-300 mb-2">Gästeanzahl</label>
                  <select
                    id="gaeste"
                    name="gaeste"
                    value={formData.gaeste}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-primary border border-gray-600 rounded-lg text-white focus:border-accent focus:ring-1 focus:ring-accent transition-colors duration-200 text-sm sm:text-base"
                  >
                    {[1, 2, 3, 4, 5, 6].map(num => (
                      <option key={num} value={num}>{num} {num === 1 ? 'Person' : 'Personen'}</option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Nachricht */}
              <div className="mt-4 sm:mt-6">
                <label htmlFor="nachricht" className="block text-sm font-medium text-gray-300 mb-2">
                  Nachricht <span className="text-accent-dark">*</span>
                </label>
                <textarea
                  id="nachricht"
                  name="nachricht"
                  rows={4}
                  value={formData.nachricht}
                  onChange={handleChange}
                  onBlur={() => handleBlur('nachricht')}
                  className={`w-full px-4 py-3 bg-primary border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-accent focus:ring-1 focus:ring-accent transition-colors duration-200 resize-none text-sm sm:text-base ${errors.nachricht && touched.nachricht ? 'border-red-500' : ''}`}
                  placeholder="Ihre Nachricht oder besondere Wünsche..."
                  aria-invalid={errors.nachricht && touched.nachricht ? 'true' : 'false'}
                  aria-describedby={errors.nachricht && touched.nachricht ? 'nachricht-error' : undefined}
                />
                {errors.nachricht && touched.nachricht && (
                  <p id="nachricht-error" className="mt-1 text-xs sm:text-sm text-red-400">{errors.nachricht}</p>
                )}
              </div>

              {/* Checkboxes */}
              <div className="mt-4 sm:mt-6 space-y-4">
                <div className="flex items-start space-x-3">
                  <input
                    type="checkbox"
                    id="dsgvo"
                    name="dsgvo"
                    checked={formData.dsgvo}
                    onChange={handleChange}
                    onBlur={() => handleBlur('dsgvo')}
                    className="mt-1 w-4 h-4 rounded border-gray-600 text-accent focus:ring-accent bg-primary flex-shrink-0"
                    aria-invalid={errors.dsgvo && touched.dsgvo ? 'true' : 'false'}
                  />
                  <label htmlFor="dsgvo" className={`text-xs sm:text-sm ${errors.dsgvo && touched.dsgvo ? 'text-red-400' : 'text-gray-300'}`}>
                    <span className="text-accent-dark">*</span> Ich stimme der Speicherung meiner Daten zu, damit das Hotel mich kontaktieren kann.{' '}
                    <a href="/datenschutz" className="text-accent hover:underline" target="_blank" rel="noopener noreferrer">
                      Datenschutzerklärung
                    </a>
                  </label>
                </div>
              </div>

              {/* Frühstück Hinweis */}
              <div className="mt-4 p-3 sm:p-4 bg-primary rounded-lg border border-accent/20">
                <p className="text-gray-300 text-xs sm:text-sm">
                  <span className="text-accent font-semibold">🍳 Frühstück:</span> {BREAKFAST_PRICE} € pro Nacht (optional)
                </p>
              </div>

              {/* Submit Error */}
              {errors.submit && (
                <div className="mt-4 p-3 sm:p-4 bg-red-500/10 border border-red-500/30 rounded-lg">
                  <p className="text-red-400 text-xs sm:text-sm">{errors.submit}</p>
                </div>
              )}

              {/* Submit Button */}
              <div className="mt-6 sm:mt-8">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn-primary w-full text-base sm:text-lg py-3 sm:py-4 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 size={18} className="mr-2 animate-spin sm:w-5 sm:h-5" />
                      Wird gesendet...
                    </>
                  ) : (
                    <>
                      <Send size={18} className="mr-2 sm:w-5 sm:h-5" />
                      Anfrage senden
                    </>
                  )}
                </button>
              </div>

              {/* Direktbuchung Hinweis */}
              <div className="mt-4 sm:mt-6 p-3 sm:p-4 bg-accent/10 border border-accent/20 rounded-lg">
                <p className="text-gray-300 text-xs sm:text-sm text-center">
                  <span className="text-accent font-semibold">💰 Spar-Tipp:</span> Bei Direktbuchung über unsere Website 
                  sparen Sie sich die Buchungsgebühren externer Plattformen!
                </p>
              </div>

              <p className="mt-3 sm:mt-4 text-center text-xs sm:text-sm text-gray-500">
                <span className="text-accent-dark">*</span> Pflichtfelder
              </p>
            </motion.form>
          )}
        </AnimatePresence>
      </div>
    </section>
  )
}

export default ContactForm
