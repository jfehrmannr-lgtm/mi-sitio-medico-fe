import type { IColorPalette } from "./IColorPalette";
import type { ILayout } from "./ILayout";

export interface IDoctorSocialMedia {
  media: 'instagram' | 'facebook' | 'linkedin' | 'tiktok' | 'youtube' | 'x' | 'website';
  link: string;
}

export interface IDoctorUser {
  _id: string;

  firstName: string;
  lastName: string;

  email: string;
  phone?: string;

  degree: string[];
  specialty: string[];

  profileImage?: string;
  description?: string;

  medicalLicenseNumber: string;

  address?: string;
  city?: string;
  country?: string;

  availableForAppointments: boolean;
  remoteAttention: boolean;
  consultationPrice: number;

  rating: number;
  reviewCount: number;

  isActive: boolean;

  fonasa: boolean

  createdAt: string;
  updatedAt: string;

  socialMedias: IDoctorSocialMedia[];

  selectedLayout: {
    layout: ILayout,
    colorPalette: IColorPalette
  }
}