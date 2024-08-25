let http = require('http'); // Node.js의 http module 불러옴
let url = require('url'); // node.js의 url module 불러옴

//서버를 시작하는 역할
//route : URL의 경로에 따라 특정 로직을 실행
//handle : 각 경로에 대응하는 함수들이 있음
function start(route,handle)    {
    function onRequest(request, response) { // 서버로 들어오는 요청을 처리
        let pathname = url.parse(request.url).pathname; 
        //pathname : 클라이언트가 요청한 URL의 경로 추출
        //ex > http://localhost:8888/home에서 pathname은 /home이 된다.
        let queryData = url.parse(request.url, true).query; 
        // URL에 포함된 쿼리 문자열을 객체 형태로 변환하여 사용
        // ex> http://localhost:8888/product?id=123 에서 quary data는 { id : 123}이 된다.
        route(pathname, handle,response,queryData.productId);
        // pathname : 클라이언트가 요청한 경로
        // handle : 경로에 따라 실행할 핸들러 객체
        // response : 서버가 클라이언트로 보낼 응답 객체
        // queryData.productId : URL의 쿼리 문자열에서 productId 값을 추출하여 전달
    }
    
    http.createServer(onRequest).listen(8888);
    //onRequest 함수가 요청을 처리하는 서버를 생성
    //서버가 8888ㅗㅍ트에서 클라이언트의 요청을 대기하게 만든다
}

exports.start = start; //밖에서도 start()함수가 실행

