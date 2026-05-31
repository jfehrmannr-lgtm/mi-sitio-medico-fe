import React from 'react'
import type { IDoctorUser } from '../../../types/IDoctorUser'
import { StarOutlined } from '@ant-design/icons'
import { Rate } from 'antd'

interface IIDCard {
  selectedDoctor: IDoctorUser
}

const IDCard = ({
  selectedDoctor
}: IIDCard) => {

  return (
    <div className='bg-pinkbg-std h-full w-full flex justify-center items-center'>
      <div className='w-130 h-145 flex'>
        <div className='bg-white w-full h-full rounded-2xl py-2 shadow'>
          <div className='w-full h-full flex flex-col'>
            <div className='py-2 px-4 text-2xl font-semibold'>Dra. Claudia Gómez Romero</div>
            <div className='w-full h-200 px-4'>
              <div className='border rounded-2xl h-full w-full'></div>
            </div>
            <div className='py-2'>
              <span className='px-4 font-semibold'>Médico General | Residente de Psiquiatría</span>
            </div>
            <div className='border-t border-gray-200'></div>
            <div className='py-2'>
              <span className='px-4'>N° Licencia: 666222 Médico general</span>
            </div>
            <div className='border-t border-gray-200'></div>
            <div className='py-2'>
              <span className='px-4'>Araucanía | Angol | Chile | En remoto</span>
            </div>
            <div className='border-t border-gray-200'></div>
            <div className='py-2'>
              <span className='px-4'>CONACEM Psiquiatría Adultos</span>
            </div>
            <div className='border-t border-gray-200'></div>
            <div className=' py-2'>
              <span className='px-4'>Text5</span>
            </div>
            <div className='border-t border-gray-200'></div>
            <div className='pt-4 pb-2 flex px-4 justify-between'>
              <span className='font-semibold'>Rate: 5</span>
              <Rate disabled allowHalf defaultValue={5} size='large' />
              <span className='font-semibold'>(450)</span>
            </div>
          </div>
        </div>
        <div className='w-20 flex flex-col justify-between py-16'>
          <div className='bg-white w-full h-18 rounded-br-2xl rounded-tr-2xl'></div>
          <div className='bg-gray-300 w-full h-18 rounded-br-2xl rounded-tr-2xl'></div>
          <div className='bg-gray-300 w-full h-18 rounded-br-2xl rounded-tr-2xl'></div>
          <div className='bg-gray-300 w-full h-18 rounded-br-2xl rounded-tr-2xl'></div>
        </div>
      </div>
    </div>
  )
}

export default React.memo(IDCard)