import { Link } from 'react-router-dom';
import { Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';

export default function Footer() {
    const footerLinks = [
        { key: 'corporate', path: '/kurumsal', label: 'Corporate' },
        { key: 'products', path: '/urunlerimiz', label: 'Products' },
        { key: 'production', path: '/uretim', label: 'Production' },
        { key: 'services', path: '/hizmetler', label: 'Services' },
        { key: 'contact', path: '/iletisim', label: 'Contact' },
        { key: 'privacy', path: '/gizlilik', label: 'Privacy Policy' },
        { key: 'terms', path: '/kullanim-sartlari', label: 'Terms of Use' },
    ];

    return (
        <footer className="bg-gray-900 py-10 text-center text-gray-400">
            <div className="container mx-auto px-4 md:px-10 lg:px-20 xl:px-40">
                <div className="grid grid-cols-2 gap-6 md:grid-cols-4 lg:grid-cols-7 lg:text-left">
                    {footerLinks.map((item) => (
                        <Link
                            key={item.key}
                            to={item.path}
                            className="text-base font-normal transition-colors hover:text-white"
                        >
                            {item.label}
                        </Link>
                    ))}
                </div>

                <div className="mt-8 flex flex-col items-center justify-between gap-6 border-t border-white/10 pt-8 sm:flex-row">
                    <p className="text-base font-normal">
                        © {new Date().getFullYear()} Sivas Iron Metal. All rights reserved.
                    </p>

                    <div className="flex gap-4">
                        <a href="#" className="transition-colors hover:text-white">
                            <Facebook className="size-5" />
                        </a>
                        <a href="#" className="transition-colors hover:text-white">
                            <Twitter className="size-5" />
                        </a>
                        <a href="#" className="transition-colors hover:text-white">
                            <Linkedin className="size-5" />
                        </a>
                        <a href="#" className="transition-colors hover:text-white">
                            <Instagram className="size-5" />
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
