const { PrismaClient } = require('@prisma/client');
const fs = require('fs');

const prisma = new PrismaClient();

async function main() {
    const data = JSON.parse(fs.readFileSync('output.json', 'utf8'));

    // Assuming 'data' is an array of meeting objects
    for (const item of data.meetings) {
        await prisma.meeting.create({
            data: item
        });
    }
}

main()
  .catch(e => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
