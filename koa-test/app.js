var mysql = require('mysql')

const connection = mysql.createConnection({
  host     : '127.0.0.1',
  user     : 'root',
  password : '123456',
  database : 'testdb'
});

connection.connect()

var sql = `create table if not exists application(id int primary key auto_increment,title varchar(255) not null,completed tinyint(1) not null default 0)`

connection.query(sql,function (err, result) {
  if(err){
    console.log('[SELECT ERROR] - ',err.message);
    return;
  }

 console.log('--------------------------SELECT----------------------------');
 console.log(result);
 console.log('------------------------------------------------------------\n\n');
});

connection.end();
