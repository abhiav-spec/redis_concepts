import {worker} from 'bullmq';
import {connection} from './queue.js';

const emailWorker = new worker('email', async (job) => {
  console.log(`Processing job ${job.id} with data:`, job.data);
  await new Promise((resolve) => setTimeout(resolve, 2000)); // Simulate email sending delay
  console.log(`Processing job ${job.id} with data:`, job.data);
  // Simulate email sending logic here
  return { success: true };
}, { connection });

emailWorker.on('completed', (job) => {
  console.log(`Job ${job.id} completed successfully.`);
});

emailWorker.on('failed', (job, err) => {
  console.error(`Job ${job.id} failed with error:`, err);
}); 