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
                <div className="skillBadge"><span>React / Next.js</span></div>
                <div className="skillBadge"><span>React Native</span></div>
                <div className="skillBadge"><span>Node.js</span></div>
                <div className="skillBadge"><span>Git / GitHub</span></div>
            </div>
        </section>
        <hr className='divider'/>
        <section className="projectsContainer">
            <p>Hier komen projecten</p>
        </section>
        <hr className='divider'/>
        <section className='educationContainer'>
            <h1 className='educationHeader'>My Education</h1>
            <section className='educationRow'>
                <p className="educationTitle">BSc. Informatica</p>
                <p>Universiteit van Amsterdam 2024 - 2027</p>
            </section>
            <section className='educationRow'>
                <p className="educationTitle">VWO</p>
                <p>Zuyderzee Lyceum 2017 - 2024</p>
            </section>
        </section>
       </>
    );

}
