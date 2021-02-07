import * as Yup from 'yup'
import 'yup-phone'
export const passengerValidation = () =>
  Yup.object().shape({
    main_contact: Yup.object().shape({
      first_name: Yup.string()
        .required('O nome é obrigatório')
        .min(3, 'O nome deverá ter no mínimo 3 carateres'),
      last_name: Yup.string()
        .required('O apelido é obrigatório')
        .min(3, 'O nome deverá ter no mínimo 3 carateres')
    })
  })
