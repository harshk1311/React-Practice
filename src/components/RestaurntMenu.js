import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { RES_MENU } from "../utils/constants";
import useResMenu from "../utils/useResMenu";
import ItemList from "./ItemList";
const RestaurntMenu = () => {
  // const [resMenu,setResMenu]=useState(null);

  const { resId } = useParams();
  const [showIndex,setShowIndex]=useState(null);
  // console.log(resId)
  const resMenu = useResMenu(resId);

  if (resMenu === null) {
    return <Shimmer />;
  }
  // console.log(resMenu)
  const { name, cuisines, costForTwoMessage } =
    resMenu?.cards[2]?.card?.card?.info;

  const { cards } = resMenu.cards[4]?.groupedCard?.cardGroupMap?.REGULAR;

  const updateIndexId=(index)=>{
    if(index===showIndex){
        setShowIndex(null);
    }
    else{
        setShowIndex(index);
    }
  }
  
  // console.log(resMenu.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card)
  // console.log(cards)
  return (
    <div className="text-center ">
      <div className="">
        <h1 className="text-3xl">{name}</h1>
        <p>
          {cuisines?.join(", ")} - {costForTwoMessage}
        </p>
      </div>
      {cards.map((item,index) => {
        // console.log(index);  
        return item?.card?.card["@type"].trim() ==
          "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory" ? (
          <ItemList 
          data={item}
          showItems={index===showIndex}
          setShowIndex={()=>{
            updateIndexId(index)
        }}

           />
        ) : (
          <></>
        );
      })}

      {/* {itemCards?.map((item)=> <li>{item?.card?.info?.name} {"- Rs "} {item?.card?.info?.price/100}</li>)} */}

      {/* <h1>hhhhh</h1> */}
    </div>
  );
};

export default RestaurntMenu;
