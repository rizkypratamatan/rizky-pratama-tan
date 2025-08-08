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
import {useEffect} from "react";
import {Link, Outlet, useLocation} from "react-router";
import {TypeAnimation} from "react-type-animation";


export default function LayoutComponent() {
    const location: any = useLocation();

    useEffect((): any => {

        const mainMenu: HTMLElement | null = document.getElementById('main-menu');

        if(mainMenu !== null) {
            const mainMenuItems: HTMLCollectionOf<HTMLElement> = (mainMenu.getElementsByTagName('a') as HTMLCollectionOf<HTMLElement>);

            if(mainMenuItems.length > 0) {
                Array.from(mainMenuItems).forEach(function(element: any) {
                    const urls: string[] = [
                        window.location.pathname,
                        element.getAttribute("href")
                    ];
                    const validUrls: string[] = [];

                    for(let url of urls) {
                        if(url.endsWith("//")) {
                            url = url.slice(0, -1);
                        }

                        validUrls.push(url);
                    }

                    console.log(validUrls);
                    if(validUrls[0] === validUrls[1]) {
                        element.classList.add("active");
                    } else {
                        element.classList.remove("active");
                    }
                });
            }
        }

    }, [location]);

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
            <div className="flex flex-col gap-[1.5rem] relative z-10 h-screen mx-auto overflow-x-hidden md:flex-row md:w-[100rem]">
                <div className="flex flex-col gap-[0.875rem] md:basis-[27.5rem] md:flex-row">
                    <header>
                        <div className="header-container hamburger h-[3.875rem] pr-[0.625rem] rounded-[2rem] leading-[3.875rem] md:pr-0 md:bg-gradient">
                            <span></span>
                        </div>
                        <div className="header-container h-[3.875rem] rounded-[2rem] leading-[3.875rem] md:bg-gradient">
                            <IconSun className="hidden dark:inline relative top-[-0.125rem]"/>
                            <IconMoon className="inline dark:hidden relative top-[-0.125rem]"/>
                        </div>
                        <div className="grow pl-[1.125rem] py-[0.625rem] md:hidden">
                            <h1 className="leading-[1.438rem] text-[0.938rem] font-semibold">Rizky Pratama</h1>
                            <p className="leading-[1.031rem] text-[0.75rem] text-primary">
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
                            </p>
                        </div>
                        <nav className="bg-gradient header-container w-full before:rounded-none md:relative md:w-auto md:rounded-[2rem] before:md:rounded-[2rem]">
                            <ul id="main-menu">
                                <li><Link className="active" to="/"><IconUserCode/><span>About</span></Link></li>
                                <li><Link to="/resume/"><IconBuildingBank/><span>Resume</span></Link></li>
                                <li className="hidden"><Link to="/projects/"><IconBriefcaseFilled/><span>Projects</span></Link>
                                </li>
                                <li className="hidden">
                                    <Link to="/articles/"><IconArticleFilled/><span>Articles</span></Link></li>
                                <li><Link to="/contact/"><IconBrandTelegram/><span>Contact</span></Link></li>
                            </ul>
                        </nav>
                    </header>
                    <div className="sidebar">
                        <div className="bg-gradient relative bg-bgl-primary dark:bg-bgd-primary rounded-[2rem] md:rounded-tr-none md:rounded-bl-none before:md:rounded-tr-none before:md:rounded-bl-none">
                            <div className="relative flex flex-col gap-[1rem]">
                                <div className="basis-[17.438rem] h-[22.438rem] px-[2.5rem] py-[2.5rem]">
                                    <img className="w-full h-full rounded-b-[2rem] rounded-tl-[2rem] object-cover" src="/resources/images/rizky-profile-picture.png" alt="Rizky Profile Picture" loading="lazy"/>
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
