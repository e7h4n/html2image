# Html2Image

用来将 HTML 代码转成图片的一个 Web Server。习作，练习 [express] 以及 [phantomjs] 的应用。

## 用法

```
git clone git://github.com/perfectworks/html2image.git && cd html2image && npm install
node app.js
curl -X POST 'http://localhost:3000/convert' -d '<html><body style="background:#EFEFEF"><h1>Hello world!</h1></body></html>' > demo.png
```

## 已知问题，将来计划的改进

* 不能渲染图片
* 没做性能测试和压力测试
* 代码里各种异步逻辑嵌套，太烦
* 支持的参数比较简单

## 发布历史

* `0.1.0` 2013-01-08 首次发布。

## License
Copyright (c) 2012 PerfectWorks  
Licensed under the MIT license.

[express]: http://expressjs.com
[phantomjs]: http://phantomjs.org
