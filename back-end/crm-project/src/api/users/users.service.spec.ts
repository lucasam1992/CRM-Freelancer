import { Test, TestingModule } from '@nestjs/testing';
import { UsersService } from './users.service';
import { UsersRepository } from './repositories/users.repository';
import { User } from '@prisma/client';
import { CreateUserDto } from './dto/create-user.dto';

describe('UsersService', () => {
  let service: UsersService;
  let usersRepository: jest.Mocked<UsersRepository>;

  const mockUser: User = {
    id: 1,
    name: 'John Doe',
    email: 'johndoe@gmail.com',
    password: 'hashedpassword',
    createdAt: new Date(),
    updatedAt: new Date(),
  };
  const mockUsersRepository = {
    create: jest.fn(),
    findAll: jest.fn(),
  } as unknown as jest.Mocked<UsersRepository>;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        UsersService,
        {
          provide: UsersRepository,
          useValue: mockUsersRepository,
        },
      ],
    }).compile();

    service = module.get<UsersService>(UsersService);
    usersRepository = module.get(UsersRepository);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should create a user', async () => {
    const dto: CreateUserDto = {
      name: 'John Doe',
      email: 'johndoe@gmail.com',
      password: 'password123',
    };

    usersRepository.create.mockResolvedValue(mockUser);

    const result = await service.create(dto);

    // eslint-disable-next-line @typescript-eslint/unbound-method
    expect(usersRepository.create).toHaveBeenCalledWith(dto);
    expect(result).toEqual(mockUser);
  });

  it('should return all users', async () => {
    const users = [mockUser, { ...mockUser, id: 2, email: 'jane@gmail.com' }];
    usersRepository.findAll.mockResolvedValue(users);

    const result = await service.findAll();

    // eslint-disable-next-line @typescript-eslint/unbound-method
    expect(usersRepository.findAll).toHaveBeenCalled();
    expect(result).toEqual(users);
  });
});
