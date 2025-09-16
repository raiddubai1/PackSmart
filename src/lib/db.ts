import { PrismaClient } from '@prisma/client'

const globalForPrisma = globalThis as unknown as {
  prisma: PrismaClient | undefined
}

// Check if DATABASE_URL is available
const databaseUrl = process.env.DATABASE_URL;

if (!databaseUrl) {
  console.warn('DATABASE_URL environment variable is not set. Database functionality will be limited.');
}

export const db =
  globalForPrisma.prisma ??
  new PrismaClient({
    log: ['query'],
    datasources: {
      db: {
        url: databaseUrl || 'file:./dev.db'
      }
    }
  })

if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = db