import React from "react";

const images = [
    { id: 1, src: "https://thumbs.dreamstime.com/b/roman-ruins-rome-forum-sunrise-34692502.jpg?w=768", title: "ROME", country: "Italy", price: "$500" },
    { id: 2, src: "https://thumbs.dreamstime.com/b/vatican-city-ponte-umberto-i-rome-italy-16098345.jpg?w=768", title: "ROME", country: "Italy", price: "$500" },
    { id: 3, src: "https://thumbs.dreamstime.com/b/saint-peter-s-square-rome-italy-18229141.jpg?w=768", title: "ROME", country: "Italy", price: "$500" },
    { id: 4, src: "https://thumbs.dreamstime.com/b/roman-ruins-rome-forum-sunrise-34692502.jpg?w=768", title: "ROME", country: "Italy", price: "$500" },
    { id: 5, src: "https://thumbs.dreamstime.com/b/saint-peter-s-square-rome-italy-18229141.jpg?w=768", title: "ROME", country: "Italy", price: "$500" },
    { id: 6, src: "https://thumbs.dreamstime.com/b/ancient-trajan-forum-sunset-rome-italy-ruins-column-churches-santa-maria-di-loreto-most-holy-name-mary-93498641.jpg?w=768", title: "ROME", country: "Italy", price: "$500" },

];

const ImageGrid = () => {
    return (
        <div className="grid grid-cols-3 grid-rows-3 gap-4 h-[600px]">
            {images.map((img, idx) => {
                // Determine if it's the large image (i2)
                const isLarge = idx === 1;

                return (
                    <div
                        key={idx}
                        className={`group relative cursor-pointer rounded-xl overflow-hidden ${isLarge ? "col-span-2 row-span-2" : ""}`}
                    >
                        {/* Overlay */}
                        <div className="absolute inset-0 bg-black/10 z-10"></div>

                        {/* Image with hover zoom effect */}
                        <img
                            src={img.src}
                            alt={`i${idx + 1}`}
                            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                        />

                        {/* Overlay text component */}
                        <OverlayText {...img} />
                    </div>
                );
            })}
        </div>

    );
};

// 🔹 Reusable overlay text component
const OverlayText = ({ title, country, price }) => (
    <>
        {/* Top-left stacked */}
        <div className="absolute  top-2 left-2 flex flex-col gap-1 px-2 py-1">
            <div className="bg-opacity-60  text-xs text-white font-bold rounded">
                {title}
            </div>
            <div className="bg-white text-black text-[10px] px-2 rounded shadow">
                {country}
            </div>
        </div>
        <div className="absolute bottom-2 right-2 text-white text-sm font-semibold">
            fr {price}*
        </div>
    </>
);

export default ImageGrid;