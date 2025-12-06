import { useTranslation } from 'react-i18next';

export default function QualityCertificates() {
    const { t } = useTranslation();

    return (
        <div className="flex flex-col min-h-screen w-full bg-white overflow-x-hidden">
            {/* Hero Section */}
            <div className="relative w-full mt-8">
                <div className="px-4 sm:px-6 lg:px-8">
                    <div 
                        className="bg-cover bg-center flex flex-col justify-end overflow-hidden rounded-lg min-h-80 shadow-lg" 
                        style={{ backgroundImage: 'linear-gradient(0deg, rgba(10, 5, 5, 0.6) 0%, rgba(10, 5, 5, 0) 40%), url("https://lh3.googleusercontent.com/aida-public/AB6AXuAGywXE8xUTdlX0cat_dS9yrX36A5WqZ82AKI-zjyFl6c7DBHUmpJgR3LJM1UNgwksyr0OezJ78BGQMznVAbB7tZHZ3C0EouONulUX6nUbfq5_04c44XBcXrx7yhetpp8TrajNUTjeY-5r0sWQgKRiKw6hpBixE_PPpyCvBop3iDNlXGKGz_IYFIIFMMpFzWbOX-DWT14aasIG8XQ9LxWT30lRrFZLsipqAB4ngjzgEh-E-ohHasTDb9u16LCJ7p5XDnq82VSKKF2zc")' }}
                    >
                        <div className="flex p-6 md:p-8">
                            <h1 className="text-white tracking-light text-[32px] md:text-[40px] font-bold leading-tight drop-shadow-md">
                                {t('corporate.certificates.title', 'Kalite Sertifikaları')}
                            </h1>
                        </div>
                    </div>
                </div>
            </div>

            <p className="text-gray-600 text-base font-normal leading-normal pb-6 pt-6 px-4 text-center max-w-3xl mx-auto">
                {t('corporate.certificates.intro', 'Uluslararası standartlara ve kaliteye olan bağlılığımız operasyonlarımızın temelindedir. Güvenebileceğiniz ürünler sunmak için endüstri ölçütlerini aşmaya sürekli gayret ediyoruz.')}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-4 max-w-7xl mx-auto w-full">
                {/* ISO 9001 */}
                <div className="flex flex-col gap-3 pb-3 bg-gray-50 rounded-lg p-4 transition-all hover:bg-gray-100 border border-gray-200 hover:shadow-md">
                    <div className="w-full bg-center bg-no-repeat aspect-[3/4] bg-cover rounded-md shadow-sm" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAw0IkmA-8cqovWfjq9id3rRbkTV-lCwpioBTDedGtEeiWgPdZMr670INsj-LOuQ7rR1jSnUY4zLKQxb_wHV4pg_5mde4SGPpxoIBpjFJvtGxFo_2sHkEUtdfygwoFPzSFfP5Eo3Ac0fX6MV6uB2s3Ls7xcYgyXFwNMpJqxfNeMSq7UjRzU5ffknp3-hKeeGSYe4MySI9A78H-YXkjyAakIOJs0Fvxv0DRN-6GtVTjzrUcfEg5aYhN6t7fII3RCfQFdkx56dArOLEfp")' }}></div>
                    <div className="flex flex-col gap-2 mt-2">
                        <p className="text-gray-900 text-lg font-bold leading-normal">ISO 9001</p>
                        <p className="text-gray-600 text-sm font-normal leading-normal">
                            {t('corporate.certificates.items.iso9001.desc', 'Sertifika No: TR-12345. Bu sertifika, kalite yönetim sistemlerimizin uluslararası standartları karşıladığını garanti eder.')}
                        </p>
                        <a className="inline-flex items-center gap-2 text-primary font-semibold text-sm mt-2 hover:underline cursor-pointer">
                            <span className="material-symbols-outlined text-base">download</span>
                            {t('common.downloadPdf', 'PDF İndir')}
                        </a>
                    </div>
                </div>

                {/* ISO 14001 */}
                <div className="flex flex-col gap-3 pb-3 bg-gray-50 rounded-lg p-4 transition-all hover:bg-gray-100 border border-gray-200 hover:shadow-md">
                    <div className="w-full bg-center bg-no-repeat aspect-[3/4] bg-cover rounded-md shadow-sm" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAmZURcWHUelPted90vY1B1NqIS0T7o78jU9Dp7WggXlk-TWhtIVljWXLZuwoNuP9CWJ79ruUBxMFpQ0SplXbVSakeknYtCVskIyFAwgas4WH-QKvYkB6e3gTkWNuGyhN0HIecEI3Cv36JMZrwTzQVUhKgNGa_Z_bqZyrF16Q3P21qV9ijlvBK3Mayx3RXrhJULKCW2MtLxIHf7OKZ9ltuox5fSsf1c5Ob9L_871DSb7wAoTKo31aIxJUHcvPbAjcmg6fR8RRCPb4Ls")' }}></div>
                    <div className="flex flex-col gap-2 mt-2">
                        <p className="text-gray-900 text-lg font-bold leading-normal">ISO 14001</p>
                        <p className="text-gray-600 text-sm font-normal leading-normal">
                            {t('corporate.certificates.items.iso14001.desc', 'Sertifika No: TR-67890. Bu sertifika, çevre yönetimine olan bağlılığımızı gösterir.')}
                        </p>
                        <a className="inline-flex items-center gap-2 text-primary font-semibold text-sm mt-2 hover:underline cursor-pointer">
                            <span className="material-symbols-outlined text-base">download</span>
                            {t('common.downloadPdf', 'PDF İndir')}
                        </a>
                    </div>
                </div>

                {/* CE Compliance */}
                <div className="flex flex-col gap-3 pb-3 bg-gray-50 rounded-lg p-4 transition-all hover:bg-gray-100 border border-gray-200 hover:shadow-md">
                    <div className="w-full bg-center bg-no-repeat aspect-[3/4] bg-cover rounded-md shadow-sm" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCXRBeFJ0vTMI8yvLamfN9Qn4IDY944IA5U2bL59ecqAZLhjmzGsIGNb27KFC5RDepU4omRCIf0kb7doONsOvxKyobIbLqm71AeXcm4bVLdoLa7V_RPidnlSn58hD3jykbJQrUqLjyoMV4jTN1MUJXyrT8WuL3jxXnVRe3KfS-LEsVEnwGSuxhJ8LP4jBGRtoOYKbY8IQB9AkW3ykLdCEF8TKnpjO9JKW-8FBwG8mDRQjq3ccGefZlF-AXFCNVe27YpfoC4igmcnLT_")' }}></div>
                    <div className="flex flex-col gap-2 mt-2">
                        <p className="text-gray-900 text-lg font-bold leading-normal">{t('corporate.certificates.items.ce.title', 'CE Uyumluluk Belgeleri')}</p>
                        <p className="text-gray-600 text-sm font-normal leading-normal">
                            {t('corporate.certificates.items.ce.desc', 'Sertifika No: CE-24680. Bu işaret, sağlık, güvenlik ve çevre koruma standartlarına uygunluğu gösterir.')}
                        </p>
                        <a className="inline-flex items-center gap-2 text-primary font-semibold text-sm mt-2 hover:underline cursor-pointer">
                            <span className="material-symbols-outlined text-base">download</span>
                            {t('common.downloadPdf', 'PDF İndir')}
                        </a>
                    </div>
                </div>

                {/* EN Standards */}
                <div className="flex flex-col gap-3 pb-3 bg-gray-50 rounded-lg p-4 transition-all hover:bg-gray-100 border border-gray-200 hover:shadow-md">
                    <div className="w-full bg-center bg-no-repeat aspect-[3/4] bg-cover rounded-md shadow-sm" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuD7MxetIgYmmrjygf5L9yzKJplrJl540nCzdlTWDXAj0Z5QS087Lj6ipv3JfLcXx1uwa58xNLtzDUcMs0R3C8o37Y1dMph7gCv7JK72kaMv4dEtf2K-HLcvldibFNGES_uqJ1bSHFkOAXA_OyI6BmjOSafA9D-ncfRkSP18MWsxDNYidFFfUDExUo6TPjmT55yKIk4EsJPSYGXV8iisYMc1q9X_lyC9ydivVb5RzSzSoAXfdxq_pWJQyKjXcA6cn7TApfizi67TfDRT")' }}></div>
                    <div className="flex flex-col gap-2 mt-2">
                        <p className="text-gray-900 text-lg font-bold leading-normal">{t('corporate.certificates.items.en.title', 'EN Standartları')}</p>
                        <p className="text-gray-600 text-sm font-normal leading-normal">
                            {t('corporate.certificates.items.en.desc', 'Sertifika No: EN-13579. Ürün uyumluluğunu ve güvenliğini sağlamak için Avrupa Standartlarına uyuyoruz.')}
                        </p>
                        <a className="inline-flex items-center gap-2 text-primary font-semibold text-sm mt-2 hover:underline cursor-pointer">
                            <span className="material-symbols-outlined text-base">download</span>
                            {t('common.downloadPdf', 'Download PDF')}
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}
