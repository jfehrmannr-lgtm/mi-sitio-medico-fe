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
    <div style={{ backgroundColor: selectedDoctor.selectedLayout.colorPalette.backgroundPrimary }} className='text-gray-800 h-full w-full flex justify-center items-center'>
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
        <div className='w-20 flex flex-col justify-between py-16'>
          <button
            style={{ backgroundColor: `${showSelectedView === "profile" ? selectedDoctor.selectedLayout.colorPalette.button : 'white'}` }}
            onClick={() => setShowSelectedView("profile")}
            className={`${showSelectedView === "profile" ? '' : 'w-12'} flex items-center justify-center transition h-18 rounded-br-2xl rounded-tr-2xl cursor-pointer shadow-[1px_2px_2px_-2px_#999]`}
          >
            <UserOutlined style={{ fontSize: 25, color: `${showSelectedView === "profile" ? 'white' : 'black'}` }} />
          </button>
          <button
            style={{ backgroundColor: `${showSelectedView === "description" ? selectedDoctor.selectedLayout.colorPalette.button : 'white'}` }}
            onClick={() => setShowSelectedView("description")}
            className={`${showSelectedView === "description" ? 'bg-white w-14' : 'bg-gray-300 w-12'} flex items-center justify-center transition h-18 rounded-br-2xl rounded-tr-2xl cursor-pointer shadow-[1px_2px_2px_-2px_#999]`}
          >
            <ProfileOutlined style={{ fontSize: 25, color: `${showSelectedView === "description" ? 'white' : 'black'}` }} />
          </button>
          <button
            style={{ backgroundColor: `${showSelectedView === "service" ? selectedDoctor.selectedLayout.colorPalette.button : 'white'}` }}
            onClick={() => setShowSelectedView("service")}
            className={`${showSelectedView === "service" ? 'bg-white w-14' : 'bg-gray-300 w-12'} flex items-center justify-center transition h-18 rounded-br-2xl rounded-tr-2xl cursor-pointer shadow-[1px_2px_2px_-2px_#999]`}
          >
            <DollarOutlined style={{ fontSize: 25, color: `${showSelectedView === "service" ? 'white' : 'black'}` }} />
          </button>
          <button
            style={{ backgroundColor: `${showSelectedView === "schedule" ? selectedDoctor.selectedLayout.colorPalette.button : 'white'}` }}
            onClick={() => setShowSelectedView("schedule")}
            className={`${showSelectedView === "schedule" ? 'bg-white w-14' : 'bg-gray-300 w-12'} flex items-center justify-center transition h-18 rounded-br-2xl rounded-tr-2xl cursor-pointer shadow-[1px_2px_2px_-2px_#999]`}
          >
            <ScheduleOutlined style={{ fontSize: 25, color: `${showSelectedView === "schedule" ? 'white' : 'black'}` }} />
          </button>
        </div>
      </div>
    </div>
  )
}

export default React.memo(IDCard)