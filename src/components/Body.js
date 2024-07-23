import { useState } from "react";
import resObjectList from "../utils/mockdata";
import RestaruntComponent from "./Restarunt";

export const BodyComponent = ()=>{
     const arr=useState(resObjectList);
        console.log(arr)
    //  const [resList,setResList]=arr;
    const resList=arr[0];
    const setResList=arr[1]
    return(
        <div className='body-part'>

            <div className='search'>
                <button className="top-btn" onClick={()=>{
                    const filteredList = resObjectList.filter((res)=>res.info.avgRatingString>4.5)
                    // console.log(filteredList)
                    setResList(filteredList);
                }}>Top Rating Restarunt</button>
            </div>

            <div className='res-container'>
                {
                    resList.map(resObj => <RestaruntComponent key={resObj.info.id} resData={resObj} />)

                }
                {/* <RestaruntComponent resData={resObjectList[0]} /> */}
                
            </div>

        </div>
    )
}

export default BodyComponent;