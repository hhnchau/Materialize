var settings = require('./settings');
var log = require('./log');
var status = require('./status');
Models = require('./models');
var models = new Models({});

exports.show500 = function (req, res, err){
  if (settings.httpMsgFormat === 'HTML') {
    res.writeHead(500, 'Internal server error', {'Conent-Type':'text/html'});
    res.write('<html><head><title>500</title></head><body>500:Internal server error. Detail:'  + err + '</body></html>');
  }else{
    res.writeHead(500, 'Internal server error', {'Conent-Type':'application/json'});
    res.write(JSON.stringify({data: 'Internal server error' + err}));
  }
  res.end();
};

//Invalid Method
exports.show405 = function (req, res){
    res.writeHead(status.invalidMethod, status.invalidMethodMessage, {'Conent-Type':'application/json'});
    models.FormResult(status.invalidMethod, status.invalidMethodMessage);
    res.write(JSON.stringify(models.data));
    res.end();
};

exports.show404 = function (req, res){
  if (settings.httpMsgFormat === 'HTML') {
    res.writeHead(404, 'Not found', {'Conent-Type':'text/html'});
    res.write('<html><head><title>404</title></head><body>404:Not found</body></html>');
  }else{
    res.writeHead(404, 'Resourse not found', {'Conent-Type':'application/json'});
    res.write(JSON.stringify({data: 'Not found'}));
  }
  res.end();
};

exports.show403 = function (req, res){
  if (settings.httpMsgFormat === 'HTML') {
    res.writeHead(403, 'Forbidden', {'Conent-Type':'text/html'});
    res.write('<html><head><title>404</title></head><body>403:Forbidden</body></html>');
  }else{
    res.writeHead(403, 'Resourse not found', {'Conent-Type':'application/json'});
    res.write(JSON.stringify({data: 'Forbidden'}));
  }
  res.end();
};

exports.show412 = function (req, res){
  if (settings.httpMsgFormat === 'HTML') {
    res.writeHead(412, 'Session incorrect.', {'Conent-Type':'text/html'});
    res.write('<html><head><title>404</title></head><body>412:Session incorrect.</body></html>');
  }else{
    res.writeHead(412, 'Session incorrect.', {'Conent-Type':'application/json'});
    res.write(JSON.stringify({data: 'Session incorrect.'}));
  }
  res.end();
};

exports.show413 = function (req, res){
  if (settings.httpMsgFormat === 'HTML') {
    res.writeHead(413, 'Secret Key incorrect.', {'Conent-Type':'text/html'});
    res.write('<html><head><title>404</title></head><body>413:Secret Key incorrect.</body></html>');
  }else{
    res.writeHead(413, 'Secret Key incorrect.', {'Conent-Type':'application/json'});
    res.write(JSON.stringify({data: 'Secret Key incorrect.'}));
  }
  res.end();
};

exports.showHome = function (req, res){
  if (settings.httpMsgFormat === 'HTML') {
    res.writeHead(200, {'Conent-Type':'text/html'});
    res.write('<html><head><title>HOME</title></head><body>Valid endpoints: <br>/employees - GET - To List all Employees</br>employees/<empno> - GET - To search for an Employees</body></html>');
  }else{
    res.writeHead(200, {'Conent-Type':'application/json'});
    res.write(JSON.stringify([
      {url: '/employees', operation: 'GET', description: 'To list all employees' },
      {url: '/employees/<empno>', operation: 'GET', description: 'To search for an employee' }
    ]));
  }
  res.end();
};

exports.sendJson = function(req, res, data){
  res.writeHead(200, {'Conent-Type':'application/json'});
  log.write("*/*httpMsg*/*"+ "sendJson", "status: 200");
  if (data) {
    res.write(JSON.stringify(data));
    log.write("*/*httpMsg*/*"+ "sendJson", JSON.stringify(data, null, 2));
  }
  res.end();
};
