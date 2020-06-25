import { Router } from 'express';

import appointmentsRouter from '@modules/appointments/infra/http/routes/appointments';
import usersRouter from '@modules/users/infra/http/routes/users';
import sessionsRouter from '@modules/users/infra/http/routes/sessions';

const routes = Router();

routes.use('/appointments', appointmentsRouter);
routes.use('/users', usersRouter);
routes.use('/sessions', sessionsRouter);

export default routes;
