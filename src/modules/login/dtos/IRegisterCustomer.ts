import CustomerRole from "./cutomer.enum";

export default interface IRegisterCustomer {
  name: string;
  email: string;
  password: string;
  cnpj: string;
  phone: string;
  role: CustomerRole;
}
