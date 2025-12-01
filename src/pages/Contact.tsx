import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Contact() {

    return (
        <div className="flex flex-col">
            {/* Header */}
            <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="bg-gray-900 py-20 text-center text-white"
            >
                <h1 className="text-4xl font-bold">Contact Us</h1>
                <p className="mt-4 text-gray-400">Get in Touch With Our Team</p>
            </motion.div>

            <div className="container mx-auto px-4 py-20 md:px-10 lg:px-20 xl:px-40">
                <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
                    {/* Contact Info */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="flex flex-col gap-8"
                    >
                        <div>
                            <h2 className="text-2xl font-bold text-gray-900">Contact Information</h2>
                            <p className="mt-2 text-gray-600">You can reach us via the contact channels below or leave a message by filling out the form.</p>
                        </div>

                        <div className="flex flex-col gap-6">
                            <div className="flex items-start gap-4">
                                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                                    <MapPin className="size-6" />
                                </div>
                                <div>
                                    <h3 className="font-bold text-gray-900">Address</h3>
                                    <p className="text-gray-600">
                                        Organize Sanayi Bölgesi 1. Cadde No: 58<br />
                                        Sivas, Türkiye
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                                    <Phone className="size-6" />
                                </div>
                                <div>
                                    <h3 className="font-bold text-gray-900">Phone</h3>
                                    <p className="text-gray-600">+90 346 222 33 44</p>
                                    <p className="text-gray-600">+90 346 222 33 45</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                                    <Mail className="size-6" />
                                </div>
                                <div>
                                    <h3 className="font-bold text-gray-900">Email</h3>
                                    <p className="text-gray-600">info@sivasironmetal.com.tr</p>
                                    <p className="text-gray-600">export@sivasironmetal.com.tr</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                                    <Clock className="size-6" />
                                </div>
                                <div>
                                    <h3 className="font-bold text-gray-900">Working Hours</h3>
                                    <p className="text-gray-600">Mon - Fri: 08:30 - 18:00</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        className="rounded-2xl border border-gray-200 bg-white p-8 shadow-sm"
                    >
                        <h2 className="mb-6 text-2xl font-bold text-gray-900">Send Us a Message</h2>
                        <form className="flex flex-col gap-6">
                            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                                <div className="flex flex-col gap-2">
                                    <label className="text-sm font-medium text-gray-700">Full Name</label>
                                    <input type="text" className="rounded-lg border border-gray-300 px-4 py-3 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary" />
                                </div>
                                <div className="flex flex-col gap-2">
                                    <label className="text-sm font-medium text-gray-700">Email Address</label>
                                    <input type="email" className="rounded-lg border border-gray-300 px-4 py-3 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary" />
                                </div>
                            </div>

                            <div className="flex flex-col gap-2">
                                <label className="text-sm font-medium text-gray-700">Subject</label>
                                <input type="text" className="rounded-lg border border-gray-300 px-4 py-3 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary" />
                            </div>

                            <div className="flex flex-col gap-2">
                                <label className="text-sm font-medium text-gray-700">Message</label>
                                <textarea rows={4} className="rounded-lg border border-gray-300 px-4 py-3 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"></textarea>
                            </div>

                            <motion.button
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                type="submit"
                                className="rounded-lg bg-primary py-4 font-bold text-white transition-colors hover:bg-red-700 shadow-lg shadow-primary/20"
                            >
                                Send Message
                            </motion.button>
                        </form>
                    </motion.div>
                </div>

                {/* Map */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="mt-20 h-[400px] w-full overflow-hidden rounded-2xl bg-gray-200 shadow-lg"
                >
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12267.766123456789!2d37.0!3d39.75!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMznCsDQ1JzAwLjAiTiAzN8KwMDAnMDAuMCJF!5e0!3m2!1sen!2str!4v1234567890123!5m2!1sen!2str"
                        width="100%"
                        height="100%"
                        style={{ border: 0 }}
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                </motion.div>
            </div>
        </div>
    );
}
