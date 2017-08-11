function loadXml(id) {
    var xml;
    if (window.XMLHttpRequest) {// code for IE7+, Firefox, Chrome, Opera, Safari
        xml = new XMLHttpRequest();
    }
    else {// code for IE6, IE5
        xml = new ActiveXObject("Microsoft.XMLHTTP");
    }
    xml.onreadystatechange = function () {
        xmlHandler(xml);
    }
    xml.open("GET", "http://api.snsports.cn/api/content/pc/GetBMVideoDetail.json?videoId=" + id + "&objType=bm_TV&objId=0", true);
    xml.send();
}
function xmlHandler(xml) {
    if (!(xml.readyState == 4 && xml.status == 200))
        return;
    var json = JSON.parse(xml.responseText);
    loadPage(json);
}
function loadPage(obj) {
    var content = document.getElementById("content");
    if (obj.error) {
        content.innerHTML = "<h1>404 NOT FOUND</h1>"
        return;
    }
    else {
        content.innerHTML = document.querySelector("#storage").innerHTML;
    }
    var data = obj.messages.data;
    var video = data.video; //一个对象
    var relativeVideos = data.relativeVideos;   //数组 2元素
    var ads = data.ads; //数组 1元素
    with (video) {
        content.querySelector("h1").innerText = title;
        content.querySelector("h4").innerText = subTitle;
        content.querySelector(".like").innerText = "赞：" + likeCount;
        content.querySelector(".favor").innerText = "收藏：" + bookmarkCount;
        content.querySelector("video").setAttribute("src", decodeURI(url)); 
        content.querySelector("video").style.visibility = "visible";
    }
}
