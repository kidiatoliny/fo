export enum PassengerActionTypes {
  DOCUMENT_TYPE_REQUEST = '@passengers/DOCUMENT_TYPE_REQUEST',
  DOCUMENT_TYPE_REQUEST_SUCCESS = '@passengers/DOCUMENT_TYPE_REQUEST_SUCCESS',
  DOCUMENT_TYPE_REQUEST_FAILURE = '@passengers/DOCUMENT_TYPE_REQUEST_FAILURE',
  CLEAR_ERROR = '@passengers/CLEAR_ERROR'
}
export interface Passenger {
  first_name: string
  last_name: string
  phone: string
  mobile: string
  email: string
  document_type: DocumentType
  document_data: string
}

export interface DocumentType {
  id: number
  code: string
  name: string
  description: string
}

export interface PassengerState {
  readonly documentType: DocumentType[]
  readonly loading: boolean
  readonly error: boolean
}
