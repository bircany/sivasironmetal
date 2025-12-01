import { useParams, Link } from 'react-router-dom';
import { products, categories } from '../../data/products';
import { ArrowLeft, CheckCircle2 } from 'lucide-react';
import { motion } from 'framer-motion';

export default function ProductDetail() {
    const { productId } = useParams();
    const product = products.find(p => p.id === productId);

    if (!product) {
        return <div>Product not found</div>;
    }

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col gap-8 rounded-xl border border-gray-200 bg-white p-8 shadow-sm"
        >
            <Link to="/urunlerimiz" className="flex items-center gap-2 text-sm font-medium text-gray-500 hover:text-primary transition-colors">
                <ArrowLeft className="size-4" />
                Back to Products
            </Link>

            <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2, duration: 0.5 }}
                    className="overflow-hidden rounded-xl bg-gray-100"
                >
                    <motion.img
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.5 }}
                        src={product.image}
                        alt={product.name}
                        className="h-full w-full object-cover"
                    />
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3, duration: 0.5 }}
                    className="flex flex-col gap-6"
                >
                    <div>
                        <span className="inline-block rounded-full bg-primary/10 px-3 py-1 text-xs font-bold uppercase tracking-wider text-primary">
                            {categories.find(c => c.id === product.category)?.label}
                        </span>
                        <h1 className="mt-4 text-3xl font-bold text-gray-900">
                            {product.name}
                        </h1>
                    </div>

                    <div className="prose text-gray-600">
                        <p>{product.desc}</p>
                    </div>

                    <div className="flex flex-col gap-3 rounded-lg bg-gray-50 p-6">
                        <h3 className="font-bold text-gray-900">Product Features</h3>
                        <ul className="flex flex-col gap-2">
                            {product.features.map((feature, i) => (
                                <motion.li
                                    key={i}
                                    initial={{ opacity: 0, x: -10 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 0.4 + (i * 0.1) }}
                                    className="flex items-center gap-3 text-sm text-gray-600"
                                >
                                    <CheckCircle2 className="size-4 text-green-600" />
                                    {feature}
                                </motion.li>
                            ))}
                        </ul>
                    </div>

                    <motion.button
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className="mt-auto w-full rounded-lg bg-primary py-4 text-center font-bold text-white transition-colors hover:bg-red-700 shadow-lg shadow-primary/20"
                    >
                        Contact Us
                    </motion.button>
                </motion.div>
            </div>
        </motion.div>
    );
}
