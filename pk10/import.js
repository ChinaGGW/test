$(function(){
	$('.next').html(123);//期号
	setInterval(time(2000,10),1000);
	
})




function time(a,b){
	a=a-1;
	setInterval(time2(a,b),100);
//time2(2000,10);
}
function time2(a,b){
	if(a==0){
		a=b;
	}else{
		a=a-1;
	}
		$('.count').html(a);//倒计时
}
