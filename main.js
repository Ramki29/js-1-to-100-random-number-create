let contain=document.getElementById("container");
let btn=document.createElement("button");
btn.innerHTML="click";
contain.append(btn);

let para=document.createElement("p");
contain.append(para);

btn.addEventListener("click",function(){
	let ranNum=Math.round(Math.random()*100);
	para.innerHTML=ranNum;
	console.log(ranNum);
});