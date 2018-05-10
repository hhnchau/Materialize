exports.dbConfig = {
    host: 'localhost',
    user: 'root',
    pass: '',
    database: 'kps',
    port: '3306'
  };
  
  exports.listenPort = 3000;

  //exports.url = "http://192.168.0.105:3000/";

  exports.url = "http://localhost:3000/";
    

  /*
  * ROUTE
  */
 exports.secret_key = "secret";

 exports.secret_encrypt = '12345';

 exports.secret_fail = '404';

  exports.findApiSettings = "/findApiSettings";

  exports.findAllProduct = "/findAllProduct";

  exports.findProduct = "/findProduct";

  exports.insertOrders = "/insertOrders";

  exports.updateUser = "/updateUser";

  exports.insertUser = "/insertUser";

  exports.findUser = "/findUser";

  exports.insertLikes = "/insertLikes";

  exports.deleteLikes = "/deleteLikes";

  exports.findLikes = "/findLikes";

  exports.insertComment = "/insertComment";

  exports.updateComment = "/updateComment";

  exports.findComment = "/findComment";

  exports.insertRaiting = "/insertRaiting";

  exports.updateRaiting = "/updateRaiting";

  exports.findRaiting = "/findRaiting";

  exports.updateOpenApp = "/updateOpenApp";
