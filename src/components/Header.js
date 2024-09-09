import { useState } from "react";
import { LOGO_URL } from "../utils/constants";
import {Link} from "react-router-dom"
const Header = () =>{
    const [LoginText,setLoginText]=useState('Login');
    return(
    <div className='header-part'>
        <div>
            <img className='header-logo' src= {LOGO_URL}/>
        </div>

        <div className='nav-bar'>
            <ul>
                <li><Link to='/'>Home</Link></li>
                <li> <Link to={'/contact'}>Contact</Link> </li>
                <li> <Link to={'/about'}>About</Link> </li>
                <li>Cart</li>
                <li><button onClick={()=>{
                LoginText==='Login' ? setLoginText('Logout'):setLoginText('Login')
                }}>{LoginText}</button></li>
            </ul>
        </div>
        
    </div>)
}


export default Header;