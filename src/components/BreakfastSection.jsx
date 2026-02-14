import { motion } from 'framer-motion'
import { Clock, Coffee, Utensils, Croissant } from 'lucide-react'
import ImageSwiper from './ImageSwiper'

const breakfastImages = [
  '/images/frühstück/fs.jpeg',
  '/images/frühstück/fs2.jpeg',
  '/images/frühstück/fs3.jpeg',
  '/images/frühstück/fs4.jpeg',
  '/images/frühstück/fs5.jpeg',
  '/images/frühstück/fs6.jpeg'
]

const breakfastFeatures = [
  { icon: Coffee, title: 'Kaffee & Tee', description: 'Verschiedene Kaffee- und Teesorten' },
  { icon: Utensils, title: 'Herzhaftes', description: 'Wurst, Käse, Eiergerichte' },
  { icon: Croissant, title: 'Süßes', description: 'Brötchen, Müsli, Joghurt' },
  { icon: Clock, title: 'Zeiten', description: 'Täglich: 7:30 - 10:30 Uhr' }
]

function BreakfastSection() {
  return (
    <section id="fruehstueck" className="py-16 sm:py-20 bg-primary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Image Swiper */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="h-[300px] sm:h-[400px] lg:h-[500px] order-2 lg:order-1"
          >
            <ImageSwiper images={breakfastImages} alt="Frühstücksraum" />
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
              Starten Sie mit einem <span className="text-accent">guten Frühstück</span>
            </h2>
            
            <p className="text-gray-300 text-base sm:text-lg mb-6 leading-relaxed">
              Unser reichhaltiges Frühstücksbuffet lässt keine Wünsche offen. Genießen Sie 
              in unserem hellen Frühstücksraum mit Blick auf die Ruhr einen perfekten Start 
              in den Tag. Wir legen großen Wert auf Frische und Qualität unserer Produkte.
            </p>

            {/* Features Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
              {breakfastFeatures.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex items-start space-x-3 sm:space-x-4 p-3 sm:p-4 bg-primary-light rounded-lg"
                >
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <feature.icon size={20} className="text-accent sm:w-6 sm:h-6" />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold mb-1 text-sm sm:text-base">{feature.title}</h4>
                    <p className="text-gray-400 text-xs sm:text-sm">{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default BreakfastSection
