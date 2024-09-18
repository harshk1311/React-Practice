import { useState } from "react";
import { CDN_URL } from "../utils/constants";

const ItemList = ({data,showItems,setShowIndex}) => {
  // console.log("first")
  console.log(showItems);
  const itemCards = data?.card?.card?.itemCards;
  // console.log(itemCards.length);
  

  const handelClick=()=>{
    setShowIndex();
  }
  return (
    <div className="flex justify-center">
      <div className="p-5 m-5 bg-slate-300 w-6/12 ">
        <div className="flex justify-between cursor-pointer" onClick={handelClick}>
          <h1>{data?.card?.card?.title} ({data?.card?.card?.itemCards.length})</h1>
          <h1>⬇️</h1>
        </div>
        <div className="p-5">
          {showItems && itemCards.map((item) => {
            return (<div className="flex border-b-4">
              <div className=" w-9/12">
                <h1 className=" flex px-4 start-0 text-xl">{item?.card?.info?.name}</h1>
                <h2 className=" flex p-1 start-0 text-xl">₹{item?.card?.info?.defaultPrice?item?.card?.info?.defaultPrice/100:item?.card?.info?.price/100}</h2>
                <p className="text-xs">{item?.card?.info?.description}</p>
                
            </div> 
            <div className="w-3/12 p-4">
            <img className="h-24" src={CDN_URL+item?.card?.info?.imageId} />
            </div>
            </div>);
          })}
        </div>
      </div>
      
    </div>
  );
};

export default ItemList;
