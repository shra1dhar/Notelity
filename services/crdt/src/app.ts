import express, { Application, Request, Response, NextFunction} from 'express';

const app: Application = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req: Request, res: Response, next: NextFunction) => {
  res.send('Hey, it works');
});

app.listen(PORT, () => console.log("Server is running"));
