import Link from "next/link";

export function Footer() {
    const sections = {
        SHOP: [
            { label: "All Products", href: "/products" },
            { label: "New Arrivals", href: "/products?filter=new" },
            { label: "Sale", href: "/products?filter=sale" },
        ],
        SUPPORT: [
            { label: "Contact Us", href: "/contact" },
            { label: "Shipping Info", href: "/shipping" },
            { label: "Returns", href: "/returns" },
        ],
        CONNECT: [
            { label: "Newsletter", href: "/newsletter" },
            { label: "Social Media", href: "/social" },
        ],
    };

    return (
        <footer className="bg-gray-900 text-white py-8 mt-16">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    {/* Brand */}
                    <div>
                        <h3 className="text-lg font-semibold mb-4">StyleStore</h3>
                        <p className="text-gray-400">
                            Your destination for premium fashion and lifestyle products.
                        </p>
                    </div>

                    {/* Dynamic Footer Links */}
                    {Object.entries(sections).map(([section, links]) => (
                        <div key={section}>
                            <h4 className="text-sm font-semibold mb-3 text-gray-300">
                                {section}
                            </h4>
                            <ul className="space-y-2 text-sm text-gray-400">
                                {links.map((link) => (
                                    <li key={link.href}>
                                        <Link
                                            href={link.href}
                                            className="hover:text-white transition-colors"
                                        >
                                            {link.label}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                {/* Copyright */}
                <div className="border-t border-gray-800 mt-8 pt-6 text-center text-gray-400 text-sm">
                    <p>&copy; {new Date().getFullYear()} StyleStore. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}