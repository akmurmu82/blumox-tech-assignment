import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa6";

const ContactSection = () => {
  return (
    <section className="py-20 px-6 max-w-6xl mx-auto">
      <p className="uppercase text-sm mb-2 text-gray-600 tracking-wider">Get Started</p>
      <div className="flex flex-col md:flex-row items-center justify-between mb-10">
        <h2 className="text-4xl sm:text-5xl font-bold mb-10 leading-tight">
          Get in touch with us,<br />
          We're here to assist you.
        </h2>
        {/* Social Icons */}
        <div className="flex flex-col items-center md:items-end gap-4 right-4 top-1/3">
          <a href="#" className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center hover:bg-black hover:text-white transition">
            <FaFacebook className="text-xl" />
          </a>
          <a href="#" className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center hover:bg-black hover:text-white transition">
            <i className="fab fa-instagram" />
            <FaInstagram className="text-xl" />
          </a>
          <a href="#" className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center hover:bg-black hover:text-white transition">
            <i className="fab fa-twitter" />
            <FaTwitter className="text-xl" />
          </a>
        </div>
      </div>

      <form className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <input
            type="text"
            placeholder="Your Name"
            className="border-b border-gray-400 focus:outline-none focus:border-black py-2"
          />
          <input
            type="email"
            placeholder="Email Address"
            className="border-b border-gray-400 focus:outline-none focus:border-black py-2"
          />
          <input
            type="text"
            placeholder="Phone Number (optional)"
            className="border-b border-gray-400 focus:outline-none focus:border-black py-2"
          />
        </div>

        <textarea
          placeholder="Message"
          rows={4}
          className="w-full border-b border-gray-400 focus:outline-none focus:border-black py-2"
        ></textarea>

        <button
          type="submit"
          className="border border-black text-black font-semibold py-2 px-6 rounded-full hover:bg-black hover:text-white transition duration-300"
        >
          LEAVE US A MESSAGE
        </button>
      </form>


    </section>
  );
};

export default ContactSection;
