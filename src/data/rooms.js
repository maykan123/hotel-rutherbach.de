// Zimmer-Daten mit 10 individuellen Zimmern
// Übersetzbare Felder (name, description, beds, size) sind zweisprachig als { de, en } hinterlegt.
// amenities enthält Keys, die über die i18n-Dateien aufgelöst werden (t(`amenities.${key}`)).
export const roomsData = [
  {
    id: 'apartment-gross',
    name: { de: 'Apartment 8', en: 'Apartment 8' },
    roomNumber: 'A1',
    size: { de: 'ca. 60 m²', en: 'approx. 60 m²' },
    description: {
      de: '2 getrennte Schlafzimmer, je 1 Doppelbett, voll ausgestattete Küche',
      en: '2 separate bedrooms, each with 1 double bed, fully equipped kitchen'
    },
    maxGuests: 4,
    beds: { de: '2x Doppelbett', en: '2x double bed' },
    price: 135,
    image: '/images/apartments/ap1.jpg',
    amenities: ['kitchen', 'showerWc', 'smartTv', 'hdChannels', 'streaming', 'wlan', 'parking', 'dailyService'],
    bookingUrl: 'https://booking.roomraccoon.de/hotel-rutherbach/de/#128059'
  },
  {
    id: 'apartment-empore',
    name: { de: 'Apartment 10', en: 'Apartment 10' },
    roomNumber: 'A2',
    size: { de: 'ca. 60 m²', en: 'approx. 60 m²' },
    description: {
      de: '2 getrennte Doppelbetten, ein Einzelbett auf Empore und ein Wohnbereich',
      en: '2 separate double beds, one single bed on the gallery level and a living area'
    },
    maxGuests: 3,
    beds: { de: '2x Doppelbett + 1 Einzelbett (Empore)', en: '2x double bed + 1 single bed (gallery)' },
    price: 115,
    image: '/images/apartments/ap2.jpg',
    amenities: ['kitchen', 'showerWc', 'smartTv', 'hdChannels', 'streaming', 'wlan', 'parking', 'dailyService'],
    bookingUrl: 'https://booking.roomraccoon.de/hotel-rutherbach/de/#128060'
  },
  {
    id: 'apartment-klein',
    name: { de: 'Apartment 11', en: 'Apartment 11' },
    roomNumber: 'A3',
    size: { de: 'ca. 80 m²', en: 'approx. 80 m²' },
    description: {
      de: '2 Schlafzimmer mit jeweils ein Doppelbett, eine Empore mit Doppelbett und ein Wohnbereich',
      en: '2 bedrooms each with one double bed, a gallery level with a double bed and a living area'
    },
    maxGuests: 6,
    beds: { de: '3x Doppelbett + 1 Doppelbett (Empore)', en: '3x double bed + 1 double bed (gallery)' },
    price: 140,
    image: '/images/apartments/ap3.jpg',
    amenities: ['kitchenette', 'showerWc', 'smartTv', 'hdChannels', 'streaming', 'wlan', 'parking', 'dailyService'],
    bookingUrl: 'https://booking.roomraccoon.de/hotel-rutherbach/de/#127966'
  },
  {
    id: 'doppelzimmer-1',
    name: { de: 'Doppelzimmer 1', en: 'Double room 1' },
    roomNumber: '201',
    size: { de: 'ca. 20 m²', en: 'approx. 20 m²' },
    description: { de: 'Gemütliches Doppelzimmer mit Dusche/WC', en: 'Cosy double room with shower/WC' },
    maxGuests: 2,
    beds: { de: '1 Doppelbett', en: '1 double bed' },
    price: 105,
    image: '/images/doppelzimmer/dz1.jpg',
    amenities: ['showerWc', 'smartTv', 'hdChannels', 'streaming', 'wlan', 'parking', 'dailyService'],
    bookingUrl: 'https://booking.roomraccoon.de/hotel-rutherbach/de/#127977'
  },
  {
    id: 'doppelzimmer-2',
    name: { de: 'Doppelzimmer 2', en: 'Double room 2' },
    roomNumber: '202',
    size: { de: 'ca. 20 m²', en: 'approx. 20 m²' },
    description: { de: 'Gemütliches Doppelzimmer mit Dusche/WC', en: 'Cosy double room with shower/WC' },
    maxGuests: 2,
    beds: { de: '1 Doppelbett', en: '1 double bed' },
    price: 105,
    image: '/images/doppelzimmer/dz2.jpg',
    amenities: ['showerWc', 'smartTv', 'hdChannels', 'streaming', 'wlan', 'parking', 'dailyService'],
    bookingUrl: 'https://booking.roomraccoon.de/hotel-rutherbach/de/#127977'
  },
  {
    id: 'doppelzimmer-3',
    name: { de: 'Doppelzimmer 3 (Twin)', en: 'Double room 3 (twin)' },
    roomNumber: '203',
    size: { de: 'ca. 20 m²', en: 'approx. 20 m²' },
    description: { de: 'Twin-Bett-Zimmer mit Dusche/WC', en: 'Twin-bed room with shower/WC' },
    maxGuests: 2,
    beds: { de: '2 Einzelbetten', en: '2 single beds' },
    price: 105,
    image: '/images/doppelzimmer/dz3.jpg',
    amenities: ['showerWc', 'smartTv', 'hdChannels', 'streaming', 'wlan', 'parking', 'dailyService'],
    bookingUrl: 'https://booking.roomraccoon.de/hotel-rutherbach/de/#127977'
  },
  {
    id: 'doppelzimmer-4',
    name: { de: 'Doppelzimmer 4 (Twin)', en: 'Double room 4 (twin)' },
    roomNumber: '204',
    size: { de: 'ca. 20 m²', en: 'approx. 20 m²' },
    description: { de: 'Twin-Bett-Zimmer mit Dusche/WC', en: 'Twin-bed room with shower/WC' },
    maxGuests: 2,
    beds: { de: '2 Einzelbetten', en: '2 single beds' },
    price: 105,
    image: '/images/doppelzimmer/dz4.jpg',
    amenities: ['showerWc', 'smartTv', 'hdChannels', 'streaming', 'wlan', 'parking', 'dailyService'],
    bookingUrl: 'https://booking.roomraccoon.de/hotel-rutherbach/de/#127977'
  },
  {
    id: 'komfort-dz-1',
    name: { de: 'Komfort-Dreibettzimmer 1', en: 'Comfort triple room 1' },
    roomNumber: '301',
    size: { de: 'ca. 35 m²', en: 'approx. 35 m²' },
    description: {
      de: '2 Schlafzimmer: eins mit Doppelbett, eins mit Einzelbett',
      en: '2 bedrooms: one with a double bed, one with a single bed'
    },
    maxGuests: 3,
    beds: { de: '1 Doppelbett + 1 Einzelbett', en: '1 double bed + 1 single bed' },
    price: 115,
    image: '/images/komfort/kdz1.jpg',
    amenities: ['twoRooms', 'showerWc', 'smartTv', 'hdChannels', 'streaming', 'wlan', 'parking', 'dailyService'],
    bookingUrl: 'https://booking.roomraccoon.de/hotel-rutherbach/de/#127977'
  },
  {
    id: 'komfort-dz-2',
    name: { de: 'Komfort-Dreibettzimmer 2', en: 'Comfort triple room 2' },
    roomNumber: '302',
    size: { de: 'ca. 35 m²', en: 'approx. 35 m²' },
    description: {
      de: '2 Schlafzimmer: eins mit Doppelbett, eins mit Einzelbett',
      en: '2 bedrooms: one with a double bed, one with a single bed'
    },
    maxGuests: 3,
    beds: { de: '1 Doppelbett + 1 Einzelbett', en: '1 double bed + 1 single bed' },
    price: 115,
    image: '/images/komfort/kdz2.jpg',
    amenities: ['twoRooms', 'showerWc', 'smartTv', 'hdChannels', 'streaming', 'wlan', 'parking', 'dailyService'],
    bookingUrl: 'https://booking.roomraccoon.de/hotel-rutherbach/de/#127977'
  },
  {
    id: 'einzelzimmer-1',
    name: { de: 'Einzelzimmer', en: 'Single room' },
    roomNumber: '101',
    size: { de: 'ca. 15 m²', en: 'approx. 15 m²' },
    description: { de: 'Einzelzimmer mit Dusche/WC', en: 'Single room with shower/WC' },
    maxGuests: 1,
    beds: { de: '1 Einzelbett', en: '1 single bed' },
    price: 85,
    image: '/images/einzelzimmer/ez01.jpg',
    amenities: ['showerWc', 'smartTv', 'hdChannels', 'streaming', 'wlan', 'parking', 'dailyService'],
    bookingUrl: 'https://booking.roomraccoon.de/hotel-rutherbach/de/#128062'
  }
]

// Frühstückspreis
export const BREAKFAST_PRICE = 15 // € pro Nacht
