import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Target, Award, Users, Globe, ShieldCheck } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function About() {
    const { t } = useTranslation();

    const stats = [
        { label: t('corporate.stats.experience', 'Years Experience'), value: '25+' },
        { label: t('corporate.stats.export', 'Countries Exported'), value: '40+' },
        { label: t('corporate.stats.projects', 'Projects Completed'), value: '1000+' },
        { label: t('corporate.stats.team', 'Team Members'), value: '150+' },
    ];

    const values = [
        { icon: Target, title: t('corporate.values.innovation', 'Innovation'), desc: t('corporate.values.innovation_desc', 'Constantly adopting new technologies to improve efficiency.') },
        { icon: ShieldCheck, title: t('corporate.values.quality', 'Quality Assurance'), desc: t('corporate.values.quality_desc', 'ISO 9001 & 14001 certified processes for every shipment.') },
        { icon: Globe, title: t('corporate.values.global', 'Global Reach'), desc: t('corporate.values.global_desc', 'Strong logistics network covering 5 continents.') },
        { icon: Users, title: t('corporate.values.customer', 'Customer Focus'), desc: t('corporate.values.customer_desc', 'Dedicated support team available 24/7 for you.') },
    ];

    return (
        <div className="flex flex-col gap-12">
            {/* Header Section */}
            <div className="flex flex-col gap-6">
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <h1 className="text-4xl font-black text-gray-900 tracking-tight sm:text-5xl mb-4">
                        {t('corporate.about.title', 'About Us')} <span className="text-primary">.</span>
                    </h1>
                    <div className="h-1 w-20 bg-primary rounded-full"></div>
                </motion.div>
                
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
                    <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="space-y-6 text-lg text-gray-600 leading-relaxed"
                    >
                        <p>
                            {t('corporate.about.p1', 'Sivas Iron Metal stands as a prominent leader in the global steel and iron import/export industry. With decades of experience and an unwavering commitment to quality, we have established ourselves as a reliable partner for businesses seeking premium metal products worldwide.')}
                        </p>
                        <p>
                            {t('corporate.about.p2', 'Our company specializes in the procurement, processing, and distribution of high-quality steel and iron materials to meet diverse industrial needs. We take pride in maintaining the highest standards of quality control, ensuring that every product leaving our facilities meets or exceeds international specifications.')}
                        </p>
                    </motion.div>
                    
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.3 }}
                        className="relative"
                    >
                         <div className="absolute inset-0 bg-primary/10 rounded-2xl transform rotate-3 scale-105 z-0"></div>
                         <img 
                            src="https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?q=80&w=2670&auto=format&fit=crop" 
                            alt="Factory Interior" 
                            className="relative z-10 w-full h-80 object-cover rounded-2xl shadow-xl shadow-gray-200"
                        />
                    </motion.div>
                </div>
            </div>

            {/* Stats Overview */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 py-8 border-y border-gray-100">
                {stats.map((stat, i) => (
                    <div key={i} className="text-center">
                        <div className="text-3xl font-black text-primary mb-1">{stat.value}</div>
                        <div className="text-xs font-bold text-gray-500 uppercase tracking-wider">{stat.label}</div>
                    </div>
                ))}
            </div>

            {/* Core Values */}
            <div className="space-y-8">
                <div className="text-center md:text-left">
                    <h2 className="text-2xl font-bold text-gray-900 mb-2">{t('corporate.about.values_title', 'Core Values & Capabilities')}</h2>
                    <p className="text-gray-500">{t('corporate.about.values_subtitle', 'What sets us apart in the competitive metal industry.')}</p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {values.map((item, i) => (
                        <motion.div 
                            key={i}
                            whileHover={{ y: -5 }}
                            className="flex gap-4 p-6 rounded-xl bg-gray-50 border border-gray-100 hover:shadow-lg transition-all"
                        >
                            <div className="flex-shrink-0 w-12 h-12 bg-white rounded-lg flex items-center justify-center text-primary shadow-sm border border-gray-100">
                                <item.icon className="w-6 h-6" />
                            </div>
                            <div>
                                <h3 className="text-lg font-bold text-gray-900 mb-2">{item.title}</h3>
                                <p className="text-sm text-gray-600 leading-relaxed">{item.desc}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Bottom CTA / Certificates Preview */}
            <div className="bg-slate-900 rounded-2xl p-8 md:p-12 text-center text-white relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-primary/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
                <div className="relative z-10">
                    <Award className="w-12 h-12 text-primary mx-auto mb-6" />
                    <h3 className="text-2xl font-bold mb-4">{t('corporate.about.cert_title', 'Certified Excellence')}</h3>
                    <p className="text-gray-300 max-w-2xl mx-auto mb-8">
                        {t('corporate.about.cert_desc', 'We strictly adhere to international quality standards including ISO 9001:2015, ensuring reliability in every deal.')}
                    </p>
                    <div className="flex flex-wrap justify-center gap-4">
                        <Link to="/kurumsal/kalite-politikamiz" className="px-6 py-3 bg-white text-slate-900 font-bold rounded-lg hover:bg-gray-100 transition-colors">
                            {t('corporate.about.view_certs', 'View Certificates')}
                        </Link>
                         <Link to="/iletisim" className="px-6 py-3 bg-primary text-white font-bold rounded-lg hover:bg-red-700 transition-colors">
                            {t('corporate.about.contact_us', 'Contact Us')}
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
