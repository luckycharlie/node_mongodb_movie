/**
 * Created by Administrator on 2017/4/10 0010.
 */
var express = require("express")
var port = process.env.PORT || 3000
var app = express()

app.set('views',"./views")
app.set("view engine","html")
app.listen(port)
console.log("port:" + port)
app.get("/",function(req,res){
    res.render("index",{
        title:"电影首页"
    })
})

app.get("/",function(req,res){
    res.render("index",{
        title:"电影详情"
    })
})

app.get("/",function(req,res){
    res.render("index",{
        title:"后台录入页"
    })
})

app.get("/",function(req,res){
    res.render("index",{
        title:"电影列表页"
    })
})