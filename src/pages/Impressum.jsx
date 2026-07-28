import { useTranslation } from 'react-i18next'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

function Impressum() {
  const { t, i18n } = useTranslation()

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
              <span className="text-accent">{t('impressum.title')}</span>
            </h1>

            {i18n.language === 'en' && (
              <p className="text-gray-500 text-sm italic mb-8 border-l-2 border-gray-600 pl-3">
                {t('impressum.translationNote')}
              </p>
            )}

            <div className="space-y-8">
              {/* Angaben gemäß § 5 TMG */}
              <section>
                <h2 className="text-2xl font-semibold text-accent mb-4">
                  {t('impressum.s1.title')}
                </h2>
                <div className="bg-primary p-6 rounded-lg border border-gray-700">
                  <p className="text-gray-300 leading-relaxed">
                    <strong className="text-white text-lg">Makyan Saeed</strong><br />
                    HOTEL RUTHERBACH<br /><br />
                    Ruhrtalstraße 215 - 217<br />
                    D-45219 Essen-Kettwig<br />
                    {t('impressum.s1.country')}
                  </p>
                </div>
              </section>

              {/* Kontakt */}
              <section>
                <h2 className="text-2xl font-semibold text-accent mb-4">{t('impressum.s2.title')}</h2>
                <div className="bg-primary p-6 rounded-lg border border-gray-700">
                  <p className="text-gray-300 leading-relaxed">
                    <strong className="text-white">{t('impressum.s2.phone')}</strong><br />
                    0201 - 40 88 39 18<br /><br />
                    <strong className="text-white">{t('impressum.s2.email')}</strong><br />
                    <a href="mailto:info@hotel-rutherbach.de" className="text-accent hover:underline">
                      info@hotel-rutherbach.de
                    </a><br /><br />
                    <strong className="text-white">{t('impressum.s2.website')}</strong><br />
                    <a href="https://www.hotel-rutherbach.de" className="text-accent hover:underline">
                      www.hotel-rutherbach.de
                    </a>
                  </p>
                </div>
              </section>

              {/* Umsatzsteuer */}
              <section>
                <h2 className="text-2xl font-semibold text-accent mb-4">
                  {t('impressum.s3.title')}
                </h2>
                <div className="bg-primary p-6 rounded-lg border border-gray-700">
                  <p className="text-gray-300">
                    <strong className="text-white">{t('impressum.s3.label')}</strong><br />
                    <span className="text-gray-400">{t('impressum.s3.placeholder')}</span>
                  </p>
                  <p className="text-gray-500 text-sm mt-2">
                    {t('impressum.s3.todo')}
                  </p>
                </div>
              </section>

              {/* Gewerbeanmeldung */}
              <section>
                <h2 className="text-2xl font-semibold text-accent mb-4">
                  {t('impressum.s4.title')}
                </h2>
                <div className="bg-primary p-6 rounded-lg border border-gray-700">
                  <p className="text-gray-300">
                    {t('impressum.s4.text')}<br />
                    <strong className="text-white">{t('impressum.s4.authority')}</strong>
                  </p>
                </div>
              </section>

              {/* Streitschlichtung */}
              <section>
                <h2 className="text-2xl font-semibold text-accent mb-4">
                  {t('impressum.s5.title')}
                </h2>
                <div className="bg-primary p-6 rounded-lg border border-gray-700">
                  <p className="text-gray-300 mb-4">
                    {t('impressum.s5.p1')}<br />
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
                    {t('impressum.s5.p2')}
                  </p>
                </div>
              </section>

              {/* Haftung für Inhalte */}
              <section>
                <h2 className="text-2xl font-semibold text-accent mb-4">
                  {t('impressum.s6.title')}
                </h2>
                <div className="bg-primary p-6 rounded-lg border border-gray-700">
                  <p className="text-gray-300 leading-relaxed">
                    {t('impressum.s6.p1')}
                  </p>
                  <p className="text-gray-300 mt-4 leading-relaxed">
                    {t('impressum.s6.p2')}
                  </p>
                </div>
              </section>

              {/* Haftung für Links */}
              <section>
                <h2 className="text-2xl font-semibold text-accent mb-4">
                  {t('impressum.s7.title')}
                </h2>
                <div className="bg-primary p-6 rounded-lg border border-gray-700">
                  <p className="text-gray-300 leading-relaxed">
                    {t('impressum.s7.p1')}
                  </p>
                </div>
              </section>

              {/* Urheberrecht */}
              <section>
                <h2 className="text-2xl font-semibold text-accent mb-4">
                  {t('impressum.s8.title')}
                </h2>
                <div className="bg-primary p-6 rounded-lg border border-gray-700">
                  <p className="text-gray-300 leading-relaxed">
                    {t('impressum.s8.p1')}
                  </p>
                </div>
              </section>

              {/* Bildnachweise */}
              <section>
                <h2 className="text-2xl font-semibold text-accent mb-4">
                  {t('impressum.s9.title')}
                </h2>
                <div className="bg-primary p-6 rounded-lg border border-gray-700">
                  <p className="text-gray-300">
                    {t('impressum.s9.p1')}
                  </p>
                  <p className="text-gray-500 text-sm mt-2">
                    {t('impressum.s9.todo')}
                  </p>
                </div>
              </section>
            </div>

            <div className="mt-12 pt-8 border-t border-gray-700">
              <Link to="/" className="text-accent hover:underline">
                {t('common.backHome')}
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default Impressum
