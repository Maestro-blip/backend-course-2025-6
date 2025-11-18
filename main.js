const { program } = require('commander');
const superagent = require('superagent');
const fs = require('fs');
const path = require('path');
const http = require('http');

program.requiredOption('-h, --host <ip>','ip-adresa').requiredOption('-p, --port <port>','port').requiredOption('-c, --cache <directions>','direction to file');

program.parse();

const options = program.opts();

try{
 fs.mkdirSync(String(options.cache),{ recursive: true });
}catch(err){
    console.error(err.message); process.exit(1);}

const HOST = options.host, PORT = options.port, DIR = options.cache;

const server = http.createServer();

server.on('request', async (req,res) => {

});

server.on('error', (err) => {console.error(err.message)});

server.listen(PORT,HOST, () => console.log(`Сервер запущенно на http://${HOST}:${PORT}`));