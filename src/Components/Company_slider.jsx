import React from 'react'
import Marquee from "react-fast-marquee";
import Image_1 from './Company Images/IBM d2.png'
import Image_2 from './Company Images/tcs d2.png'
import Image_3 from './Company Images/Artboard 1.png'
import Image_4 from './Company Images/INFO.png'
import Image_5 from './Company Images/amazon d1.png'
import Image_6 from './Company Images/accenture d2.png'
import Image_7 from './Company Images/WIP d2.png'
import Image_8 from './Company Images/JIO d2.png'

const marq = () => {
  return (
    <div>
       <Marquee className='mt-4 '>
   <img src={Image_1} alt=""  className='me-5'/>
   <img src={Image_6} alt=""  className='me-5'/>
   <img src={Image_2} alt=""  className='me-5'/>
   <img src={Image_3} alt=""  className='me-5'/>
   {/* <img src={Image_4} alt=""  className='me-5'/> */}
   <img src={Image_4} alt=""  className='me-5'/>
 
   <img src={Image_7} alt=""  className='me-5'/>
   <img src={Image_8} alt=""  className='me-5'/>
   <img src={Image_5} alt=""  className='me-5'/>
      {/* <img src={Image_4} alt=""  className='me-5'/> */}
   

   
  </Marquee>
    </div>
  )
}

export default marq
