import { Router } from 'express';

const indexRoutes = Router();

indexRoutes.get('/', (_req, res) => {
  res.send('Getter');
});

indexRoutes.get('/test', (_req, res) => {
  res.json([
    { id: 1, name: 'John' },
    { id: 2, name: 'Doe' },
  ]);
});

indexRoutes.post('/', (_req, res) => {
  res.send('Creator');
});

indexRoutes.put('/', (_req, res) => {
  res.send('Updater');
});

indexRoutes.delete('/', (_req, res) => {
  res.send('Deleter');
});

export { indexRoutes };
