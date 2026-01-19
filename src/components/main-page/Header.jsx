import { Link } from 'react-router-dom';

const Header = () => {

    return (
        <div>
            <header>
                <h1>Welcome to my portfolio!</h1>
                <p>The go-to page for all things Noah.</p>
                <br></br>
                <h2>
                    <Link to='/'>Home</Link> |  
                    <Link to='/projects'>Projects</Link> | 
                    <Link to='/resume'>Resume</Link> |  
                    <Link to='/contact'>Contact</Link>
                </h2>
            </header>
        </div>
    );
}

export default Header;