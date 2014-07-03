$(function(){
	var _goldenEgg=new goldenEgg();
});
/*
*golden egg
*/
function goldenEgg(){
	var _eggBox=$(".egg-box");
	var _hammer=$(".hammer");
	var _brokenEgg=$(".broken-egg");
	var _Egg=$(".egg");
	var _flashLight=$(".flash-light");
	//event
	_eggBox.bind("click",function(){
		_hammer.addClass("hammerEffect");
		setTimeout(function(){
			_Egg.css({
				"height":169,
				"opacity":0
			});
			_brokenEgg.css({
				"display":"block"
			});
			_flashLight.css({
				"display":"block",
				"width":224
			});
			$(".clip1").css({
				left: -38,
				top: -14,
				"-webkit-transform": "rotate(380deg)"
			});
			$(".clip2").css({
				left: -26,
				top: -20,
				"-webkit-transform": "rotate(380deg)"
			});
			$(".clip3").css({
				left: -18,
				top: -10,
				"-webkit-transform": "rotate(380deg)"
			});
			$(".clip4").css({
				left: 12,
				top: -38,
				"-webkit-transform": "rotate(380deg)"
			});
			$(".clip5").css({
				left: -13,
				top: -22,
				"-webkit-transform": "rotate(380deg)"
			});
			$(".clip6").css({
				left: -1,
				top: -17,
				"-webkit-transform": "rotate(380deg)"
			});
			$(".clip7").css({
				left: -3,
				top: -28,
				"-webkit-transform": "rotate(380deg)"
			});
			$(".clip8").css({
				left: -21,
				top: -35,
				"-webkit-transform": "rotate(380deg)"
			});
			$(".clip9").css({
				left: -14,
				top: -20,
				"-webkit-transform": "rotate(380deg)"
			});
			$(".clip10").css({
				left: -53,
				top: -14,
				"-webkit-transform": "rotate(380deg)"
			});
			$(".clip11").css({
				left: 18,
				top: -20,
				"-webkit-transform": "rotate(380deg)"
			});
			$(".clip12").css({
				left: 45,
				top: -14,
				"-webkit-transform": "rotate(380deg)"
			});
			$(".clip13").css({
				left: 32,
				top: -33,
				"-webkit-transform": "rotate(380deg)"
			});
			$(".clip14").css({
				left: -53,
				top: -14,
				"-webkit-transform": "rotate(380deg)"
			});
			$(".clip15").css({
				left: -45,
				top: -28,
				"-webkit-transform": "rotate(380deg)"
			});
			
		},400);
	});
}