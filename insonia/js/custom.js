jQuery(document).ready(function( $ ) {
	"use strict";

	// Overlay Search
	$("#fl-top-bar .search-icon").click(function () {
		if ($(".search-icon .fa-times").css("display") == "none") {
	        $(".search-icon .fa-search").fadeOut(250);
            $(".search-icon .fa-times").delay(250).fadeIn(250);
            $("#fl-search-overlay").delay(250).fadeIn(250);

            $(".push-overlay").removeClass("push-overlay-open");
            $(".fl-drawer").removeClass("pushmenu-open");
            $("#mobile-menu-icon").removeClass("active");
        } else {
			$(".search-icon .fa-times").fadeOut(250);
            $("#fl-search-overlay").fadeOut(250);
	        $(".search-icon .fa-search").delay(250).fadeIn(250);
        }
	});    
    $("#fl-search-overlay").click(function (e){
        var container = $(".overlay-search");

        if (!container.is(e.target) && container.has(e.target).length === 0) {
            $(".search-icon .fa-times").fadeOut(250);
            $("#fl-search-overlay").fadeOut(250);
            $(".search-icon .fa-search").delay(250).fadeIn(250);
        }
    });

    // Drawer
	//$("#mobile-menu-icon").click(function() {
        //if($("#mobile-menu-icon").is(".active")) {
           //$(".push-overlay").removeClass("push-overlay-open");
           //$(".fl-drawer").removeClass("pushmenu-open");
           //$("#mobile-menu-icon").removeClass("active");
        //} else {            
            //setTimeout(function(){
             //   $(".push-overlay").addClass("push-overlay-open");
             //   $(".fl-drawer").addClass("pushmenu-open");
            //}, 350);
            
            //$("#mobile-menu-icon").addClass("active");

            //$(".search-icon .fa-times").fadeOut();
            //$("#fl-search-overlay").fadeOut();
            //$(".search-icon .fa-search").delay(250).fadeIn();
        //}
	//});
	//$(".push-overlay, .active").click(function() {
	//	$(".push-overlay").removeClass("push-overlay-open");
//		$(".fl-drawer").removeClass("pushmenu-open");
//        $("#mobile-menu-icon").removeClass("active");
//	});

    // Tabs
    $(".fl-loop-section").hide();
    $(".fl-loop-tabs a:first").addClass("active");
    $(".fl-loop-section:first").fadeIn();
    $(".fl-loop-tabs a").click(function(e) {
        e.preventDefault();
        if ( $(this).hasClass("active") ) {
            return
        }
        else {             
            $(".fl-loop-section").hide();
            $(".fl-loop-tabs a").removeClass("active");
            $(this).addClass("active");
            $( $(this).attr("href")).fadeIn();
        }
    });

    // Mega Menu Tabs
    $(".fl-megamenu .megamenu").each(function() {

        var $myTabs = $(this);

        $myTabs.find(".megamenu-list").hide().last().show();
        $myTabs.find(".cats-list a:first").addClass("active").show();

        $myTabs.find(".cats-list a").click(function() {
            var $this = $(this);

            $this.addClass("active").siblings().removeClass("active");
            $myTabs.find(".megamenu-list").hide();
            $( $(this).attr("href") ).fadeIn();
            
            return false;
        });
    });

	// widget menu according
    var allPanels = $(".fl-widget .menu .menu-item-has-children .sub-menu").hide();
    $(".fl-widget .menu .menu-item-has-children a").click(function (event) {
        if($(this).next(".sub-menu").is(":hidden")) {
            event.preventDefault();
            $( this ).parent().children( ".sub-menu" ).slideDown();
            $( this ).addClass("close-rotate");
        } else {
        	$( this ).parent().children( ".sub-menu" ).slideUp();
        	$( this ).removeClass("close-rotate");
        }
    });

    // Tabs Width
    var numItems = $(".fl-loop-tabs a").length;
    $(".fl-loop-tabs a").css( "width", 100/numItems + "%" );

    // Sticky Sideabr
    if ($("#fl-top-bar").css("position") === "fixed") {
        $("#fl-sidebar").theiaStickySidebar({
            additionalMarginTop: 64,
            minWidth: 944,
        });
    } else {
        //$("#fl-sidebar").theiaStickySidebar({ minWidth: 944 });
    }


//----------------------------------------------------------

// Infinite Scroll

    //General

    //Latest Posts
    $("#fl-latest-posts .fl-loop-posts").infinitescroll({ 
        navSelector  : "#fl-latest-posts .fl-navigation",
        nextSelector : "#fl-latest-posts .fl-navigation .older a",    
        itemSelector : "#fl-latest-posts .fl-loop-posts article.post",
        errorCallback: function(){ $("#fl-latest-posts .fl-load-more").css("display", "none") }
    });
    $(window).unbind(".infscr");
    $("#fl-latest-posts .fl-load-more").click(function(){
        $("#fl-latest-posts .fl-loop-posts").infinitescroll("retrieve");
        return false;
    });
    $(window).load(function(){
        if ($("#fl-latest-posts .fl-navigation .older a").length) {
            $("#fl-latest-posts .fl-load-more").css("display","block");
        } else {
            $("#fl-latest-posts .fl-load-more").css("display","none");
        }
    });

    // Trending
    $("#fl-trending-posts .fl-loop-posts").infinitescroll({ 
        navSelector  : "#fl-trending-posts .fl-navigation",
        nextSelector : "#fl-trending-posts .fl-navigation .older a",    
        itemSelector : "#fl-trending-posts .fl-loop-posts article.post",
        errorCallback: function(){ $("#fl-trending-posts .fl-load-more").css("display", "none") }
    });
    $(window).unbind(".infscr");
    $("#fl-trending-posts .fl-load-more").click(function(){
        $("#fl-trending-posts .fl-loop-posts").infinitescroll("retrieve");
        return false;
    });
    $(window).load(function(){
        if ($("#fl-trending-posts .fl-navigation .older a").length) {
            $("#fl-trending-posts .fl-load-more").css("display","block");
        } else {
            $("#fl-trending-posts .fl-load-more").css("display","none");
        }
    });

    // Audio
    $("#fl-audio-posts .fl-loop-posts").infinitescroll({ 
        navSelector  : "#fl-audio-posts .fl-navigation",
        nextSelector : "#fl-audio-posts .fl-navigation .older a",    
        itemSelector : "#fl-audio-posts .fl-loop-posts article.post",
        errorCallback: function(){ $("#fl-audio-posts .fl-load-more").css("display", "none") }
    });
    $(window).unbind(".infscr");
    $("#fl-audio-posts .fl-load-more").click(function(){
        $("#fl-audio-posts .fl-loop-posts").infinitescroll("retrieve");
        return false;
    });
    $(window).load(function(){
        if ($("#fl-audio-posts .fl-navigation .older a").length) {
            $("#fl-audio-posts .fl-load-more").css("display","block");
        } else {
            $("#fl-audio-posts .fl-load-more").css("display","none");
        }
    });

    // Video
    $("#fl-video-posts .fl-loop-posts").infinitescroll({ 
        navSelector  : "#fl-video-posts .fl-navigation",
        nextSelector : "#fl-video-posts .fl-navigation .older a",    
        itemSelector : "#fl-video-posts .fl-loop-posts article.post",
        errorCallback: function(){ $("#fl-video-posts .fl-load-more").css("display", "none") }
    });
    $(window).unbind(".infscr");
    $("#fl-video-posts .fl-load-more").click(function(){
        $("#fl-video-posts .fl-loop-posts").infinitescroll("retrieve");
        return false;
    });
    $(window).load(function(){
        if ($("#fl-video-posts .fl-navigation .older a").length) {
            $("#fl-video-posts .fl-load-more").css("display","block");
        } else {
            $("#fl-video-posts .fl-load-more").css("display","none");
        }
    });

    // Gallery
    $("#fl-gallery-posts .fl-loop-posts").infinitescroll({ 
        navSelector  : "#fl-gallery-posts .fl-navigation",
        nextSelector : "#fl-gallery-posts .fl-navigation .older a",    
        itemSelector : "#fl-gallery-posts .fl-loop-posts article.post",
        errorCallback: function(){ $("#fl-gallery-posts .fl-load-more").css("display", "none") }
    });
    $(window).unbind(".infscr");
    $("#fl-gallery-posts .fl-load-more").click(function(){
        $("#fl-gallery-posts .fl-loop-posts").infinitescroll("retrieve");
        return false;
    });
    $(window).load(function(){
        if ($("#fl-gallery-posts .fl-navigation .older a").length) {
            $("#fl-gallery-posts .fl-load-more").css("display","block");
        } else {
            $("#fl-gallery-posts .fl-load-more").css("display","none");
        }
    });
    
    
});
