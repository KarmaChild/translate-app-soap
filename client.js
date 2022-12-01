const soap = require('soap');
const url = 'http://localhost:8000/wsdl?wsdl';
const prompt = require("prompt-sync")();

soap.createClient(url, function (err, client) {
  if (err){
    throw err;
  }


  const word = prompt("Enter english word for translation:");
  let args = {
    word: word,
  };


  client.MessageSplitter(args , function (err, res) {
    if (err)
      throw err;
    console.log(res);
  });
});