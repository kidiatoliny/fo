import * as Yup from 'yup'
import 'yup-phone'
export const mainContactValidation = () =>
  Yup.object().shape({
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

// function getValidationSchema(values) {
//   return Yup.object().shape({
//     email: Yup.string()
//       .email('E-mail is not valid!')
//       .required('E-mail is required!'),
//     password: Yup.string()
//       .min(6, 'Password has to be longer than 6 characters!')
//       .required('Password is required!'),
//     passwordConfirmation: Yup.string()
//       .oneOf([values.password], 'Passwords are not the same!')
//       .required('Password confirmation is required!'),
//     consent: Yup.bool()
//       .test(
//         'consent',
//         'You have to agree with our Terms and Conditions!',
//         value => value === true
//       )
//       .required(
//         'You have to agree with our Terms and Conditions!'
//       ),
//   })
// }
