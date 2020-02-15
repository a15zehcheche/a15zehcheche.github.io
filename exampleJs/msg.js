// 消息提示框
var msgtype = "";
var msgbox = document.querySelector(".msgbox");
function showMsgbox(){
	msgbox.style.visibility = "visible";
	if(msgtype == "purchase"){
		msgbox.firstElementChild.innerHTML = "恭喜你获得了"+place[position].name;
	}
	else if(msgtype == "upgrade"){
		if(place[position].state == 1){
			msgbox.firstElementChild.innerHTML = "恭喜你在"+place[position].name+"建了一座小房子！"
		}
		else if(place[position].state == 2){
			msgbox.firstElementChild.innerHTML = "恭喜你在"+place[position].name+"建了一栋大房子！"
		}
		else if(place[position].state == 3){
			msgbox.firstElementChild.innerHTML = "恭喜你在"+place[position].name+"建了一栋大酒店！"
		}
	}
	else if(msgtype == "checkIn"){
		msgbox.firstElementChild.innerHTML = place[position].owner + "谢谢你在" + place[position].name + "消费$" + place[position].cost 
	}
	else if(msgtype == "goodsp"){
		msgbox.firstElementChild.innerHTML = "恭喜你捡到了$" + place[position].value;
	}
	else if(msgtype == "badsp"){
		msgbox.firstElementChild.innerHTML = "你需要向政府缴纳税收$" + place[position].value;
	}
	else if(msgtype == "surprise"){
		msgbox.firstElementChild.innerHTML = fateText;
	}
	else if(msgtype == "jail"){
		msgbox.firstElementChild.innerHTML = "监狱还没开放，敬请期待";
	}
	else if(msgtype == "injail"){
		msgbox.firstElementChild.innerHTML = "还有" + person.stop + "可以出狱";
	}
	else if(msgtype == "casino"){
		msgbox.firstElementChild.innerHTML = "恭喜你获得了$" + casinoMoney; 
	}
	else if(msgtype == "nope"){
		msgbox.firstElementChild.innerHTML = "此处正在施工，请快速通过！"
	}
	setTimeout(function(){
		msgbox.style.visibility = "hidden";
	},v*1.6);
}