# UpQode-Snippets

Sublime Text HTML Snippets
Install folder --> "c:\Users\USER_NAME\AppData\Roaming\Sublime Text 3\Packages\User\"
---

__sw2html__

```html
<script src="js/idangerous.swiper.min"></script>

<div class="swiper-container" data-autoplay="5000" data-loop="1" data-speed="1000" data-slides-per-view="responsive" data-add-slides="1" data-xs-slides="1" data-sm-slides="1" data-md-slides="1" data-lg-slides="1">
    <div class="swiper-wrapper">
            <div class="swiper-slide">
                <!-- swiper slide -->
                Slide 1
            </div>
            <!-- .swiper slide -->
            <div class="swiper-slide">
                <!-- swiper slide -->
                Slide 2
            </div>
            <!-- .swiper slide -->
            <div class="swiper-slide">
                <!-- swiper slide -->
                Slide 3
            </div>
            <!-- .swiper slide -->
    </div>
    <div class="pagination"></div>
    <div class="swiper-arrow-left"></div>
    <div class="swiper-arrow-right"></div>
</div>
```

__sw2css__

```css
.swiper-container {
    margin: 0 auto;
    position: relative;
    overflow: hidden;
    direction: ltr;
    -webkit-backface-visibility: hidden;
    -moz-backface-visibility: hidden;
    -ms-backface-visibility: hidden;
    -o-backface-visibility: hidden;
    backface-visibility: hidden;
    height: inherit;
}
.swiper-wrapper {
    position: relative;
    width: 100%;
    -webkit-transition-property: -webkit-transform, left, top;
    -webkit-transition-duration: 0s;
    -webkit-transform: translate3d(0px, 0, 0);
    -webkit-transition-timing-function: ease;
    -moz-transition-property: -moz-transform, left, top;
    -moz-transition-duration: 0s;
    -moz-transform: translate3d(0px, 0, 0);
    -moz-transition-timing-function: ease;
    -o-transition-property: -o-transform, left, top;
    -o-transition-duration: 0s;
    -o-transform: translate3d(0px, 0, 0);
    -o-transition-timing-function: ease;
    -o-transform: translate(0px, 0px);
    -ms-transition-property: -ms-transform, left, top;
    -ms-transition-duration: 0s;
    -ms-transform: translate3d(0px, 0, 0);
    -ms-transition-timing-function: ease;
    transition-property: transform, left, top;
    transition-duration: 0s;
    transform: translate3d(0px, 0, 0);
    transition-timing-function: ease;
    -webkit-box-sizing: content-box;
    -moz-box-sizing: content-box;
    box-sizing: content-box;
    cursor: ew-resize;
    margin: 0 auto;
    height: inherit;
    float: left;
}

.swiper-slide {
    float: left;
    height: inherit;
    position: relative;
}
```

__sw2js__

