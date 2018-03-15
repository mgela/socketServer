module.exports = (io) => {
  io.on('connection', (socket) => {
    setInterval(() => {
      console.log('action fired SET NEW DATE');
      socket.emit('ACTION', {
        type: 'SET_NEW_DATE',
        data: {
          time: new Date()
        }
      });
    }, 5000);
    console.log('user connected');
    socket.emit('ACTION', {
      type: 'SET_NEW_DATE',
      data: {
        time: new Date()
      }
    });
    socket.on('SOCKET__DISCONNECT', async (data) => {
      console.log('user logged off');
    })

    socket.on('SEND_MESSAGE', async (data) => {
      console.log('');
    })


  })
}
