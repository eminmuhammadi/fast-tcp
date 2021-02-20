const tasks = require('./tasks'); 
class Process
{
    constructor() 
    {
        this.Tasks = new tasks();
    }
 
    /**
     * Tasks
     * @param {*} socket 
     * @info socket from socket
     */
    TasksRun(socket)
    {
        socket.on('connect', () => {
            this.Tasks.connect();
        });
    
        socket.on('data', (data) => {
            this.Tasks.receive(JSON.stringify(data));
        });
    
        socket.on('timeout', () => {
            this.Tasks.timeout();
        });
    
        socket.on('close', () => {
            this.Tasks.close();
        });
    
        socket.on('error', (error)=> {
            this.Tasks.error(JSON.stringify(error));
        });
    }
}

module.exports = Process;