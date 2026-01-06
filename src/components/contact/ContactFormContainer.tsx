import ContactForm from "@/components/contact/ContactForm";
import TitleHeading from "@/components/ui/TitleHeading";


export default async function ContactFormContainer() {
    return <section className="flex flex-col gap-4">
        <TitleHeading>Let&#39;s make your project brilliant!</TitleHeading>
        <ContactForm/>
    </section>;
}
