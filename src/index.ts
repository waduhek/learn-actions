import express from 'express';

const app = express();

const server = app.listen(5000, () => {
  console.log('Express server listening on port 5000');
});

/**
 * Gracefully shuts down the ExpressJS server.
 */
function gracefulShutdown() {
  console.log('Shutting down server');

  server.close((error) => {
    if (error) {
      console.error(`Error while shutting down server: ${error}`);
    } else {
      console.log("Server shutdown successful");
    }
  });
}

process.on('SIGTERM', gracefulShutdown);
process.on('SIGINT', gracefulShutdown);
process.on('SIGHUP', gracefulShutdown);
