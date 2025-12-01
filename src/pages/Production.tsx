import { motion } from 'framer-motion';
import { Factory, Settings, ShieldCheck, Award, BarChart3, Zap } from 'lucide-react';

export default function Production() {

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
            transition: { duration: 0.5 }
        }
    };

    return (
        <div className="flex flex-col">
            {/* Hero Section */}
            <div className="relative h-[50vh] min-h-[400px] w-full overflow-hidden bg-gray-900">
                <div className="absolute inset-0">
                    <img
                        src="https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&q=80"
                        alt="Steel Production"
                        className="h-full w-full object-cover opacity-40"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/50 to-transparent" />
                </div>
                <div className="relative flex h-full items-center justify-center px-4 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <h1 className="text-4xl font-bold text-white md:text-6xl">Production Capability</h1>
                        <p className="mt-4 text-xl text-gray-300 md:text-2xl">State-of-the-Art Manufacturing</p>
                    </motion.div>
                </div>
            </div>

            {/* Intro Section */}
            <section className="py-20">
                <div className="container mx-auto px-4 md:px-10 lg:px-20">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="mx-auto max-w-4xl text-center"
                    >
                        <p className="text-xl leading-relaxed text-gray-600">
                            Our production facilities are equipped with the latest technology to ensure high precision and quality in every product. We maintain strict quality control standards throughout the manufacturing process.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Process Section */}
            <section className="bg-gray-50 py-20">
                <div className="container mx-auto px-4 md:px-10 lg:px-20">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="mb-16 text-center"
                    >
                        <h2 className="text-3xl font-bold text-gray-900 md:text-4xl">Production Process</h2>
                    </motion.div>

                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4"
                    >
                        {[
                            { icon: Factory, step: '1', title: 'Raw Material Selection', desc: 'Sourcing the finest quality raw materials from certified suppliers.' },
                            { icon: Settings, step: '2', title: 'Precision Processing', desc: 'Using advanced machinery for cutting, shaping, and forming.' },
                            { icon: ShieldCheck, step: '3', title: 'Quality Testing', desc: 'Rigorous testing for strength, durability, and compliance.' },
                            { icon: Award, step: '4', title: 'Final Finishing', desc: 'Surface treatment and coating for enhanced longevity.' }
                        ].map((item, index) => (
                            <motion.div
                                key={index}
                                variants={itemVariants}
                                whileHover={{ y: -10 }}
                                className="relative rounded-2xl bg-white p-8 shadow-lg transition-all hover:shadow-xl"
                            >
                                <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-primary">
                                    <item.icon className="size-8" />
                                </div>
                                <div className="absolute top-8 right-8 text-4xl font-bold text-gray-100">0{index + 1}</div>
                                <h3 className="mb-3 text-xl font-bold text-gray-900">{item.title}</h3>
                                <p className="text-gray-600">{item.desc}</p>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* Capacity Section */}
            <section className="py-20">
                <div className="container mx-auto px-4 md:px-10 lg:px-20">
                    <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                        >
                            <h2 className="mb-6 text-3xl font-bold text-gray-900 md:text-4xl">Production Capacity</h2>
                            <p className="mb-8 text-lg text-gray-600">
                                With a monthly capacity of over 50,000 tons, we are ready to meet large-scale industrial demands.
                            </p>

                            <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
                                <div className="rounded-xl bg-gray-50 p-6 text-center">
                                    <BarChart3 className="mx-auto mb-3 size-8 text-primary" />
                                    <div className="text-2xl font-bold text-gray-900">50k+</div>
                                    <div className="text-sm text-gray-500">Annual Capacity</div>
                                </div>
                                <div className="rounded-xl bg-gray-50 p-6 text-center">
                                    <Factory className="mx-auto mb-3 size-8 text-primary" />
                                    <div className="text-2xl font-bold text-gray-900">10k m²</div>
                                    <div className="text-sm text-gray-500">Facility Area</div>
                                </div>
                                <div className="rounded-xl bg-gray-50 p-6 text-center">
                                    <Settings className="mx-auto mb-3 size-8 text-primary" />
                                    <div className="text-2xl font-bold text-gray-900">12</div>
                                    <div className="text-sm text-gray-500">Production Lines</div>
                                </div>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="relative h-[400px] overflow-hidden rounded-2xl shadow-2xl"
                        >
                            <img
                                src="https://images.unsplash.com/photo-1565610222536-ef125c59da2c?auto=format&fit=crop&q=80"
                                alt="Factory Interior"
                                className="h-full w-full object-cover transition-transform duration-700 hover:scale-110"
                            />
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Technology Section */}
            <section className="bg-gray-900 py-20 text-white">
                <div className="container mx-auto px-4 md:px-10 lg:px-20">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="mx-auto max-w-4xl text-center"
                    >
                        <Zap className="mx-auto mb-6 size-12 text-yellow-400" />
                        <h2 className="mb-6 text-3xl font-bold md:text-4xl">Technology & Innovation</h2>
                        <p className="text-xl text-gray-300">
                            We continuously invest in R&D and modern machinery to stay ahead in the steel industry.
                        </p>
                    </motion.div>
                </div>
            </section>
        </div>
    );
}
