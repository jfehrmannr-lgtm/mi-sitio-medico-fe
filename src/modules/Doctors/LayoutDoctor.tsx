import React from 'react'
import { DoctorStore } from '@stores/DoctorStore/Doctor.store'
import IDCard from '@layout/templates/IDCard/IDCard'

const LayoutDoctor = () => {
  const { selectedDoctor } = DoctorStore()

  if(selectedDoctor && selectedDoctor.selectedLayout.layout.layoutName === 'idCard'){
    return <IDCard selectedDoctor={selectedDoctor} />
  }
}

export default React.memo(LayoutDoctor)