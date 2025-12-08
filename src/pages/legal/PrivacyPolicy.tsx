import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';

export default function PrivacyPolicy() {
    const { t } = useTranslation();

    return (
        <div className="min-h-screen bg-white pt-24 pb-12">
            <div className="container mx-auto px-4 md:px-8 max-w-4xl">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <h1 className="text-4xl md:text-5xl font-black mb-8 text-gray-900 font-display">
                        {t('privacy.title', 'Privacy Policy')}
                    </h1>
                    <div className="prose prose-lg text-gray-600">
                        <p className="lead text-xl">
                            {t('privacy.intro', 'At Sivas Iron Metal, we value your privacy and are committed to protecting your personal data.')}
                        </p>
                        
                        <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">{t('privacy.section1.title')}</h3>
                        <p>
                            {t('privacy.section1.content')}
                        </p>

                        <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">{t('privacy.section2.title')}</h3>
                        <p>
                            {t('privacy.section2.content')}
                        </p>
                        <ul className="list-disc pl-6 space-y-2">
                            <li>{t('privacy.section2.list1')}</li>
                            <li>{t('privacy.section2.list2')}</li>
                            <li>{t('privacy.section2.list3')}</li>
                        </ul>

                        <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">{t('privacy.section3.title')}</h3>
                        <p>
                            {t('privacy.section3.content')}
                        </p>

                        <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">{t('privacy.section4.title')}</h3>
                        <p>
                            {t('privacy.section4.content')} <a href="mailto:info@sivasironmetal.com" className="text-primary font-bold">info@sivasironmetal.com</a>
                        </p>
                        
                        <div className="mt-12 text-sm text-gray-500">
                            {t('privacy.lastUpdated', 'Last Updated: December 2025')}
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
    );
}
