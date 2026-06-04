import type { IDoctorUser } from "@app-types/IDoctorUser"

export interface IDoctorStore {
  selectedDoctor: IDoctorUser | null
  isLoadingDoctor: boolean

  setSelectedDoctor: (doctor: IDoctorUser) => void
}