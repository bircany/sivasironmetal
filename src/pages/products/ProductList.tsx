import { useTranslation } from 'react-i18next';

export default function ProductList() {
    const { t } = useTranslation();

    const handleRequestQuote = (productName: string) => {
        const event = new CustomEvent('openChatWithProduct', { detail: { productName } });
        window.dispatchEvent(event);
    };

    return (
        <div className="flex flex-col min-h-screen w-full bg-gray-50 overflow-x-hidden">
            {/* Hero Section */}
            <div className="relative w-full h-[600px] overflow-hidden group">
                <div 
                    className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-1000 group-hover:scale-105" 
                    style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuC4m66qEUTWTmysGB_uO5Ps8BwLPux7QFz_CKusJnN5MXszhRZwpHyWHbQnGnhHB93ySePx80U01SpOTftnzs6u4ZYjFOginBajKPuxV0Xi3rzJ_Ugb8b1DzIhIGdBAhgrVXfAf3EhYrbsLe4hSz9jfzO8-pZVcervEpb4-Ao_U-5aRX7yNYhesbWUBFwtsZ0CI3mGD1BtcFm8zKwYl9oVFmdFB5ygGCjhb9Ho_N7PCyssKgpfRdcEadmMw4XfXVPPWGEHfZIofMdiI")' }}
                >
                    <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/60 to-transparent"></div>
                </div>
                <div className="relative h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-center">
                    <div className="max-w-4xl space-y-8">
                        <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-white/5 backdrop-blur-xl border border-white/10 text-white/90 text-sm font-medium shadow-2xl">
                            <span className="relative flex h-3 w-3">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-3 w-3 bg-primary"></span>
                            </span>
                            {t('products.hero.badge', 'Premium Quality Metals')}
                        </div>
                        <h1 className="text-6xl md:text-8xl font-black text-white leading-none tracking-tighter drop-shadow-2xl">
                            {t('products.hero.title', 'Ürün Kataloğu')}
                        </h1>
                        <p className="text-xl text-gray-300 max-w-2xl leading-relaxed font-light border-l-4 border-primary pl-6">
                            {t('products.hero.subtitle', 'Yüksek kaliteli demir ve metal ürünlerimizi keşfedin. Endüstriyel ihtiyaçlarınız için güvenilir çözümler.')}
                        </p>
                    </div>
                </div>
            </div>

            <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 flex flex-col gap-24">
                
                {/* Hot/Cold Rolled Steel Sheets */}
                <section>
                    <div className="flex items-end justify-between mb-12 border-b border-gray-200 pb-6">
                        <div className="flex items-center gap-6">
                            <div className="h-16 w-2 bg-gradient-to-b from-primary to-red-900 rounded-full"></div>
                            <div>
                                <h2 className="text-4xl font-black text-gray-900 tracking-tight">
                                    {t('products.categories.sheets', 'Sıcak / Soğuk Haddelenmiş Çelik Sac')}
                                </h2>
                                <p className="text-gray-500 mt-2 font-medium">{t('products.categories.sheets_desc', 'Premium Grade Steel Sheets')}</p>
                            </div>
                        </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[
                            {
                                name: t('products.items.hr-sheets.name', 'Sıcak Haddelenmiş Rulo Sac'),
                                status: t('products.status.inStock', 'Stokta Var'),
                                statusColor: 'bg-emerald-500',
                                image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAzWbupCgLacNRxwXRGOxPTkL1Ed4p8gIkbywNCHzBwdxZvUS7vFGPw-nouishzsMTbNDnd36ynhCsxV1AlHlP1B6b84oCJx2XYz0nk0HpD-efL4yFwotS6I8tr6UaAojdszlaDshmGNwC9BkNYTOh9uMs4G8nPWEvMxom_3XjGOcn3EfvOUKXcGmZg5xvipGtAoGmimIP00dQ6q4WOnxb5TEQtxHGwOs0OGJQogL6m9UyOXoRNg9JkOVxBuprwRXMxg76ZX6HsNwuu"
                            },
                            {
                                name: t('products.items.cr-sheets.name', 'Soğuk Haddelenmiş Levha'),
                                status: t('products.status.inStock', 'Stokta Var'),
                                statusColor: 'bg-emerald-500',
                                image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAZZWXOQfhe9UsFO1vPQQx_Hbe2H0FjyPG-liDhjaDHcrAa74WS6QicDwWwtc-EnLtOJM1FNrRsLXvQQSNuvk5bcRT509sASM5y8qn-7SYfPUKWxdgccdDAvBboBe1ZicGRuW6TAQYYxJt9T7LuROuL3vAKqhqs8knjw0-cTKaNGvlFMURrB5P8equEvlB1yLy6jV8xYMdwNd3OlBJkx5KcOUv6qMLOG7FT9Exhq1m9RvqiN5cfeRnIk4cqaXAl5AKFKWNhulP_LzCM"
                            },
                            {
                                name: t('products.items.hrp-sheets.name', 'Asitlenmiş Rulo Sac'),
                                status: t('products.status.onOrder', 'Sipariş Üzerine'),
                                statusColor: 'bg-amber-500',
                                image: "https://lh3.googleusercontent.com/aida-public/AB6AXuB7pc13J2LBXvoojXN-6a5VbMkwRY2vrGrEu_LFkN1wefmjxdKgr3u-VRxzVvv-ty9iiuFNVaSALL1f318keoHN8stxWTwJI-kExr5HBof_jIGUBicAZWKrJfRrprDCiNBDT3ldyLGX_3PKanmx36uco4jrIzvhvkgpwno18xfDJqrI9DitgSpXrtj0lZ3K5363Kij7aB0AKVwS-fWbud_VFyDqi2Fg725V72BDVzsvavBAwYtsUrb_s1zRGhviKkoC8Z9xOkavTWnl"
                            },
                            {
                                name: t('products.items.tempered-sheets.name', 'Temperlenmiş Çelik Levha'),
                                status: t('products.status.inStock', 'Stokta Var'),
                                statusColor: 'bg-emerald-500',
                                image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAIgIhc4I3k2DBGqA5nqgY7O2hUHKzTPNKnZE93zNinFJ0wChlCSVwBrgeD0YS-XTxNuA1MKLBLz-fI0s0Tzgy4VBnTa8dS_BO7h6emFXX07NTHMR6ThCfKW26hszhkyXxxXoypLXhvyqlVuBohLvbN8qTmGyiZ_M5b_4UmutMKKnRnN_hD2PSP_8wo5vgdJfgdSgkRNCC8P5zXQIPgPoxhW4T0D5sln8S3BD1gpF_IZe1bvfekq7tlZlEjIihuUFBhuCe3ZKOM1voS"
                            }
                        ].map((item, index) => (
                            <div key={index} className="group relative bg-white rounded-3xl p-4 shadow-sm hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:-translate-y-2">
                                <div className="relative w-full aspect-[4/3] overflow-hidden rounded-2xl bg-gray-900">
                                    <div 
                                        className="w-full h-full bg-cover bg-center transition-transform duration-700 group-hover:scale-110 opacity-90 group-hover:opacity-100" 
                                        style={{ backgroundImage: `url("${item.image}")` }}
                                    ></div>
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-60 group-hover:opacity-40 transition-opacity"></div>
                                    <div className="absolute top-4 right-4 flex items-center gap-2">
                                        <span className={`h-2 w-2 rounded-full ${item.statusColor} shadow-[0_0_10px_rgba(0,0,0,0.5)]`}></span>
                                        <span className="px-3 py-1 rounded-full text-xs font-bold bg-white/90 text-gray-900 backdrop-blur-md shadow-lg">
                                            {item.status}
                                        </span>
                                    </div>
                                </div>
                                <div className="pt-6 pb-2 px-2">
                                    <h3 className="text-xl font-bold text-gray-900 mb-4 line-clamp-2 leading-tight group-hover:text-primary transition-colors">
                                        {item.name}
                                    </h3>
                                    <button 
                                        onClick={() => handleRequestQuote(item.name)}
                                        className="w-full py-4 rounded-xl bg-gray-50 text-gray-900 font-bold text-sm hover:bg-primary hover:text-white transition-all duration-300 flex items-center justify-center gap-2 group-hover:shadow-lg group-hover:shadow-primary/30 border border-gray-200 group-hover:border-primary"
                                    >
                                        {t('common.requestQuote', 'Teklif Al')}
                                        <svg className="w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                        </svg>
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Galvanized Sheets */}
                <section>
                    <div className="flex items-end justify-between mb-12 border-b border-gray-200 pb-6">
                        <div className="flex items-center gap-6">
                            <div className="h-16 w-2 bg-gradient-to-b from-primary to-red-900 rounded-full"></div>
                            <div>
                                <h2 className="text-4xl font-black text-gray-900 tracking-tight">
                                    {t('products.categories.galvanized', 'Galvanizli Sac')}
                                </h2>
                                <p className="text-gray-500 mt-2 font-medium">{t('products.categories.galvanized_desc', 'Galvanized Steel Products')}</p>
                            </div>
                        </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[
                            {
                                name: t('products.items.galvanized-coil.name', 'Galvanizli Rulo Sac'),
                                status: t('products.status.inStock', 'Stokta Var'),
                                statusColor: 'bg-emerald-500',
                                image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCk7-QVxwPjH2sZm40y-dA95npZ2dkxHi1f4uIJ0_-KVJroGe3ogMBHrQJdLqtESUo6lxHaGaB-dL20sDs2VY-xybsAq8Y9QyOvFVQBsgnHP_HCMvG7E3ReB2-VE18TrCtwl6zVRUM57gm-RQwCslioBPD21Mra2oIbyKLERUjgndKpQ0mIMKr5pDCJ7mxy0SwA1YxgpWg4JqYghjlH7RKav4fRPHxiRemd7ZSl_iGl3-FNj4PYhGKxhe3JH0zFG4dXvWlOBe9uUZW1"
                            },
                            {
                                name: t('products.items.galvanized-sheets.name', 'Galvanizli Düz Levha'),
                                status: t('products.status.inStock', 'Stokta Var'),
                                statusColor: 'bg-emerald-500',
                                image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCYLqmCR_mBF-KWqWja3ryFAxyGpx8hZ4UXcMaiRHanzeeLsnpwsx_0G1eZdV42G8L990WNf24iS38KQUqY4ocZ8MsMJ5C9BXGBwvUB_6KyXqwtcVHK-6vwzL_P1IKpOsrkXT7nJi0SQ-HunhXocJiu9J5HLCAF82QlgUws1R9oiEbNYj51GzDg6M4xEQT1_UXRC7ZxY7rjQIiEu7ib45029IlO5IkeCcD0iU3UYRF5Fx4xf-Fz8InlbgHB42G-kJtR54F_1Abbr_Jw"
                            }
                        ].map((item, index) => (
                            <div key={index} className="group relative bg-white rounded-3xl p-4 shadow-sm hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:-translate-y-2">
                                <div className="relative w-full aspect-[4/3] overflow-hidden rounded-2xl bg-gray-900">
                                    <div 
                                        className="w-full h-full bg-cover bg-center transition-transform duration-700 group-hover:scale-110 opacity-90 group-hover:opacity-100" 
                                        style={{ backgroundImage: `url("${item.image}")` }}
                                    ></div>
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-60 group-hover:opacity-40 transition-opacity"></div>
                                    <div className="absolute top-4 right-4 flex items-center gap-2">
                                        <span className={`h-2 w-2 rounded-full ${item.statusColor} shadow-[0_0_10px_rgba(0,0,0,0.5)]`}></span>
                                        <span className="px-3 py-1 rounded-full text-xs font-bold bg-white/90 text-gray-900 backdrop-blur-md shadow-lg">
                                            {item.status}
                                        </span>
                                    </div>
                                </div>
                                <div className="pt-6 pb-2 px-2">
                                    <h3 className="text-xl font-bold text-gray-900 mb-4 line-clamp-2 leading-tight group-hover:text-primary transition-colors">
                                        {item.name}
                                    </h3>
                                    <button 
                                        onClick={() => handleRequestQuote(item.name)}
                                        className="w-full py-4 rounded-xl bg-gray-50 text-gray-900 font-bold text-sm hover:bg-primary hover:text-white transition-all duration-300 flex items-center justify-center gap-2 group-hover:shadow-lg group-hover:shadow-primary/30 border border-gray-200 group-hover:border-primary"
                                    >
                                        {t('common.requestQuote', 'Teklif Al')}
                                        <svg className="w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                        </svg>
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Pipes & Profiles */}
                <section>
                    <div className="flex items-end justify-between mb-12 border-b border-gray-200 pb-6">
                        <div className="flex items-center gap-6">
                            <div className="h-16 w-2 bg-gradient-to-b from-primary to-red-900 rounded-full"></div>
                            <div>
                                <h2 className="text-4xl font-black text-gray-900 tracking-tight">
                                    {t('products.categories.pipes', 'Boru & Profil Ürünleri')}
                                </h2>
                                <p className="text-gray-500 mt-2 font-medium">{t('products.categories.pipes_desc', 'Pipes & Profiles')}</p>
                            </div>
                        </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[
                            {
                                name: t('products.items.industrial-pipes.name', 'Sanayi Boruları'),
                                status: t('products.status.inStock', 'Stokta Var'),
                                statusColor: 'bg-emerald-500',
                                image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBTHuxqGbj0qlb3tt_ggnAnr08Sp4dywFlZd_qCli59lXtS-pWvuHxaupqlHCWeS-vqTHNfKxD8Ri9AXtbnF8UNIR55uYZk84vIYy3WvVt1Rk7KtbvEkCqhJdLp5aHgI8wzlyjawCJqPpa-13SenesvXshBjLuhSaq-JURIG2EpzX7hefl1_2_QRbTqnLsRdyVIbo5TVt3mEOve4lggXq2Fd0_sES4nkCfSCD8yWjo8KaaHvF9oAX_zOlRlhapr5R0yR0CFsqHt4MwV"
                            },
                            {
                                name: t('products.items.box-profiles.name', 'Kutu Profiller'),
                                status: t('products.status.onOrder', 'Sipariş Üzerine'),
                                statusColor: 'bg-amber-500',
                                image: "https://lh3.googleusercontent.com/aida-public/AB6AXuA72utr_snzGAYMZ8DpiAetxVKIFodrrq4hJY5ceE9zLAbpPkVwIhQ56MWign6lXxLj0RdMcxOcSw2ZHXp1qej1YZSiqS_FDX-awYEARtYlMi_ghRQ9vjoXja_UoiShIetlSzxfJxi1pIZrfLogJR9jqC3fQhp6R1hljvPUEZMOgbxM9ylebpkauvAxKpjZs2l2MwzhoCW8JdyWRUhP5GsG-ASMr4EePq2cXbo3SgKu1F3KfyhUHEJaTqEfKhfJpINHvEUk_RkAIU9E"
                            }
                        ].map((item, index) => (
                            <div key={index} className="group relative bg-white rounded-3xl p-4 shadow-sm hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:-translate-y-2">
                                <div className="relative w-full aspect-[4/3] overflow-hidden rounded-2xl bg-gray-900">
                                    <div 
                                        className="w-full h-full bg-cover bg-center transition-transform duration-700 group-hover:scale-110 opacity-90 group-hover:opacity-100" 
                                        style={{ backgroundImage: `url("${item.image}")` }}
                                    ></div>
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-60 group-hover:opacity-40 transition-opacity"></div>
                                    <div className="absolute top-4 right-4 flex items-center gap-2">
                                        <span className={`h-2 w-2 rounded-full ${item.statusColor} shadow-[0_0_10px_rgba(0,0,0,0.5)]`}></span>
                                        <span className="px-3 py-1 rounded-full text-xs font-bold bg-white/90 text-gray-900 backdrop-blur-md shadow-lg">
                                            {item.status}
                                        </span>
                                    </div>
                                </div>
                                <div className="pt-6 pb-2 px-2">
                                    <h3 className="text-xl font-bold text-gray-900 mb-4 line-clamp-2 leading-tight group-hover:text-primary transition-colors">
                                        {item.name}
                                    </h3>
                                    <button 
                                        onClick={() => handleRequestQuote(item.name)}
                                        className="w-full py-4 rounded-xl bg-gray-50 text-gray-900 font-bold text-sm hover:bg-primary hover:text-white transition-all duration-300 flex items-center justify-center gap-2 group-hover:shadow-lg group-hover:shadow-primary/30 border border-gray-200 group-hover:border-primary"
                                    >
                                        {t('common.requestQuote', 'Teklif Al')}
                                        <svg className="w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                        </svg>
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>
            </div>
        </div>
    );
}
