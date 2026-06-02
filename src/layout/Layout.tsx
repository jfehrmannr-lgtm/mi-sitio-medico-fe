import React, { Fragment } from 'react'
import { Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <Fragment>
      <div className='h-full w-full'>
        <Outlet/>
      </div>
    </Fragment>
  )
}

export default React.memo(Layout)