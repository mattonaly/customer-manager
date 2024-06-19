export interface CustomerGetDTO {
  id: number;
  name: string;
  email: string;
  phone: string;
}

export interface CustomerPostDTO {
  name: string;
  email: string;
  phone: string;
}