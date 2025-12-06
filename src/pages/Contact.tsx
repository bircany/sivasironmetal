import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

export default function Contact() {
    const { t } = useTranslation();

    return (
        <div className="flex flex-col min-h-screen w-full bg-white overflow-x-hidden">
            {/* Full Width Hero Section */}
            <div 
                className="relative flex min-h-[500px] flex-col items-center justify-center bg-cover bg-center bg-no-repeat pt-20 pb-20"
                style={{ backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.5) 0%, rgba(0, 0, 0, 0.7) 100%), url("https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop")' }}
            >
                <div className="container relative z-10 mx-auto px-4 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="flex flex-col items-center gap-6 max-w-4xl mx-auto"
                    >
                        <h1 className="text-white text-5xl font-black uppercase tracking-tighter leading-tight sm:text-6xl lg:text-7xl drop-shadow-2xl">
                            {t('contact.title', 'Contact Us')}
                        </h1>
                        <h2 className="text-white/90 text-lg font-medium leading-relaxed sm:text-xl max-w-2xl drop-shadow-lg">
                            {t('contact.subtitle', 'Get in touch with our expert team for all your iron and metal trade needs.')}
                        </h2>
                    </motion.div>
                </div>
            </div>

            <div className="container mx-auto px-4 py-16 md:px-10 lg:px-20 xl:px-40 -mt-20 relative z-20">
                <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
                    {/* Contact Info Cards */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="lg:col-span-1 flex flex-col gap-6"
                    >
                        <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100 h-full">
                            <h2 className="text-2xl font-bold text-gray-900 mb-6">{t('contact.info.title', 'Contact Information')}</h2>
                            <p className="text-gray-500 mb-8">{t('contact.info.desc', 'Reach out to us through any of the following channels.')}</p>

                            <div className="flex flex-col gap-8">
                                <div className="flex items-start gap-4 group">
                                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-white">
                                        <MapPin className="size-6" />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-gray-900 mb-1">{t('contact.info.address.title', 'Address')}</h3>
                                        <p className="text-gray-600 text-sm leading-relaxed">
                                            Organize Sanayi Bölgesi 1. Cadde No: 58<br />Sivas, Türkiye
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4 group">
                                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-white">
                                        <Phone className="size-6" />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-gray-900 mb-1">{t('contact.info.phone.title', 'Phone')}</h3>
                                        <p className="text-gray-600 text-sm">+90 346 222 33 44</p>
                                        <p className="text-gray-600 text-sm">+90 346 222 33 45</p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4 group">
                                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-white">
                                        <Mail className="size-6" />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-gray-900 mb-1">{t('contact.info.email.title', 'Email')}</h3>
                                        <p className="text-gray-600 text-sm">info@sivasironmetal.com.tr</p>
                                        <p className="text-gray-600 text-sm">export@sivasironmetal.com.tr</p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4 group">
                                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-white">
                                        <Clock className="size-6" />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-gray-900 mb-1">{t('contact.info.hours.title', 'Working Hours')}</h3>
                                        <p className="text-gray-600 text-sm">Mon - Fri: 08:30 - 18:00</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        className="lg:col-span-2"
                    >
                        <div className="bg-white rounded-2xl shadow-xl p-8 md:p-10 border border-gray-100 h-full">
                            <h2 className="mb-2 text-3xl font-bold text-gray-900">{t('contact.form.title', 'Send Us a Message')}</h2>
                            <p className="mb-8 text-gray-500">{t('contact.form.subtitle', 'Fill out the form below and we will get back to you shortly.')}</p>
                            
                            <form className="flex flex-col gap-6">
                                <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                                    <div className="flex flex-col gap-2">
                                        <label className="text-sm font-bold text-gray-700 uppercase tracking-wide">{t('contact.form.name', 'Full Name')}</label>
                                        <input type="text" className="rounded-xl border border-gray-200 bg-gray-50 px-4 py-4 focus:border-primary focus:bg-white focus:outline-none focus:ring-4 focus:ring-primary/10 transition-all" placeholder="John Doe" />
                                    </div>
                                    <div className="flex flex-col gap-2">
                                        <label className="text-sm font-bold text-gray-700 uppercase tracking-wide">{t('contact.form.email', 'Email Address')}</label>
                                        <input type="email" className="rounded-xl border border-gray-200 bg-gray-50 px-4 py-4 focus:border-primary focus:bg-white focus:outline-none focus:ring-4 focus:ring-primary/10 transition-all" placeholder="john@example.com" />
                                    </div>
                                </div>

                                <div className="flex flex-col gap-2">
                                    <label className="text-sm font-bold text-gray-700 uppercase tracking-wide">{t('contact.form.subject', 'Subject')}</label>
                                    <input type="text" className="rounded-xl border border-gray-200 bg-gray-50 px-4 py-4 focus:border-primary focus:bg-white focus:outline-none focus:ring-4 focus:ring-primary/10 transition-all" placeholder="How can we help you?" />
                                </div>

                                <div className="flex flex-col gap-2">
                                    <label className="text-sm font-bold text-gray-700 uppercase tracking-wide">{t('contact.form.message', 'Message')}</label>
                                    <textarea rows={6} className="rounded-xl border border-gray-200 bg-gray-50 px-4 py-4 focus:border-primary focus:bg-white focus:outline-none focus:ring-4 focus:ring-primary/10 transition-all resize-none" placeholder="Your message..."></textarea>
                                </div>

                                <motion.button
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                    type="submit"
                                    className="mt-4 rounded-xl bg-primary py-5 font-bold text-white transition-all hover:bg-red-700 shadow-lg shadow-primary/30 text-lg"
                                >
                                    {t('contact.form.submit', 'Send Message')}
                                </motion.button>
                            </form>
                        </div>
                    </motion.div>
                </div>

                {/* Map */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="mt-16 h-[450px] w-full overflow-hidden rounded-3xl border-4 border-white shadow-2xl"
                >
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12267.766123456789!2d37.0!3d39.75!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMznCsDQ1JzAwLjAiTiAzN8KwMDAnMDAuMCJF!5e0!3m2!1sen!2str!4v1234567890123!5m2!1sen!2str"
                        width="100%"
                        height="100%"
                        style={{ border: 0 }}
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        className="grayscale hover:grayscale-0 transition-all duration-700"
                    ></iframe>
                </motion.div>
            </div>
        </div>
    );
}
