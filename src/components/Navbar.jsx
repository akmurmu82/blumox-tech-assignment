import { useEffect, useState } from "react";
import { FaChevronDown } from "react-icons/fa";

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 10); // Adjust the scroll threshold if needed
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav
            className={`w-full fixed top-0 left-0 z-50 transition-all duration-300 ${scrolled
                    ? "bg-white/10 backdrop-blur-md shadow-md text-white"
                    : "bg-transparent text-white"
                }`}
        >
            <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
                {/* Logo */}
                <h1
                    className="text-4xl italic font-bold tracking-wide"
                    style={{ fontFamily: "'Hind Siliguri', sans-serif" }}
                >
                    FlyGlobe
                </h1>

                {/* Nav Links */}
                <div className="space-x-6 hidden md:flex">
                    <a href="#" className="hover:underline">
                        Home
                    </a>
                    <a href="#" className="hover:underline">
                        About
                    </a>
                    <a href="#" className="hover:underline">
                        Services
                    </a>
                    <a href="#" className="hover:underline">
                        Contact
                    </a>
                    <div className="flex items-center hover:underline">
                        <span className="text-sm">UK | ENG</span>
                        <FaChevronDown className="ml-1 text-sm" />
                    </div>
                    <a href="#" className="hover:underline">
                        Login
                    </a>
                    <a href="#" className="hover:underline">
                        Sign Up
                    </a>
                </div>
            </div>
        </nav>
    );
}
