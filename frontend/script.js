const socket = io("http://localhost:8000", { transports: ["websocket"] })

console.log("from  client")

socket.on("connection", () => {
    console.log("Socket from client")
});
