import {useRouteError} from 'react-router-dom'
const ErrorPage = ()=>{
    const err=useRouteError();
    console.log(err)
    return (<div>
        <h1>Oops Something Went Wrong ...!!!</h1>
        <h2>{err?.status} : {err?.statusText}</h2>
        <h3>{err?.data}</h3>
        
    </div>)
}

export default ErrorPage;