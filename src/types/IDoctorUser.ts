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

  specialty: string;

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

  createdAt: string;
  updatedAt: string;

  socialMedias: IDoctorSocialMedia[];

  selectedLayout: "idCard"
}