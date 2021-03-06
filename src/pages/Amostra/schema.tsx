import * as yup from 'yup';

export const validationSchema = yup.object({
  dogName: yup.string().required('Nome do cão é obrigatório.'),
  dogRace: yup.string().required('Raça do cão é obrigatório.'),
  dogGender: yup.string().required('Gênero do cão é obrigatório.'),
  dogAge: yup.number().positive('Idade deve ser positiva').required('Idade do cão é obrigatório.'),
  ownerName: yup.string().required('Nome do proprietário é obrigatório.'),
  locationStreet: yup.string().required('Rua do proprietário é obrigatório.'),
  locationNeighborhood: yup.string().required('Bairro do proprietário é obrigatório.'),
  locationArea: yup.string().required('Área do proprietário é obrigatório.'),
  locationLatitude: yup.string().required('Latitude do proprietário é obrigatório.'),
  locationLongitude: yup.string().required('Longitude do proprietário é obrigatório.'),
  sampleNumber: yup.string().required('Número da amostra é obrigatório.'),
  sampleDate: yup.date().required('Data da amostra é obrigatório'),
  sintName: yup.string().required('Nome do sintoma é obrigatório'),
  sintIntensity: yup.number().positive('Intensidade deve ser positiva').required('Intensidade do sintoma é obrigatório'),
  exameName: yup.string().required('Nome do exame é obrigatório'),
  exameDate: yup.date().required('Data do exame é obrigatória'),
  exameResult: yup.string().required('Resultado do exame é obrigatório'),
});