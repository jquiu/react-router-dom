import { Link } from 'react-router-dom';
import "./styles.css"

export default function Header() {
    return (
        <header className="header">
            <nav>
                <Link exact to="/" >
                    Home
                </Link>
                <Link to="/cursos" >
                    Cursos
                </Link>
                <Link to="/contactos" >
                    Contactos
                </Link>
            </nav>
        </header>
    )
}