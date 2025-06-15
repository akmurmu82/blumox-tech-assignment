import { IoMdArrowDropdown } from "react-icons/io";
import { MdArrowDropDown } from "react-icons/md";

export default function HeroSection() {
    return (
        <section
            className="w-full min-h-screen bg-cover bg-center relative text-white"
            style={{
                backgroundImage: `url('https://media.istockphoto.com/id/657571606/photo/young-woman-flying-to-france.jpg?s=612x612&w=0&k=20&c=Vd_pIhmemO6TcO869ymDo8OVFiIC6mrHPIVFidhFKGg=')`,
            }}
        >
            {/* Overlay */}
            <div className="absolute inset-0 bg-black/40" />

            <div className="relative z-10 max-w-7xl mx-auto px-4 py-32 grid grid-cols-1 md:grid-cols-5 gap-10 items-center">
                {/* Left Text Section with Grid Background */}
                <div className="relative md:col-span-3">
                    {/* Background Grid Lines */}
                    <div className="absolute inset-0 z-0 opacity-10 bg-[radial-gradient(circle_at_1px_1px,_#ffffff20_1px,_transparent_0)] [background-size:30px_30px]" />

                    {/* Text Content */}
                    <div className="relative z-10">
                        <h1 className="text-2xl md:text-3xl font-bold mb-4 leading-snug">
                            UNLOCK EFFORTLESS TRAVEL <br /> WITH UNBEATABLE FLIGHT DEALS!
                        </h1>
                        <p className="mb-6 text-lg text-gray-200 max-w-md">
                            From Seamless Booking to Smooth Takeoff – We Take Care of Every Detail So You Can Enjoy the Journey!
                        </p>
                        <button className="border px-6 py-2 rounded hover:bg-white hover:text-black transition">
                            DISCOVER NOW
                        </button>
                    </div>
                </div>

                {/* Right Form Section */}
                <div className="md:col-span-2 bg-[#0b1b3a] p-6 md:p-8 rounded-3xl shadow-xl w-full text-sm">
                    <div className="relative w-[150px] mb-6">
                        <select
                            className="appearance-none w-full bg-[#152850] px-4 py-2 pr-8 rounded-full text-center font-semibold text-white outline-none cursor-pointer"
                            defaultValue="round"
                        >
                            <option value="round">Round trip</option>
                            <option value="oneway">One way</option>
                            <option value="multi">Multi-city</option>
                        </select>
                        <IoMdArrowDropdown className="absolute right-3 top-1/2 -translate-y-1/2 text-white pointer-events-none text-xl" />
                    </div>


                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {/* From */}
                        <div>
                            <label className="block mb-1">From</label>
                            <input
                                type="text"
                                placeholder="City or Airport"
                                className="bg-[#1c325c] px-4 py-2 rounded-full w-full outline-none text-white placeholder:text-gray-300"
                            />
                        </div>

                        {/* To */}
                        <div>
                            <label className="block mb-1">To</label>
                            <input
                                type="text"
                                placeholder="Destination"
                                className="bg-[#1c325c] px-4 py-2 rounded-full w-full outline-none text-white placeholder:text-gray-300"
                            />
                        </div>

                        {/* Departure Date */}
                        <div>
                            <label className="block mb-1">Departure Date</label>
                            <input
                                type="date"
                                className="bg-[#1c325c] px-4 py-2 rounded-full w-full outline-none text-white"
                            />
                        </div>

                        {/* Return Date */}
                        <div>
                            <label className="flex items-center gap-2 mb-1">
                                <input type="checkbox" />
                                Return Date
                            </label>
                            <input
                                type="date"
                                className="bg-[#1c325c] px-4 py-2 rounded-full w-full outline-none text-white disabled:text-gray-400"
                            />
                        </div>

                        {/* Passenger */}
                        <div>
                            <label className="block mb-1">Passenger</label>
                            <input
                                type="text"
                                placeholder="e.g. 1 Adult, 1 Child"
                                className="bg-[#1c325c] px-4 py-2 rounded-full w-full outline-none text-white placeholder:text-gray-300"
                            />
                        </div>

                        {/* Seat Class */}
                        <div>
                            <label className="block mb-1">Seat Class</label>
                            <select className="bg-[#1c325c] px-4 py-2 rounded-full w-full outline-none text-white">
                                <option>Economy</option>
                                <option>Premium Economy</option>
                                <option>Business</option>
                                <option>First Class</option>
                            </select>
                        </div>

                        {/* Airlines */}
                        <div>
                            <label className="block mb-1">Select Airlines</label>
                            <select className="bg-[#1c325c] px-4 py-2 rounded-full w-full outline-none text-white">
                                <option>All Airlines</option>
                                <option>IndiGo</option>
                                <option>Air India</option>
                                <option>Emirates</option>
                                <option>British Airways</option>
                            </select>
                        </div>

                        {/* Direct Flights */}
                        <div className="flex items-center gap-2 mt-6">
                            <input type="checkbox" id="direct" />
                            <label htmlFor="direct">Direct Flights Only</label>
                        </div>
                    </div>

                    <button className="mt-6 w-full bg-white text-black py-3 rounded-full font-semibold hover:bg-gray-200 cursor-pointer transition">
                        Search
                    </button>
                </div>

            </div>

            {/* SVG Transition to Next Section */}
            <div className="absolute bottom-0 w-full overflow-hidden leading-[0]">
                <svg viewBox="0 0 500 150" preserveAspectRatio="none" className="w-full h-[100px]">
                    <path
                        d="M0.00,49.98 C150.00,150.00 349.48,-49.98 500.00,49.98 L500.00,150.00 L0.00,150.00 Z"
                        className="fill-[#fff7f5]"
                    ></path>
                </svg>
            </div>
        </section>
    );
}
