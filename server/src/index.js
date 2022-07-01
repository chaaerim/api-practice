import express from 'express';
import cors from 'cors';
import messagesRoute from './routes/messages.js';
import userRoute from './routes/users.js';

//start를 할 때 nodemon에서 src의 index를 실행하면서 express가 구동이 되고
//이때 localhost의 8000이 실행
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(
  cors({
    origin: 'http://localhost:3000',
    credentials: true,
  })
);

const routes = [...messagesRoute, ...userRoute];

routes.forEach(({ method, route, handler }) => {
  app[method](route, handler);
});

//app[method](route, handler)가 오는 형태로 구현하면 됨. 하나하나의 route각각이 api명령어가 되는 것.
app.listen(8000, () => {
  console.log('server listening on 8000...');
});
