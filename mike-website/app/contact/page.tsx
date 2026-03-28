import "@/styles/contact.styles.css";

export default function Contact() {
    return (
        <section className="contactPage">
            <section className="titleContainer">
                <h1>Contact me!</h1>
            </section>
            <section>
                <p className="contactIntro">
                    I'm always open for questions, new projects,
                    collaborations, or (remote) work opportunities.
                    Feel free to reach out!
                </p>
            </section>
            <section className="informationContainer">
                <section className="informationCard">
                    <p>Reach me by sending an email</p>
                    <a href="mailto:mikewiegmink@gmail.com?subject=Inquiry from Portfolio">
                        <p>Send email!</p>
                    </a>
                </section>
                <section className="informationCard">
                    <p>Visit my <a href="https://www.linkedin.com/in/mike-wiegmink-263464390/" target="_blank">LinkedIn</a> profile!</p>
                    <p>Or visit my <a href="https://github.com/MikeWiegmink" target="_blank">GitHub</a> page!</p>
                </section>
            </section>
        </section>
    )
}