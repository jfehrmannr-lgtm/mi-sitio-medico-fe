import React from 'react'

interface IBox {
  color: string,
  number: number | string,
  label: string
}

const Box = ({
  color,
  number,
  label
}: IBox) => {
  return (
    <div style={{ backgroundColor: color }} className='flex w-16 h-16 flex-col rounded-xl items-center justify-center'>
      <span className='text-white text-3xl flex justify-center items-center'>{number}</span>
      <span className='text-white flex justify-center items-center text-sm'>{label}</span>
    </div>
  )
}

export default React.memo(Box)