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

  description: [
    "Soy médico, con experiencia en atención clínica tanto en el ámbito hospitalario como ambulatorio, y actualmente me encuentro en formación de especialidad en salud mental. Mi trabajo se centra en brindar una atención integral, basada en la evidencia científica y en el respeto por la historia, necesidades y objetivos de cada persona.",
    "Creo que una buena atención en salud requiere escuchar activamente, comprender el contexto de vida de quienes consultan y construir en conjunto estrategias que favorezcan su bienestar y calidad de vida. Mi enfoque combina el conocimiento médico con una mirada humana, considerando tanto los aspectos biológicos como emocionales y sociales que influyen en la salud.",
    "Me esfuerzo por ofrecer un espacio seguro, libre de juicios y orientado a generar cambios significativos y sostenibles. Mi compromiso es acompañar a cada paciente con profesionalismo, empatía y cercanía durante su proceso terapéutico."
  ],

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
  reviews: [
    {
      name: "María G.",
      rating: 5,
      comment: "La Dra. Claudia me hizo sentir escuchada desde la primera consulta. Explica cada paso del tratamiento con claridad y genera mucha confianza."
    },
    {
      name: "Carlos R.",
      rating: 5,
      comment: "Destaco su profesionalismo y empatía. Me ayudó a comprender mejor lo que estaba viviendo y a encontrar herramientas para afrontarlo."
    },
    {
      name: "Andrea P.",
      rating: 4.8,
      comment: "Muy dedicada y cercana. Se toma el tiempo necesario para escuchar y responder todas las dudas."
    },
    {
      name: "Javier M.",
      rating: 5,
      comment: "Excelente atención. Me sentí cómodo durante todo el proceso y valoré mucho su enfoque humano y respetuoso."
    },
    {
      name: "Valentina S.",
      rating: 4.9,
      comment: "Profesional muy comprometida. Su capacidad para escuchar y orientar ha sido de gran ayuda para mi bienestar."
    },
    {
      name: "Daniela C.",
      rating: 5,
      comment: "Genera un ambiente seguro y libre de juicios. Recomiendo totalmente su atención."
    },
    {
      name: "Felipe A.",
      rating: 4.7,
      comment: "Destaco la claridad con la que explica los tratamientos y la cercanía con la que aborda cada consulta."
    },
    {
      name: "Camila T.",
      rating: 5,
      comment: "Desde la primera sesión sentí confianza. Es una profesional muy preparada y con una gran calidad humana."
    }
  ],

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
      backgroundPrimary: '#FFF6F6',
      backgroundSecondary: '#000',
      complementPrimary: '#FF95C1',
      complementSecondary: '#FF95C1',

      button: '#FF95C1',

      textPrimary: '#3E302A',
      textSecondary: '#000',
      complementTextPrimary: '#FFF',
      complementTextSecondary: '#FFF',

      success: '#4CAF50',
      warning: '#FFB74D',
      error: '#E57373',
      info: '#64B5F6',

      border: '#E5E7EB',
      surface: '#FFFFFF'
    }
  },

  createdAt: '2026-05-30T00:00:00.000Z',
  updatedAt: '2026-05-30T00:00:00.000Z',
}];