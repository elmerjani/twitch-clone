import { PrismaClient } from "@/lib/generated/prisma";
const prisma = new PrismaClient();

export async function createUser({
  role = "user",
  id,
}: {
  role?: string;
  id: string;
}) {
  return prisma.users.create({
    data: {
      id,
      role,
    },
  });
}

export async function getUser(userId: string) {
  return prisma.users.findUnique({
    where: {
      id: userId,
    },
  });
}

export async function updateUserChannelId(userId: string, channelId: string) {
  return prisma.users.update({
    where: { id: userId },
    data: { channelId },
  });
}

export async function deleteUser(userId: string) {
  return prisma.users.delete({
    where: { id: userId },
  });
}
