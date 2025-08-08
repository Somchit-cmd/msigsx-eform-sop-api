// create-sop.js
const { PrismaClient } = require('./src/generated/prisma');

const prisma = new PrismaClient();

async function main() {
  try {
    await prisma.$connect();

    const sop = await prisma.sop.create({
      data: {
        title: 'Leave Request Process',
        department: 'HR',
        version: '1.0',
        status: 'DRAFT',
        steps: '1. Employee submits form\n2. Supervisor reviews\n3. Manager approves',
        requesterId: 1, // Admin user ID
      },
    });

    console.log('✅ SOP Created:', sop);
  } catch (error) {
    console.error('❌ Error:', error.message);
  } finally {
    await prisma.$disconnect();
  }
}

main();