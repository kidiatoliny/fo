import { ApplicationState } from '~/store'
import { selectors, actions } from '~/store/ducks/prints'
import { PrintRequest } from '~/store/ducks/prints/types'
import { useDispatch, useSelector } from 'react-redux'
export const usePrint = () => {
  const dispatch = useDispatch()
  const ticket = useSelector((state: ApplicationState) =>
    selectors.getTicket(state.print)
  )

  const pos = useSelector((state: ApplicationState) =>
    selectors.getPos(state.print)
  )
  const isLoading = useSelector((state: ApplicationState) =>
    selectors.isLoading(state.print)
  )

  const printPdf = (option: 'ticket' | 'pos') => {
    let data
    if (option === 'ticket') {
      data = ticket
    } else {
      data = pos
    }
    const file = new Blob([data], { type: 'application/pdf' })
    const fileURL = URL.createObjectURL(file)
    window.open(fileURL)
  }

  const printTicketRequest = (payload: PrintRequest) =>
    dispatch(actions.printTicketRequest(payload))

  const printPosRequest = (payload: PrintRequest) =>
    dispatch(actions.printPosRequest(payload))
  return { printPdf, printTicketRequest, printPosRequest, isLoading }
}
