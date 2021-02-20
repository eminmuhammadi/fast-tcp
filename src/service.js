class Service 
{
    constructor(ip, port)
    {
        this.ip   = ip;
        this.port = port;
    }

    init()
    {
        console.log(`TCP Service started on tcp://${this.ip}:${this.port}`);
    }
    
    /**
     * Connection Event
     * @param {*} socket 
     * @info socket from server
     */
    ConnectionEvent(socket)
    {
        console.log('New Connection Established. Connections: ', socket._server._connections);
    }

    /**
     * Log error
     * @param {*} error 
     */
    Error(error)
    {
        console.error(JSON.stringify(error));
    }

}

module.exports = Service;