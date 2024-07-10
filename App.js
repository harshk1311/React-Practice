import React from 'react';
import  ReactDOM  from 'react-dom/client';


const Header = () =>{
    return(
    <div className='header-part'>
        <div>
            <img className='header-logo' src='https://cdn.logojoy.com/wp-content/uploads/2018/05/01105857/1553-768x591.png' />
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


const RestaruntComponent =() =>{
    return(<div className='res-comp'>
        <div >
        <img className='res-logo' src='https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/iydxtay1mnne2ktw7txe' />

        <h2>Barbeeque</h2>
        <h4>3.9 Start</h4>
        <h4>40-45 Mins</h4>
        <h4>3.9 Start</h4>
        </div>
        

    </div>)
}

const BodyComponent = ()=>{
    return(
        <div className='body-part'>

            <div className='search'>
                <h4>Search</h4>
            </div>

            <div className='res-container'>
                <RestaruntComponent />
                <RestaruntComponent />
                

            </div>

        </div>
    )
}


const AppComponent = ()=>{
    return(
    <div className='container'>
        <Header />
        <BodyComponent />
    </div>)
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<AppComponent />);