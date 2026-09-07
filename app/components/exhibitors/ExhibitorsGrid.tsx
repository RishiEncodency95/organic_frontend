import React from "react";
import { Reveal } from "../shared/Reveal";
import { ApiExhibitor, toAbsoluteImage } from "./data";

const directions = ["left", "zoom", "right"] as const;

const ExhibitorsGrid = ({ exhibitors }: { exhibitors: ApiExhibitor[] }) => {
    return (
        <div className="pt-3 pb-3 min-h-[400px] font-inter">
            <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-3 md:gap-4">
                {exhibitors.map((exhi, index) => (
                    <Reveal
                        key={exhi._id}
                        delay={(index % 8) * 40}
                        direction={directions[(index % 3) as 0 | 1 | 2]}
                        className="h-full"
                    >
                        <div
                            className="group relative bg-white rounded-xl overflow-hidden aspect-square transition-all duration-300 hover:shadow-lg hover:-translate-y-1 border border-gray-100 flex items-center justify-center p-3"
                            style={{ boxShadow: "rgba(0, 0, 0, 0.04) 0px 2px 4px 0px, rgba(27, 31, 35, 0.08) 0px 0px 0px 1px" }}
                            title={exhi.title}
                        >
                            <div className="w-full h-full flex items-center justify-center overflow-hidden">
                                <img
                                    decoding="async"
                                    src={toAbsoluteImage(exhi.image)}
                                    alt={exhi.title}
                                    loading="lazy"
                                    className="max-w-[90%] max-h-[90%] object-contain transition-transform duration-300 group-hover:scale-105"
                                    onError={(e) => {
                                        e.currentTarget.src = "https://placehold.co/150?text=Logo";
                                    }}
                                />
                            </div>
                        </div>
                    </Reveal>
                ))}
            </div>

            {exhibitors.length === 0 && (
                <div className="text-center py-24 text-gray-400 italic">
                    No exhibitors found matching your search.
                </div>
            )}
        </div>
    );
};

export default ExhibitorsGrid;