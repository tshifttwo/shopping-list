$(document).ready(function(){


 $('body').keydown(function(one){
 	if(one.keyCode == 49){
   	 $('.ent-one').show();
   	  }
 });

$('body').keydown(function(two){
 	if(two.keyCode == 50){
    $('.ent-two').show();
   	}
});

 $('body').keydown(function(three){
 	if(three.keyCode == 51){
    $('.ent-three').show();
   	}
 });

 $('body').keydown(function(four){
 	if(four.keyCode == 52){
    $('.ent-four').show();
   	}
   	});
 
 $('body').keypress(function(five){
 	if(five.keyCode == 53){
    $('.ent-five').show();
   	}
   	});

 $('body').keypress(function(six){
 	if(six.keyCode == 54){
    $('.ent-six').show();
   	}
   	});

  $('body').keypress(function(seven){
 	if(seven.keyCode == 55){
    $('.ent-seven').show();
   	}
   	});

 $('body').keypress(function(eight){
 	if(eight.keyCode == 56){
    $('.ent-eight').show();
   	}
   	});

$(".plus-sign").click(function(){
	if($('.ent-one').is(':visible')) {
	$('.ent-one').hide();
	$('.one').show();
	}
	});

$(".plus-sign").click(function(){
	if($('.ent-two').is(':visible')) {
	$('.ent-two').hide();
	$('.two').show();
	}
	});

$(".plus-sign").click(function(){
	if($('.ent-three').is(':visible')) {
	$('.ent-three').hide();
	$('.three').show();
	}
	});

$(".plus-sign").click(function(){
	if($('.ent-four').is(':visible')) {
	$('.ent-four').hide();
	$('.four').show();
	}
	});

$(".plus-sign").click(function(){
	if($('.ent-five').is(':visible')) {
	$('.ent-five').hide();
	$('.five').show();
	}
	});

$(".plus-sign").click(function(){
	if($('.ent-six').is(':visible')) {
	$('.ent-six').hide();
	$('.six').show();
	}
	});

$(".plus-sign").click(function(){
	if($('.ent-seven').is(':visible')) {
	$('.ent-seven').hide();
	$('.seven').show();
	}
	});

$(".plus-sign").click(function(){
	if($('.ent-eight').is(':visible')) {
	$('.ent-eight').hide();
	$('.eight').show();
	}
	});


	$(".inputs").on("click", "li", function() {
	    $(this).toggleClass("selected");
	});

  $('body').keydown(function(x){
 	if(x.keyCode == 88){
    $('.selected').hide();
    $('.selected').removeClass("selected");
   	}
   	});


});



