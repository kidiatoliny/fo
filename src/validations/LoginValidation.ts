import * as Yup from 'yup'

export const LoginValidation = Yup.object().shape({
  username: Yup.string().required('Nome de utilizador Obrigatorio'),
  password: Yup.string().required('password Obrigatorio')
})
