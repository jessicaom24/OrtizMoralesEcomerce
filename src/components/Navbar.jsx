import CardWidget from "./CarWidget"

function Navbar(){
    return(
<nav className="navbar">
    <div className="logo">Dream's</div>
    <ul className="nav-links"></ul>
        <li><a href="/">Inicio</a></li>
        <li><a href="/tipos">Tipos</a></li>
        <li><a href="/modelos">Modelos</a></li>
        <li><CardWidget></CardWidget></li>
    
    </nav>
    )
}
export default Navbar