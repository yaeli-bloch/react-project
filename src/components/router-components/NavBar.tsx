import { Link } from "react-router"

const NavBar = () => {
     const styles = {
    nav: {
      display: 'flex',
      justifyContent: 'center',
      gap: '30px',
      padding: '16px 0',
  
    
    },
    link: {
      textDecoration: 'none',
      fontSize: '1.2rem',
      color: '#00695c',
      fontWeight: 500,
      fontFamily: 'Quicksand, sans-serif',
      transition: 'all 0.3s ease',
    },
    linkHover: {
      color: '#004d40',
      transform: 'scale(1.05)',
    },
  };

  return (
    <nav style={styles.nav}>
      <Link to="/welcome" style={styles.link}>Welcome</Link>
      <Link to="/recipes" style={styles.link}>Recipes</Link>
    </nav>
  );

}
export default NavBar