import { useEffect, useState } from "react";
import { FaChevronDown, FaBars, FaTimes } from "react-icons/fa";

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 10);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav
            className={`w-full fixed top-0 left-0 z-50 transition-all duration-300 ${scrolled ? "bg-white/10 backdrop-blur-md shadow-md text-white" : "bg-transparent text-white"
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

                {/* Desktop Menu */}
                <div className="space-x-6 hidden md:flex">
                    <a href="#" className="hover:underline">Home</a>
                    <a href="#" className="hover:underline">About</a>
                    <a href="#" className="hover:underline">Services</a>
                    <a href="#" className="hover:underline">Contact</a>
                    <div className="flex items-center hover:underline">
                        <span className="text-sm">UK | ENG</span>
                        <FaChevronDown className="ml-1 text-sm" />
                    </div>
                    <a href="#" className="hover:underline">Login</a>
                    <a href="#" className="hover:underline">Sign Up</a>
                </div>

                {/* Hamburger for Mobile */}
                <div className="md:hidden">
                    <button onClick={() => setIsOpen(!isOpen)} aria-label="Toggle menu">
                        {isOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden bg-[#0b1b3a] px-4 py-6 space-y-4 text-white">
                    <a href="#" className="block">Home</a>
                    <a href="#" className="block">About</a>
                    <a href="#" className="block">Services</a>
                    <a href="#" className="block">Contact</a>
                    <div className="flex items-center">
                        <span className="text-sm">UK | ENG</span>
                        <FaChevronDown className="ml-1 text-sm" />
                    </div>
                    <a href="#" className="block">Login</a>
                    <a href="#" className="block">Sign Up</a>
                </div>
            )}
        </nav>
    );
}
