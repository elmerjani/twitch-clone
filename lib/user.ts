import { PrismaClient } from '@/lib/generated/prisma';
const prisma = new PrismaClient();

export async function createUser({ role = "user" }: { role?: string }) {
  return prisma.user.create({
    data: {
      role,
      has_channel: false,
    },
  });
}

export async function setUserHasChannel(userId: string) {
  return prisma.user.update({
    where: { id: userId },
    data: { has_channel: true },
  });
}
