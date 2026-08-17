import React from "react";

const SectionContainer = ({ children, className }: any) => {
    return (
        <div className={`w-full px-2 lg:px-11 ${className || ''}`}>
            {children}
        </div>
    );
};

export default SectionContainer;
