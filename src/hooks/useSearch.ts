import { ApplicationState } from '~/store'
import { selectors, actions } from '~/store/ducks/searchs'
import { SearchType } from '~/store/ducks/searchs/types'
import { useDispatch, useSelector } from 'react-redux'
export const useSearch = () => {
  const dispatch = useDispatch()
  const searchRequest = (payload: SearchType) =>
    dispatch(actions.searchRequest(payload))

  const clear = () => dispatch(actions.clear())

  const isSearchLoading = useSelector((state: ApplicationState) =>
    selectors.isLoading(state.search)
  )
  const error = useSelector((state: ApplicationState) =>
    selectors.error(state.search)
  )

  const searchData = useSelector((state: ApplicationState) =>
    selectors.getSearchData(state.search)
  )

  return { searchRequest, error, isSearchLoading, searchData, clear }
}
