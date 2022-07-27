const net = require('net');

const socket = net.createConnection(80, 'example.com');

// DuplexStream: lecture + écriture
// Redirige la réponse du serveur dans le terminal
// HTTP/1.1 200 OK
// Age: 363061
// Cache-Control: max-age=604800
// Content-Type: text/html; charset=UTF-8
// Date: Wed, 27 Jul 2022 10:34:42 GMT
// Etag: "3147526947+ident"
// Expires: Wed, 03 Aug 2022 10:34:42 GMT
// Last-Modified: Thu, 17 Oct 2019 07:18:26 GMT
// Server: ECS (dcb/7ECB)
// Vary: Accept-Encoding
// X-Cache: HIT
// Content-Length: 1256

// <!doctype html>
// <html>
// <head>
//     <title>Example Domain</title>
socket.pipe(process.stdout);

// Requete HTTP (bas niveau) :
// GET / HTTP/1.1\r\n
// Host: example.com\r\n
// User-agent: My Bot Node.js 16\r\n
// \r\n

socket.write('GET / HTTP/1.1\r\n');
socket.write('Host: example.com\r\n');
socket.write('User-agent: My Bot Node.js 16\r\n');
socket.write('\r\n');

// avec Angular httpClient.get('http://example.com/', {headers: {'User-agent': 'My Bot Node.js 16'}})
