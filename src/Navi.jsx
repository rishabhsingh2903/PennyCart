import {Link } from "react-router-dom"
export default function Navi(){
    return (<>
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
            <a className="navbar-brand" href="#">PennyCart</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
                <Link to ="/" className="nav-link">Welcome</Link>
                <Link to ="/cart" className="nav-link">Cart</Link>
                <Link to ="/dashboard" className="nav-link">Dashboard</Link>
                <Link to ="/info" className="nav-link">Info</Link>
            </div>
            </div>
        </div>
        </nav>
    </>)
}