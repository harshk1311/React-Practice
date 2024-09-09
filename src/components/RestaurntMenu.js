import {useEffect,useState} from "react"
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { RES_MENU } from "../utils/constants";
const RestaurntMenu = ()=>{
    const [resMenu,setResMenu]=useState(null);
    const {resId}=useParams();
    useEffect(()=>{
        fetchData();
    },[])

    const fetchData = async ()=>{

        const resData=await fetch(RES_MENU + resId);
        const jsonData=await resData.json()
        console.log(jsonData?.data)
        setResMenu(jsonData.data)
    }
    
    if(resMenu===null){
        return <Shimmer />
    }
    
    const {name,cuisines,costForTwoMessage}=resMenu?.cards[2]?.card?.card?.info;

    const {itemCards}=resMenu.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;
    console.log(resMenu.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card)
    console.log(itemCards)
    return(<div>
        <h1>{name}</h1>
        <p>{cuisines?.join(", ")} - {costForTwoMessage}</p>
            {/* <p>ads</p> */}
            {itemCards?.map((item)=> <li>{item?.card?.info?.name} {"- Rs "} {item?.card?.info?.price/100}</li>)}
           

    </div>)
}

export default RestaurntMenu;