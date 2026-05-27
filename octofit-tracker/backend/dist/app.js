import express from 'express';
import mongoose from 'mongoose';
const app = express();
app.use(express.json());
const codespaceName = process.env.CODESPACE_NAME;
const baseUrl = codespaceName
    ? `https://${codespaceName}-8000.app.github.dev`
    : 'http://localhost:8000';
const mongoUri = process.env.MONGODB_URI ?? 'mongodb://127.0.0.1:27017/octofit_db';
export async function connectDatabase() {
    if (mongoose.connection.readyState === 1) {
        return;
    }
    await mongoose.connect(mongoUri);
}
app.get('/api/health', (_req, res) => {
    res.json({
        status: 'ok',
        baseUrl,
        database: 'octofit_db',
    });
});
export default app;
