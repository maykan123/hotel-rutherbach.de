import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { motion, AnimatePresence } from 'framer-motion'
import { X, Users, Bed, Maximize, Check, ExternalLink } from 'lucide-react'
import { roomsData } from '../data/rooms'

function RoomsSection() {
  const { t, i18n } = useTranslation()
  const lng = i18n.language === 'en' ? 'en' : 'de'
  const [selectedRoom, setSelectedRoom] = useState(null)

  return (
    <section id="zimmer" className="py-24 sm:py-32 bg-white">
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
            {t('rooms.title1')} <span className="text-accent-dark">{t('rooms.titleAccent')}</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-base sm:text-lg px-2 sm:px-0">
            {t('rooms.subtitle')}{' '}
            <span className="text-accent-dark block sm:inline mt-2 sm:mt-0 font-semibold">{t('rooms.directBookingNote')}</span>
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
              <div className="blue-island-static overflow-hidden hover:border-accent/50 transition-all duration-300 h-full">
                {/* Image */}
                <div className="relative h-48 sm:h-48 overflow-hidden">
                  <img
                    src={room.image}
                    alt={room.name[lng]}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    onError={(e) => {
                      e.target.style.display = 'none';
                      e.target.nextSibling.style.display = 'flex';
                    }}
                  />
                  <div className="hidden absolute inset-0 bg-gradient-to-br from-primary-light to-primary items-center justify-center">
                    <span className="text-gray-500 text-sm">{room.name[lng]}</span>
                  </div>
                  <div className="absolute bottom-3 right-3">
                    <span className="px-3 py-1 bg-primary/90 text-white text-sm font-semibold rounded-full">
                      {t('rooms.fromPrice', { price: room.price })}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-4">
                  <h3 className="text-base sm:text-lg font-semibold text-white mb-2 group-hover:text-accent-dark transition-colors">
                    {room.name[lng]}
                  </h3>
                  <p className="text-gray-400 text-sm mb-3 line-clamp-2">
                    {room.description[lng]}
                  </p>
                  
                  {/* Quick Info */}
                  <div className="flex items-center space-x-4 text-xs sm:text-sm text-gray-400">
                    <div className="flex items-center space-x-1">
                      <Users size={14} />
                      <span>{t('rooms.upToGuests', { count: room.maxGuests })}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Maximize size={14} />
                      <span>{room.size[lng]}</span>
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
              className="relative w-full max-w-4xl max-h-[95vh] sm:max-h-[90vh] overflow-y-auto blue-island"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedRoom(null)}
                className="absolute top-3 right-3 sm:top-4 sm:right-4 z-10 p-2 bg-black/50 hover:bg-black/70 text-white rounded-full transition-colors"
                aria-label={t('rooms.close')}
              >
                <X size={20} className="sm:w-6 sm:h-6" />
              </button>

              {/* Image */}
              <div className="relative h-48 sm:h-64 lg:h-80 overflow-hidden">
                <img
                  src={selectedRoom.image}
                  alt={selectedRoom.name[lng]}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Content */}
              <div className="p-4 sm:p-6 lg:p-8">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                  <div>
                    <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white mb-2">
                      {selectedRoom.name[lng]}
                    </h3>
                  </div>
                  <div className="mt-3 sm:mt-0 text-left sm:text-right">
                    <p className="text-2xl sm:text-3xl font-bold text-accent">{t('rooms.fromPrice', { price: selectedRoom.price })}</p>
                    <p className="text-gray-400 text-xs sm:text-sm">{t('rooms.perNight')}</p>
                  </div>
                </div>

                <p className="text-gray-300 text-base sm:text-lg mb-6">{selectedRoom.description[lng]}</p>

                {/* Details Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 mb-6">
                  <div className="flex items-center space-x-3 p-3 sm:p-4 bg-primary rounded-lg border border-gray-700">
                    <Maximize className="text-accent flex-shrink-0" size={20} />
                    <div>
                      <p className="text-gray-400 text-xs sm:text-sm">{t('rooms.size')}</p>
                      <p className="text-white font-semibold text-sm sm:text-base">{selectedRoom.size[lng]}</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3 p-3 sm:p-4 bg-primary rounded-lg border border-gray-700">
                    <Users className="text-accent flex-shrink-0" size={20} />
                    <div>
                      <p className="text-gray-400 text-xs sm:text-sm">{t('rooms.maxGuests')}</p>
                      <p className="text-white font-semibold text-sm sm:text-base">{t('rooms.guests', { count: selectedRoom.maxGuests })}</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3 p-3 sm:p-4 bg-primary rounded-lg border border-gray-700">
                    <Bed className="text-accent flex-shrink-0" size={20} />
                    <div>
                      <p className="text-gray-400 text-xs sm:text-sm">{t('rooms.beds')}</p>
                      <p className="text-white font-semibold text-sm sm:text-base">{selectedRoom.beds[lng]}</p>
                    </div>
                  </div>
                </div>

                {/* Amenities */}
                <div className="mb-6 sm:mb-8">
                  <h4 className="text-base sm:text-lg font-semibold text-white mb-3 sm:mb-4">{t('rooms.amenitiesTitle')}</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedRoom.amenities.map((amenity) => (
                      <span
                        key={amenity}
                        className="flex items-center space-x-1 px-2 sm:px-3 py-1.5 sm:py-2 bg-primary rounded-lg text-gray-300 text-xs sm:text-sm border border-gray-700"
                      >
                        <Check size={12} className="text-accent sm:w-4 sm:h-4" />
                        <span>{t(`amenities.${amenity}`)}</span>
                      </span>
                    ))}
                  </div>
                </div>

                {/* CTA Button */}
                <a
                  href={selectedRoom.bookingUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary w-full text-base sm:text-lg py-3 sm:py-4 inline-flex items-center justify-center"
                >
                  <ExternalLink size={20} className="mr-2" />
                  {t('rooms.bookNow')}
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}

export default RoomsSection
