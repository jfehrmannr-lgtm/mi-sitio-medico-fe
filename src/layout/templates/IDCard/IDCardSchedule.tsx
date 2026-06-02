import React from 'react'

const IDCardSchedule = () => {
  return (
    <div className='py-2'>
      <div className='px-4 flex'>
        <button className='w-full bg-blue-400 cursor-pointer py-1 rounded-bl-full rounded-tl-full text-white'>Presencial</button>
        <div className='border-r border-white'></div>
        <button className='w-full bg-blue-400 cursor-pointer py-1 rounded-br-full rounded-tr-full text-white'>Online</button>
      </div>
      <div>
        <div className='py-2 px-4'>
          <div className='bg-blue-400 flex w-18 h-18 flex-col rounded-xl items-center justify-center'>
            <span className='text-white text-4xl flex justify-center items-center'>29</span>
            <span className='text-white flex justify-center items-center text-'>Lunes</span>
          </div>
        </div>
        <div className='border-t border-gray-200'></div>
        <div className='py-2 px-4'>
          <div className='bg-blue-400 flex w-18 h-18 flex-col rounded-xl items-center justify-center'>
            <span className='text-white text-4xl flex justify-center items-center'>29</span>
            <span className='text-white flex justify-center items-center text-'>Lunes</span>
          </div>
        </div>
        <div className='border-t border-gray-200'></div>
        <div className='py-2 px-4'>
          <div className='bg-blue-400 flex w-18 h-18 flex-col rounded-xl items-center justify-center'>
            <span className='text-white text-4xl flex justify-center items-center'>29</span>
            <span className='text-white flex justify-center items-center text-'>Lunes</span>
          </div>
        </div>
        <div className='border-t border-gray-200'></div>
        <div className='py-2 px-4'>
          <div className='bg-blue-400 flex w-18 h-18 flex-col rounded-xl items-center justify-center'>
            <span className='text-white text-4xl flex justify-center items-center'>29</span>
            <span className='text-white flex justify-center items-center text-'>Lunes</span>
          </div>
        </div>
        <div className='border-t border-gray-200'></div>
        <div className='py-2 px-4'>
          <div className='bg-blue-400 flex w-18 h-18 flex-col rounded-xl items-center justify-center'>
            <span className='text-white text-4xl flex justify-center items-center'>29</span>
            <span className='text-white flex justify-center items-center text-'>Lunes</span>
          </div>
        </div>
        <div className='border-t border-gray-200'></div>

        
      </div>
    </div>
  )
}

export default React.memo(IDCardSchedule)