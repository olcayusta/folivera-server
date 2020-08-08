import { Server, OPEN } from 'ws'
import { chatService } from './services/chat.service'

const chat = new Server({noServer: true})

chat.on('connection', ws => {
    console.log('Welcome. --- Wss1 sunucusuna baglanildi... Welcome. ---')
    ws.on('message', async data => {
        const {text, userId, movieId} = JSON.parse(data.toString())
        try {
            const value = await chatService.saveMessage(text, userId, movieId)
            console.log(value)
            chat.clients.forEach(client => {
                if (client.readyState === OPEN) {
                    client.send(JSON.stringify(value))
                }
            })
        } catch (e) {
            throw e
        }
    })
})

export default chat
