import ContactDetail from "@/components/contact/ContactDetail";
import ContactFormContainer from "@/components/contact/ContactFormContainer";
import ContactMap from "@/components/contact/ContactMap";
import {Fragment} from "react";


export default async function Contact(){
    return <Fragment>
        <ContactDetail/>
        <ContactMap/>
        <ContactFormContainer/>
    </Fragment>;
}
