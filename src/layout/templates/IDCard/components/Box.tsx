import React from 'react'

interface IBox {
  backgroundColor: string,
  textColor: string,
  number: number | string,
  label: string
}

const Box = ({
  backgroundColor,
  textColor,
  number,
  label
}: IBox) => {
  return (
    <div style={{ backgroundColor: backgroundColor, color: textColor }} className='flex w-16 h-16 flex-col rounded-xl items-center justify-center'>
      <span className='text-3xl flex justify-center items-center'>{number}</span>
      <span className='flex justify-center items-center text-sm'>{label}</span>
    </div>
  )
}

export default React.memo(Box)