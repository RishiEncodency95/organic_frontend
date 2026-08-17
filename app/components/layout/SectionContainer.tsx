import React from "react";

const SectionContainer = ({ children, className }: any) => {
    return (
        <div className={`container mx-auto px-4 max-w-[1400px] ${className || ''}`}>
            {children}
        </div>
    );
};

export default SectionContainer;
