import express from 'express';
import fs from 'node:fs/promises';

const app = express();

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    next();
});

app.get('/expenses', async (req, res) => {
        try {
            const fileContent = await fs.readFile('./expenses.json', 'utf-8');
            const expensesData = JSON.parse(fileContent);
            res.status(200).json({ expenses: expensesData });
        } catch (error) {
            res.status(500).json({ error: 'Failed to read expenses data' });
        } 
});

app.listen(3000, () => {
    console.log('Backend server is running on port 3000');
});