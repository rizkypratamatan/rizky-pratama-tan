import AchievementItem from "@/components/home/AchievementItem";
import React from "react";


const Achievements: React.FC = async() => {
    return <section className="flex flex-wrap gap-5 justify-around py-7 md:py-10">
        <AchievementItem count="68" name="Completed Projects"/>
        <AchievementItem count="5+" name="Programming Languages"/>
        <AchievementItem count="13" name="Years of Experience"/>
    </section>;
};

export default Achievements;
