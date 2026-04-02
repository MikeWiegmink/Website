import data from "@/constants/projects.json" with { type: 'json' };
import "@/styles/projects.styles.css"

export default async function ProjectDetails({ params }: { params: Promise<{ slug: string }>}) {
    const { slug } = await params;
    const project = data.filter((item) => item.slug == slug)[0]


    return (
        <section className="projectContainer">
            <section className="titleContainer">
                <h1>{project.title}</h1>
                <p>Duration: {project.duration}</p>
            </section>
            <hr className="divider"/>
            <section>
                <p className="categoryTitle">Tech Stack</p>
                <section className="skillsGrid">
                    {project.stack?.map((item) => {
                        return(
                            <section className="skillBadge">
                                <span>{item}</span>
                            </section>
                        )
                    })}
                </section>
            </section>
            <hr className="divider"/>
            <section className="descriptionContainer">
                <p className="categoryTitle">Description</p>
                <p className="descriptionText">{project.description}</p>
            </section>
        </section>
    );
}