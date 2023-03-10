import Fastify from 'fastify'
import cors from '@fastify/cors'
import { PrismaClient } from '@prisma/client'

const app = Fastify()
app.register(cors)
const prisma = new PrismaClient();

app.get('/', async (req, res) => {
  const habits = await prisma.habit.findMany()

  return habits
})

app.listen({ port: 4333 }).then(() => console.log('Server running'))