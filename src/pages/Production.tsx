import { useState, useRef } from 'react';
import { useTranslation } from 'react-i18next';

const VideoHoverCard = ({ imageSrc, videoSrc }: { imageSrc: string; videoSrc: string }) => {
    const videoRef = useRef<HTMLVideoElement>(null);
    const [isPlaying, setIsPlaying] = useState(false);
    const [isLoaded, setIsLoaded] = useState(false);
    const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

    const handleMouseEnter = () => {
        setIsPlaying(true);
        if (videoRef.current) {
            const playPromise = videoRef.current.play();
            if (playPromise !== undefined) {
                playPromise.catch((error) => {
                    console.error("Video play failed:", error);
                    setIsPlaying(false);
                });
            }
            
            // Stop playing after 5 seconds
            timeoutRef.current = setTimeout(() => {
                if (videoRef.current) {
                    videoRef.current.pause();
                    videoRef.current.currentTime = 0;
                    setIsPlaying(false);
                }
            }, 5000);
        }
    };

    const handleMouseLeave = () => {
        setIsPlaying(false);
        if (timeoutRef.current) {
            clearTimeout(timeoutRef.current);
        }
        if (videoRef.current) {
            videoRef.current.pause();
            videoRef.current.currentTime = 0;
        }
    };

    return (
        <div 
            className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden shadow-xl cursor-pointer group"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            {/* Image (Poster) */}
            <div className={`absolute inset-0 transition-opacity duration-500 z-10 ${isPlaying && isLoaded ? 'opacity-0' : 'opacity-100'}`}>
                <img 
                    src={imageSrc} 
                    alt="Production Line" 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
            </div>

            {/* Video */}
            <video
                ref={videoRef}
                src={videoSrc}
                muted
                loop
                playsInline
                onLoadedData={() => setIsLoaded(true)}
                onError={(e) => console.error("Video load error:", e)}
                className="absolute inset-0 w-full h-full object-cover"
            />
        </div>
    );
};

