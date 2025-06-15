import React from "react";

const topLocations = [
    { name: "Los Angeles", time: "2– Hours Away", img: "https://thumbs.dreamstime.com/b/hollywood-blvd-busy-boulevard-loas-angeles-69095474.jpg?w=768" },
    { name: "Miami", time: "2– Hours Away", img: "https://media.istockphoto.com/id/802893644/photo/aerial-view-of-downtown-miami-florida.jpg?s=612x612&w=0&k=20&c=QwdSYtoeB-9xTvqgbpnM9aCaRf_39rw8bVw7LsszSGg=" },
    { name: "New York", time: "2– Hours Away", img: "https://media.istockphoto.com/id/1454217037/photo/statue-of-liberty-and-new-york-city-skyline-with-manhattan-financial-district-world-trade.jpg?s=612x612&w=0&k=20&c=6V54_qVlDfo59GLEdY2W8DOjLbbHTJ9y4AnJ58a3cis=" },
    { name: "Los Vegas", time: "2– Hours Away", img: "https://media.istockphoto.com/id/954500850/photo/las-vegas.jpg?s=612x612&w=0&k=20&c=FdCZWK-ZUvQmg6-Es_ZZAgcwVwqwzpORRXuPQv7hYBY=" },
    { name: "Texas", time: "2– Hours Away", img: "https://media.istockphoto.com/id/1224823838/photo/aerial-view-of-downtown-fort-worth-texas.jpg?s=612x612&w=0&k=20&c=jj2uahajVbgL113jB_TQz_qRL7az-OqsmuGrLoKFuSM=" },
    { name: "Chicago", time: "2– Hours Away", img: "https://media.istockphoto.com/id/1418085627/photo/st-regis-chicago.jpg?s=612x612&w=0&k=20&c=NNFvZgl39ol9efbxMgfcCvCGVFsQTdwvYTOfZISg4qA=" },
];

const bottomLocations = [
    { name: "Singapore", time: "3– Hours Away", img: "https://media.istockphoto.com/id/482380340/photo/singapore-skyline-and-view-of-marina-bay-at-twilight.jpg?s=612x612&w=0&k=20&c=OHblAofYxh2PkPCah4SiirGmdMKRRPI88c6MwOVuyuk=" },
    { name: "Singapore", time: "3– Hours Away", img: "https://media.istockphoto.com/id/1494768717/video/singapore-aerial-view-4k-video-of-the-singapore-city-skyline-central-area-sunrise.avif?s=640x640&k=20&c=oqWcQm9Na93-yOojCVEmwzTmy3c_WN_-FJyqPXUCe4o=" },
    { name: "Singapore", time: "3– Hours Away", img: "https://media.istockphoto.com/id/482380340/photo/singapore-skyline-and-view-of-marina-bay-at-twilight.jpg?s=612x612&w=0&k=20&c=OHblAofYxh2PkPCah4SiirGmdMKRRPI88c6MwOVuyuk=" },
    { name: "Singapore", time: "3– Hours Away", img: "https://media.istockphoto.com/id/1494768717/video/singapore-aerial-view-4k-video-of-the-singapore-city-skyline-central-area-sunrise.avif?s=640x640&k=20&c=oqWcQm9Na93-yOojCVEmwzTmy3c_WN_-FJyqPXUCe4o=" },
];

const ExploreNearby = () => {
    return (
        <div className="py-12 px-4 max-w-7xl mx-auto">
            {/* Section Header */}
            <h2 className="text-center text-lg font-semibold mb-8">
                <span className="inline-block border-t-2 border-black w-10 mr-2 align-middle"></span>
                EXPLORE NEARBY
            </h2>

            {/* Top Circular Images */}
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6 mb-10 place-items-center">
                {topLocations.map((loc, idx) => (
                    <div
                        key={idx}
                        className="text-center transform transition duration-300 hover:scale-105 cursor-pointer group"
                    >
                        <div className="rounded-full overflow-hidden w-24 h-24 sm:w-28 sm:h-28 mx-auto hover:shadow-md">
                            <img
                                src={loc.img}
                                alt={loc.name}
                                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                            />
                        </div>
                        <p className="mt-2 text-sm font-bold uppercase">{loc.name}</p>
                        <p className="text-xs text-gray-500">{loc.time}</p>
                    </div>
                ))}
            </div>


            {/* Bottom Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
                {bottomLocations.map((loc, idx) => (
                    <div key={idx} className="relative rounded-xl overflow-hidden h-40 md:h-48  transform transition duration-300 hover:scale-105 cursor-pointer group cursor-pointer group">
                        <img
                            src={loc.img}
                            alt={loc.name}
                            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                        />
                        <div className="absolute bottom-3 left-3 text-white text-sm">
                            <p className="font-bold">{loc.name}</p>
                            <p className="text-xs">{loc.time}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ExploreNearby;
