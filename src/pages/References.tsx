import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

export default function References() {
    const { t } = useTranslation();

    return (
        <div className="flex flex-col min-h-screen w-full bg-white overflow-x-hidden">
            <div className="px-4 sm:px-6 lg:px-8 py-10 sm:py-16 lg:py-20">
                <div className="layout-content-container flex flex-col max-w-7xl mx-auto flex-1 gap-10">
                    <div className="flex flex-wrap justify-between items-center gap-4 text-center sm:text-left">
                        <div className="flex w-full sm:w-auto flex-col gap-3">
                            <p className="text-gray-900 text-4xl sm:text-5xl font-black leading-tight tracking-[-0.033em]">
                                {t('references.title', 'Our Global Reach & Trusted Partners')}
                            </p>
                            <p className="text-gray-500 text-base font-normal leading-normal">
                                {t('references.intro', 'Showcasing our trusted partnerships and international presence.')}
                            </p>
                        </div>
                    </div>

                    <div className="flex flex-col gap-6">
                        <h2 className="text-gray-900 text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5 border-b border-gray-200">
                            {t('references.partners.title', 'Our Partners in Success')}
                        </h2>

                        <div className="grid grid-cols-[repeat(auto-fill,minmax(158px,1fr))] gap-4 p-4">
                            {[
                                "https://lh3.googleusercontent.com/aida-public/AB6AXuB9UZX1tHGo2t76aKfWxLQcwmmYDTfpHPVTO2aB9-s-4yCXrp_gIUuJGpo7G-dSBYicZqEfb79KiWSyfSWPsIY-cq4yyOBBVMubgJsDKMEH4GCjro6L45eRidXuSf855yXrNOHEXKc5BDRmSa1VRUd_HIV8OOcpj0WC1QrDbE24HfZhcychttsTiOdmC8fU_GyRHLKtzx8fBOZwNxd3FVstsqi_zhp_4-xXR-oyLHUfccTtKq7ju1b0-eLmEBGeUIdRh-gcmjP_36Mh",
                                "https://lh3.googleusercontent.com/aida-public/AB6AXuDExG1QdlIyMF5C1m196VW6ZoYQDQhdXRkkZmVul6Zd473Z6qhe-re_JdgM0qzNE--rQkVhOTiudZKXmAqLYndKYvTtZHFKm6p690DouZbsy0SJgqjkFwUZPpT3Uu7e-BMNeuMDuIbrMDAq6yn0y5EF9klgWjg7PJBMiY6hM_0u-bNc7HXa36_WSQNvEniqszYZMxcCwQGT9YbIoQZd6VMu4atiCEfa9PDlJqTHruDs2ZFyAFqnjObagcdowmyCceybuYL5gYiugSs5",
                                "https://lh3.googleusercontent.com/aida-public/AB6AXuDuSaGYSz2Y0LqhbgpXMb3bkbQ6EluyQfnGim8Z1bKxZUj5RFjsjMXlpULDETsE0pHAmztghgxnDEdWywWDO8eK-yY4Y_0M9TntleZ-RVEA9I1JXqTvpMY9R-R4npN6p8caDKCgOiFsbHJJ_6mJdtA6G3MMxl74o9D8X4JKMPdUJwAphSTD5HewJw9JOyWycpF2WiOuVtcytxplQDAIOt6I8j-97Ps5Z8PaZ_V7Ez1nr4vmiyqZA0L8uWLVr5M0gvfaM40oLIDUTQ6G",
                                "https://lh3.googleusercontent.com/aida-public/AB6AXuDMGv5VPqdsPLmlP7HB2vkkCeA4_nojiHdtqvBm8RdMDuoOk1HX63X2a6syEbtoSq7RmI3PdThZUV0XmNiTPBmviojwOhfJKXOQPT2ECFBSNd0u5PFf6QWUllfJuCU70BPw61yZVoFlPIZ3wYwkB4dqP4ohOLqdRjgDPkfouAkfW-Wtq4YDi5hhrcrt89vciBnstaACyMpBoyEG7jRZn1wSTs8BWRKotSS1hWXjer3nlQDW0CAKT_cuAxoq5z2dEeIEzYq21ypXzTXW",
                                "https://lh3.googleusercontent.com/aida-public/AB6AXuBcla1J3ELSLgLAOg4YqqAwSymgAFwnrzJ-veOkunmPkXCDpP5PTfE_aYeOfNzkUj5RQrBgFLzsA2NRQtg_-BeeXKZ1OlhqXhgPgqCSEKoQLCtWxpVL92wpx0JTkHVs4YxrfwC5u0OwEUjFtsp567P8apHqIjjSE6OomJPC4xv7v6kJ7jzcNQIjx3Jj1bkPRuOFSNKPNl5RaCbbZ6cCR6PNm0pcK18AXSenrDQALoAZpFX5oL2877_rr3oVH5ym-PDt5mFH34GuArZy",
                                "https://lh3.googleusercontent.com/aida-public/AB6AXuAb0OY8X08RTrSaQk9MkWu-gdA2W88mmKc3obpwGL3hFMhycDUo2u3xUSYb6wUI0utTn7sPdBLfsaLXYjhHlwig46RGUAp-cuHZm2Ogg4yd35mlH8yTEfLS_XUQzu97qbm6phU-_Piw4D36EuroRGKyu-uKNBw7aGRMaPxoO5vaBwz-GG4h9u_lY9Cse-INDa6z0TxfM5A0mAF8Le9EMhdMA-uV5LW3DPzrkJgKCjREMUo6pyMZUaCeBtCodxU7wiiplyQNtdgOcFgI",
                                "https://lh3.googleusercontent.com/aida-public/AB6AXuAPiyODpGDrTILcgXFObid5qsIVV4raDId5Ea-XNXO5WeLwBmyLDyOj272L1-sxFqcZkj5hlrbj8i6LanZyVNakaGjKeqk9HD0jyNdpXr7cXdshvy0navBS7Y7m3Q-IG4sZMKHD_OlzRWv8LUq04uamt6D6HhcdJTTd7E5CN_oUi1kRCRbCGn_g51V9YRDc9y5-T5MoIHqNKlrcauuVEvWkPu8A1nKJpMtXT5ZWlyL1G5WyRPr3ucb1Se1hcocjb4TdTbVDNsRgd7LZ",
                                "https://lh3.googleusercontent.com/aida-public/AB6AXuBgaJ5_znoYL6aDQxhI8x0kiYC6qAu56TOWgMBiTNm_gRZWrJxV736OsCXypkNKR6phuZ4FMvK2gzUDpie-QhfG7lUtF10Tl8lRMrBI013mXmWvp1PgrHaQxpYNWE2eOgWVXTrbL_Ojt7nmHIRGguCMfbMoqnvIq2IdbbrcJz2yDgl3qFpzhKIwb5zFsjSbkQRNS8AFJOyoWvKiaVgIGqKBVcF2kAUhDCYhOba30kdMxEkbLMX51Um9jIDPS1k5UQzcDArJB5qZjCjL"
                            ].map((src, index) => (
                                <div key={index} className="flex flex-col group">
                                    <div className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-lg bg-gray-100 p-4 flex items-center justify-center transition-all group-hover:scale-105 group-hover:ring-2 ring-primary border border-gray-200 shadow-sm">
                                        <img alt={`Partner Logo ${index + 1}`} className="h-12 w-auto object-contain" src={src}/>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="flex flex-col gap-6">
                        <h2 className="text-gray-900 text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5 border-b border-gray-200">
                            {t('references.global.title', 'Operating Across the Globe')}
                        </h2>
                        <div className="p-4 bg-gray-50 border border-gray-200 rounded-xl overflow-hidden shadow-inner">
                            <svg className="w-full h-auto" viewBox="0 0 1000 500">
                                <style>
                                    {`
                                        .country { fill: #d1d5db; stroke: #ffffff; stroke-width: 0.5; transition: fill 0.3s; }
                                        .country.active { fill: #fca5a5; }
                                        .country:hover { fill: #ec1313; }
                                        .country:hover + .tooltip, .tooltip:hover { opacity: 1; visibility: visible; }
                                        .tooltip { opacity: 0; visibility: hidden; transition: opacity 0.3s; pointer-events: none; }
                                        .tooltip-bg { fill: rgba(0,0,0,0.7); }
                                        .tooltip-text { fill: white; font-size: 10px; font-family: Manrope, sans-serif; }
                                    `}
                                </style>
                                <rect fill="#f9fafb" height="500" width="1000"></rect>
                                <path className="country" d="M100 50 L150 50 L200 100 L250 150 L200 200 L100 200 Z" data-location="North America"></path>
                                <path className="country" d="M220 220 L270 270 L250 350 L200 320 Z" data-location="South America"></path>
                                <path className="country active" d="M400 80 L450 70 L480 120 L420 150 Z" data-location="Europe"></path>
                                <g className="tooltip">
                                    <rect className="tooltip-bg" height="15" rx="2" width="40" x="410" y="50"></rect>
                                    <text className="tooltip-text" x="415" y="61">Europe</text>
                                </g>
                                <path className="country active" d="M420 160 L520 170 L500 300 L400 280 Z" data-location="Africa & Middle East"></path>
                                <g className="tooltip">
                                    <rect className="tooltip-bg" height="15" rx="2" width="100" x="430" y="140"></rect>
                                    <text className="tooltip-text" x="435" y="151">Africa & Middle East</text>
                                </g>
                                <path className="country" d="M530 80 L750 70 L800 250 L600 280 Z" data-location="Asia"></path>
                                <path className="country" d="M780 320 L850 330 L830 380 L770 370 Z" data-location="Australia"></path>
                            </svg>
                        </div>
                    </div>

                    <div className="bg-gradient-to-r from-red-50 to-transparent p-8 md:p-12 rounded-xl flex flex-col md:flex-row items-center justify-between gap-8 mt-10 border border-red-100 shadow-sm">
                        <div className="text-center md:text-left">
                            <h3 className="text-gray-900 text-3xl font-bold">{t('references.cta.title', 'Ready to Build the Future?')}</h3>
                            <p className="text-gray-500 mt-2">{t('references.cta.subtitle', 'Partner with Sivas Iron Metal for unparalleled quality and global expertise.')}</p>
                        </div>
                        <Link to="/iletisim" className="flex-shrink-0 flex min-w-[120px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-8 bg-primary text-white text-base font-bold leading-normal tracking-[0.015em] shadow-lg shadow-primary/30 hover:bg-red-700 transition-colors">
                            <span className="truncate">{t('references.cta.button', 'Contact Us')}</span>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
