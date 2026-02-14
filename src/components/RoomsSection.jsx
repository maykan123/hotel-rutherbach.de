import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, Users, Bed, Maximize, Check } from 'lucide-react'
import { roomsData } from '../data/rooms'

function RoomsSection() {
  const [selectedRoom, setSelectedRoom] = useState(null)

  const scrollToContact = () => {
    const element = document.getElementById('kontakt')
    if (element) {
      const offset = 80
      const elementPosition = element.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.pageYOffset - offset
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' })
    }
    setSelectedRoom(null)
  }

  return (
    <section id="zimmer" className="py-16 sm:py-20 bg-primary-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-10 sm:mb-16"
        >
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4">
            Unsere <span className="text-accent">Zimmer</span>
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto text-base sm:text-lg px-2 sm:px-0">
            Wählen Sie aus 10 individuell eingerichteten Zimmern und Apartments. 
            Jedes Zimmer bietet Ihnen den Komfort für einen erholsamen Aufenthalt. 
            <span className="text-accent block sm:inline mt-2 sm:mt-0">Bei Direktbuchung sparen Sie sich die Buchungsgebühren!</span>
          </p>
        </motion.div>

        {/* Rooms Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
          {roomsData.map((room, index) => (
            <motion.div
              key={room.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className="group cursor-pointer"
              onClick={() => setSelectedRoom(room)}
            >
              <div className="bg-primary rounded-xl overflow-hidden border border-gray-700 hover:border-accent/50 transition-all duration-300 hover:shadow-xl hover:shadow-accent/10">
                {/* Image */}
                <div className="relative h-48 sm:h-48 overflow-hidden">
                  <img
                    src={room.image}
                    alt={room.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    onError={(e) => {
                      e.target.style.display = 'none';
                      e.target.nextSibling.style.display = 'flex';
                    }}
                  />
                  <div className="hidden absolute inset-0 bg-gradient-to-br from-primary-light to-primary items-center justify-center">
                    <span className="text-gray-500 text-sm">{room.name}</span>
                  </div>
                  <div className="absolute bottom-3 right-3">
                    <span className="px-3 py-1 bg-primary/90 text-white text-sm font-semibold rounded-full">
                      ab {room.price} €
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-4">
                  <h3 className="text-base sm:text-lg font-semibold text-white mb-2 group-hover:text-accent transition-colors">
                    {room.name}
                  </h3>
                  <p className="text-gray-400 text-sm mb-3 line-clamp-2">
                    {room.description}
                  </p>
                  
                  {/* Quick Info */}
                  <div className="flex items-center space-x-4 text-xs sm:text-sm text-gray-400">
                    <div className="flex items-center space-x-1">
                      <Users size={14} />
                      <span>bis {room.maxGuests}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Maximize size={14} />
                      <span>{room.size}</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Room Modal */}
      <AnimatePresence>
        {selectedRoom && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 bg-black/80 backdrop-blur-sm"
            onClick={() => setSelectedRoom(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.3 }}
              className="relative w-full max-w-4xl max-h-[95vh] sm:max-h-[90vh] overflow-y-auto bg-primary rounded-2xl border border-gray-700"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedRoom(null)}
                className="absolute top-3 right-3 sm:top-4 sm:right-4 z-10 p-2 bg-black/50 hover:bg-black/70 text-white rounded-full transition-colors"
                aria-label="Schließen"
              >
                <X size={20} className="sm:w-6 sm:h-6" />
              </button>

              {/* Image */}
              <div className="relative h-48 sm:h-64 lg:h-80 overflow-hidden">
                <img
                  src={selectedRoom.image}
                  alt={selectedRoom.name}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Content */}
              <div className="p-4 sm:p-6 lg:p-8">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                  <div>
                    <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white mb-2">
                      {selectedRoom.name}
                    </h3>
                  </div>
                  <div className="mt-3 sm:mt-0 text-left sm:text-right">
                    <p className="text-2xl sm:text-3xl font-bold text-accent">{selectedRoom.price} €</p>
                    <p className="text-gray-400 text-xs sm:text-sm">pro Nacht</p>
                  </div>
                </div>

                <p className="text-gray-300 text-base sm:text-lg mb-6">{selectedRoom.description}</p>

                {/* Details Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 mb-6">
                  <div className="flex items-center space-x-3 p-3 sm:p-4 bg-primary-light rounded-lg">
                    <Maximize className="text-accent flex-shrink-0" size={20} />
                    <div>
                      <p className="text-gray-400 text-xs sm:text-sm">Größe</p>
                      <p className="text-white font-semibold text-sm sm:text-base">{selectedRoom.size}</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3 p-3 sm:p-4 bg-primary-light rounded-lg">
                    <Users className="text-accent flex-shrink-0" size={20} />
                    <div>
                      <p className="text-gray-400 text-xs sm:text-sm">Max. Gäste</p>
                      <p className="text-white font-semibold text-sm sm:text-base">{selectedRoom.maxGuests} Personen</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3 p-3 sm:p-4 bg-primary-light rounded-lg">
                    <Bed className="text-accent flex-shrink-0" size={20} />
                    <div>
                      <p className="text-gray-400 text-xs sm:text-sm">Betten</p>
                      <p className="text-white font-semibold text-sm sm:text-base">{selectedRoom.beds}</p>
                    </div>
                  </div>
                </div>

                {/* Amenities */}
                <div className="mb-6 sm:mb-8">
                  <h4 className="text-base sm:text-lg font-semibold text-white mb-3 sm:mb-4">Ausstattung</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedRoom.amenities.map((amenity) => (
                      <span
                        key={amenity}
                        className="flex items-center space-x-1 px-2 sm:px-3 py-1.5 sm:py-2 bg-primary-light rounded-lg text-gray-300 text-xs sm:text-sm"
                      >
                        <Check size={12} className="text-accent sm:w-4 sm:h-4" />
                        <span>{amenity}</span>
                      </span>
                    ))}
                  </div>
                </div>

                {/* CTA Button */}
                <button
                  onClick={scrollToContact}
                  className="btn-primary w-full text-base sm:text-lg py-3 sm:py-4"
                >
                  Dieses Zimmer anfragen
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}

export default RoomsSection
