/**
 * Created by Administrator on 2017/4/12 0012.
 */
var  axios = require("axios");
axios.get("/aa/bb/cc")
    .then(function (response) {
        console.log(response)
    })
    .catch(function (error) {
        console.log(error);
    });