export type TParams = { id: string }
export type Payments<T> = Array<T>
export interface HttpResponseError {
  isAxiosError: boolean
  message: string
  code: number | string
}
