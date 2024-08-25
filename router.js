function route(pathname, handle,response, productId)    {
    console.log('pathname : ' + pathname);
    console.log("pathname:", pathname);
    console.log("handle:", handle);
    console.log("handle[pathname]:", handle[pathname]);
    
    if (typeof handle[pathname] == 'function')  {
        handle[pathname](response, productId);
    } else {
        response.writeHead(404, {'Content-Type': 'text/html'}); // (정상, response 타입은 html이다)
        response.write('Not found'); //write body를 줄였다고 보면 됌
         response.end(); //전송
    }
      
    //handle[pathname](response, productId);
}
exports.route = route;