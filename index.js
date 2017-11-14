var redis = require('redis');

start();

function start(){
  var objOptions = {
    host: 'localhost',
    port: '6379'
  } 
  var client = redis.createClient(objOptions);

  client.KEYS('*', function(err, reply){
    if (err) {
      return console.log('Ocorreu um erro', err);
    }
    return console.log('Resposta', reply);
  });
}