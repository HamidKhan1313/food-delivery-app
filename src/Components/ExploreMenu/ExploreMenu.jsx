import React from 'react'
import './ExploreMenu.css'
import { menue_list } from '../../assets/assets'
function ExploreMenu ({category,setCategory})  {

  return (
    <div className='explore-menu' id='explore-menu'>
        <h1> Explore over menue</h1>
        <p className='explore-menu-text'>Choose from a diverse menu featuring a delectable array of  dishes. Over mission is to satisfy your cravings and elvate your dinning experience, one delicious meal at a time  </p>
      <div className='explore-menu-list'>
        {menue_list.map((item, index) => {
            return(
                <div  onClick={() => setCategory(prev =>prev===item.menue_name?'All':item.menue_name)} key={index}className='explore-menu-list-item'>
                <img className={category===item.menue_name?'Active':''}src={item.menue_image} alt="" />
                <p>{item.menue_name}</p>
                </div>
            )
        })}

      </div>
      <hr/>
    </div>
  )
}

export default ExploreMenu
