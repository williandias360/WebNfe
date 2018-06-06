/**
 * @autor MarceL Aimar <marcel_aimar@hotmail.com>
 * @param {type} $
 * @returns {undefined}
 */
(function ($) {
    $.fn.delayEvent = function (event, callback, ms) {
        var timer = 0;
        var plugin;
        $(this).bind(event, function (e) {
            clearTimeout(timer);
            plugin = this;

            timer = setTimeout(function () {
                callback.call(plugin, e);
            }, ms);
        });

        return this;
    };
})(jQuery);