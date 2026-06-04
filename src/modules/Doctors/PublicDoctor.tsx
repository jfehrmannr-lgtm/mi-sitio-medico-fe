import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { doctorMock } from '@mocks/mocks'
import type { IDoctorUser } from '@app-types/IDoctorUser'
import { DoctorStore } from '@stores/DoctorStore/Doctor.store'
import LayoutDoctor from './LayoutDoctor'

const PublicDoctor = () => {
  const { setSelectedDoctor, isLoadingDoctor, selectedDoctor } = DoctorStore()
  const { id } = useParams()
  
  useEffect(() => {
    const doctor: IDoctorUser | undefined = doctorMock.find((doctorMockElement) => doctorMockElement._id === id)

    console.debug(doctor)

    if(doctor) setSelectedDoctor(doctor)
  }, [id, setSelectedDoctor])

  console.debug(!isLoadingDoctor, !selectedDoctor)

  if(isLoadingDoctor) {
    return <>Cargando Doctor</>
  } else if (!isLoadingDoctor && !selectedDoctor) {
    return <>No se encuentra este doctor</>
  } else if (!isLoadingDoctor && selectedDoctor) {
    return <LayoutDoctor />
  }

}

export default PublicDoctor