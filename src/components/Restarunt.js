import { CDN_URL } from "../utils/constants"
const RestaruntComponent =(props) =>{

    const {name,locality,areaName,avgRating,cuisines,cloudinaryImageId}=props?.resData?.info
    return(<div className='res-comp'>
        <div >
        <img className='res-logo' src={CDN_URL+cloudinaryImageId} />

        <h2>{name}</h2>
        <h4>{cuisines.join(',')}</h4>
        <h4>{locality +'  , ' + areaName}</h4>
        <h4> {avgRating} Stars</h4>
        </div>
        

    </div>)
}

export default RestaruntComponent