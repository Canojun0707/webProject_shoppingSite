const fs = require('fs'); //fs 모듈 받아오기 file sync
const main_view = fs.readFileSync('./main.html','utf-8');
const orderlist_view = fs.readFileSync('./orderlist.html','utf-8');
const mariadb = require('./database/connect/mariadb');
//const mariadb = require('C:/Users/오창준/Desktop/HTML_CSS_Javascript_study/nodejs_study/database/connect/mariadb');
//const mariadb = require('./database/connect/mariadb');

//router가 route를 분배해서 route를 알려준는 역할
function main(response) {
    console.log('main');

    /*
    mariadb.query("SELECT * FROM product", function(err, rows){
        console.log(rows);
    })
        */
    // mariadb.query : mariadb 데이터베이스에 SQL 쿼리를 실행
    // "SEL ~ product" : SQL쿼리로, product 테이블의 모든 데이터를 선택
    // function(err,rows) : 쿼리 실행 중 에러가 발생하면 매개변수 err에 저장
    // 쿼리 결과로 반환된 데이터 행(row)들이 매개변수 row에 저장

    response.writeHead(200, {'Content-Type': 'text/html'}); // (정상, response 타입은 html이다)
    response.write(main_view); //write body를 줄였다고 보면 됌
    response.end(); //전송 
}

/* image 로고  */
function redRacket(response){
    fs.readFile('./img/redRacket.png', function(err,data) {
        response.writeHead(200, {'Content-Type': 'text/html'}); // (정상, response 타입은 html이다)
        response.write(data); //write body를 줄였다고 보면 됌
        response.end(); //전송
    })
}
function blueRacket(response){
    fs.readFile('./img/blueRacket.png', function(err,data) {
        response.writeHead(200, {'Content-Type': 'text/html'}); // (정상, response 타입은 html이다)
        response.write(data); //write body를 줄였다고 보면 됌
        response.end(); //전송
    })
}
function blackRacket(response){
    fs.readFile('./img/blackRacket.png', function(err,data) {
        response.writeHead(200, {'Content-Type': 'text/html'}); // (정상, response 타입은 html이다)
        response.write(data); //write body를 줄였다고 보면 됌
        response.end(); //전송
    })
}
/* image directory end */

function order(response, productId)    {
        response.writeHead(200, {'Content-Type': 'text/html'}); // (정상, response 타입은 html이다)
        
        mariadb.query("INSERT INTO orderlist VALUES (" + productId + ",'" + new Date().toLocaleDateString() +"');",function(err, rows){
            console.log(rows);
        })
        
        response.write('order page'); //write body를 줄였다고 보면 됌
        response.end(); //전송
}

function orderlist(response)    {

    console.log('orderlist');
    response.writeHead(200, {'Content-Type': 'text/html'}); // (정상, response 타입은 html이다)
    
    mariadb.query("SELECT * FROM orderlist" ,function(err, rows){
        response.write(orderlist_view); //write body를 줄였다고 보면 됌
    })
    //response.write("</table>");
    response.end(); //전송
}
let handle = {}; // key:value 
handle['/'] = main;
handle['/order'] = order;
handle['/orderlist'] = orderlist;


// image directory
handle['/img/redRacket.png'] = redRacket;
handle['/img/blueRacket.png'] = blueRacket;
handle['/img/blackRacket.png'] = blackRacket;

exports.handle = handle;