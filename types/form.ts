export interface FormModels {
  firstName: string,
  lastName: string,
  email: string,
  phone: string,
  'form-name'?: string
}

export interface FormField {
  id: string;
  type: string;
  label: string;
  name?: string;
  required: boolean
}
