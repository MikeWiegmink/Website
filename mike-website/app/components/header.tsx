import '@/styles/header.styles.css';

export default function Header() {
    return (
        <header className="headerContainer">
            <section className="headerTitle">
                <a href='/'>
                    <h1>Mike Wiegmink</h1>
                </a>
            </section>
            <nav className="headerNav">
                <a href="/">Home</a>
                <a href='/projects'>Projects</a>
                <a href="/contact">Contact</a>
            </nav>
        </header>
    );
}