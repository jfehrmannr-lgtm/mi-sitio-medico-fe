import React, { Fragment } from 'react'

interface ITag {
  children: React.ReactNode
}

const Tag = ({
  children
}: ITag) => {
  return (
    <Fragment>
      <div className='border-t border-gray-200'></div>
      <div className='py-[0.72rem] px-4 flex hover:bg-pink-50 transition'>
        {children}
      </div>
      <div className='border-t border-gray-200'></div>
    </Fragment>
  )
}

export default React.memo(Tag)