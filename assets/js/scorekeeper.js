var p1button=document.querySelector("#p1");
var p2button=document.querySelector("#p2");
var reset=document.querySelector("#reset");
var p1display=document.querySelector("#p1display");
var p2display=document.querySelector("#p2display");
var numinput=document.querySelector("input");
var winto=document.querySelector("h3 span");
var p1score= 0;
var p2score= 0;
var gameover= false;
var win=5;
p1button.addEventListener("click",function(){
	if(!gameover){
		p1score++;
		if(p1score===win){
			p1display.classList.add("winner");
			gameover=true;
		}
		p1display.textContent =p1score;
	}
});
p2button.addEventListener("click",function(){
	if(!gameover){
		p2score++;
		if(p2score===win){
			p2display.classList.add("winner");
			gameover=true;
		}
		p2display.textContent =p2score;
	}
});
reset.addEventListener("click",function(){
	reset1();
});
function reset1(){
	p1score=0;
	p2score=0;
	p1display.textContent=0;
	p2display.textContent=0;
	p1display.classList.remove("winner");
	p2display.classList.remove("winner");
	gameover=false;
}
numinput.addEventListener("change",function(){
	winto.textContent=Number(numinput.value);
	win=Number(numinput.value);
	reset1();
})