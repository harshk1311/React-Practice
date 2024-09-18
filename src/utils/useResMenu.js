import { useEffect, useState } from "react";
import { RES_MENU } from "./constants";

const useResMenu =(resId)=>{

    const [resInfo,setResInfo]=useState(null);

    useEffect(()=>{
        fetchData();
    },[])

    const fetchData = async ()=>{
        try{
            // console.log(resId)
        const url=RES_MENU+resId;
        // console.log(url+'jhsd')
        const data=await fetch(url);
        const json=await data.json();
        setResInfo(json?.data)
        }
        catch(error){
            console.error("Error fetching data:", error);

        }

    }
    // console.log(resInfo)

    return resInfo;
}

export default useResMenu;