export default function Production() {
    const { t } = useTranslation();

    const scrollToSection = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    // Industrial stock videos - Using a reliable source for testing
    // Note: In a real production environment, these should be hosted on your own CDN or public bucket.
    const videos = {
        slitting: "https://cdn.coverr.co/videos/coverr-metal-welding-2623/1080p.mp4", 
        cutToLength: "https://cdn.coverr.co/videos/coverr-metal-welding-2623/1080p.mp4", 
        profile: "https://cdn.coverr.co/videos/coverr-metal-welding-2623/1080p.mp4", 
        pipe: "https://cdn.coverr.co/videos/coverr-metal-welding-2623/1080p.mp4", 
        cnc: "https://cdn.coverr.co/videos/coverr-metal-welding-2623/1080p.mp4" 
    };

    return (

        <div className="flex flex-col min-h-screen w-full bg-slate-50 overflow-x-hidden selection:bg-primary selection:text-white">
            {/* Hero Section */}
            <div className="relative w-full h-[85vh] min-h-[600px] flex items-center justify-center overflow-hidden">
                {/* Background Image with Parallax-like effect */}
                <div 
                    className="absolute inset-0 bg-cover bg-center bg-no-repeat bg-fixed scale-105" 
                    style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuD7luA64_RcsOAJQZJa_i372UPyekOZk4kJcESzQidtNSeCnk3qFYM2pojvNzY8Ur6HKoB1P0Fcd8YR0bhqpWYnX1zKRiY0Wi4DRWD-domCNoB9zNFuwuFIGmMCTfvlE45oRs97C0uTy91KAb5nn3_hqH7cuVSntbCQDvsoI0Ep50bs2H-DhY9q8ZAQC7V4mQipuWOuT-Uwf88WUQyB7eMrUgRRdpC0Y3IQ6Zgld2MYmhUHM7NoP-T6_wvUig2aJg2y2qBSdRdSbonk")' }}
                />
                
                {/* Modern Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-black/90 via-black/70 to-primary/30 mix-blend-multiply" />
                <div className="absolute inset-0 bg-black/40" />

                <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full h-full flex flex-col justify-center">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                        {/* Hero Text */}
                        <div className="lg:col-span-7 flex flex-col gap-6 text-left">
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/20 w-fit">
                                <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
                                <span className="text-sm font-medium text-white/90 tracking-wide uppercase">{t('production.hero.badge', 'ENDÜSTRİYEL MÜKEMMELLİYET')}</span>
                            </div>
                            <h1 className="text-5xl lg:text-7xl font-black uppercase tracking-tighter leading-[0.9] text-white drop-shadow-2xl">
                                {t('production.hero.title', 'MACHINERY PARK & PRODUCTION LINES')}
                            </h1>
                            <p className="text-lg lg:text-xl text-gray-200 font-light leading-relaxed max-w-2xl border-l-4 border-primary pl-6">
                                {t('production.hero.subtitle', 'Explore our state-of-the-art technology and advanced production capabilities that set the industry standard.')}
                            </p>
                        </div>

                        {/* Stylized List (Replacing Buttons) */}
                        <div className="lg:col-span-5 flex flex-col justify-center">
                            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 relative overflow-hidden group hover:border-white/20 transition-all duration-500">
                                {/* Decorative background elements */}
                                <div className="absolute -top-10 -right-10 w-40 h-40 bg-primary/20 rounded-full blur-3xl group-hover:bg-primary/30 transition-all duration-500"></div>
                                <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-blue-500/20 rounded-full blur-3xl group-hover:bg-blue-500/30 transition-all duration-500"></div>

                                <h3 className="text-white text-xs font-bold uppercase tracking-[0.2em] mb-6 text-opacity-70">{t('production.hero.capabilities', 'YETKİNLİKLERİMİZ')}</h3>
                                <ul className="flex flex-col gap-4">
                                    {[
                                        { id: 'dilme-hatti', label: t('production.nav.slitting', 'Dilme Hattı') },
                                        { id: 'boy-kesme-hatti', label: t('production.nav.cutToLength', 'Boy Kesme Hattı') },
                                        { id: 'profil-uretim-hatti', label: t('production.nav.profile', 'Profil Üretim Hattı') },
                                        { id: 'boru-uretim-hatti', label: t('production.nav.pipe', 'Boru Üretim Hattı') },
                                        { id: 'cnc-kesim', label: t('production.nav.cnc', 'CNC & Plazma Kesim') },
                                    ].map((item) => (
                                        <li key={item.id} className="group/item">
                                            <button 
                                                onClick={() => scrollToSection(item.id)}
                                                className="w-full text-left flex items-center justify-between group-hover/item:translate-x-2 transition-transform duration-300"
                                            >
                                                <span className="text-2xl md:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white/60 to-white/60 group-hover/item:from-white group-hover/item:to-white transition-all font-display tracking-tight">
                                                    {item.label}
                                                </span>
                                                <span className="opacity-0 group-hover/item:opacity-100 text-primary transition-opacity duration-300">
                                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                                    </svg>
                                                </span>
                                            </button>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Scroll Indicator */}
                <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
                    <svg width="24" height="40" viewBox="0 0 24 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect x="1" y="1" width="22" height="38" rx="11" stroke="white" strokeWidth="2" strokeOpacity="0.5"/>
                        <circle cx="12" cy="12" r="3" fill="white"/>
                    </svg>
                </div>
            </div>

            {/* Main Content with Pattern Background */}
            <div className="relative w-full bg-slate-50">
                {/* Background Pattern */}
                <div className="absolute inset-0 z-0 opacity-[0.03]" style={{ 
                    backgroundImage: `radial-gradient(#000 1px, transparent 1px)`, 
                    backgroundSize: '32px 32px' 
                }}></div>

                <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
                    
                    {/* Slitting Line Section */}
                    <section className="mb-32 scroll-mt-24" id="dilme-hatti">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20 items-center">
                            <div className="order-2 md:order-1">
                                <VideoHoverCard 
                                    imageSrc="https://lh3.googleusercontent.com/aida-public/AB6AXuDUUsSF5GcWDLzEkbWqDzKgMi3tZ3pj_0M3waEqbH-q22422dCEiVjJp4Z_7O0ReImVLtNAQ-kH0QEYKp9DO3cCkn98UuYAbvhWYVdKCuTSKHow4g5cwYVRubLx2INz_jb0ZzOY2LLWQuNEEDHT9BTux09uJ6pUFS7RU8bJPywKZJZ_5y5ZP7b_C37W3iyjlonou1S4Coz-3CY6W3fQLAoUxNRsJpDbLFIp6SfhOkxk1q96kt8_ytwbNIFtvn-h9Fy7sD5Ai5gz3K5N"
                                    videoSrc={videos.slitting}
                                />
                            </div>
                            <div className="order-1 md:order-2 flex flex-col">
                                <span className="text-primary font-bold tracking-widest uppercase text-sm mb-3">{t('production.process', 'SÜREÇ {{count}}', { count: 1 })}</span>
                                <h2 className="text-4xl lg:text-5xl font-black text-gray-900 mb-6 tracking-tight">
                                    {t('production.sections.slitting.title', 'Dilme hattı')}
                                </h2>
                                <p className="text-lg text-gray-600 leading-relaxed mb-8">
                                    {t('production.sections.slitting.desc', 'Our high-precision slitting line is engineered to process a wide range of steel coils, converting them into narrower strips with exceptional accuracy. This critical first step ensures that all subsequent manufacturing processes begin with materials of the highest quality.')}
                                </p>
                                <div className="bg-white rounded-2xl p-8 shadow-xl shadow-gray-200/50 border border-gray-100">
                                    <h3 className="font-bold text-lg mb-6 text-gray-900 flex items-center gap-2">
                                        <div className="w-1 h-6 bg-primary rounded-full"></div>
                                        {t('production.specs.title', 'Technical Specifications')}
                                    </h3>
                                    <ul className="grid grid-cols-2 gap-x-8 gap-y-4">
                                        <li className="flex flex-col gap-1 border-b border-gray-100 pb-2">
                                            <span className="text-xs text-gray-500 uppercase tracking-wider">{t('production.specs.thickness', 'Coil Thickness')}</span>
                                            <span className="font-bold text-gray-900">0.5mm - 4.0mm</span>
                                        </li>
                                        <li className="flex flex-col gap-1 border-b border-gray-100 pb-2">
                                            <span className="text-xs text-gray-500 uppercase tracking-wider">{t('production.specs.width', 'Coil Width')}</span>
                                            <span className="font-bold text-gray-900">Max 1500mm</span>
                                        </li>
                                        <li className="flex flex-col gap-1 border-b border-gray-100 pb-2">
                                            <span className="text-xs text-gray-500 uppercase tracking-wider">{t('production.specs.weight', 'Max Weight')}</span>
                                            <span className="font-bold text-gray-900">25 Tons</span>
                                        </li>
                                        <li className="flex flex-col gap-1 border-b border-gray-100 pb-2">
                                            <span className="text-xs text-gray-500 uppercase tracking-wider">{t('production.specs.speed', 'Speed')}</span>
                                            <span className="font-bold text-gray-900">120 m/min</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Cut-to-Length Line Section */}
                    <section className="mb-32 scroll-mt-24" id="boy-kesme-hatti">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20 items-center">
                            <div className="flex flex-col">
                                <span className="text-primary font-bold tracking-widest uppercase text-sm mb-3">{t('production.process', 'SÜREÇ {{count}}', { count: 2 })}</span>
                                <h2 className="text-4xl lg:text-5xl font-black text-gray-900 mb-6 tracking-tight">
                                    {t('production.sections.cutToLength.title', 'Boy kesme hattı')}
                                </h2>
                                <p className="text-lg text-gray-600 leading-relaxed mb-8">
                                    {t('production.sections.cutToLength.desc', 'The cut-to-length line transforms steel coils into flat, rectangular sheets of precise lengths. Our advanced leveling and shearing technology guarantees perfectly flat sheets with clean, burr-free edges, ready for fabrication or direct use by our clients.')}
                                </p>
                                <div className="bg-white rounded-2xl p-8 shadow-xl shadow-gray-200/50 border border-gray-100">
                                    <h3 className="font-bold text-lg mb-6 text-gray-900 flex items-center gap-2">
                                        <div className="w-1 h-6 bg-primary rounded-full"></div>
                                        {t('production.specs.title', 'Technical Specifications')}
                                    </h3>
                                    <ul className="grid grid-cols-2 gap-x-8 gap-y-4">
                                        <li className="flex flex-col gap-1 border-b border-gray-100 pb-2">
                                            <span className="text-xs text-gray-500 uppercase tracking-wider">{t('production.specs.thickness', 'Material Thickness')}</span>
                                            <span className="font-bold text-gray-900">1.0mm - 6.0mm</span>
                                        </li>
                                        <li className="flex flex-col gap-1 border-b border-gray-100 pb-2">
                                            <span className="text-xs text-gray-500 uppercase tracking-wider">{t('production.specs.length', 'Sheet Length')}</span>
                                            <span className="font-bold text-gray-900">500 - 6000mm</span>
                                        </li>
                                        <li className="flex flex-col gap-1 border-b border-gray-100 pb-2">
                                            <span className="text-xs text-gray-500 uppercase tracking-wider">{t('production.specs.accuracy', 'Accuracy')}</span>
                                            <span className="font-bold text-gray-900">±0.5mm</span>
                                        </li>
                                        <li className="flex flex-col gap-1 border-b border-gray-100 pb-2">
                                            <span className="text-xs text-gray-500 uppercase tracking-wider">{t('production.specs.speed', 'Max Speed')}</span>
                                            <span className="font-bold text-gray-900">60 m/min</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div>
                                <VideoHoverCard 
                                    imageSrc="https://lh3.googleusercontent.com/aida-public/AB6AXuDO2gnB2WkbHFo3LDtYSjeo92Xw0HH4C_v9ZFCVqbRhLtIwmNHjT3h_rvlXDWt-YAfZbSp86eML4K_MeUdkdiSFKwApPPSXmpJef-8V_WQBb9FdFi6VbGiC0PzQc05dgQIylTaIJcscDiOsuz259TTP333hKqRGfZbHrnmxdNvak5tVPFRDo2QgvQa4L_C4mlgCX_8kQEwF9POG1aGr-TB3yRWgA_UoHvrzrmCr_4CR9_XHEbvL6MXUYt6BgyUda56ueUOCUVlbOCev"
                                    videoSrc={videos.cutToLength}
                                />
                            </div>
                        </div>
                    </section>

                    {/* Profile Production Line Section */}
                    <section className="mb-32 scroll-mt-24" id="profil-uretim-hatti">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20 items-center">
                            <div className="order-2 md:order-1">
                                <VideoHoverCard 
                                    imageSrc="https://lh3.googleusercontent.com/aida-public/AB6AXuCfKULVMuvvP1dporItRgNHIVKhQKUC3BmNbTDQUywjq0ujUFza219hkLg9n6GHcLsxwrf3WJJyoL03vmZ8ceCEi5HgjD8zrMWfnhl1pqR1ViiGBHdP64dyhr67WXIrebKEJAGzRyh_MQkj2kQw35nGbigVVR8wCoETgjkR-iWXiVCdFVtTD5Vd-Gjgdw9bdbgsIihQqiE_4l2Vnoe2pS7MtNDLfZd4c07tsN4oQKO-gsPQd7GglQD4x9MyQNNiX6OEyC6HKUul8iX5"
                                    videoSrc={videos.profile}
                                />
                            </div>
                            <div className="order-1 md:order-2 flex flex-col">
                                <span className="text-primary font-bold tracking-widest uppercase text-sm mb-3">{t('production.process', 'SÜREÇ {{count}}', { count: 3 })}</span>
                                <h2 className="text-4xl lg:text-5xl font-black text-gray-900 mb-6 tracking-tight">
                                    {t('production.sections.profile.title', 'Profil üretim hattı')}
                                </h2>
                                <p className="text-lg text-gray-600 leading-relaxed mb-8">
                                    {t('production.sections.profile.desc', 'Our profile production line utilizes advanced roll forming technology to create a diverse range of standard and custom profiles. This continuous process ensures dimensional consistency and high structural integrity.')}
                                </p>
                                <div className="bg-white rounded-2xl p-8 shadow-xl shadow-gray-200/50 border border-gray-100">
                                    <h3 className="font-bold text-lg mb-6 text-gray-900 flex items-center gap-2">
                                        <div className="w-1 h-6 bg-primary rounded-full"></div>
                                        {t('production.specs.title', 'Technical Specifications')}
                                    </h3>
                                    <ul className="grid grid-cols-2 gap-x-8 gap-y-4">
                                        <li className="flex flex-col gap-1 border-b border-gray-100 pb-2">
                                            <span className="text-xs text-gray-500 uppercase tracking-wider">{t('production.specs.types', 'Profile Types')}</span>
                                            <span className="font-bold text-gray-900">C, U, Z, Sigma</span>
                                        </li>
                                        <li className="flex flex-col gap-1 border-b border-gray-100 pb-2">
                                            <span className="text-xs text-gray-500 uppercase tracking-wider">{t('production.specs.thickness', 'Thickness')}</span>
                                            <span className="font-bold text-gray-900">1.5mm - 5.0mm</span>
                                        </li>
                                        <li className="flex flex-col gap-1 border-b border-gray-100 pb-2">
                                            <span className="text-xs text-gray-500 uppercase tracking-wider">{t('production.specs.speed', 'Production Speed')}</span>
                                            <span className="font-bold text-gray-900">40 m/min</span>
                                        </li>
                                        <li className="flex flex-col gap-1 border-b border-gray-100 pb-2">
                                            <span className="text-xs text-gray-500 uppercase tracking-wider">{t('production.specs.material', 'Material')}</span>
                                            <span className="font-bold text-gray-900">Galvanized, HRP, CRP</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Pipe Production Line Section */}
                    <section className="mb-32 scroll-mt-24" id="boru-uretim-hatti">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20 items-center">
                            <div className="flex flex-col">
                                <span className="text-primary font-bold tracking-widest uppercase text-sm mb-3">{t('production.process', 'SÜREÇ {{count}}', { count: 4 })}</span>
                                <h2 className="text-4xl lg:text-5xl font-black text-gray-900 mb-6 tracking-tight">
                                    {t('production.sections.pipe.title', 'Boru üretim hattı')}
                                </h2>
                                <p className="text-lg text-gray-600 leading-relaxed mb-8">
                                    {t('production.sections.pipe.desc', 'Our pipe production line is equipped to manufacture high-quality industrial and construction pipes. Using precision welding and forming techniques, we produce pipes that meet strict international standards.')}
                                </p>
                                <div className="bg-white rounded-2xl p-8 shadow-xl shadow-gray-200/50 border border-gray-100">
                                    <h3 className="font-bold text-lg mb-6 text-gray-900 flex items-center gap-2">
                                        <div className="w-1 h-6 bg-primary rounded-full"></div>
                                        {t('production.specs.title', 'Technical Specifications')}
                                    </h3>
                                    <ul className="grid grid-cols-2 gap-x-8 gap-y-4">
                                        <li className="flex flex-col gap-1 border-b border-gray-100 pb-2">
                                            <span className="text-xs text-gray-500 uppercase tracking-wider">{t('production.specs.diameter', 'Diameter')}</span>
                                            <span className="font-bold text-gray-900">Ø21mm - Ø219mm</span>
                                        </li>
                                        <li className="flex flex-col gap-1 border-b border-gray-100 pb-2">
                                            <span className="text-xs text-gray-500 uppercase tracking-wider">{t('production.specs.thickness', 'Wall Thickness')}</span>
                                            <span className="font-bold text-gray-900">1.0mm - 8.0mm</span>
                                        </li>
                                        <li className="flex flex-col gap-1 border-b border-gray-100 pb-2">
                                            <span className="text-xs text-gray-500 uppercase tracking-wider">{t('production.specs.length', 'Length')}</span>
                                            <span className="font-bold text-gray-900">4m - 12m</span>
                                        </li>
                                        <li className="flex flex-col gap-1 border-b border-gray-100 pb-2">
                                            <span className="text-xs text-gray-500 uppercase tracking-wider">{t('production.specs.standards', 'Standards')}</span>
                                            <span className="font-bold text-gray-900">EN 10219</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div>
                                <VideoHoverCard 
                                    imageSrc="https://lh3.googleusercontent.com/aida-public/AB6AXuD7luA64_RcsOAJQZJa_i372UPyekOZk4kJcESzQidtNSeCnk3qFYM2pojvNzY8Ur6HKoB1P0Fcd8YR0bhqpWYnX1zKRiY0Wi4DRWD-domCNoB9zNFuwuFIGmMCTfvlE45oRs97C0uTy91KAb5nn3_hqH7cuVSntbCQDvsoI0Ep50bs2H-DhY9q8ZAQC7V4mQipuWOuT-Uwf88WUQyB7eMrUgRRdpC0Y3IQ6Zgld2MYmhUHM7NoP-T6_wvUig2aJg2y2qBSdRdSbonk"
                                    videoSrc={videos.pipe}
                                />
                            </div>
                        </div>
                    </section>

                    {/* CNC & Plasma Cutting Section */}
                    <section className="mb-20 scroll-mt-24" id="cnc-kesim">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20 items-center">
                            <div className="order-2 md:order-1">
                                <VideoHoverCard 
                                    imageSrc="https://lh3.googleusercontent.com/aida-public/AB6AXuCBCq56mHwVU2Qx58gDQCQmom_I1ei9Wqsq4JTrcMoojnWrMdb_iz_hewTBCWS7Vgy1xeMDED94wt520coYZs2egSV76dyl1gcmqm6wLDW2jBG_nfwjxJuLPE_ClTYRgMmjTCBq3UoK-LqEdQQCAIDmBCpoNNxX4dZ0NzWyOi6Pmdxjpu9NqvvVwT-3X518AcrxhMEbsIqoh3HQwDdIevkD89G5nZImiY-BZCzxXQlJtQEsU8Td2m5l0HjcShJTMlW7iuumm20c6FO2"
                                    videoSrc={videos.cnc}
                                />
                            </div>
                            <div className="order-1 md:order-2 flex flex-col">
                                <span className="text-primary font-bold tracking-widest uppercase text-sm mb-3">{t('production.process', 'SÜREÇ {{count}}', { count: 5 })}</span>
                                <h2 className="text-4xl lg:text-5xl font-black text-gray-900 mb-6 tracking-tight">
                                    {t('production.sections.cnc.title', 'CNC & Plazma Kesim')}
                                </h2>
                                <p className="text-lg text-gray-600 leading-relaxed mb-8">
                                    {t('production.sections.cnc.desc', 'For intricate shapes and heavy-duty cutting, our CNC plasma and laser cutting lines offer unparalleled precision. Capable of handling thick plates, these machines can produce complex components with tight tolerances.')}
                                </p>
                                <div className="bg-white rounded-2xl p-8 shadow-xl shadow-gray-200/50 border border-gray-100">
                                    <h3 className="font-bold text-lg mb-6 text-gray-900 flex items-center gap-2">
                                        <div className="w-1 h-6 bg-primary rounded-full"></div>
                                        {t('production.specs.title', 'Technical Specifications')}
                                    </h3>
                                    <ul className="grid grid-cols-2 gap-x-8 gap-y-4">
                                        <li className="flex flex-col gap-1 border-b border-gray-100 pb-2">
                                            <span className="text-xs text-gray-500 uppercase tracking-wider">{t('production.specs.technology', 'Technology')}</span>
                                            <span className="font-bold text-gray-900">Plasma / Logic</span>
                                        </li>
                                        <li className="flex flex-col gap-1 border-b border-gray-100 pb-2">
                                            <span className="text-xs text-gray-500 uppercase tracking-wider">{t('production.specs.maxThickness', 'Max Thickness')}</span>
                                            <span className="font-bold text-gray-900">40mm / 25mm</span>
                                        </li>
                                        <li className="flex flex-col gap-1 border-b border-gray-100 pb-2">
                                            <span className="text-xs text-gray-500 uppercase tracking-wider">{t('production.specs.area', 'Working Area')}</span>
                                            <span className="font-bold text-gray-900">3x12 Meters</span>
                                        </li>
                                        <li className="flex flex-col gap-1 border-b border-gray-100 pb-2">
                                            <span className="text-xs text-gray-500 uppercase tracking-wider">{t('production.specs.accuracy', 'Accuracy')}</span>
                                            <span className="font-bold text-gray-900">±0.05mm</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </div>
    );
}
