import { LOGO_URL } from "../utils/constants";
const Header = () =>{
    return(
    <div className='header-part'>
        <div>
            <img className='header-logo' src= {LOGO_URL}/>
        </div>

        <div className='nav-bar'>
            <ul>
                <li>Home</li>
                <li>Contact</li>
                <li>About</li>
                <li>Cart</li>
            </ul>
        </div>
        
    </div>)
}


export default Header;