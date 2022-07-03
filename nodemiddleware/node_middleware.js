var express = require('express');
var app = express();

// 解决跨域问题
app.all('*', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header("Access-Control-Allow-Methods", "PUT, GET, POST, DELETE, OPTIONS");
    res.header("X-Powered-By", ' 3.2.1');
    res.header("Content-Type", "Application/json;charset=utf-8");
    next();
});

app.get('/tabsList', (req, res) => {
    res.cookie('foo', 'bar');
    var tabsList = [
        "推荐",
        "居家生活",
        "服饰鞋包",
        "美食酒水",
        "个护清洁",
        "母婴亲子",
        "运动旅行",
        "数码家电",
        "严选全球"
      ];
    const ret = {
        status: 200,
        data: tabsList,
        message: 'success'
    }
    res.send(ret);
});

app.get('/todos/:id', (req, res) => {
    res.send(`get /todos ${req.params.id}`);
})

app.listen(8888, () => {
    console.log('8888, 网易严选中间件，已经运行！ ');
});