const baseHandle = require('./baseHandle');
const qs = require("qs");
const formidable=require('formidable');
const fs = require("fs");
const url = require("url");

class handle extends baseHandle{
    async homepage(req, res){
        let html = await this.getTemplate('./src/index.html');
        res.write(html);
        res.end();
    };
    async login(req, res){
        let html = await this.getTemplate('./src/modalLogin.html');
        res.write(html);
        return res.end();
    }
    async register(req, res){
        let html = await this.getTemplate('./src/modalRegister.html');
        res.write(html);
        return res.end();
    }

}
module.exports=new handle();