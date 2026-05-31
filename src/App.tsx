import React from 'react'
import PublicProviders from './providers/public/PublicProviders'
import PublicRoutes from './routes/public/PublicRoutes'

const App = () => {
  return (
    <PublicProviders>
      <PublicRoutes/>
    </PublicProviders>
  )
}

export default React.memo(App)
