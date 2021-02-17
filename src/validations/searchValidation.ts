import * as Yup from 'yup'

export const searchValidation = Yup.object().shape({
  searchType: Yup.string().required('Define um filtro de procura')
})
