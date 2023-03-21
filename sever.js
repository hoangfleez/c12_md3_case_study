const http = require('http');
const url = require('url');
const fs = require ('fs');
const handle = require('./src/controllers/handle')
const POST = 3000;

const sever = http.createServer((req, res)=>{
    let mimeTypes = {
        'jpg': 'images/jpg',
        'png': 'images/png',
        'js': 'text/javascript',
        'css': 'text/css',
        'svg': 'image/svg+xml',
        'ttf': 'font/ttf',
        'woff': 'font/woff',
        'woff2': 'font/woff2',
        'eot': 'application/vnd.ms-font-object'
    }

    let urlPath = url.parse(req.url).pathname;
    const filesDefences = urlPath.match(/\.js|\.css|\.png|\.svg|\.jpg|\.ttf|\.woff|\.woff2|\.eot/);
    if (filesDefences) {
        const extension = mimeTypes[filesDefences[0].toString().split('.')[1]];
        res.writeHead(200, {'Content-Type': extension});
        fs.createReadStream(__dirname + req.url).pipe(res)
    } else {
        switch (urlPath) {
            //Trang chủ
            case '/':
                handle.homepage(req, res).catch(err => {
                    console.log(err.message);
                });
                break;
            case '/login':
                handle.login(req, res).catch(err => {
                    console.log(err.message);
                });
                break;
            case '/register':
                handle.register(req, res).catch(err => {
                    console.log(err.message);
                });
                break;
            default:
                res.end();
        }
    }
});

sever.listen(POST,()=>{
    console.log('Sever is running at localhost:' + POST);
})