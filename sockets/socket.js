const { io } = require('../index');
// Mensajes de Sockets
io.on('connection', client => {

    console.log('Cliente conectado')

    client.on('disconnect', () => {
        console.log('Cliente desconectado')

    });

    client.on('mensaje', (payload) => {
        console.log('Hola como estas: ', payload)

        //Emite un mensaje al Frontned
        io.emit('mensaje', { admin: 'Nuevo mensaje' })
    });

});
