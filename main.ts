import * as http from 'http';
import App from './App';

const port =  process.env.PORT || 3000;
App.set('port', port);

//create a server and pass our Express app to it.
const server = http.createServer(App);
server.listen(port);
server.on('listening', onListening);

//function to note that Express is listening
function onListening(): void {
  console.log(`Listening on port: ` + port);
  console.log(`Started on: ` + new Date());
}