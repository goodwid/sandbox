#!/usr/bin/env node

const net = require('net');
const fs = require('fs');
const ee = require('events');
// const log = fs.createWriteStream( 'server-log.txt' );
const chat = new ee();

var i = 0;

const server = net.createServer( socket => {
  const name = `socket${i++}`;
  socket.nick = `guest0${i}`;
  socket.id = i;
  console.log( `${socket.nick} connected` );
  socket.write( `hello ${socket.nick}!\n` );

  socket.on( 'close', () => {
    console.log( `${name} disconnected` );
    chat.removeListener('chat', foo);
    chat.removeAllListeners('quit'+socket.id);
    chat.removeAllListeners('command'+socket.id);
    chat.removeAllListeners('nick'+socket.id);
  });

  socket.on( 'data', chunk => {
    if (/^\//.test(chunk)) {
      chat.emit('command'+socket.id, chunk.toString().split(' '));
    } else {
      chat.emit('chat', chunk.toString(), `<${socket.nick}>`);
    }
  });
  function foo (data, sender) {
    if (data.trim()) socket.write(`${sender} ${data}`);
  }
  chat.on('chat', foo);

  chat.on('nick'+socket.id, (newNick) => {
    console.log(`${socket.nick} is now ${newNick}`);
    chat.emit('chat', `${socket.nick} is now known as ${newNick}\n`, '***');
    // socket.write(`** You are now known as ${socket.nick}\n`);
    socket.nick = newNick;
  });

  chat.on('quit'+socket.id, () => {
    socket.destroy();
  });

  chat.on('command'+socket.id, (data) => {
    console.log(data[0]);
    if (data[0].trim() === '/nick') {
      chat.emit('nick'+socket.id, data[1].trim());
    }
    if (data[0].trim() === '/quit') {
      chat.emit('quit'+socket.id);
    }
  });
});

server.listen( process.argv[2]||3000, () => {
  var address = server.address();
  console.log('opened server on %j', address);
});
