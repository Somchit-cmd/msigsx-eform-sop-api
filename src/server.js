const express = require('express');
const dotenv = require('dotenv');

// ✅ Import PrismaClient from the generated path (not @prisma/client)
const { PrismaClient } = require('./generated/prisma');

dotenv.config();

const app = express();
const prisma = new PrismaClient();

app.use(express.json());

app.get('/', async (req, res) => {
  try {
    await prisma.$queryRaw`SELECT 1`;
    res.send('✅ MSIG Sokxay API is live! Database connected.');
  } catch (err) {
    res.status(500).send('❌ DB connection failed: ' + err.message);
  }
});

const PORT = process.env.PORT || 10000;

app.listen(PORT, '0.0.0.0', () => {
  console.log(`✅ Server running on http://0.0.0.0:${PORT}`);
});