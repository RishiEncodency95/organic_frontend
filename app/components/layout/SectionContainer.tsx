import React from "react";

const SectionContainer = ({ children, className, style, ...props }: any) => {
    return (
        <div className={`w-full px-4 md:px-14 ${className || ''}`} style={style} {...props}>
            {children}
        </div>
    );
};

export default SectionContainer;
