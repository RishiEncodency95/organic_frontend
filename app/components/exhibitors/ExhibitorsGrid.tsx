import React from "react";
import { Reveal } from "../shared/Reveal";
import { ApiExhibitor, toAbsoluteImage } from "./data";

const directions = ["left", "zoom", "right"] as const;

const ExhibitorsGrid = ({ exhibitors }: { exhibitors: ApiExhibitor[] }) => {
    return (
        <section className="container mx-auto max-w-[1400px] px-6 py-2 md:py-4 min-h-[400px]">
            <div className="grid grid-cols-2 sm:grid-cols-5 lg:grid-cols-10 gap-3 md:gap-4">
                {exhibitors.map((exhi, index) => (
                    <Reveal
                        key={exhi._id}
                        delay={(index % 12) * 60}
                        direction={directions[(index % 3) as 0 | 1 | 2]}
                        className="h-full"
                    >
                        <div className="group relative bg-[#fcfcf0] border border-gray-200/60 rounded-2xl overflow-hidden aspect-square shadow-[rgba(0,0,0,0.02)_0px_1px_3px_0px,rgba(27,31,35,0.15)_0px_0px_0px_1px]">
                            <div className="w-full h-full flex items-center justify-center overflow-hidden p-1.5">
                                <img
                                    decoding="async"
                                    src={toAbsoluteImage(exhi.image)}
                                    alt={exhi.altText || exhi.title}
                                    loading="lazy"
                                    className="max-w-[92%] max-h-[92%] object-contain"
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
        </section>
    );
};

export default ExhibitorsGrid;