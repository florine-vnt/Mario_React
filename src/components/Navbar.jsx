function Navbar() {

    return (
        <header>
            <div className="container">
                <img src="src/assets/mushroom.png" alt="mushroom" className="logo" />
                <nav className="navbar">
                    <li><a href="#">Accueil</a></li>
                    <li><a href="#">Les personnages</a></li>
                    <li><a href="#">Contact</a></li>

                </nav>
            </div>
        </header>
    )
}

export default Navbar;