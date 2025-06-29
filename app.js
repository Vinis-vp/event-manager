import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import swaggerUi from 'swagger-ui-express';
import YAML from 'yamljs';

import authRoutes from './routes/auth.routes.js';
import eventRoutes from './routes/events.routes.js';

dotenv.config();

const app = express();
const swaggerDocument = YAML.load('./docs/swagger.yaml');

app.use(cors());
app.use(express.json());

app.use('/api/auth', authRoutes);
app.use('/api/events', eventRoutes);

// coloque o Swagger **depois** que o app for criado
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

export default app;
