// test-db.js
const { PrismaClient } = require('./src/generated/prisma');

const prisma = new PrismaClient();

async function main() {
  try {
    await prisma.$connect();
    console.log('✅ Connected to Neon PostgreSQL!');

    const userCount = await prisma.user.count();
    console.log(`There are ${userCount} users in the database.`);
  } catch (error) {
    console.error('❌ Connection failed:', error.message);
  } finally {
    await prisma.$disconnect();
  }
}

main();