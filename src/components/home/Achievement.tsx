type Props = {
    count: string;
    name: string;
};


export default async function Achievement({count, name}: Props) {
    return <h3 className="basis-30 flex gap-2.5 items-center md:gap-5">
        <span className="text-4xl md:text-6xl">{count}</span>
        <span className="text-sm md:text-base">{name}</span>
    </h3>;
}
