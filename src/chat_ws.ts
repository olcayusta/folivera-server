import { Server, OPEN } from 'ws'
import { chatService } from './services/chat.service'

const chat_ws = new Server({noServer: true})

chat_ws.on('connection', ws => {
    console.log('Welcome. --- Wss1 sunucusuna baglanildi... Welcome. ---')
    ws.on('message', async data => {
        const {text, userId, movieId} = JSON.parse(data.toString())
        try {
            const value = await chatService.saveMessage(text, userId, movieId)
            console.log(value)
            chat_ws.clients.forEach(client => {
                if (client.readyState === OPEN) {
                    client.send(JSON.stringify(value))
                }
            })
        } catch (e) {
            throw e
        }
    })
})

export default chat_ws
