const fs = require('fs');

const spongegar = fs.readFileSync(`${__dirname}/../client/spongegar.png`);

// may he rest in heaven...
const harambe = fs.readFileSync(`${__dirname}/../client/harambe.png`);

const getDankmemes = (request, response) => {
  response.writeHead(200, { 'Content-Type': 'image/png' });
  response.write(spongegar);
  response.end();
};

const getRIP = (request, response) => {
  response.writeHead(200, { 'Content-Type': 'image/png' });
  response.write(harambe);
  response.end();
};

module.exports.getDankmemes = getDankmemes;
module.exports.getRIP = getRIP;
