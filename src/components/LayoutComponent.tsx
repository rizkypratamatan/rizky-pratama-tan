import {
    IconArticleFilled,
    IconBrandGithubFilled,
    IconBrandInstagram,
    IconBrandLinkedinFilled,
    IconBrandTelegram,
    IconBrandTiktok,
    IconBriefcaseFilled,
    IconBuildingBank,
    IconMoon,
    IconSun,
    IconUserCode
} from "@tabler/icons-react";
import {useEffect, useRef, useState} from "react";
import PerfectScrollbar from "react-perfect-scrollbar";
import {Link, Outlet, useLocation} from "react-router";
import {TypeAnimation} from "react-type-animation";
import {Theme} from "../enums/core/Theme.ts";


export default function LayoutComponent() {
    const location: any = useLocation();
    const perfectScrollbar: any = useRef(null);

    const [mobile, setMobile] = useState<boolean>(false);
    const [dark, setDark] = useState<boolean>(false);

    const switchTheme = (theme: Theme) => {
        const html: Element | null = document.querySelector('html');

        if(html !== null) {
            html.setAttribute('data-theme', theme.toString().toLowerCase());

            if(theme === Theme.Dark) {
                setDark(true);
            } else {
                setDark(false);
            }
        }
    }

    useEffect((): any => {
        const html: Element | null = document.querySelector('html');

        if(html !== null) {
            if(window.matchMedia('(prefers-color-scheme: dark)').matches) {
                html.setAttribute('data-theme', 'dark');
                setDark(true);
            } else {
                html.setAttribute('data-theme', 'light');
                setDark(false);
            }

            window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', event => {
                if(event.matches) {
                    html.setAttribute('data-theme', 'dark');
                    setDark(true);
                } else {
                    html.setAttribute('data-theme', 'light');
                    setDark(false);
                }
            });
        }

        if(window.innerWidth < 1120) {
            setMobile(true);

            if(perfectScrollbar.current) {
                perfectScrollbar.current.scrollTop = 0;
            }
        }

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
            <div className="fixed top-0 left-0 w-full h-full overflow-hidden">
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
            <div className="relative z-10 h-screen overflow-x-hidden">
                <div className="flex flex-col gap-[1.5rem] mx-auto lg:flex-row lg:max-w-[120rem] lg:mx-[1.875rem] xl:mx-auto">
                    <div className="flex flex-col gap-[0.875rem] lg:basis-[27.5rem] lg:flex-row">
                        <header>
                            <div className="header-container hamburger bg-gradient-container-md h-[3.875rem] pr-[0.625rem] rounded-[2rem] leading-[3.875rem] md:pr-0">
                                <span></span>
                            </div>
                            <div className="header-container bg-gradient-container-md h-[3.875rem] rounded-[2rem] leading-[3.875rem]">
                                {dark &&
                                    <IconSun className="relative top-[-0.125rem]" onClick={() => switchTheme(Theme.Light)}/>}
                                {!dark &&
                                    <IconMoon className="relative top-[-0.125rem]" onClick={() => switchTheme(Theme.Dark)}/>}
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
                            <nav className="bg-gradient-container header-container w-full before:rounded-none md:relative md:w-auto md:rounded-[2rem] before:md:rounded-[2rem]">
                                <ul id="main-menu">
                                    <li><Link className="active" to="/"><IconUserCode/><span>About</span></Link></li>
                                    <li><Link to="/resume/"><IconBuildingBank/><span>Resume</span></Link></li>
                                    <li className="hidden">
                                        <Link to="/projects/"><IconBriefcaseFilled/><span>Projects</span></Link>
                                    </li>
                                    <li className="hidden">
                                        <Link to="/articles/"><IconArticleFilled/><span>Articles</span></Link></li>
                                    <li><Link to="/contact/"><IconBrandTelegram/><span>Contact</span></Link></li>
                                </ul>
                            </nav>
                        </header>
                        <div className="sidebar">
                            <div className="bg-gradient-container relative bg-bgl-primary dark:bg-bgd-primary rounded-[2rem] lg:rounded-tr-none lg:rounded-bl-none before:lg:rounded-tr-none before:lg:rounded-bl-none">
                                <div className="relative flex flex-col gap-[1rem]">
                                    <div className="basis-[17.438rem] h-[22.438rem] px-[2.5rem] py-[2.5rem]">
                                        <img className="w-full h-full rounded-b-[2rem] rounded-tl-[2rem] object-cover" src="/resources/images/rizky-profile-picture.png" alt="Rizky Profile Picture" draggable={false} loading="lazy"/>
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
                                        <Link to="https://www.linkedin.com/in/rizkypratamatan/" target="_blank" rel="noopener noreferrer" aria-label="Rizky Pratama Linkedin" aria-labelledby="Rizky Pratama Linkedin"><IconBrandLinkedinFilled size={20}/></Link>
                                        <Link to="https://github.com/rizkypratamatan/" target="_blank" rel="noopener noreferrer" aria-label="Rizky Pratama Github" aria-labelledby="Rizky Pratama Github"><IconBrandGithubFilled size={20}/></Link>
                                        <Link to="https://www.instagram.com/rizky.tech/" target="_blank" rel="noopener noreferrer" aria-label="Rizky Pratama Instagram" aria-labelledby="Rizky Pratama Instagram"><IconBrandInstagram size={20}/></Link>
                                        <Link to="https://www.tiktok.com/@rizky.tech/" target="_blank" rel="noopener noreferrer" aria-label="Rizky Pratama Tiktok" aria-labelledby="Rizky Pratama Tiktok"><IconBrandTiktok size={20}/></Link>
                                    </div>
                                    <div className="contact">
                                        <a href="#">Download CV</a>
                                        <Link to="/contact/">Contact Me</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="basis-[37.875rem] grow">
                        <div className="content bg-gradient-container lg:rounded-tl-none">
                            <div className="relative p-0 rounded-[2rem] lg:px-[0.188rem] lg:py-[0.938rem] lg:overflow-hidden">
                                {
                                    mobile && <div className="px-[1.688rem] py-[0.938rem] lg:max-h-[39.687rem]">
                                        <Outlet></Outlet>
                                    </div>
                                }
                                {
                                    !mobile &&
                                    <PerfectScrollbar containerRef={(ref) => (perfectScrollbar.current = ref)}>
                                        <div className="px-[1.688rem] py-[0.938rem] lg:max-h-[39.687rem]">
                                            <Outlet></Outlet>
                                        </div>
                                    </PerfectScrollbar>
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
