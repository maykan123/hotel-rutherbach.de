import { motion } from 'framer-motion'
import { Wifi, Car, Tv, Sparkles, Coffee, Clock, MapPin, Wind, Briefcase, Wine, Heart, GlassWater, Bike, Package, Users, Bed } from 'lucide-react'

const features = [
  {
    icon: Wifi,
    title: 'Highspeed WLAN',
    description: 'Kostenloses WLAN in allen Zimmern und öffentlichen Bereichen'
  },
  {
    icon: Car,
    title: 'Kostenlose Parkplätze',
    description: 'Ausreichend Parkplätze direkt am Hotel für alle Gäste'
  },
  {
    icon: Tv,
    title: 'Smart TV & Streaming',
    description: 'Smart TV mit HD Kanälen und Streaming Diensten in jedem Zimmer'
  },
  {
    icon: Sparkles,
    title: 'Täglicher Service',
    description: 'Ihr Zimmer wird täglich frisch gereinigt'
  },
  {
    icon: Coffee,
    title: 'Frühstück',
    description: 'Reichhaltiges Frühstücksbuffet täglich 7:30 - 10:30 Uhr'
  },
  {
    icon: Clock,
    title: 'Flexible Zeiten',
    description: 'Anreise ab 15:00 Uhr, Abreise bis 11:00 Uhr'
  },
  {
    icon: MapPin,
    title: 'Top Lage',
    description: 'Direkt an der Ruhr, nur 5 Min. zum Stadtkern'
  },
  {
    icon: Wind,
    title: 'Nichtraucher',
    description: 'Alle Zimmer sind Nichtraucherzimmer'
  },
  {
    icon: Briefcase,
    title: 'Gepäckaufbewahrung',
    description: 'Sichere Aufbewahrung Ihres Gepäcks vor Anreise oder nach Abreise'
  },
  {
    icon: Wine,
    title: 'Sekt Empfang',
    description: 'Willkommenssekt bei Ankunft für einen perfekten Start'
  },
  {
    icon: Heart,
    title: 'Hochzeitsfrühstück',
    description: 'Besonderes Frühstückserlebnis für frischvermählte Paare'
  },
  {
    icon: GlassWater,
    title: 'Getränkeservice',
    description: 'Kühle Getränke und Snacks rund um die Uhr verfügbar'
  },
  {
    icon: Bike,
    title: 'Fahrradfahrer willkommen',
    description: 'Idealer Ausgangspunkt für Radtouren entlang der Ruhr'
  },
  {
    icon: Package,
    title: 'Lunch Pakete',
    description: 'Verpflegungspakete für unterwegs – perfekt für Radfahrer'
  },
  {
    icon: Users,
    title: 'Veranstaltungsraum',
    description: 'Raum Miete für Veranstaltungen inklusive Frühstück Catering'
  },
  {
    icon: Clock,
    title: 'Late Check-out',
    description: 'Spätere Abreise auf Anfrage möglich'
  },
  {
    icon: Bed,
    title: 'Beistellbetten',
    description: 'Zusätzliche Betten für Kinder auf Anfrage verfügbar'
  }
]

function FeaturesSection() {
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
            Ausstattung & <span className="text-accent-dark">Service</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-base sm:text-lg px-2 sm:px-0">
            Damit Sie sich bei uns rundum wohlfühlen, bieten wir Ihnen alle 
            Annehmlichkeiten für einen entspannten Aufenthalt.
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-4 sm:gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.03 }}
              className="blue-island p-4 sm:p-6 hover:border-accent/50 transition-all duration-300 hover:shadow-accent/5"
            >
              <div className="w-12 h-12 sm:w-14 sm:h-14 bg-accent/10 rounded-xl flex items-center justify-center mb-3 sm:mb-4 group-hover:bg-accent/20 transition-colors">
                <feature.icon size={24} className="text-accent sm:w-7 sm:h-7" />
              </div>
              <h3 className="text-base sm:text-lg font-semibold text-white mb-1 sm:mb-2">{feature.title}</h3>
              <p className="text-gray-400 text-xs sm:text-sm leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default FeaturesSection
