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
        <div className="flex flex-col min-h-screen w-full bg-white overflow-x-hidden">
            {/* Hero Section */}
            <div className="relative w-full">
                <div 
                    className="flex min-h-[600px] flex-col items-center justify-center bg-cover bg-center bg-no-repeat px-4 sm:px-6 lg:px-8 pb-32" 
                    style={{ backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.3) 0%, rgba(0, 0, 0, 0.8) 100%), url("https://lh3.googleusercontent.com/aida-public/AB6AXuD7luA64_RcsOAJQZJa_i372UPyekOZk4kJcESzQidtNSeCnk3qFYM2pojvNzY8Ur6HKoB1P0Fcd8YR0bhqpWYnX1zKRiY0Wi4DRWD-domCNoB9zNFuwuFIGmMCTfvlE45oRs97C0uTy91KAb5nn3_hqH7cuVSntbCQDvsoI0Ep50bs2H-DhY9q8ZAQC7V4mQipuWOuT-Uwf88WUQyB7eMrUgRRdpC0Y3IQ6Zgld2MYmhUHM7NoP-T6_wvUig2aJg2y2qBSdRdSbonk")' }}
                >
                    <div className="max-w-7xl mx-auto w-full text-center">
                        <div className="flex flex-col gap-6 items-center max-w-4xl mx-auto">
                            <h1 className="text-5xl font-black uppercase tracking-tighter leading-tight text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-200 to-gray-400 md:text-7xl drop-shadow-2xl">
                                {t('production.hero.title', 'MACHINERY PARK & PRODUCTION LINES')}
                            </h1>
                            <h2 className="text-white/90 text-lg font-medium leading-relaxed md:text-xl drop-shadow-lg max-w-2xl">
                                {t('production.hero.subtitle', 'Explore our state-of-the-art technology and advanced production capabilities that set the industry standard.')}
                            </h2>
                        </div>
                    </div>

                    {/* Navigation Links - Positioned inside Hero */}
                    <div className="absolute bottom-0 left-0 w-full z-20 px-4 pb-8">
                        <div className="container mx-auto">
                            <div className="flex flex-wrap justify-center gap-3 p-4 rounded-2xl border border-white/10 bg-black/60 backdrop-blur-md shadow-2xl">
                                <button onClick={() => scrollToSection('dilme-hatti')} className="flex h-10 shrink-0 items-center justify-center gap-x-2 rounded-lg bg-white/10 px-5 text-white text-sm font-bold hover:bg-primary hover:text-white transition-all border border-white/10 hover:border-primary">
                                    {t('production.nav.slitting', 'Dilme hattı')}
                                </button>
                                <button onClick={() => scrollToSection('boy-kesme-hatti')} className="flex h-10 shrink-0 items-center justify-center gap-x-2 rounded-lg bg-white/10 px-5 text-white text-sm font-bold hover:bg-primary hover:text-white transition-all border border-white/10 hover:border-primary">
                                    {t('production.nav.cutToLength', 'Boy kesme hattı')}
                                </button>
                                <button onClick={() => scrollToSection('profil-uretim-hatti')} className="flex h-10 shrink-0 items-center justify-center gap-x-2 rounded-lg bg-white/10 px-5 text-white text-sm font-bold hover:bg-primary hover:text-white transition-all border border-white/10 hover:border-primary">
                                    {t('production.nav.profile', 'Profil üretim hattı')}
                                </button>
                                <button onClick={() => scrollToSection('boru-uretim-hatti')} className="flex h-10 shrink-0 items-center justify-center gap-x-2 rounded-lg bg-white/10 px-5 text-white text-sm font-bold hover:bg-primary hover:text-white transition-all border border-white/10 hover:border-primary">
                                    {t('production.nav.pipe', 'Boru üretim hattı')}
                                </button>
                                <button onClick={() => scrollToSection('cnc-kesim')} className="flex h-10 shrink-0 items-center justify-center gap-x-2 rounded-lg bg-white/10 px-5 text-white text-sm font-bold hover:bg-primary hover:text-white transition-all border border-white/10 hover:border-primary">
                                    {t('production.nav.cnc', 'CNC kesim – plazma kesim hatları')}
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-16">

                {/* Slitting Line Section */}
                <section className="mb-20 scroll-mt-24" id="dilme-hatti">
                    <h2 className="text-gray-900 text-3xl font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5 border-b-2 border-primary mb-8">
                        {t('production.sections.slitting.title', 'Dilme hattı (Slitting Line)')}
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
                        <VideoHoverCard 
                            imageSrc="https://lh3.googleusercontent.com/aida-public/AB6AXuDUUsSF5GcWDLzEkbWqDzKgMi3tZ3pj_0M3waEqbH-q22422dCEiVjJp4Z_7O0ReImVLtNAQ-kH0QEYKp9DO3cCkn98UuYAbvhWYVdKCuTSKHow4g5cwYVRubLx2INz_jb0ZzOY2LLWQuNEEDHT9BTux09uJ6pUFS7RU8bJPywKZJZ_5y5ZP7b_C37W3iyjlonou1S4Coz-3CY6W3fQLAoUxNRsJpDbLFIp6SfhOkxk1q96kt8_ytwbNIFtvn-h9Fy7sD5Ai5gz3K5N"
                            videoSrc={videos.slitting}
                        />
                        <div className="flex flex-col text-gray-600">
                            <p className="mb-6 text-lg leading-relaxed">
                                {t('production.sections.slitting.desc', 'Our high-precision slitting line is engineered to process a wide range of steel coils, converting them into narrower strips with exceptional accuracy. This critical first step ensures that all subsequent manufacturing processes begin with materials of the highest quality and exact specifications.')}
                            </p>
                            <div className="bg-gray-50 rounded-lg p-6 border border-gray-200 shadow-sm">
                                <h3 className="font-bold text-lg mb-4 text-gray-900">{t('production.specs.title', 'Technical Specifications')}</h3>
                                <ul className="space-y-3 text-sm">
                                    <li className="flex justify-between border-b border-gray-200 pb-2"><span>{t('production.specs.thickness', 'Coil Thickness')}:</span> <span className="font-semibold text-gray-900">0.5mm - 4.0mm</span></li>
                                    <li className="flex justify-between border-b border-gray-200 pb-2"><span>{t('production.specs.width', 'Coil Width')}:</span> <span className="font-semibold text-gray-900">Up to 1500mm</span></li>
                                    <li className="flex justify-between border-b border-gray-200 pb-2"><span>{t('production.specs.weight', 'Max Coil Weight')}:</span> <span className="font-semibold text-gray-900">25 Tons</span></li>
                                    <li className="flex justify-between"><span>{t('production.specs.speed', 'Slitting Speed')}:</span> <span className="font-semibold text-gray-900">120 m/min</span></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Cut-to-Length Line Section */}
                <section className="mb-20 scroll-mt-24" id="boy-kesme-hatti">
                    <h2 className="text-gray-900 text-3xl font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5 border-b-2 border-primary mb-8">
                        {t('production.sections.cutToLength.title', 'Boy kesme hattı (Cut-to-Length Line)')}
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
                        <VideoHoverCard 
                            imageSrc="https://lh3.googleusercontent.com/aida-public/AB6AXuDO2gnB2WkbHFo3LDtYSjeo92Xw0HH4C_v9ZFCVqbRhLtIwmNHjT3h_rvlXDWt-YAfZbSp86eML4K_MeUdkdiSFKwApPPSXmpJef-8V_WQBb9FdFi6VbGiC0PzQc05dgQIylTaIJcscDiOsuz259TTP333hKqRGfZbHrnmxdNvak5tVPFRDo2QgvQa4L_C4mlgCX_8kQEwF9POG1aGr-TB3yRWgA_UoHvrzrmCr_4CR9_XHEbvL6MXUYt6BgyUda56ueUOCUVlbOCev"
                            videoSrc={videos.cutToLength}
                        />
                        <div className="flex flex-col text-gray-600">
                            <p className="mb-6 text-lg leading-relaxed">
                                {t('production.sections.cutToLength.desc', 'The cut-to-length line transforms steel coils into flat, rectangular sheets of precise lengths. Our advanced leveling and shearing technology guarantees perfectly flat sheets with clean, burr-free edges, ready for fabrication or direct use by our clients.')}
                            </p>
                            <div className="bg-gray-50 rounded-lg p-6 border border-gray-200 shadow-sm">
                                <h3 className="font-bold text-lg mb-4 text-gray-900">{t('production.specs.title', 'Technical Specifications')}</h3>
                                <ul className="space-y-3 text-sm">
                                    <li className="flex justify-between border-b border-gray-200 pb-2"><span>{t('production.specs.thickness', 'Material Thickness')}:</span> <span className="font-semibold text-gray-900">1.0mm - 6.0mm</span></li>
                                    <li className="flex justify-between border-b border-gray-200 pb-2"><span>{t('production.specs.length', 'Sheet Length')}:</span> <span className="font-semibold text-gray-900">500mm - 6000mm</span></li>
                                    <li className="flex justify-between border-b border-gray-200 pb-2"><span>{t('production.specs.accuracy', 'Length Accuracy')}:</span> <span className="font-semibold text-gray-900">±0.5mm</span></li>
                                    <li className="flex justify-between"><span>{t('production.specs.speed', 'Max Line Speed')}:</span> <span className="font-semibold text-gray-900">60 m/min</span></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Profile Production Line Section */}
                <section className="mb-20 scroll-mt-24" id="profil-uretim-hatti">
                    <h2 className="text-gray-900 text-3xl font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5 border-b-2 border-primary mb-8">
                        {t('production.sections.profile.title', 'Profil üretim hattı (Profile Production Line)')}
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
                        <VideoHoverCard 
                            imageSrc="https://lh3.googleusercontent.com/aida-public/AB6AXuCfKULVMuvvP1dporItRgNHIVKhQKUC3BmNbTDQUywjq0ujUFza219hkLg9n6GHcLsxwrf3WJJyoL03vmZ8ceCEi5HgjD8zrMWfnhl1pqR1ViiGBHdP64dyhr67WXIrebKEJAGzRyh_MQkj2kQw35nGbigVVR8wCoETgjkR-iWXiVCdFVtTD5Vd-Gjgdw9bdbgsIihQqiE_4l2Vnoe2pS7MtNDLfZd4c07tsN4oQKO-gsPQd7GglQD4x9MyQNNiX6OEyC6HKUul8iX5"
                            videoSrc={videos.profile}
                        />
                        <div className="flex flex-col text-gray-600">
                            <p className="mb-6 text-lg leading-relaxed">
                                {t('production.sections.profile.desc', 'Our profile production line utilizes advanced roll forming technology to create a diverse range of standard and custom profiles. This continuous process ensures dimensional consistency and high structural integrity for applications across construction, automotive, and other industries.')}
                            </p>
                            <div className="bg-gray-50 rounded-lg p-6 border border-gray-200 shadow-sm">
                                <h3 className="font-bold text-lg mb-4 text-gray-900">{t('production.specs.title', 'Technical Specifications')}</h3>
                                <ul className="space-y-3 text-sm">
                                    <li className="flex justify-between border-b border-gray-200 pb-2"><span>{t('production.specs.types', 'Profile Types')}:</span> <span className="font-semibold text-gray-900">C, U, Z, Sigma, Custom</span></li>
                                    <li className="flex justify-between border-b border-gray-200 pb-2"><span>{t('production.specs.thickness', 'Material Thickness')}:</span> <span className="font-semibold text-gray-900">1.5mm - 5.0mm</span></li>
                                    <li className="flex justify-between border-b border-gray-200 pb-2"><span>{t('production.specs.speed', 'Production Speed')}:</span> <span className="font-semibold text-gray-900">Up to 40 m/min</span></li>
                                    <li className="flex justify-between"><span>{t('production.specs.material', 'Material')}:</span> <span className="font-semibold text-gray-900">Galvanized, HRP, CRP</span></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Pipe Production Line Section */}
                <section className="mb-20 scroll-mt-24" id="boru-uretim-hatti">
                    <h2 className="text-gray-900 text-3xl font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5 border-b-2 border-primary mb-8">
                        {t('production.sections.pipe.title', 'Boru üretim hattı (Pipe Production Line)')}
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
                        <VideoHoverCard 
                            imageSrc="https://lh3.googleusercontent.com/aida-public/AB6AXuD7luA64_RcsOAJQZJa_i372UPyekOZk4kJcESzQidtNSeCnk3qFYM2pojvNzY8Ur6HKoB1P0Fcd8YR0bhqpWYnX1zKRiY0Wi4DRWD-domCNoB9zNFuwuFIGmMCTfvlE45oRs97C0uTy91KAb5nn3_hqH7cuVSntbCQDvsoI0Ep50bs2H-DhY9q8ZAQC7V4mQipuWOuT-Uwf88WUQyB7eMrUgRRdpC0Y3IQ6Zgld2MYmhUHM7NoP-T6_wvUig2aJg2y2qBSdRdSbonk"
                            videoSrc={videos.pipe}
                        />
                        <div className="flex flex-col text-gray-600">
                            <p className="mb-6 text-lg leading-relaxed">
                                {t('production.sections.pipe.desc', 'Our pipe production line is equipped to manufacture high-quality industrial and construction pipes. Using precision welding and forming techniques, we produce pipes that meet strict international standards for strength, durability, and dimensional accuracy.')}
                            </p>
                            <div className="bg-gray-50 rounded-lg p-6 border border-gray-200 shadow-sm">
                                <h3 className="font-bold text-lg mb-4 text-gray-900">{t('production.specs.title', 'Technical Specifications')}</h3>
                                <ul className="space-y-3 text-sm">
                                    <li className="flex justify-between border-b border-gray-200 pb-2"><span>{t('production.specs.diameter', 'Pipe Diameter')}:</span> <span className="font-semibold text-gray-900">Ø21mm - Ø219mm</span></li>
                                    <li className="flex justify-between border-b border-gray-200 pb-2"><span>{t('production.specs.thickness', 'Wall Thickness')}:</span> <span className="font-semibold text-gray-900">1.0mm - 8.0mm</span></li>
                                    <li className="flex justify-between border-b border-gray-200 pb-2"><span>{t('production.specs.length', 'Pipe Length')}:</span> <span className="font-semibold text-gray-900">4m - 12m</span></li>
                                    <li className="flex justify-between"><span>{t('production.specs.standards', 'Standards')}:</span> <span className="font-semibold text-gray-900">EN 10219, EN 10305</span></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>

                {/* CNC & Plasma Cutting Section */}
                <section className="mb-20 scroll-mt-24" id="cnc-kesim">
                    <h2 className="text-gray-900 text-3xl font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5 border-b-2 border-primary mb-8">
                        {t('production.sections.cnc.title', 'CNC & Plazma Kesim Hatları')}
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
                        <VideoHoverCard 
                            imageSrc="https://lh3.googleusercontent.com/aida-public/AB6AXuCBCq56mHwVU2Qx58gDQCQmom_I1ei9Wqsq4JTrcMoojnWrMdb_iz_hewTBCWS7Vgy1xeMDED94wt520coYZs2egSV76dyl1gcmqm6wLDW2jBG_nfwjxJuLPE_ClTYRgMmjTCBq3UoK-LqEdQQCAIDmBCpoNNxX4dZ0NzWyOi6Pmdxjpu9NqvvVwT-3X518AcrxhMEbsIqoh3HQwDdIevkD89G5nZImiY-BZCzxXQlJtQEsU8Td2m5l0HjcShJTMlW7iuumm20c6FO2"
                            videoSrc={videos.cnc}
                        />
                        <div className="flex flex-col text-gray-600">
                            <p className="mb-6 text-lg leading-relaxed">
                                {t('production.sections.cnc.desc', 'For intricate shapes and heavy-duty cutting, our CNC plasma and laser cutting lines offer unparalleled precision. Capable of handling thick plates, these machines can produce complex components with tight tolerances, meeting the most demanding engineering requirements.')}
                            </p>
                            <div className="bg-gray-50 rounded-lg p-6 border border-gray-200 shadow-sm">
                                <h3 className="font-bold text-lg mb-4 text-gray-900">{t('production.specs.title', 'Technical Specifications')}</h3>
                                <ul className="space-y-3 text-sm">
                                    <li className="flex justify-between border-b border-gray-200 pb-2"><span>{t('production.specs.technology', 'Cutting Technology')}:</span> <span className="font-semibold text-gray-900">High-Definition Plasma, Fiber Laser</span></li>
                                    <li className="flex justify-between border-b border-gray-200 pb-2"><span>{t('production.specs.maxThickness', 'Max Plate Thickness')}:</span> <span className="font-semibold text-gray-900">40mm (Plasma), 25mm (Laser)</span></li>
                                    <li className="flex justify-between border-b border-gray-200 pb-2"><span>{t('production.specs.area', 'Working Area')}:</span> <span className="font-semibold text-gray-900">3000mm x 12000mm</span></li>
                                    <li className="flex justify-between"><span>{t('production.specs.accuracy', 'Positioning Accuracy')}:</span> <span className="font-semibold text-gray-900">±0.05mm</span></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
}
