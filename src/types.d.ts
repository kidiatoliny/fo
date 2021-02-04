export type TParams = { id: string }
export type Payments<T> = Array<T>
interface HttpResponseError {
  code: number | string
  msg: string
}
