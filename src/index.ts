import express, { type Request, type Response } from 'express';

const app = express();
const PORT = Bun.env.PORT || 5000;

// home route
app.get('/', (req: Request, res: Response) => {
    console.log(`Bun Environment Variable PORT: ${PORT}`);
  res.send('Hello, World with Bun! 🌍 🌍');
});

// health check route
app.get('/health', (req: Request, res: Response) => {
  res.send('Health check NOT OK ✅');
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});