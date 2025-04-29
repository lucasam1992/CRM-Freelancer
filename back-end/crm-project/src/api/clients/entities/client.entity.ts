export class Client {
  id: number;
  name: string;
  email: string;
  phone: string;
  address: string;
  createdAt: Date;
  updatedAt: Date;

  constructor(
    id: number,
    name: string,
    email: string,
    phone: string,
    address: string,
    createdAt: Date,
    updatedAt: Date,
  ) {
    this.id = id;
    this.name = name;
    this.email = email;
    this.phone = phone;
    this.address = address;
    this.createdAt = createdAt;
    this.updatedAt = updatedAt;
  }
}
