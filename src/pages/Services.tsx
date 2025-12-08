import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Globe, ShieldCheck, Truck, Anchor, Award } from 'lucide-react';

export default function Services() {
    const { t } = useTranslation();
    const [activeTab, setActiveTab] = useState<'quality' | 'delivery'>('quality');

    // Placeholder logos for fallback
    const placeholderLogos = [
        "/images/partners/placeholder-1.png",
        "/images/partners/placeholder-2.png",
        "/images/partners/placeholder-3.png",
        "/images/partners/placeholder-4.png",
        "/images/partners/placeholder-5.png"
    ];

    // Real industry partners data for marquee - Using multiple sources for reliability
    const partners = [
        // Automotive brands (steel consumers)
        "https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/BMW.svg/200px-BMW.svg.png",
        "https://upload.wikimedia.org/wikipedia/commons/thumb/9/90/Mercedes-Logo.svg/200px-Mercedes-Logo.svg.png",
        "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/Toyota_svg.svg/200px-Toyota_svg.svg.png",
        "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Ford_logo_flat.svg/200px-Ford_logo_flat.svg.png",
        "https://upload.wikimedia.org/wikipedia/commons/thumb/2/25/Audi-Logo_2016.svg/200px-Audi-Logo_2016.svg.png",
        "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/Hyundai_Motor_Company_logo.svg/200px-Hyundai_Motor_Company_logo.svg.png",
        "https://upload.wikimedia.org/wikipedia/commons/thumb/9/92/Renault_2021.svg/200px-Renault_2021.svg.png",
        // Steel & Industrial companies
        "https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/ArcelorMittal_logo.svg/200px-ArcelorMittal_logo.svg.png",
        "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/ThyssenKrupp_logo.svg/200px-ThyssenKrupp_logo.svg.png",
        "https://upload.wikimedia.org/wikipedia/commons/thumb/5/55/Siemens_AG_logo.svg/200px-Siemens_AG_logo.svg.png",
        "https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/Bosch-logo.svg/200px-Bosch-logo.svg.png",
        "https://upload.wikimedia.org/wikipedia/en/thumb/d/d4/Caterpillar_logo.svg/200px-Caterpillar_logo.svg.png",
        "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/Tata_Group_Logo.svg/200px-Tata_Group_Logo.svg.png",
        "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ab/Volvo-Iron-Mark-Black-RGB.svg/200px-Volvo-Iron-Mark-Black-RGB.svg.png",
        "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e6/JCB_logo.svg/200px-JCB_logo.svg.png"
    ];

    // Duplicated list for seamless loop (A + B where B is clone of A)
    // We need enough copies to fill the screen width + buffer. 
    // Given we now have 15 logos, let's make it 3x for smooth scrolling
    const marqueePartners = [...partners, ...partners, ...partners];

    return (
        <div className="flex flex-col min-h-screen w-full bg-slate-50 overflow-x-hidden">
            {/* Hero Section */}
            <div className="relative w-full h-[85vh] min-h-[600px] flex items-center justify-center overflow-hidden">
                <div 
                    className="absolute inset-0 bg-cover bg-center bg-no-repeat bg-fixed transform scale-105"
                    style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDIJMvBwDwEjaU3p1ZEYAXnnIE8_dNelCqlHmfJ9gDsHbYyzrnmz-ndXyDomMQml2uY08fLTowFEg7PF69H58UdSzYVOuHGESRXx6bwLSiM5OIET6z4T7Zbt0ASxax_r-e4pEkugm3OWjiF14cbiBH7LtJE4HB25OzhyI62v4Nwp-VXZ3QXGgu3swYdBRmwvTqHb7uTe49YagxTtV35Zez_0vs5IFJzg3ffFLuOTVGhJfscZ6p7jZebnc3L73JSfMhj3kC6cyMCw1yz")' }}
                >
                    <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent" />
                </div>
                
                <div className="container relative z-10 mx-auto px-4">
                    <motion.div 
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="flex flex-col gap-6 max-w-4xl"
                    >
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/20 backdrop-blur-md border border-primary/30 w-fit">
                            <Anchor className="w-4 h-4 text-primary" />
                            <span className="text-sm font-bold text-white tracking-wider uppercase">{t('services.hero.badge', 'Global Logistics Partner')}</span>
                        </div>
                        <h1 className="text-5xl lg:text-7xl font-black uppercase tracking-tighter leading-[0.9] text-white drop-shadow-2xl">
                            {t('services.hero.title', 'Global Iron & Metal Trade Solutions')}
                        </h1>
                        <p className="text-lg lg:text-xl text-gray-200 font-light leading-relaxed max-w-2xl border-l-4 border-primary pl-6">
                            {t('services.hero.subtitle', 'Your trusted partner for seamless import and export of industrial metals worldwide.')}
                        </p>
                        <motion.button 
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="flex w-fit items-center gap-2 rounded-full bg-primary px-8 py-4 text-base font-bold text-white shadow-lg shadow-primary/30 transition-all hover:bg-red-700"
                        >
                            <span>{t('services.hero.button', 'Explore Our Services')}</span>
                            <Truck className="w-5 h-5" />
                        </motion.button>
                    </motion.div>
                </div>
            </div>

            {/* Marquee Section */}
            <div className="w-full bg-white border-b border-gray-100 py-10 overflow-hidden">
                <p className="text-center text-sm font-bold text-gray-400 uppercase tracking-widest mb-6">{t('services.marquee.title', 'Trusted by Industry Leaders')}</p>
                <div className="relative flex w-full overflow-hidden mask-linear-gradient">
                    {/* mask-linear-gradient is not standard, but we'll use a wrapper div for masking if needed. sticking to simple overflow-hidden for now. */}
                    <div className="flex w-full overflow-hidden">
                         <motion.div 
                            className="flex gap-16 items-center whitespace-nowrap" // removed min-w-full, added whitespace-nowrap
                            animate={{ x: "-50%" }} // Move to -50% of the container width (which contains 2 full sets)
                            transition={{ 
                                repeat: Infinity, 
                                ease: "linear", 
                                duration: 30 
                            }}
                            style={{ width: "max-content" }} // Ensure div takes full width of content
                        >
                            {/* Render the list twice. Since marqueePartners is already 4x, this is huge.
                                Let's simplify. marqueePartners IS the full list.
                                We just need to make sure marqueePartners is exactly 2 copies of the base list?
                                NO. To use x: -50%, the content must be perfectly symmetrical halves.
                                So we defined marqueePartners as 4x. Halves are 2x and 2x. That works.
                            */}
                            {marqueePartners.map((src, i) => (
                                <div key={i} className="h-20 w-40 flex-shrink-0 flex items-center justify-center p-4 bg-white hover:bg-gray-50 transition-colors rounded-xl">
                                    <img 
                                        src={src} 
                                        alt="Brand" 
                                        className="max-h-full max-w-full object-contain filter grayscale-0 opacity-100 hover:scale-110 transition-transform duration-300" 
                                        onError={(e) => {
                                            // Use a placeholder logo instead of text
                                            const placeholderIndex = i % placeholderLogos.length;
                                            (e.target as HTMLImageElement).src = placeholderLogos[placeholderIndex];
                                            (e.target as HTMLImageElement).onerror = null; // Prevent infinite loop
                                        }}
                                    />
                                </div>
                            ))}
                        </motion.div>
                    </div>
                </div>
            </div>

            <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
                
                {/* Services Grid with Animations */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-32">
                    <motion.div 
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="group relative flex flex-col gap-4 rounded-3xl bg-white p-8 shadow-2xl shadow-gray-200/50 hover:shadow-primary/10 transition-all duration-300"
                    >
                        <div className="absolute top-0 right-0 w-32 h-32 bg-gray-50 rounded-bl-full -z-10 group-hover:bg-primary/5 transition-colors"></div>
                        <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-orange-600 flex items-center justify-center text-white mb-4 shadow-lg shadow-primary/30 group-hover:scale-110 transition-transform">
                            <Globe className="w-8 h-8" />
                        </div>
                        <h2 className="text-gray-900 text-2xl font-black">{t('services.items.network.title', 'Global Supplier Network')}</h2>
                        <p className="text-gray-500 leading-relaxed">{t('services.items.network.desc', 'Access our extensive and reliable network of international partners.')}</p>
                    </motion.div>

                    <motion.div 
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="group relative flex flex-col gap-4 rounded-3xl bg-white p-8 shadow-2xl shadow-gray-200/50 hover:shadow-primary/10 transition-all duration-300"
                    >
                        <div className="absolute top-0 right-0 w-32 h-32 bg-gray-50 rounded-bl-full -z-10 group-hover:bg-primary/5 transition-colors"></div>
                        <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-600 to-indigo-600 flex items-center justify-center text-white mb-4 shadow-lg shadow-blue-500/30 group-hover:scale-110 transition-transform">
                            <ShieldCheck className="w-8 h-8" />
                        </div>
                        <h2 className="text-gray-900 text-2xl font-black">{t('services.items.customs.title', 'Customs Management')}</h2>
                        <p className="text-gray-500 leading-relaxed">{t('services.items.customs.desc', 'We handle complex customs clearances seamlessly for you.')}</p>
                    </motion.div>

                    <motion.div 
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 }}
                        className="group relative flex flex-col gap-4 rounded-3xl bg-white p-8 shadow-2xl shadow-gray-200/50 hover:shadow-primary/10 transition-all duration-300"
                    >
                        <div className="absolute top-0 right-0 w-32 h-32 bg-gray-50 rounded-bl-full -z-10 group-hover:bg-primary/5 transition-colors"></div>
                        <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-emerald-500 to-teal-600 flex items-center justify-center text-white mb-4 shadow-lg shadow-emerald-500/30 group-hover:scale-110 transition-transform">
                            <Truck className="w-8 h-8" />
                        </div>
                        <h2 className="text-gray-900 text-2xl font-black">{t('services.items.logistics.title', 'Logistics Solutions')}</h2>
                        <p className="text-gray-500 leading-relaxed">{t('services.items.logistics.desc', 'Benefit from our end-to-end transportation and logistics capabilities.')}</p>
                    </motion.div>
                </div>

                {/* Quality / Delivery Slider Section */}
                <motion.div 
                    initial={{ opacity: 0, x: 100 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="mb-32 flex flex-col lg:flex-row gap-12 items-center"
                >
                    <div className="lg:w-1/2">
                        <span className="block text-primary font-bold tracking-widest uppercase mb-2 text-sm">{t('services.standards.title', 'STANDARTLARIMIZ')}</span>
                        <h2 className="text-4xl font-black text-gray-900 mb-6 leading-tight">{t('services.standards.subtitle', 'Her Sevkiyatta Mükemmellik')}</h2>
                        <div className="flex gap-4 mb-8 border-b border-gray-100">
                            <button 
                                onClick={() => setActiveTab('quality')}
                                className={`pb-4 font-bold text-lg transition-all relative ${activeTab === 'quality' ? 'text-primary' : 'text-gray-400 hover:text-gray-600'}`}
                            >
                                {t('services.tabs.quality', 'International Quality Standards')}
                                {activeTab === 'quality' && <motion.div layoutId="underline" className="absolute bottom-0 left-0 w-full h-1 bg-primary rounded-t-full" />}
                            </button>
                            <button 
                                onClick={() => setActiveTab('delivery')}
                                className={`pb-4 font-bold text-lg transition-all relative ${activeTab === 'delivery' ? 'text-primary' : 'text-gray-400 hover:text-gray-600'}`}
                            >
                                {t('services.tabs.delivery', 'Delivery Models')}
                                {activeTab === 'delivery' && <motion.div layoutId="underline" className="absolute bottom-0 left-0 w-full h-1 bg-primary rounded-t-full" />}
                            </button>
                        </div>
                        <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-xl">
                            <motion.p 
                                key={activeTab}
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                className="text-gray-600 text-lg leading-relaxed"
                            >
                                {activeTab === 'quality' 
                                    ? t('services.tabs.qualityContent', 'We are committed to upholding the highest international quality standards in every transaction. Our processes are certified and compliant with key industry benchmarks, including ISO 9001 for Quality Management and ISO 14001 for Environmental Management. This ensures that every product we handle meets rigorous specifications for quality, safety, and sustainability.')
                                    : t('services.tabs.deliveryContent', 'We offer flexible delivery terms including EXW, FOB, CIF, and DAP to suit your logistical needs. Our experienced team ensures smooth handling of all shipping documentation and customs procedures, minimizing delays and optimizing your supply chain efficiency.')
                                }
                            </motion.p>
                            {activeTab === 'quality' && (
                                <div className="mt-6 flex gap-4">
                                    <div className="flex items-center gap-2 px-4 py-2 bg-gray-50 rounded-lg text-sm font-bold text-gray-700"><Award className="w-4 h-4 text-primary"/> ISO 9001</div>
                                    <div className="flex items-center gap-2 px-4 py-2 bg-gray-50 rounded-lg text-sm font-bold text-gray-700"><Award className="w-4 h-4 text-primary"/> ISO 14001</div>
                                </div>
                            )}
                        </div>
                    </div>
                    <div className="lg:w-1/2 relative">
                        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent rounded-[2rem] transform translate-x-4 translate-y-4 -z-10" />
                        <motion.img 
                            key={activeTab}
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5 }}
                            src={activeTab === 'quality' 
                                ? "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2670&auto=format&fit=crop" 
                                : "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=2670&auto=format&fit=crop"
                            } 
                            alt="Standard" 
                            className="rounded-[2rem] shadow-2xl w-full h-[400px] object-cover"
                        />
                    </div>
                </motion.div>

                {/* Map Section - Reverted to Clean Image Style */}
                <motion.div 
                    initial={{ opacity: 0, scale: 0.99 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="mb-20"
                >
                    <div className="text-center mb-10">
                        <h2 className="text-4xl font-black text-gray-900 mb-4">{t('services.map.title', 'Exporting to Over 20 Countries')}</h2>
                        <p className="text-gray-500 text-lg max-w-2xl mx-auto">
                            {t('services.map.desc', 'Our global reach ensures delivery to your doorstep, no matter where you are.')}
                        </p>
                    </div>
                    <div className="rounded-3xl overflow-hidden shadow-2xl border border-gray-100 bg-white">
                        <img 
                            className="w-full h-auto object-cover" 
                            alt="Global Export Map" 
                            src="https://lh3.googleusercontent.com/aida-public/AB6AXuCMTPqnK9EtLsUKXKBUe2zbzugRBo13ZrD4JwIDxdGJdRoSdomOwfRrdeAfhzOkjbP-uXz4lzhYqiWjjfyP7hQc-6DYXSMopoAYG87h_0-gO3cu3H0drVbF3WkvNPo0db75YeFg6fXC2k8SZWsD_sFXhBcqmRoPrEAhizrJ_BPjJL_vzGr4BMl7T9i0auEbUeKOt7Cc6ZiGWm_mW2mEqzg_u65Onph0gU_TpzZkzDBOrsTKUg36a4yjq23cN8QL7nBuxYLpfjHJPqDH"
                        />
                    </div>
                </motion.div>

                {/* CTA Section */}
                <motion.div 
                    initial={{ y: 50, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    className="relative flex flex-col items-center justify-center text-center gap-8 p-12 lg:p-20 rounded-[3rem] overflow-hidden bg-primary shadow-2xl shadow-primary/40"
                >
                    <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10 mix-blend-overlay"></div>
                    <div className="absolute inset-0 bg-gradient-to-br from-black/20 to-transparent"></div>
                    
                    <div className="relative z-10 max-w-3xl">
                        <h3 className="text-white text-4xl lg:text-5xl font-black mb-6 tracking-tight">{t('services.cta.title', 'Ready to Streamline Your Metal Trade?')}</h3>
                        <p className="text-white/90 text-xl font-medium mb-10">{t('services.cta.desc', 'Contact our trade experts today for a personalized consultation.')}</p>
                        <Link to="/iletisim" className="inline-flex min-w-[200px] items-center justify-center rounded-full bg-white px-8 py-4 text-primary text-lg font-black shadow-lg transition-transform hover:scale-105 hover:shadow-xl">
                            {t('services.cta.button', 'Get a Quote Today')}
                        </Link>
                    </div>
                </motion.div>
            </div>
        </div>
    );
}
