import { motion } from 'framer-motion';

export default function VisionMission() {

    return (
        <div className="flex flex-col gap-10">
            <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
            >
                <h1 className="mb-6 text-3xl font-bold text-gray-900">Our Vision</h1>
                <div className="rounded-xl bg-gray-50 p-8 border-l-4 border-primary shadow-sm hover:shadow-md transition-shadow">
                    <p className="text-xl font-medium text-gray-800 italic">
                        "To shape the future of international metal trade by continuously innovating, expanding our global reach, and setting new benchmarks for quality and service excellence in the industry."
                    </p>
                </div>
            </motion.div>

            <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
            >
                <h1 className="mb-6 text-3xl font-bold text-gray-900">Our Mission</h1>
                <div className="rounded-xl bg-gray-50 p-8 border-l-4 border-gray-800 shadow-sm hover:shadow-md transition-shadow">
                    <p className="text-xl font-medium text-gray-800 italic">
                        "To be the global leader in steel and iron trade by delivering exceptional quality products, maintaining the highest standards of customer service, and building lasting partnerships based on trust and reliability."
                    </p>
                </div>
            </motion.div>
        </div>
    );
}
