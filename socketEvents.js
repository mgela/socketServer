module.exports = (io) => {
  io.on('connection', (socket) => {
    console.log('user connected');
    socket.emit('ACTION', {
      type: 'SET_NEW_DATE',
      data: {
        time: new Date()
      }
    });
    socket.on('SOCKET__CONNECT', async (data) => {
      console.log('User connected to socket.');
    })

    socket.on('SEND_MESSAGE', async (data) => {
      console.log('mofoka');
    })

    setInterval(() => {
      console.log('action fired SET NEW DATE');
      socket.emit('ACTION', {
        type: 'SET_NEW_DATE',
        data: {
          time: new Date()
        }
      });
    }, 1000);
  })
}
