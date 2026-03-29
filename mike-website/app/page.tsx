import '@/styles/index.styles.css'

export default function Home() {

    const getAge = () => {
    const date = new Date();
    const now = {
        day: date.getDate(),
        month: date.getMonth()
    };

    if (now.month > 6 || (now.month === 6 && now.day >= 8)) {
        return date.getFullYear() - 2005;
    }

    return date.getFullYear() - 1 - 2005;
};

    return (
        <>
        <section className="introContainer">
            <section className="introTextContainer">
                <h1>Hello! I'm Mike.</h1>
                <p>I am a {getAge()} year old software developer from the Netherlands!</p>
                <h3>About me!</h3>
                <p>I discovered my passion for coding when I was 16 years old. It all started with basic programs in Visual Basic and simple websites during a school elective. Since then, I’ve never stopped learning, and I now spend most of my time building projects with JavaScript/TypeScript and Python.</p>

            </section>
            <section className='introImageContainer'>
                <img src={"Mike.jpeg"} className='imageMike'/>
            </section>
        </section>
        <section className="skillsContainer">
            <h2 className='skillsTitle'>Skills & Proficiencies</h2>
            <p className="skillCategory">Languages</p>
            <div className="skillsGrid">
                <div className="skillBadge"><span>TypeScript</span></div>
                <div className="skillBadge"><span>JavaScript</span></div>
                <div className="skillBadge"><span>Python</span></div>
                <div className="skillBadge"><span>C</span></div>
                <div className="skillBadge"><span>SQL</span></div>
                <div className="skillBadge"><span>HTML</span></div>
                <div className="skillBadge"><span>CSS</span></div>
            </div>

            <p className="skillCategory">Frameworks & Tools</p>
            <div className="skillsGrid">
                <div className="skillBadge"><span>React</span></div>
                <div className="skillBadge"><span>Next.js</span></div>
                <div className="skillBadge"><span>React Native</span></div>
                <div className="skillBadge"><span>Node.js</span></div>
                <div className="skillBadge"><span>Firebase</span></div>
                <div className="skillBadge"><span>Git / GitHub</span></div>
            </div>
        </section>
        <hr className='divider'/>
        <section className="itemizeContainer">
            <h1 className='itemizeHeader'>My Projects</h1>
            <section className="projectContainer">
                <section className='projectRow'>
                    <section className="itemizeLeft">
                        <p className="projectTitle">Mobile E-commerce Platform</p>
                        <p className="projectDesc">
                            A high-performance mobile e-commerce platform built with React Native and Firebase,
                            featuring a seamless shopping experience with real-time data synchronization and secure payment integration.
                        </p>
                    </section>
                    <p>Dec 2025 - now</p>
                </section>
                <section className="toolsRow">
                    <div className="toolsGrid">
                        <div className="toolsBadge"><span>JavaScript</span></div>
                        <div className="toolsBadge"><span>React Native</span></div>
                        <div className="toolsBadge"><span>Firebase</span></div>
                        <div className="toolsBadge"><span>Node.js</span></div>
                        <div className="toolsBadge"><span>SQL</span></div>
                        <div className="toolsBadge"><span>Git / GitHub</span></div>
                    </div>
                </section>
            </section>
        </section>
        <hr className='divider'/>
        <section className='itemizeContainer'>
            <h1 className='itemizeHeader'>My Experience</h1>
            <section className='itemizeRow'>
                <p className="experienceTitle">Freelance Software Engineer</p>
                <p>Freelance, Dec 2025 - now</p>
            </section>
            <section className='itemizeRow'>
                <p className="experienceTitle">Store Employee</p>
                <p>Poiesz Supermarkten, Jul 2020 - April 2024 - Dekamarkt, Jan 2025 - now</p>
            </section>
        </section>
        <hr className='divider'/>
        <section className='itemizeContainer'>
            <h1 className='itemizeHeader'>My Education</h1>
            <section className='itemizeRow'>
                <p className="educationTitle">BSc. Informatica</p>
                <p>Universiteit van Amsterdam 2024 - 2027</p>
            </section>
            <section className='itemizeRow'>
                <p className="educationTitle">VWO</p>
                <p>Zuyderzee Lyceum 2017 - 2024</p>
            </section>
        </section>
       </>
    );

}
