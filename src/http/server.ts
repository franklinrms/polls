import fastify from 'fastify'
import { createPolls } from './routes/create-polls'
import { getPoll } from './routes/get-poll'

const app = fastify()

app.register(createPolls)
app.register(getPoll)

app.listen({ port: 3333 }).then(() => {
  console.log('Server is running on port 3333')
})
