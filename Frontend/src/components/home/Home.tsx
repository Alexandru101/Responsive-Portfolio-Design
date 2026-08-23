// Modules //
import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import styles from "./Home.module.css";

// Images + Icons //
import avatar from "../../assets/avatar.png";
import { LuLayers3, LuBriefcaseBusiness, LuUserRound, LuMail, LuMouse } from "react-icons/lu";
import { FaGithub, FaLinkedin, FaTwitter, FaCircle } from "react-icons/fa";
import { BiChevronDown } from "react-icons/bi";

// Functions //
function loadAboutSectionFadeAnim(
    aboutRef: React.RefObject<HTMLElement | null>,
    aboutSectionLeftRef: React.RefObject<HTMLDivElement | null>,
    aboutSectionRightRef: React.RefObject<HTMLDivElement | null>
) {
    useEffect(() => {
        const aboutSection = aboutRef.current;
        const aboutSectionLeft = aboutSectionLeftRef.current;
        const aboutSectionRight = aboutSectionRightRef.current;
        if (!aboutSection || !aboutSectionLeft || !aboutSectionRight) return;

        const obsserver = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    aboutSectionLeft.classList.add(styles["about--visible"]);
                    aboutSectionRight.classList.add(styles["about--visible"]);
                } else {
                    aboutSectionLeft.classList.remove(styles["about--visible"]);
                    aboutSectionRight.classList.remove(styles["about--visible"]);
                }
            },
            {
                threshold: 0.15
            }
        )

        obsserver.observe(aboutSection);

        return () => {
            obsserver.disconnect();
        };
    }, [])
};

