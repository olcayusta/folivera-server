import { Server, OPEN } from 'ws'
import { chatService } from './chat.service'

const chat_ws = new Server({
  noServer: true
})

chat_ws.on('connection', (ws) => {
  console.log('Welcome. --- Wss1 sunucusuna baglanildi... Welcome. ---')
  ws.on('message', async (data) => {
    const { text, userId, movieId } = JSON.parse(data.toString())
    try {
      const msg = await chatService.saveMessage(text, userId, movieId)
      chat_ws.clients.forEach((client) => {
        if (client.readyState === OPEN) {
          client.send(JSON.stringify(msg))
        }
      })
    } catch (e) {
      throw e
    }
  })
})

export default chat_ws
