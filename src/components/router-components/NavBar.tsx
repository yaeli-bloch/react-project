import { Link } from "react-router"

const NavBar = () => {
 
    return (<>
       
        <nav className="links-container">
            <Link to='/welcome'>welcome</Link> |
            <Link to='/recipes'>recipes</Link> |            
        </nav>
    </>)
}
export default NavBar