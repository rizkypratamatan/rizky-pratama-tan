import ContactDetailItem from "@/components/contact/ContactDetailItem";
import TitleBullet from "@/components/TitleBullet";
import TitleHeading from "@/components/TitleHeading";
import {IconBrandTelegram} from "@tabler/icons-react";
import React from "react";


const ContactDetails: React.FC = async() => {
    return <section className="flex flex-col gap-4 pt-10">
        <TitleBullet className="w-35 md:w-40" title="Contact">
            <IconBrandTelegram size={16}/>
        </TitleBullet>
        <TitleHeading>Let&#39;s Get in Touch!</TitleHeading>
        <div className="grid grid-cols-1 gap-7.5 md:grid-cols-2 lg:grid-cols-1 2xl:grid-cols-2">
            <ContactDetailItem name="Phone" value={process.env.NEXT_PUBLIC_CONTACT_PHONE}>
                <svg className="w-10 h-11.25 fill-primary-100" aria-hidden="true" viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg">
                    <path d="M436 160c6.6 0 12-5.4 12-12v-40c0-6.6-5.4-12-12-12h-20V48c0-26.5-21.5-48-48-48H48C21.5 0 0 21.5 0 48v416c0 26.5 21.5 48 48 48h320c26.5 0 48-21.5 48-48v-48h20c6.6 0 12-5.4 12-12v-40c0-6.6-5.4-12-12-12h-20v-64h20c6.6 0 12-5.4 12-12v-40c0-6.6-5.4-12-12-12h-20v-64h20zm-68 304H48V48h320v416zM208 256c35.3 0 64-28.7 64-64s-28.7-64-64-64-64 28.7-64 64 28.7 64 64 64zm-89.6 128h179.2c12.4 0 22.4-8.6 22.4-19.2v-19.2c0-31.8-30.1-57.6-67.2-57.6-10.8 0-18.7 8-44.8 8-26.9 0-33.4-8-44.8-8-37.1 0-67.2 25.8-67.2 57.6v19.2c0 10.6 10 19.2 22.4 19.2z"></path>
                </svg>
            </ContactDetailItem>
            <ContactDetailItem name="Email" value={process.env.NEXT_PUBLIC_CONTACT_EMAIL}>
                <svg className="w-10 h-11.25 fill-primary-100" aria-hidden="true" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
                    <path d="M464 64H48C21.49 64 0 85.49 0 112v288c0 26.51 21.49 48 48 48h416c26.51 0 48-21.49 48-48V112c0-26.51-21.49-48-48-48zm0 48v40.805c-22.422 18.259-58.168 46.651-134.587 106.49-16.841 13.247-50.201 45.072-73.413 44.701-23.208.375-56.579-31.459-73.413-44.701C106.18 199.465 70.425 171.067 48 152.805V112h416zM48 400V214.398c22.914 18.251 55.409 43.862 104.938 82.646 21.857 17.205 60.134 55.186 103.062 54.955 42.717.231 80.509-37.199 103.053-54.947 49.528-38.783 82.032-64.401 104.947-82.653V400H48z"></path>
                </svg>
            </ContactDetailItem>
            <ContactDetailItem className="md:col-span-2 lg:col-span-1 2xl:col-span-2" name="Address" value={process.env.NEXT_PUBLIC_CONTACT_ADDRESS}>
                <svg className="w-10 h-11.25 fill-primary-100" aria-hidden="true" viewBox="0 0 576 512" xmlns="http://www.w3.org/2000/svg">
                    <path d="M560.02 32c-1.96 0-3.98.37-5.96 1.16L384.01 96H384L212 35.28A64.252 64.252 0 0 0 191.76 32c-6.69 0-13.37 1.05-19.81 3.14L20.12 87.95A32.006 32.006 0 0 0 0 117.66v346.32C0 473.17 7.53 480 15.99 480c1.96 0 3.97-.37 5.96-1.16L192 416l172 60.71a63.98 63.98 0 0 0 40.05.15l151.83-52.81A31.996 31.996 0 0 0 576 394.34V48.02c0-9.19-7.53-16.02-15.98-16.02zM224 90.42l128 45.19v285.97l-128-45.19V90.42zM48 418.05V129.07l128-44.53v286.2l-.64.23L48 418.05zm480-35.13l-128 44.53V141.26l.64-.24L528 93.95v288.97z"></path>
                </svg>
            </ContactDetailItem>
        </div>
    </section>;
};

export default ContactDetails;
