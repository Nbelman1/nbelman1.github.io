import { Link } from 'react-router-dom';

const Header = () => {

    return (
        <header className='header-container'>
            <h1>Noah Belman, Software Developer</h1>
            <h2>
                <Link to='/'>Home</Link>&nbsp;&nbsp; 
                <Link to='/projects'>Projects</Link>&nbsp;&nbsp;  
                <Link to='/resume'>Resume</Link>&nbsp;&nbsp;  
                <Link to='/contact'>Contact</Link>
            </h2>
        </header>
    );
}

export default Header;