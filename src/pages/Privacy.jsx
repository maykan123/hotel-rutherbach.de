import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

function Privacy() {
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
              Datenschutz<span className="text-accent">erklärung</span>
            </h1>

            <div className="prose prose-invert max-w-none">
              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-white mb-4">1. Datenschutz auf einen Blick</h2>
                <h3 className="text-xl font-medium text-accent mb-3">Allgemeine Hinweise</h3>
                <p className="text-gray-300 mb-4">
                  Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen 
                  Daten passiert, wenn Sie diese Website besuchen. Personenbezogene Daten sind alle Daten, 
                  mit denen Sie persönlich identifiziert werden können.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-white mb-4">2. Verantwortlicher</h2>
                <div className="bg-primary p-6 rounded-lg border border-gray-700 mb-4">
                  <p className="text-gray-300">
                    <strong className="text-white">Makyan Saeed</strong><br />
                    HOTEL RUTHERBACH<br />
                    Ruhrtalstraße 215 - 217<br />
                    D-45219 Essen-Kettwig<br /><br />
                    Telefon: 0201 - 40 88 39 18<br />
                    E-Mail: info@hotel-rutherbach.de
                  </p>
                </div>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-white mb-4">3. Datenerfassung auf dieser Website</h2>
                
                <h3 className="text-xl font-medium text-accent mb-3">Kontaktformular</h3>
                <p className="text-gray-300 mb-4">
                  Wenn Sie uns per Kontaktformular Anfragen zukommen lassen, werden Ihre Angaben aus dem 
                  Anfrageformular inklusive der von Ihnen dort angegebenen Kontaktdaten zwecks Bearbeitung 
                  der Anfrage und für den Fall von Anschlussfragen bei uns gespeichert. Diese Daten geben 
                  wir nicht ohne Ihre Einwilligung weiter.
                </p>
                <p className="text-gray-300 mb-4">
                  Die Verarbeitung dieser Daten erfolgt auf Grundlage von Art. 6 Abs. 1 lit. b DSGVO, 
                  sofern Ihre Anfrage mit der Erfüllung eines Vertrags zusammenhängt oder zur Durchführung 
                  vorvertraglicher Maßnahmen erforderlich ist.
                </p>

                <h3 className="text-xl font-medium text-accent mb-3">Cookies</h3>
                <p className="text-gray-300 mb-4">
                  Unsere Website verwendet Cookies. Das sind kleine Textdateien, die Ihr Webbrowser auf Ihrem 
                  Endgerät speichert. Cookies helfen uns dabei, unser Angebot nutzerfreundlicher, effektiver 
                  und sicherer zu machen.
                </p>
                <p className="text-gray-300 mb-4">
                  Einige Cookies sind technisch notwendig, damit bestimmte Funktionen der Website funktionieren 
                  (essenziell). Andere Cookies werden nur mit Ihrer ausdrücklichen Einwilligung gesetzt 
                  (Statistik, Marketing).
                </p>
                <p className="text-gray-300 mb-4">
                  Sie können Ihre Cookie-Einstellungen jederzeit über den "Cookie-Einstellungen"-Link 
                  im Footer dieser Seite ändern.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-white mb-4">4. Ihre Rechte</h2>
                <p className="text-gray-300 mb-4">
                  Sie haben jederzeit das Recht auf:
                </p>
                <ul className="list-disc list-inside text-gray-300 space-y-2 mb-4">
                  <li>Auskunft über Ihre gespeicherten personenbezogenen Daten</li>
                  <li>Berichtigung unrichtiger Daten</li>
                  <li>Löschung Ihrer Daten (Recht auf Vergessenwerden)</li>
                  <li>Einschränkung der Verarbeitung</li>
                  <li>Datenübertragbarkeit</li>
                  <li>Widerspruch gegen die Verarbeitung</li>
                </ul>
                <p className="text-gray-300 mb-4">
                  Zur Ausübung dieser Rechte kontaktieren Sie uns bitte unter den oben angegebenen Kontaktdaten.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-white mb-4">5. Dauer der Datenspeicherung</h2>
                <p className="text-gray-300 mb-4">
                  Wir speichern Ihre personenbezogenen Daten nur so lange, wie dies zur Erfüllung der 
                  Zwecke erforderlich ist, für die sie erhoben wurden, oder wie es gesetzliche 
                  Aufbewahrungsfristen vorsehen.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-white mb-4">6. Beschwerderecht</h2>
                <p className="text-gray-300 mb-4">
                  Sie haben das Recht, sich bei einer Aufsichtsbehörde zu beschweren. Zuständige 
                  Aufsichtsbehörde in datenschutzrechtlichen Fragen ist die Landesdatenschutzbeauftragte 
                  der Bundesrepublik Deutschland.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-white mb-4">7. Änderungen dieser Datenschutzerklärung</h2>
                <p className="text-gray-300 mb-4">
                  Wir behalten uns vor, diese Datenschutzerklärung anzupassen, damit sie stets den 
                  aktuellen rechtlichen Anforderungen entspricht oder um Änderungen unserer Leistungen 
                  in der Datenschutzerklärung umzusetzen.
                </p>
                <p className="text-gray-300">
                  Stand: Februar 2026
                </p>
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

export default Privacy
