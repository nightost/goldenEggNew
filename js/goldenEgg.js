$(function(){
	var _goldenEgg=new goldenEgg();
});
/*
*golden egg
*/
function goldenEgg(){
	var _eggBox=$(".egg-box");
	var _hammer=$(".hammer");
	//event
	_eggBox.bind("click",function(){
		_hammer.addClass("hammerEffect");
	});
}