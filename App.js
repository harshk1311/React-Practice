import React from 'react';
import  ReactDOM  from 'react-dom/client';
import Header from './src/components/Header';
import BodyComponent from './src/components/Body';
import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom';
import About from './src/components/About';
import Contact from './src/components/Contact';
import ErrorPage from './src/components/ErrorPage';
import RestaurntMenu from './src/components/RestaurntMenu';


const AppComponent = ()=>{
    return(
    <div className='container'>
        <Header />
        <Outlet />
    </div>)
}


const appRouters=createBrowserRouter([
    {
        path:"/",
        element:<AppComponent />,
        children:[
            {
                path:'/',
                element:<BodyComponent />

            },
            {
                path:"/about",
                element:<About />
            },
            {
                path:"/contact",
                element:<Contact />
            },
            {
                path:'/restaurnts/:resId',
                element:<RestaurntMenu />
            }

        ],
        errorElement:<ErrorPage />
    },

]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouterProvider router={appRouters} />);