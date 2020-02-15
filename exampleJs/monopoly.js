$(function(){
	dice.on("click", function(){
		//骰子点数显示
		var num = Math.ceil(Math.random()*6);
		var bgi = Math.ceil(Math.random()*2);
		dice.css("background-image", "url(img/s"+bgi+".jpg");
		setTimeout(function(){
			dice.css("background-image", "url(img/"+num+".jpg");
		}, 300);
		dice.css("pointer-events","none");
		// 针对不同角色破产后执行
		function gameSequence(){
			if( text == "p1"){
				// if(p2.stop !== 0){
				// 	if(player == 2 || p4.state == "bankrupt" && p3.state == "bankrupt"){
				// 		s = 1;
				// 		title.innerHTML = p1.name;
				// 	}
				// 	else if(player >= 3 && p3.state !== "bankrupt"){
				// 		s = 3;
				// 		title.innerHTML = p3.name;
				// 	}
				// 	else if(player >= 3 && p3.state == "bankrupt"){
				// 		s = 4;
				// 		title.innerHTML = p4.name;
				// 	}
				// 	p2.stop -= 1;
				// 	msgtype = "injail";
				// 	setTimeout(showMsgbox(),v*1.3);
				// }
				if(p2.state == "bankrupt"){
					s += 2;
					title.innerHTML = p3.name;
					if(p3.state == "bankrupt"){
						s += 1;
						title.innerHTML = p4.name;
					}
				}
				else{
					s += 1;
					title.innerHTML = p2.name;
				}
			}
			if( text == "p2"){
				// if(p3.stop !== 0){
				// 	if(player == 3){
				// 		s = 1;
				// 		title.innerHTML = p1.name;
				// 		if(p1.state == "bankrupt"){
				// 			s = 2;
				// 			title.innerHTML = p2.name;
				// 		}
				// 	}
				// 	else if(player == 4 && p4.state !== "bankrupt"){
				// 		s = 4;
				// 		title.innerHTML = p4.name;
				// 	}
				// 	else if(player == 4 && p4.state == "bankrupt"){
				// 		s = 1;
				// 		title.innerHTML = p1.name;
				// 		if(p1.state == "bankrupt"){
				// 			s = 2;
				// 			title.innerHTML = p2.name;
				// 		}
				// 	}
				// 	p3.stop -= 1;
				// 	msgtype = "injail";
				// 	setTimeout(showMsgbox(),v*1.3);
				// }
				if (player == 3) {
					s += 1;	
					title.innerHTML = p3.name;
					if(p3.state == "bankrupt"){
						s = 1;
						title.innerHTML = p1.name;
					}
				}
				else if(player == 4){
					s += 1;
					title.innerHTML = p3.name;
					if(p3.state == "bankrupt"){
						s += 1;
						title.innerHTML = p4.name;
						if(p4.state == "bankrupt"){
							s = 1;
							title.innerHTML = p1.name;
						}
					}
				}
				else{
					s -= 1;
					title.innerHTML = p1.name;
				}
			}
			if( text == "p3"){
				// if(p4.stop !== 0){
				// 	s = 1;
				// 	title.innerHTML = p1.name;
				// 	if (p1.state == "bankrupt") {
				// 		s = 2;
				// 		title.innerHTML = p2.name;
				// 		if(p2.state == "bankrupt"){
				// 			s = 3;
				// 			title.innerHTML = p3.name;
				// 		}
				// 	}
				// 	p4.stop -= 1;
				// 	msgtype = "injail";
				// 	setTimeout(showMsgbox(),v*1.3);
				// }
				if (player == 4) {
					s += 1;	
					title.innerHTML = p4.name;
					if (p4.state == "bankrupt") {
						s = 1;
						title.innerHTML = p1.name;
						if(p1.state == "bankrupt"){
							s = 2;
							title.innerHTML = p2.name;
						}
					}
				}
				else{
					s = 1;
					title.innerHTML = p1.name;
					if (p1.state == "bankrupt") {
						s = 2;
						title.innerHTML = p2.name;
					}
				}
			}
			if( text == "p4"){
				// if(p1.stop !== 0){
				// 	s = 2;
				// 	title.innerHTML = p2.name;
				// 	if (p2.state == "bankrupt") {
				// 		s = 3;
				// 		title.innerHTML = p3.name;
				// 		if(p3.state == "bankrupt"){
				// 			s = 4;
				// 			title.innerHTML = p4.name;
				// 		}
				// 	}
				// 	p1.stop -= 1;
				// 	msgtype = "injail";
				// 	setTimeout(showMsgbox(),v*1.3);
				// }
				if(p1.state == "bankrupt"){
					s = 2;
					title.innerHTML = p2.name;
					if(p2.state == "bankrupt"){
						s = 3;
						title.innerHTML = p3.name;
					}
				}
				else{
					s = 1;
					title.innerHTML = p1.name;	
				}
			}
		}
	// 关闭对话框按钮
	purchase.children[3].onclick = function(){
		purchase.style.visibility = "hidden";
		gameSequence();
		checkColor();
		dice.css("pointer-events","auto");
		purchase.children[2].style.pointerEvents = "auto";
		purchase.children[2].style.background = "#e1e1e1";
	}
	upgrade.children[3].onclick = function(){
		upgrade.style.visibility = "hidden";
		gameSequence();
		checkColor();
		dice.css("pointer-events","auto");
		upgrade.children[2].style.pointerEvents = "auto";
		upgrade.children[2].style.background = "#e1e1e1";
	}

		function playing(){
			setTimeout(function(){
				clearInterval(move);
				//绑定对应角色
				if( text == "p1"){
					position = po1;
					person = p1;
				}
				else if( text == "p2"){
					position = po2;
					person = p2;
				}
				else if( text == "p3"){
					position = po3;
					person = p3;
				}
				else if( text == "p4"){
					position = po4;
					person = p4;
				}
				//公用动作判定
				// 买地产
				if(place[position].owner == "none"){
					purchase.style.visibility = "visible";
					// 买公用地产
					if(place[position].state == 0){
						purchase.firstElementChild.innerText = "请问你要花费$" + place[position].value + "来购买" +place[position].name+"吗？";
						if(person.money < place[position].value){
							purchase.children[2].style.pointerEvents = "none";
							purchase.children[2].style.background = "#454545";	
						}
						purchase.children[2].onclick = function(){
							place[position].owner = person.name;
							purchase.style.visibility = "hidden";
							person.money -= place[position].value;
							msgtype = "purchase";
							showMsgbox();
							gameSequence();
							checkColor();
							dice.css("pointer-events","auto");
						}
					}
					// 买充公地产
					else if(place[position].state == 1 || place[position].state == 2 || place[position].state == 3){
						if(person.money < (place[position].value + place[position].cost) ){
							purchase.children[2].style.pointerEvents = "none";
							purchase.children[2].style.background = "#454545";	
						}
						purchase.firstElementChild.innerText = "请问你要花费$" + (place[position].value + place[position].cost) + "来购买" +place[position].name+"吗？";
						purchase.children[2].onclick = function(){
							place[position].owner = person.name;
							purchase.style.visibility = "hidden";
							person.money -= place[position].value;
							person.money -= place[position].cost;
							msgtype = "purchase";
							showMsgbox();
							gameSequence();
							checkColor();
							dice.css("pointer-events","auto");
						}
					}
					
				}
				// 住房
				if(place[position].owner !== person.name && place[position].owner !== "none" && ( place[position].state == 0 || place[position].state == 1 || place[position].state == 2 || place[position].state == 3 ) ){
					person.money -= place[position].cost;
					for (var i = 0; i < players.length; i++) {
						if(place[position].owner == players[i].name){
							players[i].money += place[position].cost;
						}
					}
					msgtype = "checkIn";
					showMsgbox();
					gameSequence();
					checkColor();
					dice.css("pointer-events","auto");
				}
				// 升级房子
				if(place[position].owner == person.name){
					if(place[position].state < 3){
						upgrade.style.visibility = "visible";
						upgrade.firstElementChild.innerText = "请问你要花费$"+place[position].value * .5+"来升级"+place[position].name+"吗？";
						if(person.money < place[position].value * .5){
							upgrade.children[2].style.pointerEvents = "none";
							upgrade.children[2].style.background = "#454545";	
						}
					}			
					else{
						gameSequence();
						checkColor();
						dice.css("pointer-events","auto");
					}				
					upgrade.children[2].onclick = function(){
						if(place[position].state == 0){
							place[position].cost += place[position].value * .4;
							person.money -= place[position].value * .5;
							upgrade.style.visibility = "hidden";
							boxes[position].prepend(construct);
							setTimeout(function(){
								$(".hide").append(construct);
								$("#b"+position+"").append(l1);
								gameSequence();
								checkColor();
								dice.css("pointer-events","auto");
							},2000);
						}
						else if(place[position].state == 1){
							place[position].cost += place[position].value * .5;
							person.money -= place[position].value * .5;
							upgrade.style.visibility = "hidden";
							boxes[position].prepend(construct);
							setTimeout(function(){
								$(".hide").append(construct);
								$("#b"+position+">img.house").remove();
								$("#b"+position+"").append(l2);
								gameSequence();
								checkColor();
								dice.css("pointer-events","auto");
							},2000);
						}
						else if(place[position].state == 2){
							place[position].cost += place[position].value *.6;
							person.money -= place[position].value * .5;
							upgrade.style.visibility = "hidden";
							boxes[position].prepend(construct);
							setTimeout(function(){
								$(".hide").append(construct);
								$("#b"+position+">img.house").remove();
								$("#b"+position+"").append(l3);
								gameSequence();
								checkColor();
								dice.css("pointer-events","auto");
							},2000);
						}
						place[position].state += 1;
						msgtype = "upgrade";
						showMsgbox();
					}
				}
				// 收支钱
				if(place[position].state == "goodsp"){
					person.money += place[position].value;
					msgtype = "goodsp";
					showMsgbox();
					gameSequence();
					checkColor();
					dice.css("pointer-events","auto");
				}
				if(place[position].state == "badsp"){
					person.money -= place[position].value;
					msgtype = "badsp";
					showMsgbox();
					gameSequence();
					checkColor();
					dice.css("pointer-events","auto");
				}
				// 监狱
				if(place[position].state == "jail"){
					// person.stop = 1;
					msgtype = "jail";
					showMsgbox();
					gameSequence();
					checkColor();
					dice.css("pointer-events","auto");
				}
				// 尚未开放
				if(place[position].state == "nope"){
					msgtype = "nope";
					showMsgbox();
					gameSequence();
					checkColor();
					dice.css("pointer-events","auto");
				}
				// 赌场
				// if(place[position].state == "casino"){
				// 	document.querySelector(".bet").style.visibility = "visible";
				// 	spdice.on("click", function(){
				// 		var num = Math.ceil(Math.random()*6);
				// 		var bgi = Math.ceil(Math.random()*2);
				// 		spdice.css("background-image", "url(img/s"+bgi+".jpg");
				// 		setTimeout(function(){
				// 			spdice.css("background-image", "url(img/"+num+".jpg");
				// 		}, 300);
				// 		setTimeout(function(){
				// 			msgtype = "casino";
				// 			casinoMoney = num * 1000;
				// 			person.money += casinoMoney;
				// 			showMsgbox();
				// 			document.querySelector(".bet").style.visibility = "hidden";
				// 			gameSequence();
				// 			checkColor();
				// 			dice.css("pointer-events","auto");
				// 		},v*2);
				// 	})
				// }
				// 机会命运
				// if(place[position].state == "surprise"){
				// 	var y = Math.floor(Math.random()*11); 
				// 	person.money -= fate[y].value;
				// 	fateText = fate[y].text;
				// 	msgtype = "surprise";
				// 	showMsgbox();
				// 	gameSequence();
				// 	checkColor();
				// 	dice.css("pointer-events","auto");
				// }
			},v * num + v*0.9);
		}
		if(s == 1){
			var move = setInterval(p1move, v);
			text = "p1";
			playing();
		}
		else if(s == 2){
			var move = setInterval(p2move, v);
			text = "p2";
			playing();					
		}
		else if (s == 3) {
			var move = setInterval(p3move, v);
			text = "p3";
			playing();
		}
		else if (s == 4){
			var move = setInterval(p4move, v);
			text = "p4";
			playing();
		}
	})
});
// 角色移动
function p1move(){
	if(po1 == 29){
		po1 = -1;
		boxes[0].append(i1);
		p1.money += 2000;
	}
	po1++;
	boxes[po1].append(i1);
}
function p2move(){
	if(po2 == 29){
		po2 = -1;
		boxes[0].append(i2);
		p2.money += 2000;
	}
	po2++;
	boxes[po2].append(i2);
}
function p3move(){
	if(po3 == 29){
		po3 = -1;
		boxes[0].append(i3);
		p3.money += 2000;
	}
	po3++;
	boxes[po3].append(i3);
}
function p4move(){
	if(po4 == 29){
		po4 = -1;
		boxes[0].append(i4);
		p4.money += 2000;
	}
	po4++;
	boxes[po4].append(i4);
}

