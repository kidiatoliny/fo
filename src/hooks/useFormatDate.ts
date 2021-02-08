import { format } from 'date-fns'

export const useFormatDate = () => {
  const formatDate = (date: Date | null | undefined) =>
    date && format(date, 'yyy-MM-dd').toString()

  const displayDate = (date: Date | null | undefined) =>
    date && format(date, 'dd-MMM-yyyy').toString()
  return { formatDate, displayDate }
}
