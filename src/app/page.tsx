import Achievements from "@/components/home/Achievements";
import Headline from "@/components/home/Headline";
import Services from "@/components/home/Services";
import React from "react";


const Home: React.FC = async() => {
    return <React.Fragment>
        <Headline/>
        <Achievements/>
        <Services/>
    </React.Fragment>;
};

export default Home;
