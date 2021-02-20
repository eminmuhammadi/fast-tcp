const net     = require('net');
const Process = require('./process');
const service = require('./service');
const server  = net.createServer((socket)=>(new Process()).TasksRun(socket));

/**
 * Server
 */
const Service = new service('127.0.0.1', 1337);

server.maxConnections = 2;

server.listen(Service.port, Service.ip, () => {
    Service.init();
    process.send('ready');
});

server.on('connection', (socket) => {
    Service.ConnectionEvent(socket);
})

server.on('error', (error) => {
    Service.Error(error);
    process.send('shutdown');
    process.exit(1);
})