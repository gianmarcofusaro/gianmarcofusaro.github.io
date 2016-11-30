
var bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };

window.AnimationInOut = (function() {
  function AnimationInOut(ref) {
    this.ref = ref;
    this.onScroll = bind(this.onScroll, this);
    this.w = $(window);
    this.items = this.ref.find('.js-in-out-item');
    this.w.scroll(this.onScroll);
    this.onScroll();
  }

  AnimationInOut.prototype.onScroll = function() {
    return this.items.each(function() {
      var offset;
      offset = $(this).attr('data-offset') != null ? parseInt($(this).attr('data-offset')) : 200;
      if ($(this).isOnScreen(offset)) {
        $(this).addClass('animation-in');
        if ($(this).hasClass('js-hasSiblings')) {
          return $($(this).attr('data-sibling')).addClass('animation-in');
        }
      } else {
        if (!$(this).hasClass('js-outOff')) {
          return $(this).removeClass('animation-in');
        }
      }
    });
  };

  return AnimationInOut;

})();

var _animation = $('.js-animation');

  if (_animation.length > 0) {
    window.animation = new AnimationInOut(_animation);
  }






