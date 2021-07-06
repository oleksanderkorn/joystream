import Vue from "vue"
// const wsUrl = "wss://joystream.herokuapp.com/"
const wsUrl = "ws://localhost:3000/"
const socket = new WebSocket(wsUrl)

const emitter = new Vue({
    methods: {
        send(message) {
            if (1 === socket.readyState) {
                console.log(`Sending ws message [${message}]`)
                socket.send(message)
            }
        }
    }
})

socket.onopen = function() {
    console.log(`Successfully connected to ${wsUrl} ws server.`);
}
socket.onmessage = function(msg) {
    console.log(`Got WS message [${msg.data}]`);
    emitter.$emit("message", msg.data)
}
socket.onerror = function(err) {
    console.log(`Got WS error [${err}]`);
    emitter.$emit("error", err)
}

export default emitter