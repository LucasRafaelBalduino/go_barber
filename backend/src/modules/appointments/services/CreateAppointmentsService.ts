import { startOfHour } from 'date-fns';

import AppError from '@shared/errors/AppErro';

import Appointment from '../infra/typeorm/entities/Appointment';
import IAppointmentsRepository from '../repositories/IAppointments';

interface IRequest {
  provider_id: string;
  date: Date;
}

class CreateAppointmentsService {
  constructor(private appointmentsRepository: IAppointmentsRepository) {}

  public async execute({ date, provider_id }: IRequest): Promise<Appointment> {
    const appointmentDate = startOfHour(date);

    const findAppoitmentInSameDate = await this.appointmentsRepository.findByDate(
      appointmentDate,
    );

    if (findAppoitmentInSameDate) {
      throw new AppError('This appointment is already booked');
    }

    const appointment = await this.appointmentsRepository.create({
      provider_id,
      date,
    });

    return appointment;
  }
}

export default CreateAppointmentsService;
