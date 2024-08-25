let server = require('./server'); //'./'라는 뜻은같은 디렉토리 파일
let router = require('./router');
let requestHandler = require('./requestHandler');

const mariadb = require('./database/connect/mariadb');//maria 모듈을 가져옴
//mariadb.connect(); //mariaDB데이터베이스와 연결

server.start(router.route, requestHandler.handle);