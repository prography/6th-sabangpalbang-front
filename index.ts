import cookieParser from 'cookie-parser';
import dotenv from 'dotenv';
import express from 'express';
import expressSession from 'express-session';
import morgan from 'morgan';
import next from 'next';

dotenv.config();

const dev = process.env.NODE_ENV !== 'production';

const app = dev ? next({ dev }) : next({ dev: false });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  const server = express();

  server.use(morgan('dev'));
  server.use(express.json());
  server.use(express.urlencoded({ extended: true }));
  server.use(cookieParser(process.env.COOKIE_SECRET));
  server.use(
    expressSession({
      secret: process.env.COOKIE_SECRET!,
      resave: false,
      saveUninitialized: false,
      cookie: {
        httpOnly: true,
      },
    })
  );

  server.get('/detail/:id', (req, res) => {
    return app.render(req, res, '/detail', { id: req.params.id });
  });
  server.get('*', (req, res) => {
    return handle(req, res);
  });
  server.listen(3000, () => {
    console.log('server running on http://localhost:3000');
  });
});
