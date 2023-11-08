const http = require('http');

const server = http.createServer((req, res)=>{
  if (req.url === '/') {
    res.end('Welcome to our home page.');
  }
  if (req.url === '/about') {
    res.end('Here is our short history.');
  }
  //http://localhost:5000/error
  //下面的这个是error page，只有在error的时候，才会看到。
  res.end(`
  <h1>Oops!</h1>
<p>We can not seem to find the page you are looking for.</p>
<a href="/">Back home</a>
  `);
  // console.log(req); //it will return a lot 
  // res.write();
  // res.end();
});
// the server is listening to the request
server.listen(5000);
