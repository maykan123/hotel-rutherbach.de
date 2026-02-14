import { motion } from 'framer-motion'
import { Heart, Home, Users, Calendar } from 'lucide-react'

function AboutSection() {
  return (
    <section id="ueber-uns" className="py-16 sm:py-20 bg-primary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative order-2 lg:order-1"
          >
            <div className="relative h-[300px] sm:h-[400px] lg:h-[500px] rounded-2xl overflow-hidden">
              <img
                src="/images/uberuns.webp"
                alt="Hotel Rutherbach Außenansicht"
                className="w-full h-full object-cover"
              />
            </div>
            
            {/* Stats Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="absolute -bottom-4 sm:-bottom-6 right-4 sm:-right-6 bg-primary-light p-4 sm:p-6 rounded-xl border border-gray-700 shadow-xl"
            >
              <div className="text-center">
                <p className="text-2xl sm:text-3xl font-bold text-accent">10</p>
                <p className="text-gray-300 text-xs sm:text-sm">Komfortable Zimmer</p>
              </div>
            </motion.div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="order-1 lg:order-2"
          >
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4 sm:mb-6">
              Willkommen im <span className="text-accent">Hotel Rutherbach</span>
            </h2>
            
            <div className="space-y-3 sm:space-y-4 text-gray-300 text-base sm:text-lg leading-relaxed">
              <p>
                Das Hotel Rutherbach liegt idyllisch direkt an der Ruhr in Essen-Kettwig. 
                Seit vielen Jahren begrüßen wir Gäste aus aller Welt und bieten Ihnen 
                einen erholsamen Aufenthalt in familiärer Atmosphäre.
              </p>
              <p>
                Unser Haus vereint die Vorteile einer ruhigen Lage am Ruhrtal mit der 
                Nähe zum historischen Stadtkern von Kettwig. Egal ob Sie geschäftlich 
                unterwegs sind oder Urlaub machen – bei uns finden Sie die perfekte 
                Unterkunft.
              </p>
              <p>
                Jedes unserer Zimmer ist individuell eingerichtet und bietet Ihnen 
                alle Annehmlichkeiten für einen komfortablen Aufenthalt. Starten Sie 
                den Tag mit einem reichhaltigen Frühstücksbuffet und genießen Sie 
                den Blick auf die Ruhr.
              </p>
            </div>

            {/* Features */}
            <div className="mt-6 sm:mt-8 grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
              <div className="flex items-center space-x-3 p-3 sm:p-4 bg-primary-light rounded-lg">
                <Heart className="text-accent flex-shrink-0" size={20} />
                <span className="text-white text-sm sm:text-base">Familiäre Atmosphäre</span>
              </div>
              <div className="flex items-center space-x-3 p-3 sm:p-4 bg-primary-light rounded-lg">
                <Home className="text-accent flex-shrink-0" size={20} />
                <span className="text-white text-sm sm:text-base">Direkt an der Ruhr</span>
              </div>
              <div className="flex items-center space-x-3 p-3 sm:p-4 bg-primary-light rounded-lg">
                <Users className="text-accent flex-shrink-0" size={20} />
                <span className="text-white text-sm sm:text-base">Persönlicher Service</span>
              </div>
              <div className="flex items-center space-x-3 p-3 sm:p-4 bg-primary-light rounded-lg">
                <Calendar className="text-accent flex-shrink-0" size={20} />
                <span className="text-white text-sm sm:text-base">Wird derzeit umfassend revitalisiert</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection
