var baseUrl = "http://localhost:13627/networkMock/";

var pageSize = 10;

function req(reqEntity, success, fail) {

    if (reqEntity.error == null) {
        reqEntity.error = function () {
            if (fail != null) {
                fail("未知错误,可能是请求失败或者是服务器异常");
            }
        }
    }

    $.ajax(reqEntity).done(function (result) {
        var resultObject = null;
        if(typeof(result) == 'string') {
            resultObject = eval("(" + result + ")");
        }else {
            resultObject = result;
        }
        console.log(JSON.stringify(resultObject));
        console.log("------------");
        if (resultObject.resCode == 0) {
            if (success != null) {
                success(resultObject.data);
            }
        } else {
            if (fail != null) {
                fail(resultObject.resMessage);
            }
        }
    });
}
