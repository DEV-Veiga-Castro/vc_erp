import "../index.css";
import "./style.css";

export default function Layout({children}) {

    return (
        <div className="container">
            <header>
                <nav>
                    <ul>
                        <li><a href="#">Home</a></li>
                        <li><a href="#">About</a></li>
                        <li><a href="#">Contact</a></li>
                    </ul>
                </nav>
            </header>
            <main>
                {children}
            </main>
            <footer>
                <p>Footer</p>
            </footer>
        </div>
    )

}