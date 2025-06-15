import React, { useState } from "react";
import ImageGrid from "./ImageGrid";

const filters = [
    "All",
    "Asian",
    "European",
    "Middle-East",
    "Beach Paradise",
    "Nature Retreats",
    "Romantic Escapes",
    "Cultural Immersion",
    "African",
    "American",
];

const DiscoverDestinations = () => {
    const [selectedFilter, setSelectedFilter] = useState("All");

    return (
        <section className="py-20 px-4 md:px-20 bg-[#FFF5F3]">
            <div className="grid md:grid-cols-2 gap-10 items-start">
                {/* Left: Text + Filters */}
                <div>
                    <h3 className="text-sm font-semibold uppercase mb-1">— Discover</h3>
                    <h2 className="text-2xl md:text-3xl font-bold mb-3">
                        More than 100 destinations <br /> waiting for you
                    </h2>
                    <p className="text-gray-600 mb-6 max-w-lg">
                        Explore our curated list of the best countries to visit in 2024 and
                        discover incredible destinations waiting to be explored
                    </p>

                    <div className="flex flex-wrap gap-3">
                        {filters.map((filter) => (
                            <button
                                key={filter}
                                onClick={() => setSelectedFilter(filter)}
                                className={`px-4 py-1 border rounded-full text-sm font-medium cursor-pointer transition-all duration-200 ${selectedFilter === filter
                                        ? "bg-[#152850] text-white border-transparent"
                                        : "text-black border-gray-300 hover:bg-gray-100"
                                    }`}
                            >
                                {filter}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Right: Grid */}
                <ImageGrid selectedFilter={selectedFilter} />
            </div>
        </section>
    );
};

export default DiscoverDestinations;
