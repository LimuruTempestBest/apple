import React from 'react'
import apple from './assets/apple 2.jpeg'
import { Icon } from '@iconify/react';



function App() {
  return (

    <div className="bg-rose-200 flex justify-center items-center w-full h-screen">
      <div className="rounded-xl overflow-hidden shadow-2xl">
        <img src={apple} className='md:64 w-96  bg-gradient-to br from -orange-300 ' />
        <div className='bg-white p-5 relative'>
          <div className="text-neutarl-800 text-xl font -semibold font-['Icaeberg']">Stupid Apple</div>
          <div className="text-slate -600">
            by <span className='font-semibold '> Daniel</span> from {' '}<span className="font-semibold">MRGA</span> </div>
          <div className="font -semibold text-xl mt-3 tracking:wider"> $100000</div>


          <div className='flex'>
            {Array(5)
              .fill(0)
              .map(() => (
                <div>
                  <Icon icon="bxs:star" className="text-yellow-300 w-4 h-4 mt-1" />
                </div>
              ))}
            <div className="ml-2">(100)</div>
          </div>
          <div className='p-3 rounded-xl absolute right-3 bottom-3 w-min bg-green-300 hover:animate-bounce'>
            <Icon icon="akar-icons:cart" className="w-6 h-6" /></div>
        </div>
      </div>
      <div className="absolute bottom-0 font-semibold text-zinc-600 tracking:wider">Made with love by <span className="font-['Icaeberg']">MRGA</span>.All right reserved.
      </div>
    </div>
  )
}

export default App;
