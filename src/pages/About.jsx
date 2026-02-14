import { motion } from 'framer-motion'
import { Award, Heart, Users, Star } from 'lucide-react'

const values = [
  {
    icon: Heart,
    title: 'Herzliche Gastfreundschaft',
    description: 'Wir begrüßen jeden Gast persönlich und sorgen dafür, dass Sie sich wie zu Hause fühlen.',
  },
  {
    icon: Award,
    title: 'Qualität & Sauberkeit',
    description: 'Höchste Standards bei Reinigung und Wartung garantieren einen angenehmen Aufenthalt.',
  },
  {
    icon: Users,
    title: 'Persönlicher Service',
    description: 'Individuelle Betreuung und flexibler Service für alle Ihre Wünsche.',
  },
  {
    icon: Star,
    title: 'Beste Lage',
    description: 'Direkt an der Ruhr mit herrlichem Blick und perfekter Anbindung.',
  },
]

function About() {
  return (
    <div className="pt-20">
      {/* Header */}
      <section className="py-20 bg-primary-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">
                Über uns & <span className="text-accent">unsere Philosophie</span>
              </h1>
              <p className="text-xl text-gray-300 mb-6">
                Das Hotel Rutherbach steht für gehobene Gastfreundschaft 
                in familiärer Atmosphäre. Seit vielen Jahren begrüßen wir 
                Gäste aus aller Welt in unserem Haus an der Ruhr.
              </p>
              <p className="text-gray-400">
                Unter der Leitung von Makyan Saeed legen wir größten Wert 
                auf persönlichen Service, makellose Sauberkeit und das 
                Wohlbefinden jedes einzelnen Gastes.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="relative h-96 rounded-xl overflow-hidden"
            >
              {/* TODO: Ersetze durch echtes Bild in /public/images/about.jpg */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary-light to-primary flex items-center justify-center">
                <div className="text-center p-8">
                  <div className="w-24 h-24 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-6">
                    <span className="text-3xl font-bold text-accent">MS</span>
                  </div>
                  <p className="text-xl text-white font-semibold mb-2">Makyan Saeed</p>
                  <p className="text-accent">Inhaber & Geschäftsführer</p>
                  <p className="text-gray-500 text-sm mt-4">
                    TODO: Bild in /public/images/about.jpg einfügen
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Unsere <span className="text-accent">Werte</span>
            </h2>
            <p className="text-gray-300 max-w-2xl mx-auto text-lg">
              Diese Prinzipien leiten uns jeden Tag in unserem Handeln.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex items-start space-x-4 p-6 bg-primary-light rounded-xl border border-gray-700 hover:border-accent/30 transition-colors"
              >
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <value.icon size={24} className="text-accent" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">{value.title}</h3>
                  <p className="text-gray-400">{value.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* History/Story */}
      <section className="py-20 bg-primary-light">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
              Eine Tradition der <span className="text-accent">Gastfreundschaft</span>
            </h2>
            <div className="space-y-4 text-gray-300 text-lg">
              <p>
                Das Hotel Rutherbach hat sich über die Jahre zu einem beliebten 
                Anlaufpunkt für Geschäftsreisende und Urlauber entwickelt. 
                Unsere Gäste schätzen besonders die ruhige Lage direkt an der Ruhr 
                und die familiäre Atmosphäre.
              </p>
              <p>
                Egal ob Sie einen kurzen Geschäftstrip oder einen längeren Urlaub 
                planen – bei uns finden Sie den perfekten Rückzugsort. 
                Wir freuen uns darauf, Sie bald bei uns begrüßen zu dürfen!
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default About
