import { motion } from 'framer-motion'
import RoomCard from './RoomCard'

// Zimmerdaten gemäß Prompt-Spezifikation
export const roomsData = [
  {
    id: 'apartment-2zimmer',
    name: 'Apartment (ca. 60 m²)',
    description: '2 getrennte Schlafzimmer, je 1 Doppelbett, Küche',
    price: 150,
    image: '/images/apartment-2zimmer.jpg',
    amenities: ['Doppelbett', 'Dusche/WC', 'Farb TV', 'W-LAN', 'Parkplatz', 'Täglicher Service'],
  },
  {
    id: 'apartment-empore',
    name: 'Apartment (ca. 60 m², Empore)',
    description: '2 Schlafzimmer mit 3 Betten + Kinderbett auf Empore',
    price: 150,
    image: '/images/apartment-empore.jpg',
    amenities: ['Doppelbett', 'Dusche/WC', 'Farb TV', 'W-LAN', 'Parkplatz', 'Täglicher Service'],
  },
  {
    id: 'doppelzimmer',
    name: 'Doppelzimmer',
    description: 'Komfortables Doppelzimmer mit allen Annehmlichkeiten',
    price: 115,
    image: '/images/doppelzimmer.jpg',
    amenities: ['Doppelbett', 'Dusche/WC', 'Farb TV', 'W-LAN', 'Parkplatz', 'Täglicher Service'],
  },
  {
    id: 'komfort-doppelzimmer',
    name: 'Komfort-Doppelzimmer (2 Räume)',
    description: 'Geräumige Suite mit 2 separaten Räumen',
    price: 125,
    image: '/images/komfort-doppelzimmer.jpg',
    amenities: ['Doppelbett', 'Dusche/WC', 'Farb TV', 'W-LAN', 'Parkplatz', 'Täglicher Service'],
  },
  {
    id: 'einzelzimmer',
    name: 'Einzelzimmer',
    description: 'Gemütliches Einzelzimmer für Geschäftsreisende',
    price: 95,
    image: '/images/einzelzimmer.jpg',
    amenities: ['Doppelbett', 'Dusche/WC', 'Farb TV', 'W-LAN', 'Parkplatz', 'Täglicher Service'],
  },
]

function RoomsList() {
  return (
    <section className="py-16 sm:py-20 bg-primary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-10 sm:mb-16"
        >
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4">
            Unsere <span className="text-accent">Zimmer & Apartments</span>
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto text-base sm:text-lg px-2 sm:px-0">
            Alle Preise ohne Frühstück. 
            <span className="text-accent block sm:inline mt-2 sm:mt-0">Bei Direktbuchung sparen Sie sich die Buchungsgebühren!</span>
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {roomsData.map((room, index) => (
            <RoomCard key={room.id} room={room} index={index} />
          ))}
        </div>

        {/* Amenities Legend */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-10 sm:mt-16 p-4 sm:p-6 bg-primary-light rounded-xl border border-gray-700"
        >
          <h3 className="text-base sm:text-lg font-semibold text-accent mb-3 sm:mb-4">In allen Zimmern inklusive:</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-3 sm:gap-4 text-xs sm:text-sm text-gray-300">
            <span>• Dusche/WC</span>
            <span>• Smart TV</span>
            <span>• HD Kanäle</span>
            <span>• Streaming</span>
            <span>• W-LAN</span>
            <span>• Parkplatz</span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default RoomsList
