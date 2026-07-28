import { useTranslation } from 'react-i18next'
import { motion } from 'framer-motion'
import { Heart, Home, Users, Calendar } from 'lucide-react'

function AboutSection() {
  const { t } = useTranslation()

  return (
    <section id="ueber-uns" className="py-24 sm:py-32 bg-white">
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
            <div className="relative h-[300px] sm:h-[400px] lg:h-[500px] rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="/images/uberuns.webp"
                alt={t('about.imageAlt')}
                className="w-full h-full object-cover"
              />
            </div>
            
            {/* Stats Card - blaue Insel */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="absolute -bottom-4 sm:-bottom-6 right-4 sm:-right-6 blue-island p-4 sm:p-6"
            >
              <div className="text-center">
                <p className="text-2xl sm:text-3xl font-bold text-accent">{t('about.statsValue')}</p>
                <p className="text-gray-300 text-xs sm:text-sm">{t('about.statsLabel')}</p>
              </div>
            </motion.div>
          </motion.div>

          {/* Content - blaue Insel */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="order-1 lg:order-2"
          >
            <div className="blue-island p-6 sm:p-8 lg:p-10">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4 sm:mb-6">
                {t('about.title1')} <span className="text-accent-dark">{t('about.titleAccent')}</span>
              </h2>
              
              <div className="space-y-3 sm:space-y-4 text-gray-300 text-base sm:text-lg leading-relaxed">
                <p>{t('about.p1')}</p>
                <p>{t('about.p2')}</p>
                <p>{t('about.p3')}</p>
              </div>

              {/* Features */}
              <div className="mt-6 sm:mt-8 grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                <div className="flex items-center space-x-3 p-3 sm:p-4 bg-primary rounded-lg border border-gray-700">
                  <Heart className="text-accent flex-shrink-0" size={20} />
                  <span className="text-white text-sm sm:text-base">{t('about.features.family')}</span>
                </div>
                <div className="flex items-center space-x-3 p-3 sm:p-4 bg-primary rounded-lg border border-gray-700">
                  <Home className="text-accent flex-shrink-0" size={20} />
                  <span className="text-white text-sm sm:text-base">{t('about.features.river')}</span>
                </div>
                <div className="flex items-center space-x-3 p-3 sm:p-4 bg-primary rounded-lg border border-gray-700">
                  <Users className="text-accent flex-shrink-0" size={20} />
                  <span className="text-white text-sm sm:text-base">{t('about.features.service')}</span>
                </div>
                <div className="flex items-center space-x-3 p-3 sm:p-4 bg-primary rounded-lg border border-gray-700">
                  <Calendar className="text-accent flex-shrink-0" size={20} />
                  <span className="text-white text-sm sm:text-base">{t('about.features.renovation')}</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection
