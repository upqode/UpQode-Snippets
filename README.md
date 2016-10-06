# UpQode-Snippets

Sublime Text HTML Snippets
Install folder --> "c:\Users\USER_NAME\AppData\Roaming\Sublime Text 3\Packages\User\"
---

__sw2html__ - Swiper 2 HTML

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

__sw2css__ - Swiper 2 CSS
http://upqode.com/projects/help/swiper-v2/

__sw2js__ - Swiper 2 JS
http://upqode.com/projects/help/swiper-v2/

__log__

```js
console.log($1)
```

__ctm-sel-html__ - Bootstrap Custom Select CSS - https://silviomoreto.github.io/bootstrap-select/

```html
<link href="css/bootstrap.min.css" rel="stylesheet" type="text/css">
<link href="css/bootstrap-select.min.css" rel="stylesheet" type="text/css">

<div class="wpc-select">
     <select class="selectpicker" data-size="false" data-width="100%" data-class="select-1">
          <option>Option 1</option>
          <option>Option 2</option>
          <option>Option 3</option>
     </select>
</div>

<script src="js/bootstrap.min.js"></script>
<script src="js/bootstrap-select.min.js"></script>
```

__ctm-sel-js__ - Bootstrap Custom Select JS - https://silviomoreto.github.io/bootstrap-select/

```js
function selectInit(){
	$('.selectpicker').each(function(){
		var self = $(this);
		var selectStyle = self.attr('data-class');//additional style attribute, not required
		self.selectpicker({
		     style: 'cst-select ' + selectStyle //add classes to customize select field
	        });
	});
}
```

__gmap-html__ - Google Map HTML

```html
<script src="http://maps.googleapis.com/maps/api/js?v=3.exp"></script>

<!--
data-style="custom"
-->
<div
  class="wpc-map"
  data-lat="40.7143528"
  data-lng="-74.0059731"  
  data-marker="img/theme-1/marker.png"
  data-zoom="10"
  data-style="style-1"
  data-string="WPC string",
></div>
<script>var style_map = "insert code from snazzymaps.com (only custom style)"</script>
```

__gmap-js__ - Google Map JS

http://upqode.com/projects/help/map/

__img-to-bg__ - img tag to background property JS

```js
function changeImgToBg( imgSel, parentSel){

  if (!imgSel) {
    console.info('no img selector');
    return false;
  }

  var $parent, _this;

  $(imgSel).each(function(){
    _this = $(this);
    $parent = _this.closest( parentSel );
    $parent = $parent.length ? $parent : _this.parent();
    $parent.css( 'background-image' , 'url(' + this.src + ')' );
    _this.hide()
  });

}

changeImgToBg('.js-bg');
```

__wp-menu-css__ - WordPress Standart Menu CSS
http://upqode.com/projects/help/responsive-menu/

__wp-menu-html__ - WordPress Standart Menu HTML
http://upqode.com/projects/help/responsive-menu/

__wp-menu-js__ - WordPress Standart Menu JS
http://upqode.com/projects/help/responsive-menu/

__wp-pag__ - WordPress Standart Pagination HTML
```html
<div class="pagination">
	<a class="prev page-numbers" href="#">Предыдущая страница</a>
	<a class="page-numbers" href="#">1</a>
	<span class="page-numbers current">2</span>
	<a class="page-numbers" href="#">3</a>
	<a class="next page-numbers" href="#">Следующая страница</a>
</div>
```

__mmxw__
```css
@media screen and (max-width: $1px) {

}
```
