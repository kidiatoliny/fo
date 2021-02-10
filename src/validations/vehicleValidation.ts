import * as Yup from 'yup'
import 'yup-phone'
export const vehicleValidation = () =>
  Yup.object().shape({
    model: Yup.string()
      .required('A marca do veículo é obrigatório')
      .min(3, 'O nome deverá ter no mínimo 2 carateres'),
    brand: Yup.string().required('O modelo do veículo é obrigatório'),

    fare_id: Yup.number().required(),
    register_id: Yup.string().required('A matricula do veículo é obrigatório')
  })
