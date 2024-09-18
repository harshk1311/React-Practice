import { useState } from "react";
import { LOGO_URL } from "../utils/constants";
import {Link} from "react-router-dom"
import useOnlineStatus from "../utils/useOnlineStatus";
const Header = () =>{
    const [LoginText,setLoginText]=useState('Login');
    const onlineStatus =useOnlineStatus();
    console.log(onlineStatus)
    return(
    <div className="flex justify-between border border-solid border-black">
        <div>
            <img className="w-56" src= {LOGO_URL}/>
        </div>

        <div className='nav-bar'>
            <ul className="flex p-4 m-4"> 
                <li className="px-4">Online Status : {onlineStatus?"🟢":"🔴"} </li>
                <li className="px-4"><Link to='/'>Home</Link></li>
                <li className="px-4"> <Link to={'/contact'}>Contact</Link> </li>
                <li className="px-4"> <Link to={'/about'}>About</Link> </li>
                <li className="px-4">Cart</li>
                <li><button onClick={()=>{
                LoginText==='Login' ? setLoginText('Logout'):setLoginText('Login')
                }}>{LoginText}</button></li>
            </ul>
        </div>
        
    </div>)
}


export default Header;