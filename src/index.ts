import express, { type Request, type Response } from 'express';
import mainRouter from './routes/index.js'; // Adjust the path as necessary

const app = express();
const PORT = Bun.env.PORT || 5000;

// home route
app.get('/', (req: Request, res: Response) => {
    console.log(`Bun Environment Variable PORT: ${PORT}`);
  res.send('Hello, World with Bun! 🌍 updated');
});

// health check route
app.get('/health', (req: Request, res: Response) => {
  res.send('Health check is OK ✅');
});

// api routes (v1) (example - localhost:5000/api/v1/posts)
app.use('/api/v1', mainRouter);

// 404 route
app.use((req: Request, res: Response) => {
  res.status(404).send(`URL of ${req.originalUrl} is Not Found`);
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});