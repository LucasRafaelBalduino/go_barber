import { Router } from 'express';

import appointmentsRouter from './appointments';
import usersRouter from './users';
import sessionsRouter from './sessions';

const routes = Router();

routes.use('/appointments', appointmentsRouter);
routes.use('/users', usersRouter);
routes.use('/sessions', sessionsRouter);

export default routes;
