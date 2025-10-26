import Link from "next/link";
import React from "react";


const Contact: React.FC = () => {
    return <div className="contact">
        <a className="duration-300 hover:text-primary-100" href="/documents/cv-rizky-pratama-tan.pdf" target="_blank" rel="noopener noreferrer" aria-label="Download CV">Download
            CV</a>
        <Link className="duration-300 hover:text-primary-100" href="/contact/" aria-label="Contact Me">Contact Me</Link>
    </div>;
};

export default Contact;
