const { PrismaClient: dashboardClient } = require('./generated/dashboard-db');
const { PrismaClient: managementClient } = require('./generated/management-db');

const dashboardPrisma = new dashboardClient({
  datasources: {
    db: {
      url: process.env.DASHBOARD_DATABASE_URL
    }
  }
});

const managementPrisma = new managementClient({
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