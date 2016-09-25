(function ($) {

    $.fn.isOnScreen = function(){

        var x = 1;
        var y = 1;

        var win = $(window);

        var viewport = {
            top : win.scrollTop(),
            left : win.scrollLeft()
        };
        viewport.right = viewport.left + win.width();
        viewport.bottom = viewport.top + win.height();

        var height = this.outerHeight();
        var width = this.outerWidth();

        if(!width || !height){
            return false;
        }

        var bounds = this.offset();
        bounds.right = bounds.left + width;
        bounds.bottom = bounds.top + height;

        var deltas = {
            top : Math.min(bounds.bottom - viewport.top, win.height()),
            bottom : Math.min(viewport.bottom - bounds.top, win.height())
        };
        
        var delta =  Math.min(deltas.top, deltas.bottom)
        delta = Math.max(0, delta)

        return [delta, win.height(), delta / win.height()];

    };

})(jQuery);
