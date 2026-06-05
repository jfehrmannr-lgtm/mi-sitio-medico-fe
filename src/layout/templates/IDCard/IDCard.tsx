import React, { useState } from 'react'
import type { IDoctorUser } from '@app-types/IDoctorUser'
import { DollarOutlined, ProfileOutlined, ScheduleOutlined, UserOutlined } from '@ant-design/icons'
import IDCardProfile from './IDCardProfile'
import IDCardSchedule from './IDCardSchedule'
import { AnimatePresence, motion } from 'framer-motion'
import IDCardServices from './IDCardServices'
import IDCardDescriptions from './IDCardDescriptions'

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
  const [showSelectedView, setShowSelectedView] = useState<"profile" | "description" | "schedule" | "service">("profile")

  return (
    <div 
      style={{ backgroundColor: selectedDoctor.selectedLayout.colorPalette.backgroundPrimary }} 
      className='text-gray-800 h-full w-full flex justify-center lg:items-center overflow-auto lg:overflow-hidden pb-12 pt-2 lg:pt-0 lg:pb-0'
    >
      <div className='w-130 h-145 lg:flex'>
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
              {showSelectedView === "profile" && (
                <IDCardProfile selectedDoctor={selectedDoctor} />
              )}
              {showSelectedView === "description" && (
                <IDCardDescriptions selectedDoctor={selectedDoctor} />
              )}
              {showSelectedView === "service" && (
                <IDCardServices selectedDoctor={selectedDoctor} />
              )}
              {showSelectedView === "schedule" && (
                <IDCardSchedule selectedDoctor={selectedDoctor} />
              )}
            </motion.div>
          </AnimatePresence>
        </div>
        <div className='absolute bottom-0 left-0 lg:static lg:w-20 flex lg:flex-col justify-between lg:py-16 w-full'>
          <button
            style={{ backgroundColor: `${showSelectedView === "profile" ? selectedDoctor.selectedLayout.colorPalette.button : 'white'}`, borderColor: selectedDoctor.selectedLayout.colorPalette.border }}
            onClick={() => setShowSelectedView("profile")}
            className={`${showSelectedView === "profile" ? 'bg-white lg:w-14' : 'lg:w-12'} w-full flex items-center justify-center transition h-10 lg:h-18 lg:rounded-e-2xl border-e cursor-pointer shadow-[1px_2px_2px_-2px_#999]`}
          >
            <UserOutlined style={{ fontSize: 25, color: `${showSelectedView === "profile" ? 'white' : 'black'}` }} />
          </button>
          <button
            style={{ backgroundColor: `${showSelectedView === "description" ? selectedDoctor.selectedLayout.colorPalette.button : 'white'}`, borderColor: selectedDoctor.selectedLayout.colorPalette.border }}
            onClick={() => setShowSelectedView("description")}
            className={`${showSelectedView === "description" ? 'bg-white lg:w-14' : 'bg-gray-300 lg:w-12'} w-full flex items-center justify-center transition h-10 lg:h-18 lg:rounded-e-2xl border-e cursor-pointer shadow-[1px_2px_2px_-2px_#999]`}
          >
            <ProfileOutlined style={{ fontSize: 25, color: `${showSelectedView === "description" ? 'white' : 'black'}` }} />
          </button>
          <button
            style={{ backgroundColor: `${showSelectedView === "service" ? selectedDoctor.selectedLayout.colorPalette.button : 'white'}`, borderColor: selectedDoctor.selectedLayout.colorPalette.border }}
            onClick={() => setShowSelectedView("service")}
            className={`${showSelectedView === "service" ? 'bg-white lg:w-14' : 'bg-gray-300 lg:w-12'} w-full flex items-center justify-center transition h-10 lg:h-18 lg:rounded-e-2xl border-e cursor-pointer shadow-[1px_2px_2px_-2px_#999]`}
          >
            <DollarOutlined style={{ fontSize: 25, color: `${showSelectedView === "service" ? 'white' : 'black'}` }} />
          </button>
          <button
            style={{ backgroundColor: `${showSelectedView === "schedule" ? selectedDoctor.selectedLayout.colorPalette.button : 'white'}`, borderColor: selectedDoctor.selectedLayout.colorPalette.border }}
            onClick={() => setShowSelectedView("schedule")}
            className={`${showSelectedView === "schedule" ? 'bg-white lg:w-14' : 'bg-gray-300 lg:w-12'} w-full flex items-center justify-center transition h-10 lg:h-18 lg:rounded-e-2xl cursor-pointer shadow-[1px_2px_2px_-2px_#999]`}
          >
            <ScheduleOutlined style={{ fontSize: 25, color: `${showSelectedView === "schedule" ? 'white' : 'black'}` }} />
          </button>
        </div>
      </div>
    </div>
  )
}

export default React.memo(IDCard)