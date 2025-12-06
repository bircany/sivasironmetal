import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import ThreeBackground from '../components/ThreeBackground';

export default function Services() {
    const { t } = useTranslation();
    const [activeTab, setActiveTab] = useState<'quality' | 'delivery'>('quality');

    return (
        <div className="flex flex-col min-h-screen w-full bg-white overflow-x-hidden">
            {/* Full Width Hero Section */}
            <div 
                className="relative flex min-h-[600px] flex-col items-center justify-center bg-cover bg-center bg-no-repeat pt-20 pb-40"
                style={{ backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.4) 0%, rgba(0, 0, 0, 0.6) 100%), url("https://lh3.googleusercontent.com/aida-public/AB6AXuDIJMvBwDwEjaU3p1ZEYAXnnIE8_dNelCqlHmfJ9gDsHbYyzrnmz-ndXyDomMQml2uY08fLTowFEg7PF69H58UdSzYVOuHGESRXx6bwLSiM5OIET6z4T7Zbt0ASxax_r-e4pEkugm3OWjiF14cbiBH7LtJE4HB25OzhyI62v4Nwp-VXZ3QXGgu3swYdBRmwvTqHb7uTe49YagxTtV35Zez_0vs5IFJzg3ffFLuOTVGhJfscZ6p7jZebnc3L73JSfMhj3kC6cyMCw1yz")' }}
            >
                <ThreeBackground />
                <div className="container relative z-10 mx-auto px-4 text-center">
                    <div className="flex flex-col items-center gap-6 max-w-4xl mx-auto">
                        <h1 className="text-white text-5xl font-black uppercase tracking-tighter leading-tight sm:text-6xl lg:text-7xl drop-shadow-2xl">
                            {t('services.hero.title', 'Global Iron & Metal Trade Solutions')}
                        </h1>
                        <h2 className="text-white/90 text-lg font-medium leading-relaxed sm:text-xl max-w-2xl drop-shadow-lg">
                            {t('services.hero.subtitle', 'Your trusted partner for seamless import and export of industrial metals worldwide.')}
                        </h2>
                        <button className="flex min-w-[160px] cursor-pointer items-center justify-center rounded-full bg-primary px-8 py-4 text-base font-bold text-white shadow-lg shadow-primary/30 transition-all hover:scale-105 hover:bg-red-700 hover:shadow-xl">
                            <span className="truncate">{t('services.hero.button', 'Explore Our Services')}</span>
                        </button>
                    </div>
                </div>
            </div>

            {/* Content Container */}
            <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                
                {/* Services Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
                    <div className="flex flex-col gap-4 rounded-2xl border border-gray-100 bg-white p-8 shadow-lg hover:shadow-xl transition-all hover:-translate-y-1">
                        <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-2">
                            <span className="material-symbols-outlined text-3xl">public</span>
                        </div>
                        <div className="flex flex-col gap-2">
                            <h2 className="text-gray-900 text-xl font-bold leading-tight">{t('services.items.network.title', 'Global Supplier Network')}</h2>
                            <p className="text-gray-500 text-base leading-relaxed">{t('services.items.network.desc', 'Access our extensive and reliable network of international partners.')}</p>
                        </div>
                    </div>
                    <div className="flex flex-col gap-4 rounded-2xl border border-gray-100 bg-white p-8 shadow-lg hover:shadow-xl transition-all hover:-translate-y-1">
                        <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-2">
                            <span className="material-symbols-outlined text-3xl">verified_user</span>
                        </div>
                        <div className="flex flex-col gap-2">
                            <h2 className="text-gray-900 text-xl font-bold leading-tight">{t('services.items.customs.title', 'Customs Management')}</h2>
                            <p className="text-gray-500 text-base leading-relaxed">{t('services.items.customs.desc', 'We handle complex customs clearances seamlessly for you.')}</p>
                        </div>
                    </div>
                    <div className="flex flex-col gap-4 rounded-2xl border border-gray-100 bg-white p-8 shadow-lg hover:shadow-xl transition-all hover:-translate-y-1">
                        <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-2">
                            <span className="material-symbols-outlined text-3xl">local_shipping</span>
                        </div>
                        <div className="flex flex-col gap-2">
                            <h2 className="text-gray-900 text-xl font-bold leading-tight">{t('services.items.logistics.title', 'Logistics Solutions')}</h2>
                            <p className="text-gray-500 text-base leading-relaxed">{t('services.items.logistics.desc', 'Benefit from our end-to-end transportation and logistics capabilities.')}</p>
                        </div>
                    </div>
                </div>

                {/* Export Map Section */}
                <div className="mb-16">
                    <div className="text-center mb-10">
                        <h2 className="text-gray-900 text-3xl font-bold leading-tight tracking-tight mb-4">{t('services.map.title', 'Exporting to Over 20 Countries')}</h2>
                        <p className="text-gray-500 text-lg max-w-3xl mx-auto">
                            {t('services.map.desc', 'Our global reach is a testament to our experience and reliability. We have established strong trade routes and partnerships across continents, ensuring timely and efficient delivery to our clients worldwide. Explore our interactive map to see the extent of our export network.')}
                        </p>
                    </div>
                    <div className="rounded-2xl overflow-hidden border border-gray-200 shadow-2xl">
                        <img className="w-full h-auto object-cover" alt="World map" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCMTPqnK9EtLsUKXKBUe2zbzugRBo13ZrD4JwIDxdGJdRoSdomOwfRrdeAfhzOkjbP-uXz4lzhYqiWjjfyP7hQc-6DYXSMopoAYG87h_0-gO3cu3H0drVbF3WkvNPo0db75YeFg6fXC2k8SZWsD_sFXhBcqmRoPrEAhizrJ_BPjJL_vzGr4BMl7T9i0auEbUeKOt7Cc6ZiGWm_mW2mEqzg_u65Onph0gU_TpzZkzDBOrsTKUg36a4yjq23cN8QL7nBuxYLpfjHJPqDH"/>
                    </div>
                </div>

                {/* Standards Section */}
                <div className="mb-16">
                    <div className="flex border-b border-gray-200 mb-6">
                        <button 
                            onClick={() => setActiveTab('quality')}
                            className={`px-6 py-3 font-bold text-lg transition-colors border-b-2 ${activeTab === 'quality' ? 'text-primary border-primary' : 'text-gray-500 border-transparent hover:text-gray-900'}`}
                        >
                            {t('services.tabs.quality', 'International Quality Standards')}
                        </button>
                        <button 
                            onClick={() => setActiveTab('delivery')}
                            className={`px-6 py-3 font-bold text-lg transition-colors border-b-2 ${activeTab === 'delivery' ? 'text-primary border-primary' : 'text-gray-500 border-transparent hover:text-gray-900'}`}
                        >
                            {t('services.tabs.delivery', 'Delivery Models (Incoterms)')}
                        </button>
                    </div>
                    <div className="text-gray-600 text-lg leading-relaxed p-8 bg-gray-50 rounded-2xl border border-gray-200 min-h-[200px]">
                        <p className="animate-fade-in">
                            {activeTab === 'quality' 
                                ? t('services.tabs.qualityContent', 'We are committed to upholding the highest international quality standards in every transaction. Our processes are certified and compliant with key industry benchmarks, including ISO 9001 for Quality Management and ISO 14001 for Environmental Management. This ensures that every product we handle meets rigorous specifications for quality, safety, and sustainability, providing our clients with peace of mind and unparalleled reliability.')
                                : t('services.tabs.deliveryContent', 'We offer flexible delivery terms including EXW, FOB, CIF, and DAP to suit your logistical needs. Our experienced team ensures smooth handling of all shipping documentation and customs procedures.')
                            }
                        </p>
                    </div>
                </div>

                {/* CTA Section */}
                <div className="relative flex flex-col items-center justify-center text-center gap-8 p-12 rounded-3xl overflow-hidden bg-cover bg-center shadow-2xl" style={{ backgroundImage: 'linear-gradient(to right, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.6)), url("https://lh3.googleusercontent.com/aida-public/AB6AXuDq_86frdrI26XLYX78P09ftSeB_GZAS4VszbCrioWgpzYDdVE_CQole3O5cMYw6W5uMM71CopOcbgdIacd4Jz1Ot_S_A6frY5NmZwDfu8jDGe57hAdY__M9pC3Agtv7MoqymMxPvJ6k7tPpNTIeCyGMki6KtPz8erTW2_onJiFY4Be7HkkeCSe_R9KDC4xkPVjamCKHrAUIBr9Mk_RIaZcl_ApLzLy8MtRZUvUL0RsoDcqicFDsAzEmaleViA1Mq-5BpiwIpChvg_p")' }}>
                    <div className="relative z-10 max-w-3xl">
                        <h3 className="text-white text-4xl font-bold mb-4">{t('services.cta.title', 'Ready to Streamline Your Metal Trade?')}</h3>
                        <p className="text-white/90 text-lg mb-8">{t('services.cta.desc', 'Contact our trade experts today for a personalized consultation and discover how our global solutions can benefit your business.')}</p>
                        <Link to="/iletisim" className="inline-flex min-w-[180px] cursor-pointer items-center justify-center rounded-full bg-primary px-8 py-4 text-base font-bold text-white shadow-lg shadow-primary/30 transition-all hover:scale-105 hover:bg-red-700 hover:shadow-xl">
                            <span>{t('services.cta.button', 'Request a Quote')}</span>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
