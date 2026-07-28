import { useTranslation } from 'react-i18next'
import { motion } from 'framer-motion'
import { Wifi, Car, Tv, Sparkles, Coffee, Clock, MapPin, Wind, Briefcase, Wine, Heart, GlassWater, Bike, Package, Users, Bed } from 'lucide-react'

const featureIcons = [Wifi, Car, Tv, Sparkles, Coffee, Clock, MapPin, Wind, Briefcase, Wine, Heart, GlassWater, Bike, Package, Users, Clock, Bed]

function FeaturesSection() {
  const { t } = useTranslation()
  const items = t('features.items', { returnObjects: true })

  return (
    <section className="py-24 sm:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-10 sm:mb-16"
        >
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-800 mb-4">
            {t('features.title1')} <span className="text-accent-dark">{t('features.titleAccent')}</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-base sm:text-lg px-2 sm:px-0">
            {t('features.subtitle')}
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-4 sm:gap-6">
          {items.map((feature, index) => {
            const Icon = featureIcons[index]
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.03 }}
                className="blue-island p-4 sm:p-6 hover:border-accent/50 transition-all duration-300 hover:shadow-accent/5"
              >
                <div className="w-12 h-12 sm:w-14 sm:h-14 bg-accent/10 rounded-xl flex items-center justify-center mb-3 sm:mb-4 group-hover:bg-accent/20 transition-colors">
                  <Icon size={24} className="text-accent sm:w-7 sm:h-7" />
                </div>
                <h3 className="text-base sm:text-lg font-semibold text-white mb-1 sm:mb-2">{feature.title}</h3>
                <p className="text-gray-400 text-xs sm:text-sm leading-relaxed">{feature.description}</p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default FeaturesSection
