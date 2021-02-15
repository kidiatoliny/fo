import api from '~/services/api'
import { ApplicationState } from '~/store'
import { selectors } from '~/store/ducks/bookings'
import { useSelector } from 'react-redux'
export const usePrint = () => {
  const printData = useSelector((state: ApplicationState) =>
    selectors.printTicketData(state.booking)
  )
  const printPdf = () => {
    const file = new Blob([printData], { type: 'application/pdf' })
    const fileURL = URL.createObjectURL(file)

    window.open(fileURL)

    // api(`/booking/ticket/print/${bookingId}/show`, {
    //   method: 'GET',
    //   responseType: 'blob' // Force to receive data in a Blob Format
    // })
    //   .then(response => {
    //     // Create a Blob from the PDF Stream
    //     const file = new Blob([response.data.data], { type: 'application/pdf' })
    //     // Build a URL from the file
    //     const fileURL = URL.createObjectURL(file)
    //     // Open the URL on new Window
    //     window.open(fileURL)
    //   })
    //   .catch(error => {
    //     console.log(error)
    //   })
  }
  return { printPdf }
}
