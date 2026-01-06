import Link from "next/link";


export default async function Contact() {
    return <div className="contact">
        <Link className="duration-300 hover:text-primary-100" href="/documents/cv-rizky-pratama-tan.pdf" target="_blank" rel="noopener noreferrer" aria-label="Download CV">Download
            CV</Link>
        <Link className="duration-300 hover:text-primary-100" href="/contact/" aria-label="Contact Me">Contact Me</Link>
    </div>;
}
