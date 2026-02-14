import { motion } from 'framer-motion'
import { useReducedMotion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Bed, ShowerHead, Tv, Wifi, Car, Sparkles } from 'lucide-react'

const amenityIcons = {
  'Dusche/WC': ShowerHead,
  'Farb TV': Tv,
  'W-LAN': Wifi,
  'Parkplatz': Car,
  'Täglicher Service': Sparkles,
  'Doppelbett': Bed,
}

function RoomCard({ room, index }) {
  const shouldReduceMotion = useReducedMotion()

  const cardVariants = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        delay: shouldReduceMotion ? 0 : index * 0.1,
      },
    },
  }

  return (
    <motion.div
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-50px' }}
      whileHover={shouldReduceMotion ? {} : { y: -8, transition: { duration: 0.2 } }}
      className="bg-primary-light rounded-xl overflow-hidden border border-gray-700 hover:border-accent/50 transition-colors duration-300"
    >
      {/* Image */}
      <div className="relative h-56 overflow-hidden">
        {/* TODO: Ersetze durch echtes Zimmerbild in /public/images/ */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-500 hover:scale-105"
          style={{
            backgroundImage: `url('${room.image}')`,
          }}
        >
          {/* Fallback gradient wenn kein Bild vorhanden */}
          <div className="absolute inset-0 bg-gradient-to-t from-primary-light to-primary/60 flex items-center justify-center">
            <span className="text-gray-500 text-sm">{room.name}</span>
          </div>
        </div>
        <div className="absolute top-4 right-4 bg-accent text-primary px-3 py-1 rounded-full text-sm font-semibold">
          ab {room.price} €
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="text-xl font-bold text-white mb-2">{room.name}</h3>
        <p className="text-gray-400 text-sm mb-4">{room.description}</p>

        {/* Amenities */}
        <div className="flex flex-wrap gap-2 mb-6">
          {room.amenities.map((amenity) => {
            const Icon = amenityIcons[amenity] || Sparkles
            return (
              <span
                key={amenity}
                className="inline-flex items-center space-x-1 text-xs text-gray-300 bg-primary px-2 py-1 rounded"
              >
                <Icon size={12} className="text-accent" />
                <span>{amenity}</span>
              </span>
            )
          })}
        </div>

        {/* Price & CTA */}
        <div className="flex items-center justify-between">
          <div>
            <span className="text-2xl font-bold text-accent">{room.price} €</span>
            <span className="text-gray-400 text-sm"> / Nacht</span>
          </div>
          <Link
            to={`/kontakt?zimmer=${encodeURIComponent(room.name)}`}
            className="btn-primary text-sm"
          >
            Hier anfragen
          </Link>
        </div>
      </div>
    </motion.div>
  )
}

export default RoomCard
