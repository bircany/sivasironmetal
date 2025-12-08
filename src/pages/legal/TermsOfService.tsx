import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';

export default function TermsOfService() {
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
                        {t('terms.title', 'Terms of Service')}
                    </h1>
                    <div className="prose prose-lg text-gray-600">
                        <p className="lead text-xl">
                            {t('terms.intro', 'Please read these Terms of Service carefully before using our website and services operated by Sivas Iron Metal.')}
                        </p>
                        
                        <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">{t('terms.section1.title')}</h3>
                        <p>
                            {t('terms.section1.content')}
                        </p>

                        <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">{t('terms.section2.title')}</h3>
                        <p>
                            {t('terms.section2.content')}
                        </p>

                        <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">{t('terms.section3.title')}</h3>
                        <p>
                            {t('terms.section3.content')}
                        </p>
                        
                        <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">{t('terms.section4.title')}</h3>
                        <p>
                            {t('terms.section4.content')}
                        </p>

                        <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">{t('terms.section5.title')}</h3>
                        <p>
                            {t('terms.section5.content')}
                        </p>
                        
                        <div className="mt-12 text-sm text-gray-500">
                            {t('terms.lastUpdated', 'Last Updated: December 2025')}
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
    );
}
