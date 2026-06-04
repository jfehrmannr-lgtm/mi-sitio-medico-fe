import type { IDoctorUser } from "@app-types/IDoctorUser";


export const doctorMock: IDoctorUser[] = [{
  _id: 'doc-001',

  firstName: 'Dra. Claudia',
  lastName: 'Gómez Romero',

  email: 'claudia.gomez@example.com',
  phone: '+56 9 1234 5678',

  degree: ['Médico General', 'Residente de Psiquiatría'],
  specialty: ['Psiquiatría Adultos'],

  profileImage: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2',

  description: 'Te acompaño en el cuidado de tu salud mental mediante una atención cercana y profesional.',

  medicalLicenseNumber: 'RM-PSQ-2026-001',

  address: 'Angol',
  city: 'Angol',
  country: 'Chile',

  availableForAppointments: true,
  remoteAttention: true,

  services: [{
    _id: 'service-001',
    serviceName: 'Consulta Psiquiatrica',
    serviceDescription: 'Psiquiatría Adulto',
    serviceDuration: 30,
    servicePrice: 35000
  }],

  rating: 4.9,
  reviewCount: 128,

  isActive: true,

  socialMedias: [
    {
      media: 'instagram',
      link: 'https://instagram.com/claudiagomez'
    }
  ],

  fonasa: false,

  selectedLayout: {
    layout: {
      _id: "001",
      layoutName: "idCard",
      type: "premium"
    },
    colorPalette: {
      background: '#FFF6F6',
      button: '#FF95C1',

      primary: '#8A6A5B',
      secondary: '#D8B4A0',
      accent: '#8FA7A3',

      text: '#3E302A',

      success: '#4CAF50',
      warning: '#FFB74D',
      error: '#E57373',
      info: '#64B5F6',

      border: '#E8DCDC',
      surface: '#FFFFFF'
    }
  },

  createdAt: '2026-05-30T00:00:00.000Z',
  updatedAt: '2026-05-30T00:00:00.000Z',
}];