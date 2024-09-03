import { useState } from "react";
import { LOGO_URL } from "../utils/constants";
const Header = () =>{
    const [LoginText,setLoginText]=useState('Login');
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
                <li><button onClick={()=>{
                LoginText==='Login' ? setLoginText('Logout'):setLoginText('Login')
                }}>{LoginText}</button></li>
            </ul>
        </div>
        
    </div>)
}


export default Header;