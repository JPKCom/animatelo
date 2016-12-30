; (function (animate) {
    'use strict';
    animate.bounceInLeft = function (selector, options) {
        var keyframeset = [
            {
                opacity: 0,
                transform: 'translate3d(-2000px, 0, 0)',
                animationTimingFunction: 'cubic-bezier(0.215, 0.610, 0.355, 1.000)',
                offset: 0
            },
            {
                opacity: 1,
                transform: 'translate3d(25px, 0, 0)',
                animationTimingFunction: 'cubic-bezier(0.215, 0.610, 0.355, 1.000)',
                offset: 0.6
            },
            {
                transform: 'translate3d(-10px, 0, 0)',
                animationTimingFunction: 'cubic-bezier(0.215, 0.610, 0.355, 1.000)',
                offset: 0.75
            },
            {
                transform: 'translate3d(5px, 0, 0)',
                animationTimingFunction: 'cubic-bezier(0.215, 0.610, 0.355, 1.000)',
                offset: 0.9
            },
            {
                opacity: 1,
                transform: 'none',
                animationTimingFunction: 'cubic-bezier(0.215, 0.610, 0.355, 1.000)',
                offset: 1
            }
        ];
        return animate._animate(selector, keyframeset, options);
    }
})(window.animate = window.animate || {});
