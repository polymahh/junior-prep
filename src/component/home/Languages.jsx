import React from 'react'

const Languages = () => {
  return (
    <div className='flex flex-col items-center justify-center py-12 text-2xl font-bold bg-slate-100 '>
        <div className='bg-[#57007B] h-[4px] w-[70px]'></div>
        <p className='mt-4 font-normal' >Our</p>
        <p>Languages</p>
        <div className='flex items-center gap-8 pt-12'>
            <img src="html5.png" alt="" className='w-[60px] '/>
            <img src="css3.png" alt="" className='w-[60px] ' />
            <img src="js.png" alt="" className='w-[60px] '/>
            <img src="react.png" alt="" className='w-[60px] '/>
            {/* <img src="python.png" alt="" /> */}
        </div>
      
    </div>
  )
}

export default Languages
