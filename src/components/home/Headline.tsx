import HeadlineHeading from "@/components/home/HeadlineHeading";
import HeadlineName from "@/components/home/HeadlineName";


export default async function Headline() {
    return <section className="flex flex-col gap-4">
        <HeadlineName/>
        <HeadlineHeading/>
    </section>;
}
