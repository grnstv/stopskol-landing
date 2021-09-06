    // onload
    //if(document.body.clientWidth >= 768) {
    //    $('video').attr('autoplay', true);
    //}

    // If you want to autoplay when the window is resized wider than 780px 
    // after load, you can add this:

    //$(window).resize(function() {
    //    if(document.body.clientWidth >= 768) {
    //        $('video').attr('autoplay', true);
    //    }
    //});


	$('.header-nav a').click(function(){
		$("html, body").animate({ scrollTop: $($(this).attr('href')).offset().top-100 }, 1000);
	});
	$('#f-carousel .carousel-control-next').click(function(){
	    var next = $('.f-title .active').removeClass('active').next();
	    if (next.length == 0) { next = $('.f-title li').first(); }
	    next.addClass('active');
	});	
	$('#f-carousel .carousel-control-prev').click(function(){
	    var prev = $('.f-title .active').removeClass('active').prev();
	    if (prev.length == 0) { prev = $('.f-title li').last(); }
	    prev.addClass('active');
	});	

	$(document).ready(function() {
	   $(".swap_toggle").swiperight(function() {
	      $('#f-carousel').carousel('prev');
		    var prev = $('.f-title .active').removeClass('active').prev();
		    if (prev.length == 0) { prev = $('.f-title li').last(); }
		    prev.addClass('active');	      
	    });
	   $(".swap_toggle").swipeleft(function() {
	      $('#f-carousel').carousel('next');
		    var next = $('.f-title .active').removeClass('active').next();
		    if (next.length == 0) { next = $('.f-title li').first(); }
		    next.addClass('active');	      

	   });		
	  var toggleAffix = function(affixElement, scrollElement, wrapper) {	  
	    var height = affixElement.outerHeight(),
	        top = wrapper.offset().top;	    
	        var doc_h = $(window).height();
	        var transp_offset = doc_h/7;
	    if (scrollElement.scrollTop() >= top+transp_offset){
	        wrapper.height(height);
	        affixElement.addClass("affix");
	        $('.scroll-down').addClass("opacity-0");
	    }
	    else {
	        affixElement.removeClass("affix");
	        $('.scroll-down').removeClass("opacity-0");
	        wrapper.height('auto');
	    }	      
	  };
	  
	  $('[data-toggle="affix"]').each(function() {
	    var ele = $(this),
	        wrapper = $('<div></div>');    
	    ele.before(wrapper);
	    $(window).on('scroll resize', function() {
	        toggleAffix(ele, $(this), wrapper);
	    });	    
	    // init
	    toggleAffix(ele, $(window), wrapper);
	  });
	function isScrolledIntoView(elem)
	{
	    var docViewTop = $(window).scrollTop();
	    var docViewBottom = docViewTop + $(window).height();
	    console.log('TOP '+docViewTop);
	    console.log('BOTT '+docViewBottom);
	    var elemTop = $(elem).offset().top;
	    var elemBottom = elemTop + $(elem).outerHeight();

	    console.log('Elem T '+elemTop);
	    console.log('Elem b '+elemBottom);
	    return !(docViewTop >= elemBottom);
	}	  
	$(window).on( 'scroll', function(){
	   var home_visible = isScrolledIntoView('#home');
	   if(!home_visible){
	   	$('.home').addClass('hidden');
	   	$('.rain').removeClass('hidden');
	   }else{
	   	$('.home').removeClass('hidden');
	   	$('.rain').addClass('hidden');	   	
	   }
	});	

	});
	$('.triggerthemfknmodal').click(function(){
		$("#myModal").removeClass('hidden');
		$("body").addClass('position-fixed-tricky');
	});
	$('#myModal').click(function(){
		$("#myModal").addClass('hidden');
		$("body").removeClass('position-fixed-tricky');
	});

	$('.triggerthepatent').click(function(){
		$("#myPatent").removeClass('hidden');
		$("body").addClass('position-fixed-tricky');
	});
	$('#myPatent').click(function(){
		$("#myPatent").addClass('hidden');
		$("body").removeClass('position-fixed-tricky');
	});	