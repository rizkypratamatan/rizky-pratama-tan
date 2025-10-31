import AchievementItem from "@/components/home/AchievementItem";
import AchievementsConst from "@/constants/Achievements";
import React from "react";


const Achievements: React.FC = async() => {
    return <section className="flex flex-wrap gap-5 justify-around py-7 md:py-10">
        {AchievementsConst.map((achievement, index) => (
            <AchievementItem key={index} count={achievement.count} name={achievement.name}/>
        ))}
    </section>;
};

export default Achievements;
