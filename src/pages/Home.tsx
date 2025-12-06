import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import ThreeBackground from '../components/ThreeBackground';
import ProductList from './products/ProductList';
import Production from './Production';
import Services from './Services';
import References from './References';
import Contact from './Contact';
import Chatbot from '../components/Chatbot';

export default function Home() {
    const { t } = useTranslation();

    return (
        <div className="flex flex-col min-h-screen w-full overflow-x-hidden">
            {/* Hero Section */}
            <div 
                className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-cover bg-center bg-no-repeat pt-20 pb-40"
                style={{ backgroundImage: 'linear-gradient(rgba(10, 5, 5, 0.6) 0%, rgba(34, 16, 16, 0.8) 100%), url("https://lh3.googleusercontent.com/aida-public/AB6AXuByoOzlV6bUkOunlkj7ceYCV3-LGqTul2AGeFiOMtmpwQT1_phxI7cbvXd0j7xU0XpSNda6lab0Ugg5lkmd7ofCr3LgDpVPW7ZFZ0s7RQzgwviWGGL5vTzfHvaX9suL-oQ9sVr_pB464fTAYSzcXKlWc_avwZX4ZkjJFr9Pw7AIZ_pKc6VojBlj9fJEJqsOkLWZ3dskCfogQXqzypbcvhlAg3hJqvmmGD9KHdcai2U_OvMhm-UltmYZ1MEhttr15wx-50QBzNgKF6tI")' }}
            >
                <ThreeBackground />
                
                <div className="container relative z-10 mx-auto px-4 text-center md:px-10 lg:px-20 xl:px-40">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="flex flex-col items-center gap-6"
                    >
                        <h1 className="max-w-4xl text-5xl font-black uppercase tracking-tighter leading-tight text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-200 to-gray-400 md:text-6xl lg:text-7xl drop-shadow-2xl">
                            {t('home.hero.title', 'Building the Future with Strong Foundations')}
                        </h1>
                        <p className="max-w-2xl text-lg font-medium text-white/90 md:text-xl drop-shadow-lg">
                            {t('home.hero.subtitle', 'Your trusted partner in global iron and metal trade. Quality, reliability, and innovation in every ton.')}
                        </p>
                        
                        <div className="flex flex-wrap items-center justify-center gap-4">
                            <a 
                                href="#products"
                                className="flex min-w-[160px] cursor-pointer items-center justify-center rounded-full bg-primary px-8 py-4 text-base font-bold text-white shadow-lg shadow-primary/30 transition-all hover:scale-105 hover:bg-red-700 hover:shadow-xl"
                            >
                                {t('home.hero.cta', 'Our Products')}
                            </a>
                            <a 
                                href="#contact"
                                className="flex min-w-[160px] cursor-pointer items-center justify-center rounded-full border-2 border-white/20 bg-white/10 px-8 py-4 text-base font-bold text-white backdrop-blur-sm transition-all hover:scale-105 hover:bg-white/20"
                            >
                                {t('home.hero.contact', 'Contact Us')}
                            </a>
                        </div>
                    </motion.div>
                </div>

                {/* Scroll Indicator */}
                <motion.div 
                    animate={{ y: [0, 10, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/50 hidden md:block"
                >
                    <div className="h-10 w-6 rounded-full border-2 border-current p-1">
                        <div className="h-2 w-full rounded-full bg-current"></div>
                    </div>
                </motion.div>

                {/* Stats Section */}
                <div className="absolute bottom-0 left-0 w-full z-20 px-4 pb-8">
                    <div className="container mx-auto">
                        <div className="grid grid-cols-2 gap-4 rounded-2xl border border-white/10 bg-black/60 p-6 backdrop-blur-md shadow-2xl md:grid-cols-4 md:gap-6 md:p-8">
                            {[
                                { label: t('home.stats.years', 'Years Experience'), value: "25+" },
                                { label: t('home.stats.countries', 'Countries Exported'), value: "40+" },
                                { label: t('home.stats.projects', 'Completed Projects'), value: "1000+" },
                                { label: t('home.stats.capacity', 'Annual Capacity'), value: "500k+" }
                            ].map((stat, index) => (
                                <div key={index} className="flex flex-col items-center justify-center text-center">
                                    <span className="text-2xl md:text-4xl font-black text-white">{stat.value}</span>
                                    <span className="mt-1 md:mt-2 text-xs md:text-sm font-bold text-gray-200">{stat.label}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* Products Section */}
            <section id="products" className="w-full">
                <ProductList />
            </section>

            {/* Production Section */}
            <section id="production" className="w-full">
                <Production />
            </section>

            {/* Services Section */}
            <section id="services" className="w-full">
                <Services />
            </section>

            {/* References Section */}
            <section id="references" className="w-full">
                <References />
            </section>

            {/* Contact Section */}
            <section id="contact" className="w-full">
                <Contact />
            </section>

            <Chatbot />
        </div>
    );
}
