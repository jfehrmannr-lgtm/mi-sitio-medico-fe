import Divider from '@/components/Divider/Divider'
import type { IDoctorUser } from '@/types/IDoctorUser'
import React from 'react'
import Tag from './components/Tag'
import { Rate } from 'antd'

interface IIDCardDescription {
  selectedDoctor: IDoctorUser
}

const IDCardDescriptions = ({
  selectedDoctor
}: IIDCardDescription) => {
  return (
    <div className='flex grow overflow-hidden relative'>
      <div className='bg-white h-full w-full overflow-auto'>
        <div className='bg-white text-2xl py-2 px-4 font-semibold space-x-1.5 sticky top-0'>Sobre mi</div>
        <div className='px-4 space-y-4 pb-4'>
          {selectedDoctor.description?.map((descriptionElement) => <p>{descriptionElement}</p>)}
        </div>
        <Divider />
        <div className='bg-white text-2xl py-2 px-4 font-semibold space-x-1.5 sticky top-0 z-10'>Reseñas</div>
        {selectedDoctor.reviews?.map((reviewsElement) => (
          <Tag>
            <div className='space-y-2'>
              <div className='font-semibold'>{reviewsElement.name}</div>
              <div>{reviewsElement.comment}</div>
              <Rate defaultValue={reviewsElement.rating} disabled allowHalf />
            </div>
          </Tag>
        ))}
      </div>
    </div>
  )
}

export default React.memo(IDCardDescriptions)