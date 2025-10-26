import React from "react";


type Props = {
    children?: React.ReactNode;
    className?: string;
    rows?: number;
    placeholder?: string;
};

const Textarea: React.FC<Props> = ({children, className, rows, placeholder, ...props}) => {
    return <textarea className={`${className} p-4 py-3 border border-border-100 rounded-xl`} rows={rows} placeholder={placeholder} {...props}>{children}</textarea>;
};

export default Textarea;
