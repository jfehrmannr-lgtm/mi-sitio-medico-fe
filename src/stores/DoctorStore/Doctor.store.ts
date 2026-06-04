import { create } from "zustand";
import type { IDoctorStore } from "./Doctor.interface";
import type { IDoctorUser } from "@app-types/IDoctorUser";

export const DoctorStore = create<IDoctorStore>((set) => ({
  selectedDoctor: null,
  isLoadingDoctor: true,

  setSelectedDoctor: (doctor: IDoctorUser | undefined) => set({ selectedDoctor: doctor, isLoadingDoctor: false })
}))