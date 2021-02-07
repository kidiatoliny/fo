import { ApplicationState } from '~/store'
import { actions, selectors } from '~/store/ducks/passengers'
import { useDispatch, useSelector } from 'react-redux'
export const usePassenger = () => {
  const dispatch = useDispatch()

  const getDocumentType = () => dispatch(actions.documentTypeRequest())

  const documentTypes = useSelector((state: ApplicationState) =>
    selectors.getDocumentType(state.passenger)
  )

  return { getDocumentType, documentTypes }
}
