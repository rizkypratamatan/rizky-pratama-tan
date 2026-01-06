import ContactDetailItem from "@/components/contact/ContactDetailItem";
import TitleBullet from "@/components/ui/TitleBullet";
import TitleHeading from "@/components/ui/TitleHeading";
import {ContactDetails} from "@/constants/ContactDetails";
import ContactDetailItemType from "@/types/ContactDetailItem";
import {IconBrandTelegram} from "@tabler/icons-react";


export default async function ContactDetail() {
    return <section className="flex flex-col gap-4 pt-10">
        <TitleBullet className="w-35 md:w-40" title="Contact">
            <IconBrandTelegram className="size-4"/>
        </TitleBullet>
        <TitleHeading>Let&#39;s Get in Touch!</TitleHeading>
        <div className="grid grid-cols-1 gap-7.5 md:grid-cols-2 lg:grid-cols-1 2xl:grid-cols-2">
            {ContactDetails.map((contactDetail: ContactDetailItemType, index) =>
                <ContactDetailItem key={index} className={contactDetail.className} name={contactDetail.name} value={contactDetail.value}>
                    {contactDetail.icon}
                </ContactDetailItem>)}
        </div>
    </section>;
}
