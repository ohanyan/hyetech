$(document).ready(function(){
	
	//Lightbox
	if($(".fancybox").length){
		
		$(".fancybox").fancybox();
		
	}
	
	// Slider
	if($(".slider").length){
		
		var slider1 = $('.slider').bxSlider({
			controls: false
		});
		
		$('.sliderbox1 .slide-left').click(function(){
    	slider1.goToPreviousSlide();
    	return false;
  	});

  	$('.sliderbox1 .slide-right').click(function(){
    	slider1.goToNextSlide();
    	return false;
  	});
		
	}
	
	// Slider
	if($(".slider2").length){
		
		var slider2 = $('.slider2').bxSlider({
			wrapperClass: 'slider2',
			controls: false,
			displaySlideQty: 5,
			moveSlideQty: 1
		});
		
		$('.sliderbox2 .slide-left').click(function(){
    	slider2.goToPreviousSlide();
    	return false;
  	});

  	$('.sliderbox2 .slide-right').click(function(){
    	slider2.goToNextSlide();
    	return false;
  	});
		
	}


	// Slider
	if($(".slider3").length){
		
		var slider3 = $('.slider3').bxSlider({
			controls: false,
			displaySlideQty: 6,
			moveSlideQty: 1
		});
		
		$('.events_container .slide-left').click(function(){
    	slider3.goToPreviousSlide();
    	return false;
  	});

  	$('.events_container .slide-right').click(function(){
    	slider3.goToNextSlide();
    	return false;
  	});
		
	}
	
	// Events Tabs
		$(".tab-content").hide(); //Hide all content
		$("ul.tabs li:first").addClass("active").show(); //Activate first tab
		$(".tab-content:first").show(); //Show first tab content
	
		//On Click Event
		$("ul.tabs li").click(function() {
	
			$("ul.tabs li").removeClass("active"); //Remove any "active" class
			$(this).addClass("active"); //Add "active" class to selected tab
			$(".tab-content").hide(); //Hide all tab content
	
			var activeTab = $(this).find("a").attr("href"); //Find the href attribute value to identify the active tab + content
			$(activeTab).fadeIn(); //Fade in the active ID content
			return false;
		});
		
		$(document).ready(function() {
		$.noConflict();					 									
		<!-- THE ACTIVATION OF THE MINI IMAGE SLIDER PLUGIN -->
		jQuery('#first_mini_slider').minislides(
			{										
				width:895,
				height:261,							
				slides:5,
				padding:25,
				ease:'easeOutQuint',
				speed:400,
				hidetoolbar:2000,
				animtype:1,
				mousewheel:'on'
			})
		
		<!-- THE ACTIVATION OF THE LIGHTBOX PLUGIN -->
		 jQuery('.freshlightbox').fhboxer({})
		 jQuery('.freshlightbox_round').fhboxer({
				hover_round:"true"
		 })
});


});