import { IsDefined, IsEmail, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
export class CreateUserDto {
  @IsDefined()
  @ApiProperty()
  @IsString()
  name: string;

  @IsDefined()
  @ApiProperty()
  @IsEmail()
  email: string;

  @IsDefined()
  @ApiProperty()
  password: string;
}
