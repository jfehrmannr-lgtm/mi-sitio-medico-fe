import type { IDoctorUser } from "../types/IDoctorUser";


export const doctorMock: IDoctorUser[] = [{
  _id: 'doc-001',

  firstName: 'Claudia',
  lastName: 'Gómez',

  email: 'claudia.gomez@example.com',
  phone: '+56 9 1234 5678',

  specialty: 'Residente de Psiquiatría',

  profileImage: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2',

  description: 'Te acompaño en el cuidado de tu salud mental mediante una atención cercana y profesional.',

  medicalLicenseNumber: 'RM-PSQ-2026-001',

  address: 'Angol',
  city: 'Angol',
  country: 'Chile',

  availableForAppointments: true,
  remoteAttention: true,

  consultationPrice: 35000,

  rating: 4.9,
  reviewCount: 128,

  isActive: true,

  socialMedias: [
    {
      media: 'instagram',
      link: 'https://instagram.com/claudiagomez'
    }
  ],

  createdAt: '2026-05-30T00:00:00.000Z',
  updatedAt: '2026-05-30T00:00:00.000Z',

  selectedLayout: 'idCard'
}];