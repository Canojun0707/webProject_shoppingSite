const mariadb = require('mysql');

const conn = mariadb.createConnection(
    {//마리아 db 접속
        host:'localhost',
        port: 3306,
        user: 'root',
        password: 'root',
        database:'Tennis'
    }
);

module.exports = conn; //외부에서도 모듈로 사용