```js
;(function(\$, window, document, undefined) {
    "use strict";

    /*============================*/
	/* 01 - VARIABLES */
	/*============================*/
	var swipers = [], winW, winH, winScr, _isresponsive, smPoint = 768, mdPoint = 992, lgPoint = 1200, addPoint = 1600, _ismobile = navigator.userAgent.match(/Android/i) || navigator.userAgent.match(/webOS/i) || navigator.userAgent.match(/iPhone/i) || navigator.userAgent.match(/iPad/i) || navigator.userAgent.match(/iPod/i);


	/*========================*/
	/* 02 - PAGE CALCULATIONS */
	/*========================*/
	function pageCalculations(){
		winW = \$(window).width();
		winH = \$(window).height();
	}


	/*=================================*/
	/* 03 - FUNCTION ON DOCUMENT READY */
	/*=================================*/
	pageCalculations();


	/*============================*/
	/* 04 - FUNCTION ON PAGE LOAD */
	/*============================*/

	\$(window).load(function(){		
	    initSwiper();
	});


	/*==============================*/
	/* 05 - FUNCTION ON PAGE RESIZE */
	/*==============================*/
	function resizeCall(){
		pageCalculations();
		\$('.swiper-container.initialized[data-slides-per-view="responsive"]').each(function(){
			var thisSwiper = swipers['swiper-'+\$(this).attr('id')], \$t = \$(this), slidesPerViewVar = updateSlidesPerView(\$t), centerVar = thisSwiper.params.centeredSlides;
			thisSwiper.params.slidesPerView = slidesPerViewVar;
			thisSwiper.reInit();
			if(!centerVar){
				var paginationSpan = \$t.find('.pagination span');
				var paginationSlice = paginationSpan.hide().slice(0,(paginationSpan.length+1-slidesPerViewVar));
				if(paginationSlice.length<=1 || slidesPerViewVar>=\$t.find('.swiper-slide').length) \$t.addClass('pagination-hidden');
				else \$t.removeClass('pagination-hidden');
				paginationSlice.show();
			}
		});
	}
	if(!_ismobile){
		\$(window).resize(function(){
			resizeCall();
		});
	} else{
		window.addEventListener("orientationchange", function() {
			resizeCall();
		}, false);
	}

	/*=====================*/
	/* 06 - SWIPER SLIDERS */
	/*=====================*/

	function initSwiper(){
		var initIterator = 0;
		\$('.swiper-container').each(function(){								  
			var \$t = \$(this);								  

			var index = 'swiper-unique-id-'+initIterator;

			\$t.addClass('swiper-'+index + ' initialized').attr('id', index);
			\$t.find('.pagination').addClass('pagination-'+index);

			var autoPlayVar = parseInt(\$t.attr('data-autoplay'),10);
            var mode = \$t.attr('data-mode');
			var slidesPerViewVar = \$t.attr('data-slides-per-view');
			if(slidesPerViewVar == 'responsive'){
				slidesPerViewVar = updateSlidesPerView(\$t);
			}
			else slidesPerViewVar = parseInt(slidesPerViewVar,10);

			var loopVar = parseInt(\$t.attr('data-loop'),10);
			var speedVar = parseInt(\$t.attr('data-speed'),10);
            var centerVar = parseInt(\$t.attr('data-center'),10);
			swipers['swiper-'+index] = new Swiper('.swiper-'+index,{
				speed: speedVar,
				pagination: '.pagination-'+index,
				loop: loopVar,
				paginationClickable: true,
				autoplay: autoPlayVar,
				slidesPerView: slidesPerViewVar,
				keyboardControl: true,
				calculateHeight: true,
				simulateTouch: true,
				roundLengths: true,
				centeredSlides: centerVar,
                mode: mode || 'horizontal',
				onInit: function(swiper){
				    \$t.find('.swiper-slide').addClass('active');
				},
				onSlideChangeEnd: function(swiper){
					var activeIndex = (loopVar===1)?swiper.activeLoopIndex:swiper.activeIndex;
				},
				onSlideChangeStart: function(swiper){
					\$t.find('.swiper-slide.active').removeClass('active');
				}
			});
			swipers['swiper-'+index].reInit();
				if(\$t.attr('data-slides-per-view')=='responsive'){
					var paginationSpan = \$t.find('.pagination span');
					var paginationSlice = paginationSpan.hide().slice(0,(paginationSpan.length+1-slidesPerViewVar));
					if(paginationSlice.length<=1 || slidesPerViewVar>=\$t.find('.swiper-slide').length) \$t.addClass('pagination-hidden');
					else \$t.removeClass('pagination-hidden');
					paginationSlice.show();
				}

            if(\$t.find('.default-active').length){
                swipers['swiper-'+index].swipeTo(\$t.find('.swiper-slide').index(\$t.find('.default-active')), 0);    
            }

			initIterator++;
		});

	}

	function updateSlidesPerView(swiperContainer){
		if(winW>=addPoint) return parseInt(swiperContainer.attr('data-add-slides'),10);
		else if(winW>=lgPoint) return parseInt(swiperContainer.attr('data-lg-slides'),10);
		else if(winW>=mdPoint) return parseInt(swiperContainer.attr('data-md-slides'),10);
		else if(winW>=smPoint) return parseInt(swiperContainer.attr('data-sm-slides'),10);
		else return parseInt(swiperContainer.attr('data-xs-slides'),10);
	}


	//swiper arrows
	\$('.swiper-arrow-left').on('click', function(){
		swipers['swiper-'+\$(this).parent().attr('id')].swipePrev();
	});

	\$('.swiper-arrow-right').on('click', function(){
		swipers['swiper-'+\$(this).parent().attr('id')].swipeNext();
	});

    \$('.swiper-outer-left').on('click', function(){
		swipers['swiper-'+\$(this).parent().find('.swiper-container').attr('id')].swipePrev();
	});

	\$('.swiper-outer-right').on('click', function(){
		swipers['swiper-'+\$(this).parent().find('.swiper-container').attr('id')].swipeNext();
	});



})(jQuery, window, document);
```
