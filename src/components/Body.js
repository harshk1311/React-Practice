import resObjectList from "../utils/mockdata";
import RestaruntComponent from "./Restarunt";

export const BodyComponent = ()=>{
    return(
        <div className='body-part'>

            <div className='search'>
                <h4>Search</h4>
            </div>

            <div className='res-container'>
                {
                    resObjectList.map(resObj => <RestaruntComponent key={resObj.info.id} resData={resObj} />)

                }
                {/* <RestaruntComponent resData={resObjectList[0]} /> */}
                
            </div>

        </div>
    )
}

export default BodyComponent;