import { hash } from 'bcryptjs';

import AppError from '@shared/errors/AppErro';

import User from '../infra/typeorm/entities/User';
import IUsersRepository from '../repositories/IUsersRepository';

interface IRequest {
  name: string;
  email: string;
  password: string;
}

class CreateUserService {
  constructor(private usersRepository: IUsersRepository) {}

  async execute({ name, email, password }: IRequest): Promise<User> {
    const checkUserexists = await this.usersRepository.findByEmail(email);

    if (checkUserexists) {
      throw new AppError('User exists');
    }

    const hashedPassword = await hash(password, 8);

    const user = await this.usersRepository.create({
      name,
      email,
      password: hashedPassword,
    });

    return user;
  }
}

export default CreateUserService;
