export default async function Bulb() {
    return <div className="fixed left-0 top-0 w-full h-full overflow-hidden">
        {Array.from({length: 20}).map((_: unknown, index: number) =>
            <span key={index} className="bulb"></span>)}
    </div>;
}
