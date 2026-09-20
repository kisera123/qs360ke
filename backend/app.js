const express = require('express');
const path = require('node:path');
const cors = require('cors');
const helmet = require('helmet');
const { allowedOrigins } = require('./config/env');
const requestLogger = require('./middleware/requestLogger');
const { errorHandler, notFound } = require('./middleware/errorHandler');
const healthRoutes = require('./routes/health.routes');
const contentRoutes = require('./routes/content.routes');
const contactRoutes = require('./routes/contact.routes');

const app = express();

app.use(helmet());
app.use(cors({
  origin(origin, callback) {
    if (!origin || allowedOrigins.includes(origin)) return callback(null, true);
    return callback(new Error('Origin is not allowed by CORS.'));
  },
}));
app.use(express.json({ limit: '100kb' }));
app.use(requestLogger);

app.get('/api', (_request, response) => {
  response.json({ name: 'QS360KE API', version: '1.0.0', docs: '/api/health' });
});
app.use('/api/health', healthRoutes);
app.use('/api/content', contentRoutes);
app.use('/api/contact', contactRoutes);

app.use(express.static(path.join(__dirname, '..', 'frontend', 'public')));

app.use(notFound);
app.use(errorHandler);

module.exports = app;
