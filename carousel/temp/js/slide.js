<link rel="stylesheet" class="aplayer-secondary-style-marker" href="https://cdn.jsdelivr.net/npm/aplayer/dist/APlayer.min.css"><script src="https://cdn.jsdelivr.net/npm/aplayer/dist/APlayer.min.js" class="aplayer-secondary-script-marker"></script><script class="meting-secondary-script-marker" src="https://unpkg.com/meting@2.0.1/dist/Meting.min.js"></script>var pos=0,totalSlides=$("#slider-wrap ul li").length,sliderWidth=$("#slider-wrap").width();function slideLeft(){-1==--pos&&(pos=totalSlides-1),$("#slider-wrap ul#slider").css("left",-sliderWidth*pos),countSlides(),pagination()}function slideRight(){++pos==totalSlides&&(pos=0),$("#slider-wrap ul#slider").css("left",-sliderWidth*pos),countSlides(),pagination()}function countSlides(){$("#counter").html(pos+1+" / "+totalSlides)}function pagination(){$("#pagination-wrap ul li").removeClass("active"),$("#pagination-wrap ul li:eq("+pos+")").addClass("active")}$(document).ready(function(){$("#slider-wrap ul#slider").width(sliderWidth*totalSlides),$("#next").click(function(){slideRight()}),$("#previous").click(function(){slideLeft()});var i=setInterval(slideRight,3e3);$.each($("#slider-wrap ul li"),function(){var i=$(this).attr("data-color");$(this).css("background",i);var t=document.createElement("li");$("#pagination-wrap ul").append(t)}),countSlides(),pagination(),$("#slider-wrap").hover(function(){$(this).addClass("active"),clearInterval(i)},function(){$(this).removeClass("active"),i=setInterval(slideRight,3e3)})});