import { motion } from 'framer-motion'
import { Phone, Mail, MapPin, Clock } from 'lucide-react'
import ContactForm from '../components/ContactForm'

function Contact() {
  return (
    <div className="pt-20">
      {/* Header */}
      <section className="py-20 bg-primary-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl sm:text-5xl font-bold text-white mb-6"
          >
            Kontaktieren Sie <span className="text-accent">uns</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-xl text-gray-300 max-w-3xl mx-auto"
          >
            Haben Sie Fragen oder möchten Sie eine Reservierung anfragen? 
            Wir sind für Sie da und melden uns schnellstmöglich.
          </motion.p>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-16 bg-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: MapPin,
                title: 'Adresse',
                content: 'Ruhrtalstraße 215 - 217\nD-45219 Essen-Kettwig',
              },
              {
                icon: Phone,
                title: 'Telefon',
                content: '0201 - 40 88 39 18',
                link: 'tel:+4920140883918',
              },
              {
                icon: Mail,
                title: 'E-Mail',
                content: 'info@hotel-rutherbach.de',
                link: 'mailto:info@hotel-rutherbach.de',
              },
              {
                icon: Clock,
                title: 'Rezeptionszeiten',
                content: 'Täglich von 07:00 - 22:00 Uhr\nAnfragen 24/7 möglich',
              },
            ].map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                className="p-6 bg-primary-light rounded-xl border border-gray-700 text-center"
              >
                <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <item.icon size={24} className="text-accent" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{item.title}</h3>
                {item.link ? (
                  <a
                    href={item.link}
                    className="text-gray-300 hover:text-accent transition-colors whitespace-pre-line"
                  >
                    {item.content}
                  </a>
                ) : (
                  <p className="text-gray-300 whitespace-pre-line">{item.content}</p>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <ContactForm />

      {/* Map Section */}
      <section className="py-20 bg-primary-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-white mb-4">
              So finden Sie <span className="text-accent">uns</span>
            </h2>
            <p className="text-gray-300">
              Wir befinden uns direkt an der Ruhrtalstraße in Essen-Kettwig.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="relative h-96 rounded-xl overflow-hidden border border-gray-700"
          >
            {/* Google Maps Embed */}
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2487.7582027231484!2d6.9378!3d51.3627!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47b8c9e1c1c1c1c1%3A0x1c1c1c1c1c1c1c1c!2sRuhrtalstra%C3%9Fe%20215%2C%2045219%20Essen!5e0!3m2!1sde!2sde!4v1234567890"
              width="100%"
              height="100%"
              style={{ border: 0, filter: 'grayscale(100%) invert(92%) contrast(83%)' }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Hotel Rutherbach Standort"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-8 text-center"
          >
            <a
              href="https://www.google.com/maps/dir/?api=1&destination=Hotel+Rutherbach+Ruhrtalstraße+215+45219+Essen"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary"
            >
              Route planen
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default Contact
