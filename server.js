//导入express框架
var express = require("express");
var app = express();
app.get('/api/test', function (req, res) {
    res.status(200);
    const data = {
        data: [1, 2, 3, 4],
        msg: '成功'
    }
    res.json(data)
});
app.listen(4000, function () {
    console.log("服务器启动成功了端口是4000");
})