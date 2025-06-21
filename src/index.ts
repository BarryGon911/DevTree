import server from './server';
const port = process.env.PORT || 4000;

server.listen(port, () => {
  console.log(`NodeJS server is running on http://localhost:${port}`);
});
