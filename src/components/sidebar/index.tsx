import Contact from "@/components/sidebar/Contact";
import ProfileName from "@/components/sidebar/ProfileName";
import ProfilePicture from "@/components/sidebar/ProfilePicture";
import Social from "@/components/sidebar/Social";
import TypingTextContainer from "@/components/sidebar/TypingTextContainer";


export default async function Sidebar() {
    return <div className="basis-auto w-full max-w-120 mx-auto bg-background-100 rounded-4xl gradient-container-hidden xs:basis-full-menu xs:max-w-full xs:ml-20 lg:basis-90 lg:ml-0 lg:rounded-tr-none">
        <div className="relative flex flex-col gap-3 xs:gap-4">
            <ProfilePicture/>
            <div className="flex flex-col px-10">
                <TypingTextContainer/>
                <ProfileName/>
            </div>
            <Social/>
            <Contact/>
        </div>
    </div>;
}
