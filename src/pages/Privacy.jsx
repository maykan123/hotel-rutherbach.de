import { useTranslation } from 'react-i18next'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

function Privacy() {
  const { t, i18n } = useTranslation()
  const rights = t('privacy.s4.rights', { returnObjects: true })

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
              {t('privacy.title1')}<span className="text-accent">{t('privacy.titleAccent')}</span>
            </h1>

            {i18n.language === 'en' && (
              <p className="text-gray-500 text-sm italic mb-8 border-l-2 border-gray-600 pl-3">
                {t('privacy.translationNote')}
              </p>
            )}

            <div className="prose prose-invert max-w-none">
              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-white mb-4">{t('privacy.s1.title')}</h2>
                <h3 className="text-xl font-medium text-accent mb-3">{t('privacy.s1.subtitle')}</h3>
                <p className="text-gray-300 mb-4">
                  {t('privacy.s1.text')}
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-white mb-4">{t('privacy.s2.title')}</h2>
                <div className="bg-primary p-6 rounded-lg border border-gray-700 mb-4">
                  <p className="text-gray-300">
                    <strong className="text-white">Makyan Saeed</strong><br />
                    HOTEL RUTHERBACH<br />
                    Ruhrtalstraße 215 - 217<br />
                    D-45219 Essen-Kettwig<br /><br />
                    {t('privacy.s2.phone')} 0201 - 40 88 39 18<br />
                    {t('privacy.s2.email')} info@hotel-rutherbach.de
                  </p>
                </div>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-white mb-4">{t('privacy.s3.title')}</h2>
                
                <h3 className="text-xl font-medium text-accent mb-3">{t('privacy.s3.contactFormTitle')}</h3>
                <p className="text-gray-300 mb-4">
                  {t('privacy.s3.contactFormP1')}
                </p>
                <p className="text-gray-300 mb-4">
                  {t('privacy.s3.contactFormP2')}
                </p>

                <h3 className="text-xl font-medium text-accent mb-3">{t('privacy.s3.cookiesTitle')}</h3>
                <p className="text-gray-300 mb-4">
                  {t('privacy.s3.cookiesP1')}
                </p>
                <p className="text-gray-300 mb-4">
                  {t('privacy.s3.cookiesP2')}
                </p>
                <p className="text-gray-300 mb-4">
                  {t('privacy.s3.cookiesP3')}
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-white mb-4">{t('privacy.s4.title')}</h2>
                <p className="text-gray-300 mb-4">
                  {t('privacy.s4.intro')}
                </p>
                <ul className="list-disc list-inside text-gray-300 space-y-2 mb-4">
                  {rights.map((right) => (
                    <li key={right}>{right}</li>
                  ))}
                </ul>
                <p className="text-gray-300 mb-4">
                  {t('privacy.s4.outro')}
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-white mb-4">{t('privacy.s5.title')}</h2>
                <p className="text-gray-300 mb-4">
                  {t('privacy.s5.text')}
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-white mb-4">{t('privacy.s6.title')}</h2>
                <p className="text-gray-300 mb-4">
                  {t('privacy.s6.text')}
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-semibold text-white mb-4">{t('privacy.s7.title')}</h2>
                <p className="text-gray-300 mb-4">
                  {t('privacy.s7.text')}
                </p>
                <p className="text-gray-300">
                  {t('privacy.s7.date')}
                </p>
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

export default Privacy
