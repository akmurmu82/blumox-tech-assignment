const WhyFlyGlobe = () => {
    const features = [
        {
            icon: "⚡",
            title: "Seamless Booking Experience",
            desc: "With FlyGlobe, booking your flights is effortless and convenient.",
        },
        {
            icon: "$",
            title: "Best Pricing and Deals",
            desc: "FlyGlobe is committed to offering you the best possible value for your travel budget.",
        },
        {
            icon: "💡",
            title: "Personalized Travel Recommendations",
            desc: "FlyGlobe offers personalized travel recommendations tailored to your preferences.",
        },
    ];

    const userImgs = [
        "https://media.istockphoto.com/id/1456514311/photo/female-influencer-vlogging-online-with-smartphone-from-home.jpg?s=612x612&w=0&k=20&c=xTbcalP4F8jYtJoROuwTlouBK3MSVLdeaWG8ZyuCl1Q=",
        "https://media.istockphoto.com/id/1456514311/photo/female-influencer-vlogging-online-with-smartphone-from-home.jpg?s=612x612&w=0&k=20&c=xTbcalP4F8jYtJoROuwTlouBK3MSVLdeaWG8ZyuCl1Q=",
        "https://media.istockphoto.com/id/1456514311/photo/female-influencer-vlogging-online-with-smartphone-from-home.jpg?s=612x612&w=0&k=20&c=xTbcalP4F8jYtJoROuwTlouBK3MSVLdeaWG8ZyuCl1Q=",
    ];

    return (
        <section className="py-16 px-4 max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-10">
            {/* Left Feature Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2 w-full md:w-4/6">
                {features.map((f, idx) => (
                    <div
                        key={idx}
                        className="bg-[#020F30] text-white p-5 rounded-xl flex flex-col gap-3"
                    >
                        <div className="text-2xl bg-white bg-opacity-10 w-10 h-10 flex items-center justify-center rounded">
                            {f.icon}
                        </div>
                        <h4 className="font-semibold text-sm">{f.title}</h4>
                        <p className="text-sm text-gray-300">{f.desc}</p>
                    </div>
                ))}
            </div>

            {/* Right Ratings Section */}
            <div className="flex text-center justify-between md:text-left w-full md:w-1/4">
                {/* Overlapping avatars */}
                <div className="flex justify-center md:justify-start mb-4">
                    {userImgs.map((src, idx) => (
                        <img
                            key={idx}
                            src={src}
                            alt={`User ${idx + 1}`}
                            className={`w-10 h-10 rounded-full border-2 border-red-500 object-cover ${idx > 0 ? "-ml-4" : ""
                                }`}
                        />
                    ))}
                    <div className="-ml-4 w-10 h-10 rounded-full border-2 border-red-500 bg-white text-sm flex items-center justify-center text-red-500 font-bold">
                        +3k
                    </div>
                </div>

                {/* Text */}
                <div className="flex flex-col text-left">
                    <h4 className="text-sm font-semibold uppercase tracking-wider border-t-2 border-black inline-block pt-1">
                        WHY FLYGLOBE
                    </h4>
                    <p className="text-sm text-gray-700">Our happy travellers</p>
                    <p className="text-sm font-medium">4.9 <span className="text-gray-500">(3.5k Reviews)</span></p>
                </div>
            </div>
        </section>
    );
};

export default WhyFlyGlobe;
