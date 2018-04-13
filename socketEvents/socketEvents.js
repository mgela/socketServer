module.exports = io => {
  io.on("connection", socket => {
    socket.on("SOCKET__CONNECT", async data => {
      const { room } = data;
      console.log(data, "this room");
      socket.join(room);
      console.log("user joined");
    });

    socket.on("SOCKET__DISCONNECT", async data => {
      console.log("user logged off");
    });
    socket.on("SOCKET__MESSAGE", data => {
      console.log(data);
      socket.broadcast.to(data.room).emit("ACTION", {
        type: "REFRESH_MESSAGES",
        data
      });
    });

    socket.on("SEND_MESSAGE", async data => {
      console.log("");
    });
  });
};
