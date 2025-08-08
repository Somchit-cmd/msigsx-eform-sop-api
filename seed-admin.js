// seed-admin.js
const { PrismaClient } = require('./src/generated/prisma');
const bcrypt = require('bcryptjs');

const prisma = new PrismaClient();

async function main() {
  try {
    await prisma.$connect();
    console.log('✅ Connected to Neon PostgreSQL!');

    // Hash the password
    const hashedPassword = await bcrypt.hash('admin123', 10);

    // Create admin user
    const admin = await prisma.user.create({
      data: {
        email: 'admin@msig-sokxay.la',
        name: 'System Admin',
        role: 'CHIEF',
        department: 'EXECUTIVE_OFFICE',
        password: hashedPassword,
      },
    });

    console.log('✅ Admin user created:', admin);
  } catch (error) {
    if (error.code === 'P2002') {
      console.log('⚠️  Admin already exists (unique constraint)');
    } else {
      console.error('❌ Error:', error.message);
    }
  } finally {
    await prisma.$disconnect();
  }
}

main();