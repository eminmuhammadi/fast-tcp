class Tasks
{
    constructor() {}
    
    /**
     * Receive Data
     * @param {*} data 
     */
    receive(data)
    {
        console.log(data);
    }

    timeout()
    {
        console.log('timeout');
    }
    
    close()
    {
        console.log('close');
    }

    connect()
    {
        console.log('connect');
    }

    /**
     * Log error
     * @param {*} error 
     */
    error(error)
    {
        console.error(error);
    }
}

module.exports = Tasks;