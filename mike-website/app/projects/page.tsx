import data from "@/constants/projects.json"
import "@/styles/projectsOverview.styles.css"

export default function Projects() {
    return(
        <>
            <section className="titleContainer">
                <h1>Projects</h1>
            </section>
            <section className="projectsRow">
                {data.map((item) => {
                    return(
                        <a key={item.slug} href={`/projects/${item.slug}`}>
                            <section className="projectsCard">
                                <section>
                                    <h2>{item.title}</h2>
                                </section>
                            </section>
                        </a>
                    );
                })}
            </section>
        </>
    )
}