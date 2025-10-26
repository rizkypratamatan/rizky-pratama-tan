import React, {MouseEventHandler} from "react";


type Props = {
    children?: React.ReactNode;
    id?: string;
    className?: string;
    type?: 'submit' | 'reset' | 'button' | undefined;
    value?: string;
    onClick?: MouseEventHandler<HTMLButtonElement>;
};

const Button: React.FC<Props> = ({children, id, className, type, value, onClick, ...props}) => {
    return <button id={id} className={className} type={type} value={value} {...props} onClick={onClick}>{children}</button>;
};

export default Button;
