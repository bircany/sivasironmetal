import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function Home() {

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.5
            }
        }
    };

    return (
        <div className="flex flex-col overflow-hidden">
            {/* Hero Section */}
            <section className="relative flex min-h-[80vh] flex-col items-center justify-center bg-gray-900 px-4 py-20 text-center text-white">
                <motion.div
                    initial={{ scale: 1.1, opacity: 0 }}
                    animate={{ scale: 1, opacity: 0.4 }}
                    transition={{ duration: 1.5 }}
                    className="absolute inset-0 z-0 bg-cover bg-center"
                    style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&q=80")' }}
                />
                <div className="absolute inset-0 z-0 bg-gradient-to-b from-black/70 via-black/50 to-gray-900" />

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="relative z-10 flex max-w-5xl flex-col gap-8"
                >
                    <h1 className="text-5xl font-black leading-tight tracking-tight md:text-6xl lg:text-7xl">
                        <span className="bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
                            Global Steel & Iron Trade Excellence
                        </span>
                    </h1>
                    <p className="mx-auto max-w-3xl text-xl text-gray-300 md:text-2xl font-light">
                        Your trusted partner for premium steel and iron products worldwide. Quality, reliability, and global reach you can depend on.
                    </p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.6 }}
                        className="mt-8 flex flex-col justify-center gap-6 sm:flex-row"
                    >
                        <Link to="/urunlerimiz">
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="inline-flex h-14 w-full sm:w-auto items-center justify-center rounded-full bg-primary px-10 text-lg font-bold text-white shadow-lg shadow-primary/25 transition-colors hover:bg-red-700"
                            >
                                Product Catalog
                            </motion.button>
                        </Link>
                        <Link to="/iletisim">
                            <motion.button
                                whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.15)" }}
                                whileTap={{ scale: 0.95 }}
                                className="inline-flex h-14 w-full sm:w-auto items-center justify-center rounded-full border border-white/30 bg-white/10 px-10 text-lg font-bold text-white backdrop-blur-md transition-colors"
                            >
                                Contact Us
                            </motion.button>
                        </Link>
                    </motion.div>
                </motion.div>
            </section>

            {/* Stats Section */}
            <section className="relative z-20 -mt-16 container mx-auto px-4 md:px-10 lg:px-20 xl:px-40">
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4"
                >
                    {[
                        { label: 'Experience', value: '30+' },
                        { label: 'Export', value: '20+' },
                        { label: 'Product Range', value: '500+' },
                        { label: 'Quality', value: 'ISO 9001' },
                    ].map((stat) => (
                        <motion.div
                            key={stat.label}
                            variants={itemVariants}
                            whileHover={{ y: -5 }}
                            className="flex flex-col gap-2 rounded-2xl border border-gray-100 bg-white p-8 shadow-xl shadow-gray-200/50"
                        >
                            <p className="text-sm font-semibold uppercase tracking-wider text-gray-500">{stat.label}</p>
                            <p className="text-4xl font-black text-primary">{stat.value}</p>
                        </motion.div>
                    ))}
                </motion.div>
            </section>

            {/* Why Us Section */}
            <section className="bg-white py-24">
                <div className="container mx-auto px-4 md:px-10 lg:px-20 xl:px-40">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="mb-16 text-center"
                    >
                        <h2 className="text-4xl font-bold text-gray-900 md:text-5xl">Why Choose Sivas Iron Metal?</h2>
                        <p className="mt-4 text-xl text-gray-600">We have valid reasons for you to choose us.</p>
                    </motion.div>

                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="grid grid-cols-1 gap-12 md:grid-cols-3"
                    >
                        {[
                            { id: 1, title: 'Premium Quality', desc: 'Rigorous quality control ensures every product meets international standards and exceeds expectations.' },
                            { id: 2, title: 'Global Reach', desc: 'Extensive international network enables seamless trade across continents with reliable logistics.' },
                            { id: 3, title: 'Trusted Partner', desc: 'Decades of experience building long-term relationships with clients worldwide based on trust and reliability.' }
                        ].map((item) => (
                            <motion.div
                                key={item.id}
                                variants={itemVariants}
                                className="flex flex-col items-center text-center group"
                            >
                                <motion.div
                                    whileHover={{ scale: 1.1, rotate: 5 }}
                                    className="mb-8 flex h-20 w-20 items-center justify-center rounded-2xl bg-primary text-white shadow-lg shadow-primary/30 transition-transform"
                                >
                                    <span className="text-3xl font-bold">{item.id}</span>
                                </motion.div>
                                <h3 className="mb-4 text-2xl font-bold text-gray-900 group-hover:text-primary transition-colors">{item.title}</h3>
                                <p className="text-lg leading-relaxed text-gray-600">{item.desc}</p>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* Products Preview */}
            <section className="bg-gray-50 py-24">
                <div className="container mx-auto px-4 md:px-10 lg:px-20 xl:px-40">
                    <div className="mb-16 flex flex-col items-end justify-between gap-6 lg:flex-row">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="max-w-2xl"
                        >
                            <h2 className="text-4xl font-bold text-gray-900 md:text-5xl">Our Products</h2>
                            <p className="mt-4 text-xl text-gray-600">Comprehensive range of steel and iron products for diverse industrial applications</p>
                        </motion.div>
                        <Link to="/urunlerimiz">
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-white px-8 text-base font-bold text-gray-900 shadow-md transition-colors hover:text-primary"
                            >
                                View All <ArrowRight className="size-5" />
                            </motion.button>
                        </Link>
                    </div>

                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4"
                    >
                        {[
                            { id: 'sheets', title: 'Steel Sheets', img: 'https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&q=80' },
                            { id: 'pipes', title: 'Pipes Group', img: 'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?auto=format&fit=crop&q=80' },
                            { id: 'profiles', title: 'Profiles Group', img: 'https://images.unsplash.com/photo-1565610222536-ef125c59da2c?auto=format&fit=crop&q=80' },
                            { id: 'construction', title: 'Construction Materials', img: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80' }
                        ].map((item) => (
                            <Link key={item.id} to={`/urunlerimiz/kategori/${item.id}`}>
                                <motion.div
                                    variants={itemVariants}
                                    whileHover={{ y: -10 }}
                                    className="group relative h-96 overflow-hidden rounded-2xl bg-gray-900 shadow-lg"
                                >
                                    <motion.img
                                        whileHover={{ scale: 1.1 }}
                                        transition={{ duration: 0.6 }}
                                        src={item.img}
                                        alt={item.title}
                                        className="h-full w-full object-cover opacity-80 transition-opacity group-hover:opacity-60"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />
                                    <div className="absolute bottom-0 left-0 p-8">
                                        <h3 className="text-2xl font-bold text-white mb-2">{item.title}</h3>
                                        <p className="flex items-center gap-2 text-sm font-medium text-primary opacity-0 transform translate-y-4 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0">
                                            View All <ArrowRight className="size-4" />
                                        </p>
                                    </div>
                                </motion.div>
                            </Link>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* References/Brands Section */}
            <section className="py-24 bg-white border-t border-gray-100">
                <div className="container mx-auto px-4 text-center md:px-10 lg:px-20 xl:px-40">
                    <h2 className="mb-16 text-2xl font-bold text-gray-400 uppercase tracking-widest">Our References</h2>
                    <div className="flex flex-wrap justify-center gap-12 opacity-60 grayscale transition-all hover:grayscale-0">
                        {/* Placeholder logos */}
                        {[1, 2, 3, 4, 5].map((i) => (
                            <motion.div
                                key={i}
                                whileHover={{ scale: 1.1, opacity: 1 }}
                                className="flex h-16 items-center justify-center text-xl font-bold text-gray-300 border-2 border-dashed border-gray-200 px-8 rounded-xl hover:border-primary/50 hover:text-primary transition-colors cursor-pointer"
                            >
                                BRAND {i}
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}
