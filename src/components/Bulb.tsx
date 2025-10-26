import React from "react";


const Bulb: React.FC = async() => {
    return (
        <div className="fixed top-0 left-0 w-full h-full overflow-hidden">
            {Array.from({length: 20}).map((_: unknown, index: number) => (
                <span key={index} className="bulb"></span>
            ))}
        </div>
    );
};

export default Bulb;
