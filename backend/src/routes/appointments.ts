import { Router } from 'express';
import { startOfHour, parseISO } from 'date-fns';

import AppointmentsRepository from '../repositories/AppointmentsRepository';

const appointmentsRouter = Router();
const appointmentsRepository = new AppointmentsRepository();

appointmentsRouter.post('/', (request, response) => {
  const { provider, date } = request.body;

  const parsetDate = startOfHour(parseISO(date));

  const findAppoitmentInSameDate = appointmentsRepository.findByDate(
    parsetDate,
  );

  if (findAppoitmentInSameDate) {
    return response
      .status(400)
      .json({ message: 'This appointment is already booked' });
  }

  const appointment = appointmentsRepository.create(provider, parsetDate);

  return response.json(appointment);
});

export default appointmentsRouter;
