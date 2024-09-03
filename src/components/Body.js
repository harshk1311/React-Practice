import { useEffect, useState } from "react";
import RestaruntComponent from "./Restarunt";
import { SWIGGY_URL } from "../utils/constants";
import Shimmer from "./Shimmer";

export const BodyComponent = ()=>{
     const arr=useState([]);
        // console.log(arr)
     const [resList,setResList]=arr;
     const [searchText,setSearchText]=useState('');
     const [filteredList,setFilteredList]=useState([]);
    // const resList=arr[0];
    // const setResList=arr[1]
    console.log('Body Rendered')
    const fetchData = async () => {
        try {
          const response = await fetch(SWIGGY_URL);
          const data = await response.json();
          
          const info = data?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
          
          setResList(info);
          setFilteredList(info);
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      };
    useEffect(  ()=>{
          fetchData();
    },[]);

    if(resList && resList?.length ===0){
        return <Shimmer />
    }

    return(
        <div className='body-part'>

            <div className='search'>
                <input type='text'   value={searchText}  onChange={(e)=>{
                    console.log(searchText)
                    
                    setSearchText(e.target.value)

                    
                }}/>
                <button onClick={()=>{
                    // console.log(resList)
                    const filteredRestraunt=resList.filter((re)=>re.info.name.toLowerCase().includes(searchText.toLowerCase()));
                    setFilteredList(filteredRestraunt)
                }}>Search</button>
                <button className="top-btn" onClick={()=>{
                    const filteredList = resObjectList.filter((res)=>res.info.avgRatingString>4.5)
                    // console.log(filteredList)
                    setResList(filteredList);
                }}>Top Rating Restarunt</button>
            </div>

            <div className='res-container'>
                {
                    filteredList.map(resObj => <RestaruntComponent key={resObj.info.id} resData={resObj} />)

                }
                {/* <RestaruntComponent resData={resObjectList[0]} /> */}
                
            </div>

        </div>
    )
}

export default BodyComponent;