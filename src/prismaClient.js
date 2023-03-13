const { PrismaClient } = require('@prisma/client');

const dashboardPrisma = new PrismaClient({
  datasources: {
    db: {
      url: process.env.DATABASE_URL
    }
  }
});

const managementPrisma = new PrismaClient({
  datasources: {
    db: {
      url: process.env.MANAGEMENT_DATABASE_URL
    }
  }
});

module.exports = {
  dashboardPrisma,
  managementPrisma
};