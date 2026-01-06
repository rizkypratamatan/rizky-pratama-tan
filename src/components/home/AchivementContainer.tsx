import Achievement from "@/components/home/Achievement";
import {Achievements} from "@/constants/Achievements";
import AchievementItem from "@/types/AchievementItem";


export default async function AchievementContainer() {
    return <section className="flex flex-wrap gap-5 justify-around py-7 md:py-10">
        {Achievements.map((achievement: AchievementItem, index: number) =>
            <Achievement key={index} count={achievement.count} name={achievement.name}/>)}
    </section>;
}
