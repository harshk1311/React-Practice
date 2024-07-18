import React from 'react';
import  ReactDOM  from 'react-dom/client';
import Header from './src/components/Header';
import BodyComponent from './src/components/Body';


const AppComponent = ()=>{
    return(
    <div className='container'>
        <Header />
        <BodyComponent />
    </div>)
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<AppComponent />);