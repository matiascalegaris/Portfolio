import { Link } from "react-router-dom"

export const NavBar = () => {
  return (
    <nav className="nav-var">
      <Link to="/">Portfolio</Link>
      <Link to="/aboutme">About me</Link>
    </nav>
  )}