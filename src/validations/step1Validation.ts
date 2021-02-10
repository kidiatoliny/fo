import * as Yup from 'yup'
import 'yup-phone'
export const step1Validation = Yup.object().shape({
  passenger_number: Yup.number().required(
    'o numero de passageiro e obrigatorio'
  ),
  main_contact: Yup.object().shape({
    first_name: Yup.string()
      .required('O nome é obrigatório')
      .min(3, 'O nome deverá ter no mínimo 3 carateres'),
    last_name: Yup.string()
      .required('O apelido é obrigatório')
      .min(3, 'O nome deverá ter no mínimo 3 carateres'),
    email: Yup.string()
      .email('indique um email válido')
      .required('o email é obrigatório'),

    mobile: Yup.string().phone('CV', true, 'telefone inválido').required()
  })
})
