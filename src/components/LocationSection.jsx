import { motion } from 'framer-motion'
import { MapPin, Car, Train, Clock, Navigation, Phone } from 'lucide-react'

function LocationSection() {
  return (
    <section id="lage" className="py-24 sm:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          {/* Content - blaue Insel */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="blue-island p-6 sm:p-8 lg:p-10">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4 sm:mb-6">
                Perfekte Lage in <span className="text-accent-dark">Essen-Kettwig</span>
              </h2>
              
              <p className="text-gray-300 text-base sm:text-lg mb-6 leading-relaxed">
                Das Hotel Rutherbach liegt idyllisch direkt an der Ruhr, mit herrlichem Blick 
                auf das Ruhrtal. Genießen Sie die Ruhe und Natur, während Sie dennoch nur 
                wenige Minuten vom Stadtzentrum entfernt sind.
              </p>

              {/* Location Features */}
              <div className="space-y-3 sm:space-y-4 mb-6 sm:mb-8">
                <div className="flex items-start space-x-3 sm:space-x-4 p-3 sm:p-4 bg-primary rounded-lg border border-gray-700">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin size={20} className="text-accent sm:w-6 sm:h-6" />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold mb-1 text-sm sm:text-base">Direkt an der Ruhr</h4>
                    <p className="text-gray-400 text-xs sm:text-sm">Ruhrpromenade direkt vor der Tür – ideal für Spaziergänge und Jogging</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3 sm:space-x-4 p-3 sm:p-4 bg-primary rounded-lg border border-gray-700">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Navigation size={20} className="text-accent sm:w-6 sm:h-6" />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold mb-1 text-sm sm:text-base">Historischer Stadtkern</h4>
                    <p className="text-gray-400 text-xs sm:text-sm">Nur 5 Minuten Fußweg zur malerischen Kettwiger Altstadt</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3 sm:space-x-4 p-3 sm:p-4 bg-primary rounded-lg border border-gray-700">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Car size={20} className="text-accent sm:w-6 sm:h-6" />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold mb-1 text-sm sm:text-base">Gute Anbindung</h4>
                    <p className="text-gray-400 text-xs sm:text-sm">Schnell zur A52 und A40 – Essen Zentrum in 15 Min.</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3 sm:space-x-4 p-3 sm:p-4 bg-primary rounded-lg border border-gray-700">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Train size={20} className="text-accent sm:w-6 sm:h-6" />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold mb-1 text-sm sm:text-base">ÖPNV</h4>
                    <p className="text-gray-400 text-xs sm:text-sm">Buslinie direkt am Hotel, S-Bahn Kettwig in 10 Min. Fußweg</p>
                  </div>
                </div>
              </div>

              {/* CTA */}
              <a
                href="https://www.google.com/maps/search/?api=1&query=Hotel+Rutherbach+Ruhrtalstraße+215+Essen"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary inline-flex items-center text-sm sm:text-base"
              >
                <MapPin size={18} className="mr-2 flex-shrink-0" />
                Auf Google Maps anzeigen
              </a>
            </div>
          </motion.div>

          {/* Google Maps & Info - blaue Inseln */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-4 sm:space-y-6"
          >
            {/* Google Maps Embed */}
            <div className="blue-island p-2 overflow-hidden">
              <div className="relative h-[250px] sm:h-[350px] lg:h-[400px] rounded-xl overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2487.537476687439!2d6.9363!3d51.3626!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNTHCsDIxJzQ1LjQiTiA2wrA1NicxMC43IkU!5e0!3m2!1sde!2sde!4v1699999999999!5m2!1sde!2sde"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Hotel Rutherbach auf Google Maps"
                  className="grayscale-[30%] hover:grayscale-0 transition-all duration-300"
                />
              </div>
            </div>

            {/* Info Cards - blaue Inseln */}
            <div className="grid grid-cols-3 gap-2 sm:gap-4">
              <div className="blue-island p-2 sm:p-4 text-center">
                <Clock className="text-accent mx-auto mb-1 sm:mb-2" size={18} />
                <p className="text-lg sm:text-2xl font-bold text-accent">15:00</p>
                <p className="text-gray-400 text-xs sm:text-sm">Check-in</p>
              </div>
              <div className="blue-island p-2 sm:p-4 text-center">
                <Clock className="text-accent mx-auto mb-1 sm:mb-2" size={18} />
                <p className="text-lg sm:text-2xl font-bold text-accent">11:00</p>
                <p className="text-gray-400 text-xs sm:text-sm">Check-out</p>
              </div>
              <div className="blue-island p-2 sm:p-4 text-center">
                <Clock className="text-accent mx-auto mb-1 sm:mb-2" size={18} />
                <p className="text-lg sm:text-2xl font-bold text-accent">7:30</p>
                <p className="text-gray-400 text-xs sm:text-sm">Frühstück</p>
              </div>
            </div>

            {/* Address Box - blaue Insel */}
            <div className="blue-island p-4 sm:p-6">
              <h3 className="text-base sm:text-lg font-semibold text-white mb-3 sm:mb-4">Adresse</h3>
              <div className="space-y-1 sm:space-y-2 text-gray-300 text-sm sm:text-base">
                <p className="font-semibold text-accent">Hotel Rutherbach</p>
                <p>Ruhrtalstraße 215 – 217</p>
                <p>D-45219 Essen-Kettwig</p>
              </div>
              <div className="mt-3 sm:mt-4 pt-3 sm:pt-4 border-t border-gray-700">
                <div className="flex justify-between text-xs sm:text-sm">
                  <span className="text-gray-400">Telefon:</span>
                  <span className="text-white">0201 - 40 88 39 18</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default LocationSection
