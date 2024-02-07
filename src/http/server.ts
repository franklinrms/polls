import fastify from 'fastify'
import { createPolls } from './routes/create-polls'

const app = fastify()

app.register(createPolls)

app.listen({ port: 3333 }).then(() => {
  console.log('Server is running on port 3333')
})
