import React, { Fragment } from 'react'
import type { IDoctorUser } from '@app-types/IDoctorUser'
import Button from '@components/Button/Button'
import Tag from './components/Tag'
import Box from './components/Box'

interface IIDCardSchedule {
  selectedDoctor: IDoctorUser
}

const IDCardSchedule = ({
  selectedDoctor
}: IIDCardSchedule) => {
  return (
    <div className='py-2 w-full flex flex-col h-full'>
      <div className='px-4 flex flex-0'>
        <Button className='w-full rounded-s-full' color={selectedDoctor.selectedLayout.colorPalette.button}>
          Presencial
        </Button>
        <div className='border-r border-white'></div>
        <Button className='w-full rounded-e-full' color={selectedDoctor.selectedLayout.colorPalette.button}>
          Online
        </Button>
      </div>
      <div className='pt-4 flex-1'>
        {Array.from({ length: 5 }).map((_) => {
          return (
            <Tag>
              <Fragment>
                <Box color={selectedDoctor.selectedLayout.colorPalette.button} number={29} label='Lunes' />
                <div className='flex flex-col items-center justify-center px-4 text-md font-semibold'>
                  <span>09:00</span>
                  <span>10:00</span>
                </div>
                <div className='flex flex-col overflow-hidden justify-center'>
                  <span className='text-lg font-semibold'>Conslta Psiquiatrica</span>
                  <span>Psiquiatría Adulto</span>
                </div>
              </Fragment>
            </Tag>
          )
        })}
      </div>
      <div className='flex justify-center'>
        <Button className='rounded-full' color={selectedDoctor.selectedLayout.colorPalette.button}>
          Ver calendario
        </Button>
      </div>
    </div>
  )
}

export default React.memo(IDCardSchedule)