export interface User {
  id: number;
  name: string;
}

export interface Address {
  userId: number;
  country: string;
  state: string;
  city: string;
  street: string;
  zipCode: number;
  user?: string;
  active?: boolean;
}
