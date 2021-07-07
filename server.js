//导入express框架
var express = require("express");
var app = express();

app.get('/api/test', function (req, res) {
    res.status(200);
    const data = [1,2,3]
    res.json(data)
    //传入页面
    // res.send()
});

var server = app.listen(4000, function () {
    var host = server.address().address;
    var port = server.address().port;

    console.log("服务器启动成功了端口是", port);
})