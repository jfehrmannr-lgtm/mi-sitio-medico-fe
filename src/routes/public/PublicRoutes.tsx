import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import Layout from '../../layout/Layout'
import PublicDoctor from '../../modules/Doctors/PublicDoctor'

const PublicRoutes = () => {
  return (
    <Routes>
      <Route path='*' element={<Navigate to="/home" />} />
      <Route element={<Layout />}>
        <Route path='/home' element={<>Home</>} />
        <Route path='/medicos'>
          <Route path=':name/:id' element={<PublicDoctor />} />
        </Route>
      </Route>
    </Routes>
  )
}

export default React.memo(PublicRoutes)