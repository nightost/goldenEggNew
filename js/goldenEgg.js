//剩余次数
var _leftCount=2;
$(function(){

	var _goldenEgg=new goldenEgg();
});
/*
*tip message
*/
function showMessage(str){
	$("#tipBox span").text(str).addClass("normal").css({
		opacity:100
	});
}
function hideMessage(str){
	$("#tipBox span").text(str).removeClass("normal").css({
		opacity:0
	});
}
/*
*golden egg
*/
function goldenEgg(){
	var _eggBox=$(".egg-box");
	var _hammer=$(".hammer");
	var _brokenEgg=$(".broken-egg");
	var _Egg=$(".egg");
	var _flashLight=$(".flash-light");
	var _again=$(".agin");
	var _clip1=$(".clip1");
	var _clip2=$(".clip2");
	var _clip3=$(".clip3");
	var _clip4=$(".clip4");
	var _clip5=$(".clip5");
	var _clip6=$(".clip6");
	var _clip7=$(".clip7");
	var _clip8=$(".clip8");
	var _clip9=$(".clip9");
	var _clip10=$(".clip10");
	var _clip11=$(".clip11");
	var _clip12=$(".clip12");
	var _clip13=$(".clip13");
	var _clip14=$(".clip14");
	var _clip15=$(".clip15");
	var _isReset=true;
	//event
	_eggBox.bind("click",function(){
		if(!_isReset) return;
		_hammer.animate({"-webkit-transform":"rotate(20deg)"},{"duration": 100, "easing": "ease-in","complete":function(){
			$(this).animate({"-webkit-transform":"rotate(-25deg)"},{"duration": 200, "easing": "ease-in-out","complete":function(){
				$(this).animate({"-webkit-transform":"rotate(0deg)"},{"duration": 200, "easing": "ease-in-out"});
			}});
		}});
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
			_clip1.css({
				left: -38,
				top: -14,
				"-webkit-transform": "rotate(380deg)"
			});
			_clip2.css({
				left: -26,
				top: -20,
				"-webkit-transform": "rotate(380deg)"
			});
			_clip3.css({
				left: -18,
				top: -10,
				"-webkit-transform": "rotate(380deg)"
			});
			_clip4.css({
				left: 12,
				top: -38,
				"-webkit-transform": "rotate(380deg)"
			});
			_clip5.css({
				left: -13,
				top: -22,
				"-webkit-transform": "rotate(380deg)"
			});
			_clip6.css({
				left: -1,
				top: -17,
				"-webkit-transform": "rotate(380deg)"
			});
			_clip7.css({
				left: -3,
				top: -28,
				"-webkit-transform": "rotate(380deg)"
			});
			_clip8.css({
				left: -21,
				top: -35,
				"-webkit-transform": "rotate(380deg)"
			});
			_clip9.css({
				left: -14,
				top: -20,
				"-webkit-transform": "rotate(380deg)"
			});
			_clip10.css({
				left: -53,
				top: -14,
				"-webkit-transform": "rotate(380deg)"
			});
			_clip11.css({
				left: 18,
				top: -20,
				"-webkit-transform": "rotate(380deg)"
			});
			_clip12.css({
				left: 45,
				top: -14,
				"-webkit-transform": "rotate(380deg)"
			});
			_clip13.css({
				left: 32,
				top: -33,
				"-webkit-transform": "rotate(380deg)"
			});
			_clip14.css({
				left: -53,
				top: -14,
				"-webkit-transform": "rotate(380deg)"
			});
			_clip15.css({
				left: -45,
				top: -28,
				"-webkit-transform": "rotate(380deg)"
			});
			showMessage("恭喜，您中得帅哥数枚");
		},400);
		_leftCount=_leftCount-1;
		if(_leftCount<0){
			_eggBox.unbind("click");
			_again.hide();
		}
		//如果还有剩余次数
		if(_leftCount>0){
			//show play again
			$(".agin").css({
				opacity:100,
				"-webkit-transform":"rotate(360deg)",
			});
		}
		_isReset=false;
	});
	_again.bind("click",function(e){
		e.stopPropagation();
		reset();
	});
	var reset=function(){
		_isReset=true;
		hideMessage();
		_Egg.css({
			"width":110,
			"height":151,
			"opacity":100
		});
		_brokenEgg.css({
			"display":"none"
		});
		_flashLight.css({
			"display":"none",
			"width":112
		});
		_clip1.css({
			left:0,
			top:0,
			"-webkit-transform": "rotate(0deg)"
		});
		_clip2.css({
			left:0,
			top:0,
			"-webkit-transform": "rotate(0deg)"
		});
		_clip3.css({
			left:0,
			top:0,
			"-webkit-transform": "rotate(0deg)"
		});
		_clip4.css({
			left:0,
			top:0,
			"-webkit-transform": "rotate(0deg)"
		});
		_clip5.css({
			left:0,
			top:0,
			"-webkit-transform": "rotate(0deg)"
		});
		_clip6.css({
			left:0,
			top:0,
			"-webkit-transform": "rotate(0deg)"
		});
		_clip7.css({
			left:0,
			top:0,
			"-webkit-transform": "rotate(0deg)"
		});
		_clip8.css({
			left:0,
			top:0,
			"-webkit-transform": "rotate(0deg)"
		});
		_clip9.css({
			left:0,
			top:0,
			"-webkit-transform": "rotate(0deg)"
		});
		_clip10.css({
			left:0,
			top:0,
			"-webkit-transform": "rotate(0deg)"
		});
		_clip11.css({
			left:0,
			top:0,
			"-webkit-transform": "rotate(0deg)"
		});
		_clip12.css({
			left:0,
			top:0,
			"-webkit-transform": "rotate(0deg)"
		});
		_clip13.css({
			left:0,
			top:0,
			"-webkit-transform": "rotate(0deg)"
		});
		_clip14.css({
			left:0,
			top:0,
			"-webkit-transform": "rotate(0deg)"
		});
		_clip15.css({
			left:0,
			top:0,
			"-webkit-transform": "rotate(0deg)"
		});
	}
}
