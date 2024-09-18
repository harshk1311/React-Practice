import { CDN_URL } from "../utils/constants"
const RestaruntComponent =(props) =>{

    const {name,locality,areaName,avgRating,cuisines,cloudinaryImageId}=props?.resData?.info
    return(<div className="p-4 m-4 w-80 h-96  bg-gray-200">
        <div >
        <img className='rounded-lg h-52 w-72' src={CDN_URL+cloudinaryImageId} />

        <h2>{name}</h2>
        <h4  className=" h-25 break-words ">{cuisines.join(',')}</h4>
        <h4>{locality +'  , ' + areaName}</h4>
        <h4> {avgRating} Stars</h4>
        </div>
        

    </div>)
}

export default RestaruntComponent