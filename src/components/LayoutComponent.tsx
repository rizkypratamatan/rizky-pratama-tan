import {
    IconArticleFilled,
    IconBrandGithubFilled,
    IconBrandInstagram,
    IconBrandLinkedinFilled,
    IconBrandTelegram,
    IconBrandX,
    IconBriefcaseFilled,
    IconBuildingBank,
    IconMoon,
    IconSun,
    IconUserCode
} from "@tabler/icons-react";
import {Outlet} from "react-router";
import {TypeAnimation} from "react-type-animation";


export default function LayoutComponent() {
    return (
        <>
            <div className="fixed top-0 left-0 w-full h-full">
                <span className="bulb"></span>
                <span className="bulb"></span>
                <span className="bulb"></span>
                <span className="bulb"></span>
                <span className="bulb"></span>
                <span className="bulb"></span>
                <span className="bulb"></span>
                <span className="bulb"></span>
                <span className="bulb"></span>
                <span className="bulb"></span>
                <span className="bulb"></span>
                <span className="bulb"></span>
                <span className="bulb"></span>
                <span className="bulb"></span>
                <span className="bulb"></span>
                <span className="bulb"></span>
                <span className="bulb"></span>
                <span className="bulb"></span>
                <span className="bulb"></span>
                <span className="bulb"></span>
            </div>
            <div className="flex gap-[1.5rem] relative w-[100rem] z-10 h-screen mx-auto">
                <div className="flex basis-[27.5rem] gap-[0.875rem]">
                    <header>
                        <div className="bg-gradient header-container hamburger h-[3.875rem] leading-[3.875rem]">
                            <span></span>
                        </div>
                        <div className="bg-gradient header-container h-[3.875rem] leading-[3.875rem]">
                            <IconSun className="hidden dark:inline relative top-[-0.125rem]"/>
                            <IconMoon className="inline dark:hidden relative top-[-0.125rem]"/>
                        </div>
                        <nav className="bg-gradient header-container">
                            <ul className="main-menu">
                                <li><a className="active" href="#"><IconUserCode/><span>About</span></a></li>
                                <li><a href="#"><IconBuildingBank/><span>Resume</span></a></li>
                                <li><a href="#"><IconBriefcaseFilled/><span>Projects</span></a></li>
                                <li><a href="#"><IconArticleFilled/><span>Articles</span></a></li>
                                <li><a href="#"><IconBrandTelegram/><span>Contact</span></a></li>
                            </ul>
                        </nav>
                    </header>
                    <div className="sidebar">
                        <div className="bg-gradient relative bg-bgl-primary dark:bg-bgd-primary rounded-tl-[2rem] rounded-br-[2rem] before:rounded-tr-none before:rounded-bl-none">
                            <div className="relative flex flex-col gap-[1rem]">
                                <div className="basis-[17.438rem] pt-[2.5rem] px-[2.5rem] aspect-square">
                                    <img className="img-responsive mx-auto" src="./resources/images/face-1.jpg" alt="Profile Picture" loading="lazy"/>
                                </div>
                                <div className="typed">
                                    <TypeAnimation
                                        cursor={false}
                                        sequence={[
                                            'Rust Programmer', 1000,
                                            'React Programmer', 1000,
                                            'Python Programmer', 1000,
                                            'Javascript Programmer', 1000,
                                            'Java Programmer', 1000,
                                            'IOT Developer', 1000,
                                        ]} speed={50} repeat={Infinity}
                                    />
                                </div>
                                <h1 className="name">Rizky Pratama</h1>
                                <div className="social">
                                    <a href="#"><IconBrandLinkedinFilled size={20}/></a>
                                    <a href="#"><IconBrandGithubFilled size={20}/></a>
                                    <a href="#"><IconBrandInstagram size={20}/></a>
                                    <a href="#"><IconBrandX size={20}/></a>
                                </div>
                                <div className="contact">
                                    <a href="#">Download CV</a>
                                    <a href="#">Contact Me</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="basis-[71rem]">
                    <Outlet></Outlet>
                </div>
            </div>
        </>
    );
}
