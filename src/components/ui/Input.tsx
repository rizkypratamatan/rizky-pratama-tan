import React from "react";


type Props = {
    className?: string;
    type?: "text" | "password" | "email" | "password_confirmation";
    placeholder?: string;
    value?: string;
};

const Input: React.FC<Props> = ({className, type, placeholder, value, ...props}) => {
    return <input className={`${className} h-12.5 px-4 py-3 border border-border-100 rounded-xl`} type={type} placeholder={placeholder} value={value} {...props}/>;
};

export default Input;
