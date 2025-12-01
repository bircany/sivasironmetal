import { useParams, Link } from 'react-router-dom';
import { products, categories } from '../../data/products';
import { motion } from 'framer-motion';

export default function ProductList() {
    const { categoryId } = useParams();

    const filteredProducts = categoryId
        ? products.filter(p => p.category === categoryId)
        : products;

    const categoryTitle = categoryId
        ? categories.find(c => c.id === categoryId)?.label || ''
        : 'Products';

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
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
        <div className="flex flex-col gap-6">
            <motion.h1
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className="text-3xl font-bold text-gray-900"
            >
                {categoryTitle}
            </motion.h1>

            <motion.div
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
            >
                {filteredProducts.map((product) => (
                    <Link
                        key={product.id}
                        to={`/urunlerimiz/detay/${product.id}`}
                    >
                        <motion.div
                            variants={itemVariants}
                            whileHover={{ y: -8 }}
                            className="group flex flex-col overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm transition-all hover:shadow-xl"
                        >
                            <div className="aspect-[4/3] overflow-hidden bg-gray-100">
                                <motion.img
                                    whileHover={{ scale: 1.1 }}
                                    transition={{ duration: 0.6 }}
                                    src={product.image}
                                    alt={product.name}
                                    className="h-full w-full object-cover"
                                />
                            </div>
                            <div className="flex flex-1 flex-col p-4">
                                <h3 className="text-lg font-bold text-gray-900 group-hover:text-primary transition-colors">
                                    {product.name}
                                </h3>
                                <p className="mt-2 line-clamp-2 text-sm text-gray-500">
                                    {product.desc}
                                </p>
                            </div>
                        </motion.div>
                    </Link>
                ))}
            </motion.div>
        </div>
    );
}
