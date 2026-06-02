import { Rate } from 'antd'
import React from 'react'
import type { IDoctorUser } from '../../../types/IDoctorUser'

interface IIDCardProfile {
  selectedDoctor: IDoctorUser
}

const IDCardProfile = ({
  selectedDoctor
}: IIDCardProfile) => {
  return (
    <div className='w-full h-full flex flex-col'>
      <div className='py-2 px-4 text-2xl font-semibold space-x-1.5'>
        <span>{selectedDoctor.firstName}</span>
        <span>{selectedDoctor.lastName}</span>
      </div>
      <div className='w-full h-200 px-4'>
        <div className='border rounded-2xl h-full w-full'></div>
      </div>
      <div className='py-2'>
        <span className='px-4 font-semibold'>{selectedDoctor.degree.map(degreeElement => degreeElement + ' | ')}</span>
      </div>
      <div className='border-t border-gray-200'></div>
      <div className='py-2'>
        <span className='px-4'>{selectedDoctor.specialty.map(degreeElement => degreeElement + ' | ')}</span>
      </div>
      <div className='border-t border-gray-200'></div>
      <div className='py-2'>
        <span className='px-4'>N° Licencia: {selectedDoctor.medicalLicenseNumber}</span>
      </div>
      <div className='border-t border-gray-200'></div>
      <div className='py-2'>
        <span className='px-4'>{selectedDoctor.city} | {selectedDoctor.country} | {selectedDoctor.remoteAttention && 'En remoto'}</span>
      </div>
      <div className='border-t border-gray-200'></div>
      <div className=' py-2'>
        <span className='px-4'>Fonasa {selectedDoctor.fonasa ? 'Si' : 'No'}</span>
      </div>
      <div className='border-t border-gray-200'></div>
      <div className='pt-4 pb-2 flex px-4 justify-between'>
        <span className='font-semibold flex-1'>Rate: {selectedDoctor.rating}</span>
        <Rate disabled allowHalf defaultValue={selectedDoctor.rating} size='large' />
        <span className='font-semibold flex-1 flex justify-end'>{"(" + selectedDoctor.reviewCount + ")"}</span>
      </div>
    </div>
  )
}

export default React.memo(IDCardProfile)