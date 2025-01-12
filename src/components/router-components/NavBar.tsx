import { Link } from "react-router"

const NavBar = () => {
    const name = 'yaeli'
    return (<>
        <div>navbar</div>
        <nav>
            <Link to='/welcome'>welcome</Link> |
            <Link to='/about'>About</Link> |
            
        </nav>
    </>)
}
export default NavBar