import  {queue} from 'bullmq';

const  connection = {
  host: 'localhost',
  port: 6379,
};

const emailQueue = new queue('email', { connection });

module.exports ={
emailQueue,
connection
};