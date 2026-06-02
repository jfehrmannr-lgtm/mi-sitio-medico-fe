import React, { useState } from 'react'
import type { IDoctorUser } from '../../../types/IDoctorUser'
import { DollarOutlined, ProfileOutlined, ScheduleOutlined, UserOutlined } from '@ant-design/icons'
import IDCardProfile from './IDCardProfile'
import IDCardSchedule from './IDCardSchedule'
import { AnimatePresence, motion } from 'framer-motion'

interface IIDCard {
  selectedDoctor: IDoctorUser
}

const animationPreset = {
  initial: { opacity: 0, scale: 0.98 },
  animate: { opacity: 1, scale: 1 },
  exit: { opacity: 0, scale: 0.98 },
  transition: { duration: 0.2 }
}

const IDCard = ({
  selectedDoctor
}: IIDCard) => {
  const [showSelectedView, setShowSelectedView] = useState<"Profile" | "Description" | "Schedule" | "Service">("Profile")

  return (
    <div style={{backgroundColor: selectedDoctor.selectedLayout.colorPalette.background}} className='h-full w-full flex justify-center items-center'>
      <div className='w-130 h-145 flex'>
        <div className='bg-white w-full h-full rounded-2xl py-2 shadow'>
          <AnimatePresence mode="wait">
            <motion.div
              key={showSelectedView}
              className="flex flex-col h-full"
              initial={animationPreset.initial}
              animate={animationPreset.animate}
              exit={animationPreset.exit}
              transition={animationPreset.transition}
            >
              {showSelectedView === "Profile" && (
                <IDCardProfile selectedDoctor={selectedDoctor} />
              )}
              {showSelectedView === "Description" && (
                <></>
              )}
              {showSelectedView === "Service" && (
                <></>
              )}
              {showSelectedView === "Schedule" && (
                <IDCardSchedule />
              )}
            </motion.div>
          </AnimatePresence>
        </div>
        <div className='w-20 flex flex-col justify-between py-16'>
          <button
            onClick={() => setShowSelectedView("Profile")}
            className={`${showSelectedView === "Profile" ? 'bg-white w-14' : 'bg-gray-300 w-12'} flex items-center justify-center transition h-18 rounded-br-2xl rounded-tr-2xl cursor-pointer shadow-[1px_2px_2px_-2px_#999]`}
          >
            <UserOutlined style={{fontSize: 25}} />
          </button>
          <button
            onClick={() => setShowSelectedView("Description")}
            className={`${showSelectedView === "Description" ? 'bg-white w-14' : 'bg-gray-300 w-12'} flex items-center justify-center transition h-18 rounded-br-2xl rounded-tr-2xl cursor-pointer shadow-[1px_2px_2px_-2px_#999]`}
          >
            <DollarOutlined style={{fontSize: 25}} />
          </button>
          <button
            onClick={() => setShowSelectedView("Service")}
            className={`${showSelectedView === "Service" ? 'bg-white w-14' : 'bg-gray-300 w-12'} flex items-center justify-center transition h-18 rounded-br-2xl rounded-tr-2xl cursor-pointer shadow-[1px_2px_2px_-2px_#999]`}
          >
            <ScheduleOutlined style={{fontSize: 25}} />
          </button>
          <button
            onClick={() => setShowSelectedView("Schedule")}
            className={`${showSelectedView === "Schedule" ? 'bg-white w-14' : 'bg-gray-300 w-12'} flex items-center justify-center transition h-18 rounded-br-2xl rounded-tr-2xl cursor-pointer shadow-[1px_2px_2px_-2px_#999]`}
          >
            <ProfileOutlined style={{fontSize: 25}} />
          </button>
        </div>
      </div>
    </div>
  )
}

export default React.memo(IDCard)