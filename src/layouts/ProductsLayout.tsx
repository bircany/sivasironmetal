import { Outlet, Link, useLocation } from 'react-router-dom';
import { clsx } from 'clsx';
import { categories } from '../data/products';
import { ChevronRight } from 'lucide-react';

export default function ProductsLayout() {
    const location = useLocation();

    return (
        <div className="bg-gray-50 py-10">
            <div className="container mx-auto px-4 md:px-10 lg:px-20 xl:px-40">
                <div className="flex flex-col gap-8 lg:flex-row">
                    {/* Sidebar */}
                    <aside className="w-full lg:w-64 flex-shrink-0">
                        <div className="sticky top-24 rounded-xl border border-gray-200 bg-white p-4 shadow-sm">
                            <h3 className="mb-4 px-4 text-lg font-bold text-gray-900">Products</h3>
                            <nav className="flex flex-col gap-1">
                                <Link
                                    to="/urunlerimiz"
                                    className={clsx(
                                        "flex items-center justify-between rounded-lg px-4 py-3 text-sm font-medium transition-colors",
                                        location.pathname === '/urunlerimiz'
                                            ? "bg-primary text-white"
                                            : "text-gray-600 hover:bg-gray-50 hover:text-primary"
                                    )}
                                >
                                    View All
                                    <ChevronRight className="size-4" />
                                </Link>
                                {categories.map((cat) => (
                                    <Link
                                        key={cat.id}
                                        to={`/urunlerimiz/kategori/${cat.id}`}
                                        className={clsx(
                                            "flex items-center justify-between rounded-lg px-4 py-3 text-sm font-medium transition-colors",
                                            location.pathname.includes(cat.id)
                                                ? "bg-primary text-white"
                                                : "text-gray-600 hover:bg-gray-50 hover:text-primary"
                                        )}
                                    >
                                        {cat.label}
                                        <ChevronRight className="size-4" />
                                    </Link>
                                ))}
                            </nav>
                        </div>
                    </aside>

                    {/* Content */}
                    <div className="flex-1">
                        <Outlet />
                    </div>
                </div>
            </div>
        </div>
    );
}
