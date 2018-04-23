exports.dbConfig = {
    host: 'localhost',
    user: 'root',
    pass: '',
    database: 'kingpesvn',
    port: '3306'
  };
  
  exports.listenPort = 3000;

  exports.url = "http://192.168.0.105:3000/";
    

  /*
  * ROUTE
  */
 exports.secret_key = "secret";

 exports.secret_encrypt = '12345';

 exports.secret_fail = '404';

  exports.findApiSettings = "/findApiSettings";

  exports.findAllProduct = "/findAllProduct";

  exports.filterAllProduct = "/filterAllProduct";

  exports.searchAllProduct = "/searchAllProduct";

  exports.findProduct = "/findProduct";

  exports.createNewOrders = "/createNewOrders";

  exports.createNewUser = "/createNewUser";
