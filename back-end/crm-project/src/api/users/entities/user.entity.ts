import { Prisma } from '@prisma/client';
export class UserEntity implements Prisma.UserUncheckedCreateInput {
  id: number;
  name: string;
  email: string;
  password: string;
  createdAt: Date;
  updatedAt: Date;
  deletedAt?: Date | null;
}
