import ContactDetails from "@/components/contact/ContactDetails";
import ContactForm from "@/components/contact/ContactForm";
import ContactMaps from "@/components/contact/ContactMaps";
import ClientProviders from "@/providers/clients";
import React from "react";


const Contact: React.FC = async() => {
    return <React.Fragment>
        <ContactDetails/>
        <ContactMaps/>
        <ClientProviders>
            <ContactForm/>
        </ClientProviders>
    </React.Fragment>;
};

export default Contact;
