import { Router } from 'express';

import appointmentsRouter from '@modules/appointments/infra/http/routes/appointments';
import usersRouter from '@modules/users/infra/http/routes/users';
import sessionsRouter from '@modules/users/infra/http/routes/sessions';
import passwordRouter from '@modules/users/infra/http/routes/password';
import profileRouter from '@modules/users/infra/http/routes/profile';

const routes = Router();

routes.use('/appointments', appointmentsRouter);
routes.use('/users', usersRouter);
routes.use('/sessions', sessionsRouter);
routes.use('/password', passwordRouter);
routes.use('/profile', profileRouter);

export default routes;
