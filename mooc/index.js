
function load(){
	var EventUtil = {
    	addHandler: function (element, type, handler) {
	        if (element.addEventListener) {
	            element.addEventListener(type, handler, false);
	        } else if (element.attachEvent) {
	            element.attachEvent("on" + type, handler);
	        } else {
	            element["on" + type] = handler;
	        }
    	}
	};
	EventUtil.addHandler(window, "scroll", function () {
		var scrollTop = window.pageYOffset|| document.documentElement.scrollTop || document.body.scrollTop;
	    if(scrollTop  > 103){
	    	document.getElementsByClassName("m-fixed-navi")[0].style.visibility="visible";
	    	document.getElementById("mf-bt-top").style.visibility="visible";
	    }
	    if(scrollTop < 103){
	    	document.getElementsByClassName("m-fixed-navi")[0].style.visibility="hidden";
	    	document.getElementById("mf-bt-top").style.visibility="hidden";
	    }
	});
	var CGID = setInterval(changePic, 3000);
	for(var i = 1;i < 6;i++){
		EventUtil.addHandler(document.getElementById("mpbb-"+i),"mouseover",function(){
			clearInterval(CGID);
			var i = document.getElementById("m2-pic-img").src;
			i = i[i.length - 5] - '0';
			document.getElementById("mpbb-" + i).style.backgroundColor="white";
			this.style.backgroundColor="green";
			document.getElementById("m2-pic-img").src="./img/pic"+this.id[5]+".jpg";
			CGID = setInterval(changePic, 3000);
		});
		EventUtil.addHandler(document.getElementById("mpbb-"+i),"mouseout",function(){
			// this.style.backgroundColor="white";
		});
	}
	EventUtil.addHandler(document.getElementById("m2-pic-button-left"),"click", function(){
		var nPic = 5;
		var i = document.getElementById("m2-pic-img").src;
		i = i[i.length - 5] - '0';
		document.getElementById("mpbb-" + i).style.backgroundColor="white";
		i = (i - 1 + nPic - 1)% nPic + 1;
		document.getElementById("mpbb-" + i).style.backgroundColor="green";
		document.getElementById("m2-pic-img").src="./img/pic" + i + ".jpg";
	})
	EventUtil.addHandler(document.getElementById("m2-pic-button-right"),"click", changePic);
	EventUtil.addHandler(document.getElementsByClassName("loginbt")[0],"click",Show)
	EventUtil.addHandler(document.getElementsByClassName("loginbt")[1],"click",Show)
	document.getElementById("mpbb-1").style.backgroundColor="green";
	
}
function changePic(){
		var nPic = 5;
		var i = document.getElementById("m2-pic-img").src;
		i = i[i.length - 5] - '0';
		document.getElementById("mpbb-" + i).style.backgroundColor="white";
		i = i % nPic + 1;
		document.getElementById("mpbb-" + i).style.backgroundColor="green";
		document.getElementById("m2-pic-img").src="./img/pic" + i + ".jpg";
}
        function Show() {
            document.getElementById("login").style.display = "block";
            document.body.name = "y";
            document.getElementById("mask").style.display = "block";
            //          event.cancelBubble=1;
            //          event.stopPropagation();
        }
        function Hide(e) {
            // var targ
            // if (!e) var e = window.event
            // if (e.target) targ = e.target
            // else if (e.srcElement) targ = e.srcElement
            // if (targ.nodeType == 3) // defeat Safari bug
            //     targ = targ.parentNode
            // var tname
            // tname=targ.tagName
            var e=arguments.callee.caller.arguments[0] || window.event;
            if (e.target == e.currentTarget && document.body.name == "y") {
                document.getElementById("login").style.display = "none";
                document.getElementById("mask").style.display = "none";
                document.body.name = 'n';
            }
        }
        function ChangeTAB(a, b) {
            var sid = "tab" + a;
            document.getElementById(sid).setAttribute("class", "tb-active");
            document.getElementById("fom"+a).style.display = "block";
            var did = "tab" + b;
            document.getElementById(did).setAttribute("class", "");
            document.getElementById("fom"+b).style.display = "none";

        }
        function setfocus(el) {
            document.getElementById(el).style.borderColor = "#4aafe9";
        }
        function clearfocus(el) {
            document.getElementById(el).style.borderColor = "black";
        }
        function showX(r) {
            if (r.value == '' && r.nextElementSibling.style != 'none')
                r.nextElementSibling.style.display = "none";
            if (r.value != '' && r.nextElementSibling.style.display != 'block')
                r.nextElementSibling.style.display = "block";
        }
