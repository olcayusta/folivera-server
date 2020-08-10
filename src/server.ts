import app from './app'
import chat_ws from "./chat_ws"
import config from './config/config'
import { parse } from 'url';

const server = app.listen(`${config.PORT}`, error => {
    if (error) {
        console.error(error)
    } else {
        console.log(`Server is listening on ${config.PORT}`)
    }
})

server.on('upgrade', (req, socket, head) => {
    const pathname = parse(req.url).pathname

    if (pathname === '/') {
        chat_ws.handleUpgrade(req, socket, head, ws => {
            chat_ws.emit('connection', ws, req)
        })
    } else {
        socket.destroy()
    }
})

export default server
