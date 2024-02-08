import fastify from 'fastify'
import websocket from '@fastify/websocket'
import cookie from '@fastify/cookie'

import { createPolls } from './routes/create-polls'
import { getPoll } from './routes/get-poll'
import { voteOnPoll } from './routes/vote-on-poll'
import { pollResults } from './ws/poll-results'

const app = fastify()

app.register(websocket)

app.register(cookie, {
  secret: 'a1713018-d01f-40fc-939a-59f15b188f1f',
  hook: 'onRequest',
})

app.register(createPolls)
app.register(getPoll)
app.register(voteOnPoll)
app.register(pollResults)

app.listen({ port: 3333 }).then(() => {
  console.log('Server is running on port 3333')
})
