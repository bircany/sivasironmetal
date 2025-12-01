import { Outlet, Link, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { clsx } from 'clsx';
import { Building2, Target, Award, History } from 'lucide-react';

export default function CorporateLayout() {
    const { t } = useTranslation();
    const location = useLocation();

    const menuItems = [
        { key: 'about', path: '/kurumsal/hakkimizda', icon: Building2 },
        { key: 'vision', path: '/kurumsal/vizyon-misyon', icon: Target },
        { key: 'quality', path: '/kurumsal/kalite-politikamiz', icon: Award },
        { key: 'history', path: '/kurumsal/tarihce', icon: History },
    ];

    return (
        <div className="bg-gray-50 py-10">
            <div className="container mx-auto px-4 md:px-10 lg:px-20 xl:px-40">
                <div className="flex flex-col gap-8 lg:flex-row">
                    {/* Sidebar */}
                    <aside className="w-full lg:w-64 flex-shrink-0">
                        <div className="sticky top-24 rounded-xl border border-gray-200 bg-white p-4 shadow-sm">
                            <h3 className="mb-4 px-4 text-lg font-bold text-gray-900">{t('nav.corporate')}</h3>
                            <nav className="flex flex-col gap-1">
                                {menuItems.map((item) => {
                                    const Icon = item.icon;
                                    const isActive = location.pathname === item.path;
                                    return (
                                        <Link
                                            key={item.key}
                                            to={item.path}
                                            className={clsx(
                                                "flex items-center gap-3 rounded-lg px-4 py-3 text-sm font-medium transition-colors",
                                                isActive
                                                    ? "bg-primary text-white"
                                                    : "text-gray-600 hover:bg-gray-50 hover:text-primary"
                                            )}
                                        >
                                            <Icon className="size-5" />
                                            {t(`corporate.menu.${item.key}`)}
                                        </Link>
                                    );
                                })}
                            </nav>
                        </div>
                    </aside>

                    {/* Content */}
                    <div className="flex-1">
                        <div className="rounded-xl border border-gray-200 bg-white p-8 shadow-sm min-h-[500px]">
                            <Outlet />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
