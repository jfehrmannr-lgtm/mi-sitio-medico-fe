import React from 'react'
import { BrowserRouter } from 'react-router-dom'

interface IPublicProviders {
  children: React.ReactNode
}

const PublicProviders = ({
  children
}: IPublicProviders) => {
  return (
    <BrowserRouter>
      {children}
    </BrowserRouter>
  )
}

export default React.memo(PublicProviders)