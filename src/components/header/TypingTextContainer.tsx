import TypingText from "@/components/header/TypingText";


export default async function TypingTextContainer() {
    return <div className="grow pl-4.5 py-2.5 xs:hidden">
        <h1 className="leading-5.75 text-base-l font-semibold line-clamp-1">{process.env.NEXT_PUBLIC_PROFILE_NAME}</h1>
        <p className="h-4.75 text-xs-l text-primary-100 line-clamp-1">
            <TypingText/>
        </p>
    </div>;
}
