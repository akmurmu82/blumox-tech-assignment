const Footer = () => {
  return (
    <footer className="bg-[#031536] text-white py-12 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-5 gap-8">

        {/* Brand Info */}
        <div className="md:col-span-1">
          <h2 className="font-bold italic text-lg mb-2">FLYGLOBE</h2>
          <p className="text-sm text-gray-300">
            FlyGlobe is more than just a flight booking app; it's your one-stop shop for seamless travel experiences.
          </p>
        </div>

        {/* Links */}
        <div>
          <h3 className="font-semibold mb-2">About Us</h3>
          <ul className="space-y-1 text-sm text-gray-300">
            <li>Promo</li>
            <li>Help</li>
            <li>Order</li>
            <li>Contact</li>
            <li>FAQ</li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold mb-2">Resources</h3>
          <ul className="space-y-1 text-sm text-gray-300">
            <li>Documentation</li>
            <li>Carrier</li>
            <li>Work With Us</li>
            <li>Blog & News</li>
            <li>Affiliate</li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold mb-2">Legal</h3>
          <ul className="space-y-1 text-sm text-gray-300">
            <li>Terms and Condition</li>
            <li>Privacy Policy</li>
            <li>Cookies Policy</li>
            <li>Developers</li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="font-semibold mb-2">Contact Us</h3>
          <ul className="text-sm text-gray-300 space-y-1 mb-4">
            <li>flyglobe@gmail.com</li>
            <li>+12 345 678 09</li>
            <li>Singapore, Indonesia</li>
          </ul>

          <h4 className="font-semibold mb-2">Follow Us On Social</h4>
          <div className="flex gap-2">
            {['facebook', 'twitter', 'linkedin', 'youtube', 'instagram', 'tiktok'].map((platform) => (
              <a
                key={platform}
                href="#"
                className="w-8 h-8 rounded-full bg-white text-black flex items-center justify-center hover:scale-110 transition"
              >
                <i className={`fab fa-${platform}`} />
              </a>
            ))}
          </div>
        </div>
      </div>

      <hr className="my-8 border-gray-600" />
      <p className="text-center text-sm text-gray-400">© 2025 FlyBritain All rights reserved.</p>
    </footer>
  );
};

export default Footer;
