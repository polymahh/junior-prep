import React from 'react'

const Footer = () => {
  return (
    <div className='flex flex-wrap justify-between gap-16 py-12 text-gray-700 px-14 max-w-[980px] m-auto'>
        <div >
            <img src="logo.png" alt="" className='h-[17px] mb-8' />
            <div className='flex flex-col gap-1 mb-6'>
                <h6 className='text-base font-bold'>About Developer</h6>
                <p>website created by </p>
                <a href="https://othmane-elkantaoui.vercel.app/" className="text-[#F76680]">Othmane Elkantaoui</a>
            </div>
            <div className='flex flex-col gap-1'>
                <h6 className='text-base font-bold'>About Designer</h6>
                <p>design inspired from </p>
                <p><a href="/" className="text-[#F76680]">@sanoj_dilshan</a> work</p>
            </div>
        </div>
        <div>
            <h6 className='mb-3 text-base font-bold'>Links</h6>
            <ul>  
                <li className='mb-2'><a href="/">SignUp / Login</a></li>
                <li className='mb-2'><a href="/">HTML</a></li>
                <li className='mb-2'><a href="/">CSS</a></li>
                <li className='mb-2'><a href="/">JavaScript</a></li>
                <li className='mb-2'><a href="/">React</a></li>
                <li className='mb-2'><a href="/">Teams</a></li>
            </ul>
        </div>
        <div className='flex flex-col gap-1'>
              <h6 className='text-base font-bold'>About Designer</h6>
              <p>This is an open source project for</p>
              <p>more info check my portfolio </p>
              <a href="https://othmane-elkantaoui.vercel.app/" className="text-[#F76680]">Othmane Elkantaoui</a>
        </div>
      
    </div>
  )
}

export default Footer
