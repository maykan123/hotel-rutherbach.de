import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

function Impressum() {
  return (
    <div className="pt-20">
      <section className="py-20 bg-primary-light">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl font-bold text-white mb-8">
              <span className="text-accent">Impressum</span>
            </h1>

            <div className="space-y-8">
              {/* Angaben gemäß § 5 TMG */}
              <section>
                <h2 className="text-2xl font-semibold text-accent mb-4">
                  Angaben gemäß § 5 TMG
                </h2>
                <div className="bg-primary p-6 rounded-lg border border-gray-700">
                  <p className="text-gray-300 leading-relaxed">
                    <strong className="text-white text-lg">Makyan Saeed</strong><br />
                    HOTEL RUTHERBACH<br /><br />
                    Ruhrtalstraße 215 - 217<br />
                    D-45219 Essen-Kettwig<br />
                    Deutschland
                  </p>
                </div>
              </section>

              {/* Kontakt */}
              <section>
                <h2 className="text-2xl font-semibold text-accent mb-4">Kontakt</h2>
                <div className="bg-primary p-6 rounded-lg border border-gray-700">
                  <p className="text-gray-300 leading-relaxed">
                    <strong className="text-white">Telefon:</strong><br />
                    0201 - 40 88 39 18<br /><br />
                    <strong className="text-white">E-Mail:</strong><br />
                    <a href="mailto:info@hotel-rutherbach.de" className="text-accent hover:underline">
                      info@hotel-rutherbach.de
                    </a><br /><br />
                    <strong className="text-white">Website:</strong><br />
                    <a href="https://www.hotel-rutherbach.de" className="text-accent hover:underline">
                      www.hotel-rutherbach.de
                    </a>
                  </p>
                </div>
              </section>

              {/* Umsatzsteuer */}
              <section>
                <h2 className="text-2xl font-semibold text-accent mb-4">
                  Umsatzsteuer-ID
                </h2>
                <div className="bg-primary p-6 rounded-lg border border-gray-700">
                  <p className="text-gray-300">
                    <strong className="text-white">Umsatzsteuer-Identifikationsnummer gemäß §27 a Umsatzsteuergesetz:</strong><br />
                    <span className="text-gray-400">[Bitte einfügen]</span>
                  </p>
                  <p className="text-gray-500 text-sm mt-2">
                    TODO: USt-IdNr. vom Steuerberater erfragen und hier eintragen
                  </p>
                </div>
              </section>

              {/* Gewerbeanmeldung */}
              <section>
                <h2 className="text-2xl font-semibold text-accent mb-4">
                  Gewerbeanmeldung
                </h2>
                <div className="bg-primary p-6 rounded-lg border border-gray-700">
                  <p className="text-gray-300">
                    Die Gewerbeanmeldung wurde durchgeführt von:<br />
                    <strong className="text-white">Stadt Essen</strong>
                  </p>
                </div>
              </section>

              {/* Streitschlichtung */}
              <section>
                <h2 className="text-2xl font-semibold text-accent mb-4">
                  Streitschlichtung
                </h2>
                <div className="bg-primary p-6 rounded-lg border border-gray-700">
                  <p className="text-gray-300 mb-4">
                    Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit:<br />
                    <a 
                      href="https://ec.europa.eu/consumers/odr" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-accent hover:underline"
                    >
                      https://ec.europa.eu/consumers/odr
                    </a>
                  </p>
                  <p className="text-gray-300">
                    Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer 
                    Verbraucherschlichtungsstelle teilzunehmen.
                  </p>
                </div>
              </section>

              {/* Haftung für Inhalte */}
              <section>
                <h2 className="text-2xl font-semibold text-accent mb-4">
                  Haftung für Inhalte
                </h2>
                <div className="bg-primary p-6 rounded-lg border border-gray-700">
                  <p className="text-gray-300 leading-relaxed">
                    Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten 
                    nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als 
                    Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde 
                    Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige 
                    Tätigkeit hinweisen.
                  </p>
                  <p className="text-gray-300 mt-4 leading-relaxed">
                    Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach 
                    den allgemeinen Gesetzen bleiben hiervon unberührt. Eine diesbezügliche Haftung 
                    ist jedoch erst ab dem Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung möglich. 
                    Bei Bekanntwerden von entsprechenden Rechtsverletzungen werden wir diese Inhalte 
                    umgehend entfernen.
                  </p>
                </div>
              </section>

              {/* Haftung für Links */}
              <section>
                <h2 className="text-2xl font-semibold text-accent mb-4">
                  Haftung für Links
                </h2>
                <div className="bg-primary p-6 rounded-lg border border-gray-700">
                  <p className="text-gray-300 leading-relaxed">
                    Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir 
                    keinen Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine 
                    Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige 
                    Anbieter oder Betreiber der Seiten verantwortlich.
                  </p>
                </div>
              </section>

              {/* Urheberrecht */}
              <section>
                <h2 className="text-2xl font-semibold text-accent mb-4">
                  Urheberrecht
                </h2>
                <div className="bg-primary p-6 rounded-lg border border-gray-700">
                  <p className="text-gray-300 leading-relaxed">
                    Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten 
                    unterliegen dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, 
                    Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes 
                    bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers.
                  </p>
                </div>
              </section>

              {/* Bildnachweise */}
              <section>
                <h2 className="text-2xl font-semibold text-accent mb-4">
                  Bildnachweise
                </h2>
                <div className="bg-primary p-6 rounded-lg border border-gray-700">
                  <p className="text-gray-300">
                    Die verwendeten Bilder sind entweder Eigentum des Hotel Rutherbach oder unterliegen 
                    den jeweiligen Lizenzbedingungen der Bildquellen.
                  </p>
                  <p className="text-gray-500 text-sm mt-2">
                    TODO: Bei Verwendung von Stock-Fotos oder Fremdbildern entsprechende Quellenangaben ergänzen
                  </p>
                </div>
              </section>
            </div>

            <div className="mt-12 pt-8 border-t border-gray-700">
              <Link to="/" className="text-accent hover:underline">
                ← Zurück zur Startseite
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default Impressum
