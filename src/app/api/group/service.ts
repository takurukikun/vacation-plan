import { Prisma, Group } from '@prisma/client'
import { prisma } from '@/app/api/prisma/prisma.config'
import { CreateGroupDTO } from './dto/createGroup'

async function findOne(
  args: Prisma.GroupFindUniqueArgs,
): Promise<Group | null> {
  return prisma.group.findUnique(args)
}

async function findFirst(
  args: Prisma.GroupFindFirstArgs,
): Promise<Group | null> {
  return prisma.group.findFirst(args)
}

async function find(args: Prisma.GroupFindManyArgs): Promise<Group[]> {
  return prisma.group.findMany(args)
}

async function create(data: CreateGroupDTO): Promise<Group> {
  return prisma.group.create({
    data: {
      name: data.name,
      users: {
        connect: data.userIds.map((id) => ({ id })),
      },
    },
  })
}
async function update({
  data,
  ...remaining
}: Prisma.GroupUpdateArgs): Promise<Group> {
  return prisma.group.update({ ...remaining, data })
}

export const deleteOne = async (id: number) => {
  return prisma.group.delete({ where: { id } })
}
export const groupService = {
  findOne,
  findFirst,
  find,
  create,
  update,
  deleteOne,
}