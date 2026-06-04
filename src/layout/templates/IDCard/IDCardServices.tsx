import type { IDoctorUser } from '@/types/IDoctorUser'
import React from 'react'
import Tag from './components/Tag'
import Box from './components/Box'
import Button from '@/components/Button/Button'
import { ProfileOutlined, ScheduleOutlined } from '@ant-design/icons'

interface IDCardServices {
  selectedDoctor: IDoctorUser
}

const IDCardServices = ({
  selectedDoctor
}: IDCardServices) => {
  return (
    <div>
      <div className='py-2 px-4 text-2xl font-semibold space-x-1.5'>
        <span>Servicios</span>
      </div>
      {selectedDoctor.services.map((servicesElement) => {
        return (
          <Tag>
            <div className='w-full'>
              <div className='flex justify-center items-center w-full'>
                <Box color={selectedDoctor.selectedLayout.colorPalette.button} number={servicesElement.serviceDuration} label='mins' />
                <div className='flex flex-col px-4 flex-1'>
                  <span className='font-semibold text-lg'>{servicesElement.serviceName}</span>
                  <span>{servicesElement.serviceDescription}</span>
                </div>
                <div 
                  className='text-white px-3 py-1 rounded-full'
                  style={{backgroundColor: selectedDoctor.selectedLayout.colorPalette.button}}
                >
                  ${servicesElement.servicePrice}
                </div>
              </div>
              <div className='pt-2 w-full flex space-x-9'>
                <Button size='small' className='rounded-full w-full' color={selectedDoctor.selectedLayout.colorPalette.button}>
                  <ProfileOutlined /> Detalles
                </Button>
                <Button type='outlined' size='small' className='rounded-full w-full' color={selectedDoctor.selectedLayout.colorPalette.button}>
                  <ScheduleOutlined /> Reservar
                </Button>
              </div>
            </div>
          </Tag>
        )
      })}
    </div>
  )
}

export default React.memo(IDCardServices)