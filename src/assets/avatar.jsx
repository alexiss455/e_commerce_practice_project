import React from 'react'
import img from "../../images/image-avatar.png"
function avatar() {
  return (
    <div className='active:scale-75 duration-100 w-12 h-12 rounded-full hover:border-[2px] hover:border-orange-400'><img src={img}/></div>
  )
}
export default avatar