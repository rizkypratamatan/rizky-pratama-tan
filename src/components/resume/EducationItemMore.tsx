type Props = {
    certificate: string;
    place: string;
    description: string;
};


export default async function EducationItemMore({certificate, place, description}: Props) {
    return <div className="flex flex-col gap-3 p-7.5 bg-background-100 rounded-lg">
        <p className="font-bold">{certificate}</p>
        <p className="font-semibold">{place}</p>
        <p>{description}</p>
    </div>;
}