// Rendering Page //
export default function Home() {
    // Declaring Variables //
    const aboutRef = useRef<HTMLElement | null>(null);
    const aboutSectionLeftRef = useRef<HTMLDivElement | null>(null);
    const aboutSectionRightRef = useRef<HTMLDivElement | null>(null);

    // Loading "useEffects" //
    loadAboutSectionFadeAnim(aboutRef, aboutSectionLeftRef, aboutSectionRightRef);

    // Rendering HTML //
    return (
        <div className={styles.page}>

            {/* ------------ */}
            {/* Hero Section */}
            {/* ------------ */}

            <section className={styles.hero}>
                <header className={styles.profile}>
                    <img
                        src={avatar}
                        alt=""
                        className={styles.avatar}
                    />

                    <h1 className={styles.name}>Alexandru</h1>
                    <p className={styles.description}>
                        Full-Stack developer building modern web applications
                    </p>
                </header>

                <nav className={styles.navigation}>
                    <span className={styles.glowLine} />

                    <div className={styles.navigation__options}>
                        <Link to="/" className={styles.navigation__card}>
                            <span className={styles.card__icon}>{"</>"}</span>
                            <span className={styles.card__text}>Projects</span>
                        </Link>

                        <Link to="/" className={styles.navigation__card}>
                            <LuLayers3 className={styles.card__icon}/>
                            <span className={styles.card__text}>Skills</span>
                        </Link>

                        <Link to="/" className={styles.navigation__card}>
                            <LuBriefcaseBusiness className={styles.card__icon} />
                            <span className={styles.card__text}>Experience</span>
                        </Link>

                        <a href="#about" className={styles.navigation__card}>
                            <LuUserRound className={styles.card__icon} />
                            <span className={styles.card__text}>About</span>
                        </a>

                        <Link to="/" className={styles.navigation__card}>
                            <LuMail className={styles.card__icon} />
                            <span className={styles.card__text}>Contact</span>
                        </Link>
                    </div>

                    <div className={styles.socials}>
                        <a href="https://github.com/Alexandru101" aria-label="Github" >
                            <FaGithub className={styles.socials__icon} />
                        </a>

                        <a href="https://gb.linkedin.com/">
                            <FaLinkedin className={styles.socials__icon} />
                        </a>

                        <a href="https://x.com/?lang=en-gb">
                            <FaTwitter className={styles.socials__icon} />
                        </a>
                    </div>
                </nav>

                <div className={styles.scroll}>
                    <span className={styles.scroll__text}>Scroll</span>
                    <LuMouse size={30} strokeWidth={1} />
                    <BiChevronDown size={30} />
                </div>
            </section>

            {/* ---------------- */}
            {/* About me section */}
            {/* ---------------- */}

            <section ref={aboutRef} id="about" className={styles.about}>
                <div ref={aboutSectionLeftRef} className={styles.about__leftSide}>
                    <div className={styles.about__title}>
                        <h2 className={styles["about__title-text"]}>ABOUT ME</h2>
                        <span className={styles["about__title-underline"]} />
                    </div>

                    <p className={styles.about__desc}>
                        I build peformance-focused websites that look good,
                        feel simple and get the job done.
                    </p>

                    <p className={styles.about__bio}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
                        nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
                        reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
                        deserunt mollit anim id est laborum.
                    </p>
                </div>

                <div ref={aboutSectionRightRef} className={styles.about__rightSide}>
                    <div className={styles.editor}>
                        <div className={styles.editor__header}>
                            <div className={styles["editor__header-dots"]}>
                                <FaCircle className={styles["editor__header-dots--red"]} />
                                <FaCircle className={styles["editor__header-dots--yellow"]} />
                                <FaCircle className={styles["editor__header-dots--green"]} />
                            </div>

                            <span className={styles.editor__title}>profile.tsx</span>
                            
                            <div className={styles.editor__status}>
                                <FaCircle className={styles["editor__status-dot"]} />
                                <span className={styles["editor__status-text"]}>online</span>
                            </div>
                        </div>

                        <div className={styles.editor__body}>
                            <div className={styles.editor__textarea}>
                                <span className={styles["editor__textarea-line"]}>1</span>
                                
                                <div>
                                    <span className={styles["editor__textarea-keyword"]}>const</span>{" "}
                                    developer = {" "}
                                    <span className={styles["editor__textarea-punctuation"]}>{"{"}</span>
                                </div>
                            </div>

                            <div className={styles.editor__textarea}>
                                <span className={styles["editor__textarea-line"]}>2</span>

                                <div>
                                    &nbsp;&nbsp;
                                    name:&nbsp;
                                    <span className={styles["editor__textarea-string"]}>"Alexandru"</span>,
                                </div>
                            </div>

                            <div className={styles.editor__textarea}>
                                <span className={styles["editor__textarea-line"]}>3</span>

                                <div>
                                    &nbsp;&nbsp;
                                    role:&nbsp;
                                    <span className={styles["editor__textarea-string"]}>"Full-Stack Developer"</span>,
                                </div>
                            </div>

                            <div className={styles.editor__textarea}>
                                <span className={styles["editor__textarea-line"]}>4</span>

                                <div>
                                    &nbsp;&nbsp;
                                    stack: &nbsp;

                                    <span className={styles["editor__textarea-punctuation"]}>{"["}</span>
                                    <span className={styles["editor__textarea-string"]}>
                                        {`"Typescript", "React", "Node.js"`}
                                    </span>
                                    <span className={styles["editor__textarea-punctuation"]}>{"]"}</span>,
                                </div>
                            </div>

                            <div className={styles.editor__textarea}>
                                <span className={styles["editor__textarea-line"]}>5</span>

                                <div>
                                    &nbsp;&nbsp;
                                    monthsBuilding:&nbsp;
                                    <span className={styles["editor__textarea-number"]}>8</span>,
                                </div>
                            </div>

                            <div className={styles.editor__textarea}>
                                <span className={styles["editor__textarea-line"]}>6</span>

                                <div>
                                    &nbsp;&nbsp;
                                    focus:&nbsp;
                                    <span className={styles["editor__textarea-string"]}>"Clean, scalable projects"</span>,
                                </div>
                            </div>

                            <div className={styles.editor__textarea}>
                                <span className={styles["editor__textarea-line"]}>7</span>

                                <div>
                                    &nbsp;&nbsp;
                                    openToWork:&nbsp;
                                    <span className={styles["editor__textarea-keyword"]}>true</span>,
                                </div>
                            </div>

                            <div className={styles.editor__textarea}>
                                <span className={styles["editor__textarea-line"]}>8</span>
                                <span className={styles["editor__textarea-punctuation"]}>{"}"}</span>
                            </div>
                        </div>

                        <div className={styles.editor__footer}>
                            <span>Typescript</span>
                            <span>UTF-8</span>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
};