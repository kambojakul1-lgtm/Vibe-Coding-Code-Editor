import { PrismaClient } from "@prisma/client"
import dns from "dns";

dns.setServers(["8.8.8.8", "8.8.4.4"]);

 
const globalForPrisma = globalThis as unknown as { prisma: PrismaClient }
 
export const db = globalForPrisma.prisma || new PrismaClient()
 
if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = db