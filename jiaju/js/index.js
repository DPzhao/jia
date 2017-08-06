$(function(){
	/*导航栏滑动效果*/
	$('.navlist').mouseenter(function(){
		$('.item').stop().slideDown(200);
	})
	$('.navlist').mouseleave(function(){
		$('.item').stop().slideUp(200);
	})
	$('.item').mouseenter(function(){
		$(this).find('.itemA').stop().slideDown(200);
	})
	$('.item').mouseleave(function(){
		$(this).find('.itemA').stop().slideUp(200);
	})



	/*点击出现*/
	$('#main-box3>.wrap>ul>li').click(function(){
		//遮罩层
		$('.shadow').show();
		
		//获取当前定位高度
		var s_top=$('body').scrollTop();
		var w_top=$('window').height();  
		var img_wrap_top=$('img_wrap').height();
		var n_top=s_top+w_top-img_wrap_top;
		//图片出现动画
		$('.img_wrap').show().animate({'top':n_top+70+'px','width':'503px','height':'503px','opacity':'1'},1000);

		//编号
		var index=$(this).index();
		$('.img_wrap').find('img').eq(index).stop().show().siblings('img').hide();

		//获取标签
		var num=document.getElementById('num');
		var i=index+1;
		var str='Image '+i+' of 12';
		num.innerHTML=str;


		/*图片跳转*/
		$('.prev').click(function(){
			index--;
			i--;
			if(i<1){
				i=1;
			}
			if(index<0){
				index=0;
			}
			$('.img_wrap').find('img').eq(index).stop().fadeIn(1000).siblings('img').hide();		
			str='Image '+i+' of 12';
			num.innerHTML=str;

		})
		$('.next').click(function(){
			index++;
			i++;
			if(i>12){
				i=12;
			}
			if(index>11){
				index=11;
			}
			$('.img_wrap').find('img').eq(index).stop().fadeIn(1000).siblings('img').hide();	
			str='Image '+i+' of 12';
			num.innerHTML=str;
		})
	})

	/*点击消失*/
	$('.shadow').click(function(){
		$('.shadow').hide();
		$('.img_wrap').hide();
	})

})