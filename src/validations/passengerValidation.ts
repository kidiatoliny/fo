import * as Yup from 'yup'
import 'yup-phone'
export const passengerValidation = () =>
  Yup.object().shape({
    first_name: Yup.string()
      .required('O nome é obrigatório')
      .min(3, 'O nome deverá ter no mínimo 3 carateres'),
    last_name: Yup.string()
      .required('O apelido é obrigatório')
      .min(3, 'O nome deverá ter no mínimo 3 carateres'),
    fare_id: Yup.number().required(),
    document_type: Yup.number().required(),
    document_data: Yup.string().required('O número de documento é obrigatório')
  })
