import ContactDetailItem from "@/components/contact/ContactDetailItem";
import TitleBullet from "@/components/TitleBullet";
import TitleHeading from "@/components/TitleHeading";
import ContactDetailsConst from "@/constants/ContactDetails";
import {IconBrandTelegram} from "@tabler/icons-react";
import React from "react";


const ContactDetails: React.FC = async() => {
    return <section className="flex flex-col gap-4 pt-10">
        <TitleBullet className="w-35 md:w-40" title="Contact">
            <IconBrandTelegram className="size-4"/>
        </TitleBullet>
        <TitleHeading>Let&#39;s Get in Touch!</TitleHeading>
        <div className="grid grid-cols-1 gap-7.5 md:grid-cols-2 lg:grid-cols-1 2xl:grid-cols-2">
            {ContactDetailsConst.map((contactDetail, index) => (
                <ContactDetailItem key={index} className={contactDetail.className} name={contactDetail.name} value={contactDetail.value}>
                    {contactDetail.icon}
                </ContactDetailItem>
            ))}
        </div>
    </section>;
};

export default ContactDetails;
