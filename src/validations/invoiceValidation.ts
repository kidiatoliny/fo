import * as Yup from 'yup'
import 'yup-phone'
export const invoiceValidation = () =>
  Yup.object().shape({
    name: Yup.string().required('O nome é obrigatório'),

    vat_number: Yup.number()
      .typeError('N.I.F deverá ser um número')
      .required('N.I.F é obrigatório')
      .integer('N.I.F não pode ser um valor decimal')
      .min(3, 'N.I.F deverá ter no mínimo 3 carateres')
      .positive('N.I.F nāo poderá ser um numero negativo'),
    address: Yup.string().required('Morada é obrigatório'),
    email: Yup.string().email('Email Invalido').required('Email é obrigatório'),
    phone_number: Yup.string().phone('CV', true, 'telefone inválido').required()
  })
