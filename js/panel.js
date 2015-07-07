$( document ).ready(function() {

	var x = false;
	var y = false;

	$('.control').click(function(){
		$('.control').removeClass('selected');
		$(this).addClass('selected');
	});

	$('.y').click(function(){
		x = false;
		y = true;
	});

	$('.x').click(function(){
		x = true;
		y = false;
	});

	$('.color').click(function(){
		$('.color').removeClass('selected');
		$(this).addClass('selected'); 
	});

	$('.c1').click(function(){
		if(x === true){
			$('body').append("<div class='guideX'><div class='line c1'></div></div>");
		}
		else{
			$('body').append("<div class='guideY'><div class='line c1'></div></div>");
		}

		$('.guideX').draggable({ axis:"y" });
		$('.guideY').draggable({ axis:"x" });
	});

	$('.c2').click(function(){
		if(x === true){
			$('body').append("<div class='guideX'><div class='line c2'></div></div>");
		}
		else{
			$('body').append("<div class='guideY'><div class='line c2'></div></div>");
		}
		$('.guideX').draggable({ axis:"y" });
		$('.guideY').draggable({ axis:"x" });
	});

	$('.c3').click(function(){
		if(x === true){
			$('body').append("<div class='guideX'><div class='line c3'></div></div>");
		}
		else{
			$('body').append("<div class='guideY'><div class='line c3'></div></div>");
		}
		$('.guideX').draggable({ axis:"y" });
		$('.guideY').draggable({ axis:"x" });
	});

	$('.c4').click(function(){
		if(x === true){
			$('body').append("<div class='guideX'><div class='line c4'></div></div>");
		}
		else{
			$('body').append("<div class='guideY'><div class='line c4'></div></div>");
		}
		$('.guideX').draggable({ axis:"y" });
		$('.guideY').draggable({ axis:"x" });
	});

	$('.c5').click(function(){
		if(x === true){
			$('body').append("<div class='guideX'><div class='line c5'></div></div>");
		}
		else{
			$('body').append("<div class='guideY'><div class='line c5'></div></div>");
		}
		$('.guideX').draggable({ axis:"y" });
		$('.guideY').draggable({ axis:"x" });
	});

	$('.c6').click(function(){
		if(x === true){
			$('body').append("<div class='guideX'><div class='line c6'></div></div>");
		}
		else{
			$('body').append("<div class='guideY'><div class='line c6'></div></div>");
		}
		$('.guideX').draggable({ axis:"y" });
		$('.guideY').draggable({ axis:"x" });
	});

});	