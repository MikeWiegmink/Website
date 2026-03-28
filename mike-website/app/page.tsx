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
            </section>
            <section className='introImageContainer'>
                <img src={"Mike.jpeg"} className='imageMike'/>
            </section>
        </section>
        <hr className='divider'/>
        <section className="projectsContainer">
            <p>Hier komen projecten</p>
        </section>
        <hr className='divider'/>
       </>
    );

}
