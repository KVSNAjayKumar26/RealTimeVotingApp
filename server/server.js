const io = require("socket.io")(3001, {
    cors: {
        origin: "*",
    },
});

let votes = { optionA: 0, optionB: 0 };

io.on("connection", (socket) => {
    socket.emit("updateVotes", votes);
    socket.on("vote", (option) => {
        votes[option]++;
        io.emit("updateVotes", votes);
    });
});