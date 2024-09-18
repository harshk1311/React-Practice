import { useEffect, useRef, useState } from "react";
import RestaruntComponent from "./Restarunt";
import { SWIGGY_URL } from "../utils/constants";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

export const BodyComponent = ()=>{
     const arr=useState([]);
        // console.log(arr)
     const [resList,setResList]=arr;
     const [searchText,setSearchText]=useState('');
     const [filteredList,setFilteredList]=useState([]);
     const onlineStatus=useOnlineStatus();
     const [location, setLocation] = useState({ latitude: null, longitude: null });
     const locationRef = useRef(location)

    // const resList=arr[0];
    // const setResList=arr[1]
    // console.log('Body Rendered')

    
    const fetchData = async () => {
        try {
          const response = await fetch(SWIGGY_URL);
          const data = await response.json();
          
          
          const info = data?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
        //   console.log(info)
          
          setResList(info);
          setFilteredList(info);
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      };
    useEffect(  ()=>{
          fetchData();
          

    },[]);

    

    if(onlineStatus===false)
    {
        return (<h1>Internet Looks Like not connected...!!!</h1>);
    }

    if(resList && resList?.length ===0){
        return <Shimmer />
    }

    return(
        <div className='body-part'>

            <div className="text-center p-4 m-4">
                <input className="border border-solid border-black mx-4" type='text'  placeholder="Search Restaurnt" value={searchText}  onChange={(e)=>{
                    console.log(searchText)
                    
                    setSearchText(e.target.value)

                    
                }}/>
                <button className="px-4 m-4 bg-green-100 rounded-lg"  onClick={()=>{
                    // console.log(resList)
                    const filteredRestraunt=resList.filter((re)=>re.info.name.toLowerCase().includes(searchText.toLowerCase()));
                    setFilteredList(filteredRestraunt)
                }}>Search</button>
                <button className="px-4 bg-blue-300 rounded-lg" onClick={()=>{
                    const filteredList = resList.filter((res)=>res.info.avgRatingString>4.3)
                    // console.log(filteredList)
                    setFilteredList(filteredList);
                }}>Top Rating Restarunt</button>
            </div>

            <div className="flex flex-wrap items-stretch" >
                {
                    filteredList.map(resObj => <Link key={resObj.info.id} to={"/restaurnts/"+resObj.info.id}> <RestaruntComponent  resData={resObj}  /> </Link>)

                }
                {/* <RestaruntComponent resData={resObjectList[0]} /> */}
                
            </div>

        </div>
    )
}

export default BodyComponent;