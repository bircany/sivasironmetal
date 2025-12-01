import { motion } from 'framer-motion';
import { Ship, PenTool, Ruler, Headphones, ArrowRight } from 'lucide-react';

export default function Services() {

    const services = [
        {
            id: 'logistics',
            icon: Ship,
            image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80',
            title: 'Global Logistics',
            desc: 'Efficient and reliable shipping solutions to over 20 countries worldwide.'
        },
        {
            id: 'consulting',
            icon: PenTool,
            image: 'https://images.unsplash.com/photo-1553877615-30c73e63cf4d?auto=format&fit=crop&q=80',
            title: 'Technical Consulting',
            desc: 'Expert advice on material selection and project specifications.'
        },
        {
            id: 'custom',
            icon: Ruler,
            image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80',
            title: 'Custom Fabrication',
            desc: 'Tailored solutions to meet unique project requirements and dimensions.'
        },
        {
            id: 'support',
            icon: Headphones,
            image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80',
            title: 'After-Sales Support',
            desc: 'Dedicated customer service team to assist with any post-delivery needs.'
        }
    ];

    return (
        <div className="flex flex-col">
            {/* Hero Section */}
            <div className="relative h-[40vh] min-h-[300px] w-full overflow-hidden bg-gray-900">
                <div className="absolute inset-0">
                    <img
                        src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80"
                        alt="Services"
                        className="h-full w-full object-cover opacity-30"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-gray-900 to-transparent" />
                </div>
                <div className="relative flex h-full items-center px-4 md:px-10 lg:px-20">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <h1 className="text-4xl font-bold text-white md:text-6xl">Our Services</h1>
                        <p className="mt-4 text-xl text-gray-300 md:text-2xl">Beyond Manufacturing</p>
                    </motion.div>
                </div>
            </div>

            {/* Intro */}
            <section className="py-16 bg-white">
                <div className="container mx-auto px-4 md:px-10 lg:px-20 text-center">
                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        className="mx-auto max-w-3xl text-xl text-gray-600"
                    >
                        We provide comprehensive services to support your projects from start to finish, ensuring seamless execution and delivery.
                    </motion.p>
                </div>
            </section>

            {/* Services List */}
            <section className="pb-20">
                <div className="container mx-auto px-4 md:px-10 lg:px-20">
                    <div className="flex flex-col gap-20">
                        {services.map((service, index) => (
                            <motion.div
                                key={service.id}
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-100px" }}
                                transition={{ duration: 0.6 }}
                                className={`flex flex-col gap-10 lg:items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'
                                    }`}
                            >
                                <div className="flex-1">
                                    <div className="relative overflow-hidden rounded-2xl shadow-xl">
                                        <div className="absolute inset-0 bg-primary/10 transition-colors hover:bg-transparent" />
                                        <img
                                            src={service.image}
                                            alt={service.title}
                                            className="h-[300px] w-full object-cover transition-transform duration-700 hover:scale-105 md:h-[400px]"
                                        />
                                    </div>
                                </div>
                                <div className="flex-1">
                                    <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-xl bg-primary text-white shadow-lg shadow-primary/30">
                                        <service.icon className="size-8" />
                                    </div>
                                    <h2 className="mb-4 text-3xl font-bold text-gray-900">
                                        {service.title}
                                    </h2>
                                    <p className="mb-6 text-lg text-gray-600">
                                        {service.desc}
                                    </p>
                                    <button className="group flex items-center gap-2 font-semibold text-primary transition-colors hover:text-red-700">
                                        Learn More
                                        <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
                                    </button>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}
