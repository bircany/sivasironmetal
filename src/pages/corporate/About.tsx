import { motion } from 'framer-motion';

export default function About() {

    return (
        <div className="flex flex-col gap-6">
            <motion.h1
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                className="text-3xl font-bold text-gray-900"
            >
                About Us
            </motion.h1>
            <div className="prose prose-lg max-w-none text-gray-600">
                <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                >
                    Sivas Iron Metal stands as a premier leader in the global steel and iron import/export industry. With decades of experience and unwavering commitment to quality, we have established ourselves as a trusted partner for businesses worldwide seeking premium metal products.
                </motion.p>
                <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                >
                    Our company specializes in sourcing, processing, and distributing high-grade steel and iron materials to meet diverse industrial needs. We pride ourselves on maintaining the highest standards of quality control, ensuring that every product that leaves our facilities meets or exceeds international specifications.
                </motion.p>
                <div className="my-8 grid grid-cols-1 gap-6 md:grid-cols-2">
                    <motion.img
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.4, duration: 0.5 }}
                        whileHover={{ scale: 1.05 }}
                        src="https://images.unsplash.com/photo-1565610222536-ef125c59da2c?auto=format&fit=crop&q=80"
                        alt="Factory"
                        className="h-64 w-full rounded-xl object-cover shadow-lg"
                    />
                    <motion.img
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.5, duration: 0.5 }}
                        whileHover={{ scale: 1.05 }}
                        src="https://images.unsplash.com/photo-1535191030484-0948c7414fef?auto=format&fit=crop&q=80"
                        alt="Steel Production"
                        className="h-64 w-full rounded-xl object-cover shadow-lg"
                    />
                </div>
                <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 }}
                >
                    At Sivas Iron Metal, we understand that in today's global economy, reliable supply chains and consistent quality are paramount. That's why we've built strong relationships with suppliers and clients across continents, creating a robust network that enables seamless international trade.
                </motion.p>
            </div>
        </div>
    );
}
