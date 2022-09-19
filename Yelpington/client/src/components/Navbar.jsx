import { NavLink } from "react-router-dom";
import "../CSS/navbar.css"


const Navbar = (props) => {
  const {resturaunts} = props
    let activeStyle = {color: "#E98074"}
    let inActiveStyle = {textDecoration: "none"}
    
    return ( 
    <>
    <h4 id = "nav-header">Local Resturaunts</h4>
        <nav>
          {resturaunts.map(resturaunt => (
        <ul>
            <li>
                <NavLink to = {`${resturaunt.name.split(" ").join("")}`} style={({ isActive }) =>
              isActive ? activeStyle : inActiveStyle} id = "navlink">{[resturaunt.name]}</NavLink>
            </li>
        </ul>
          ))}
    </nav>
    </> );
}
 
export default Navbar;