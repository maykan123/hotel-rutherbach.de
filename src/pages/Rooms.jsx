import { motion } from 'framer-motion'
import { Coffee, Car, Wifi, Sparkles, Check } from 'lucide-react'
import RoomCard from '../components/RoomCard'
import { roomsData } from '../components/RoomsList'

const allAmenities = [
  'Dusche/WC',
  'Farb TV',
  'W-LAN',
  'Parkplatz',
  'Täglicher Service',
  'Frühstück inklusive',
]

function Rooms() {
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
            Unsere <span className="text-accent">Zimmer & Preise</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-xl text-gray-300 max-w-3xl mx-auto"
          >
            Wählen Sie aus unseren komfortablen Zimmern und Apartments. 
            Alle Preise verstehen sich pro Nacht inklusive Frühstück.
          </motion.p>
        </div>
      </section>

      {/* Amenities Overview */}
      <section className="py-16 bg-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6"
          >
            {[
              { icon: Coffee, label: 'Frühstück' },
              { icon: Car, label: 'Parkplatz' },
              { icon: Wifi, label: 'WLAN' },
              { icon: Sparkles, label: 'Täglicher Service' },
              { icon: Check, label: 'Farb TV' },
              { icon: Check, label: 'Dusche/WC' },
            ].map((item, index) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                className="flex flex-col items-center text-center p-4 bg-primary-light rounded-lg"
              >
                <item.icon size={24} className="text-accent mb-2" />
                <span className="text-sm text-gray-300">{item.label}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Room Cards */}
      <section className="py-20 bg-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {roomsData.map((room, index) => (
              <RoomCard key={room.id} room={room} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Info */}
      <section className="py-20 bg-primary-light">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-primary p-8 rounded-xl border border-gray-700"
          >
            <h2 className="text-2xl font-bold text-white mb-6">Preisinformationen</h2>
            
            <div className="space-y-4 text-gray-300">
              <p>
                <strong className="text-white">Alle Preise verstehen sich pro Nacht und Zimmer inklusive:</strong>
              </p>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 ml-4">
                {allAmenities.map(amenity => (
                  <li key={amenity} className="flex items-center space-x-2">
                    <Check size={16} className="text-accent" />
                    <span>{amenity}</span>
                  </li>
                ))}
              </ul>
              
              <div className="mt-6 pt-6 border-t border-gray-700 space-y-2 text-sm">
                <p>• Kinderbetten auf Anfrage verfügbar</p>
                <p>• Haustiere nach Absprache möglich</p>
                <p>• Langzeitaufenthalte auf Anfrage</p>
                <p>• Geschäftskunden willkommen</p>
              </div>

              <div className="mt-6 p-4 bg-accent/10 rounded-lg">
                <p className="text-accent font-medium">
                  Hinweis: Die angezeigten Preise sind Richtpreise. 
                  Aktuelle Verfügbarkeit und endgültige Preise erhalten Sie auf Anfrage.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default Rooms
