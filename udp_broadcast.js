var dgram = require('dgram');
var socket = dgram.createSocket('udp4');

const message = Buffer.from('Some bytes');
const client = dgram.createSocket('udp4');
client.bind(51337);

client.on('listening', () => {
    client.setBroadcast(true);
    client.send(message, 51337, '192.168.1.255', (err) => {
        console.log(`err: ${err}`)
        client.close();
    });

})


/*
var testMessage = "[hello world] pid: " + process.pid;
var multicastAddress = '192.168.1.255';
var multicastPort = 51337;

socket.bind(multicastPort);
// socket.addMembership(multicastAddress);

socket.on('listening', () => {
    console.log('adding membership');
    socket.addMembership(multicastAddress);
})

socket.on("message", function ( data, rinfo ) {
  console.log("Message received from ", rinfo.address, " : ", data.toString());
});

setInterval(function () {
  socket.send(new Buffer(testMessage),
      0,
      testMessage.length,
      multicastPort,
      multicastAddress,
      function (err) {
        if (err) return console.log(err);

        console.log("Message sent");
      }
  );
}, 1000);
*/