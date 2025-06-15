import React from "react";

const offers = [
    {
        image: "https://media.istockphoto.com/id/1192648836/photo/young-happy-woman-in-an-airplane-cabin.jpg?s=612x612&w=0&k=20&c=KZ_iDYPrsN_Mr3cEMPIxqN1TN0EzedOEwWZIstsWhXw=",
        discount: "20%",
        text: "On your next flight with this exclusive voucher!",
    },
    {
        image: "https://media.istockphoto.com/id/868607330/photo/woman-in-the-airplane.jpg?s=612x612&w=0&k=20&c=JgyKZNKrIkblZqc0ROIsRQUv8QMXOnsMpCVnqI7Mdy8=",
        discount: "20%",
        text: "On your next flight with this exclusive voucher!",
    },
    {
        image: "https://media.istockphoto.com/id/1192648836/photo/young-happy-woman-in-an-airplane-cabin.jpg?s=612x612&w=0&k=20&c=KZ_iDYPrsN_Mr3cEMPIxqN1TN0EzedOEwWZIstsWhXw=",
        discount: "20%",
        text: "On your next flight with this exclusive voucher!",
    },
    {
        image: "https://media.istockphoto.com/id/868607330/photo/woman-in-the-airplane.jpg?s=612x612&w=0&k=20&c=JgyKZNKrIkblZqc0ROIsRQUv8QMXOnsMpCVnqI7Mdy8=",
        discount: "20%",
        text: "On your next flight with this exclusive voucher!",
    },
];

const BestOffers = () => {
    return (
        <section className="bg-[#FFF5F3] py-16 px-4 md:px-20">
            {/* Heading */}
            <div className="text-center mb-10">
                <h2 className="text-xl font-semibold tracking-wide uppercase mb-2">
                    — Best Offers
                </h2>
                <p className="max-w-2xl mx-auto text-gray-600 text-lg">
                    We're excited to offer you an exclusive voucher to help you save on your next adventure.
                    Whether you're planning a weekend getaway, a family vacation, or a solo expedition.
                </p>
            </div>

            {/* Offer Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {offers.map((offer, idx) => (
                    <div
                        key={idx}
                        className="group relative rounded-xl overflow-hidden h-40 bg-black cursor-pointer shadow-lg"
                    >
                        {/* Image with zoom effect */}
                        <div
                            className="absolute inset-0 bg-cover bg-center transition-transform duration-300 group-hover:scale-110"
                            style={{ backgroundImage: `url(${offer.image})` }}
                        ></div>

                        {/* Overlay content */}
                        <div className="absolute inset-0 bg-black/10 flex flex-col justify-end p-4 text-white z-10">
                            <p className="text-sm">SAVE UP TO</p>
                            <h3 className="text-3xl font-bold">{offer.discount}</h3>
                            <p className="text-sm">{offer.text}</p>
                        </div>
                    </div>
                ))}
            </div>

        </section>
    );
};

export default BestOffers;
