/*---- Easing -----*/
jQuery.easing.jswing=jQuery.easing.swing;jQuery.extend(jQuery.easing,{def:"easeOutQuad",swing:function(e,f,a,h,g){return jQuery.easing[jQuery.easing.def](e,f,a,h,g)},easeInQuad:function(e,f,a,h,g){return h*(f/=g)*f+a},easeOutQuad:function(e,f,a,h,g){return -h*(f/=g)*(f-2)+a},easeInOutQuad:function(e,f,a,h,g){if((f/=g/2)<1){return h/2*f*f+a}return -h/2*((--f)*(f-2)-1)+a},easeInCubic:function(e,f,a,h,g){return h*(f/=g)*f*f+a},easeOutCubic:function(e,f,a,h,g){return h*((f=f/g-1)*f*f+1)+a},easeInOutCubic:function(e,f,a,h,g){if((f/=g/2)<1){return h/2*f*f*f+a}return h/2*((f-=2)*f*f+2)+a},easeInQuart:function(e,f,a,h,g){return h*(f/=g)*f*f*f+a},easeOutQuart:function(e,f,a,h,g){return -h*((f=f/g-1)*f*f*f-1)+a},easeInOutQuart:function(e,f,a,h,g){if((f/=g/2)<1){return h/2*f*f*f*f+a}return -h/2*((f-=2)*f*f*f-2)+a},easeInQuint:function(e,f,a,h,g){return h*(f/=g)*f*f*f*f+a},easeOutQuint:function(e,f,a,h,g){return h*((f=f/g-1)*f*f*f*f+1)+a},easeInOutQuint:function(e,f,a,h,g){if((f/=g/2)<1){return h/2*f*f*f*f*f+a}return h/2*((f-=2)*f*f*f*f+2)+a},easeInSine:function(e,f,a,h,g){return -h*Math.cos(f/g*(Math.PI/2))+h+a},easeOutSine:function(e,f,a,h,g){return h*Math.sin(f/g*(Math.PI/2))+a},easeInOutSine:function(e,f,a,h,g){return -h/2*(Math.cos(Math.PI*f/g)-1)+a},easeInExpo:function(e,f,a,h,g){return(f==0)?a:h*Math.pow(2,10*(f/g-1))+a},easeOutExpo:function(e,f,a,h,g){return(f==g)?a+h:h*(-Math.pow(2,-10*f/g)+1)+a},easeInOutExpo:function(e,f,a,h,g){if(f==0){return a}if(f==g){return a+h}if((f/=g/2)<1){return h/2*Math.pow(2,10*(f-1))+a}return h/2*(-Math.pow(2,-10*--f)+2)+a},easeInCirc:function(e,f,a,h,g){return -h*(Math.sqrt(1-(f/=g)*f)-1)+a},easeOutCirc:function(e,f,a,h,g){return h*Math.sqrt(1-(f=f/g-1)*f)+a},easeInOutCirc:function(e,f,a,h,g){if((f/=g/2)<1){return -h/2*(Math.sqrt(1-f*f)-1)+a}return h/2*(Math.sqrt(1-(f-=2)*f)+1)+a},easeInElastic:function(f,h,e,l,k){var i=1.70158;var j=0;var g=l;if(h==0){return e}if((h/=k)==1){return e+l}if(!j){j=k*0.3}if(g<Math.abs(l)){g=l;var i=j/4}else{var i=j/(2*Math.PI)*Math.asin(l/g)}return -(g*Math.pow(2,10*(h-=1))*Math.sin((h*k-i)*(2*Math.PI)/j))+e},easeOutElastic:function(f,h,e,l,k){var i=1.70158;var j=0;var g=l;if(h==0){return e}if((h/=k)==1){return e+l}if(!j){j=k*0.3}if(g<Math.abs(l)){g=l;var i=j/4}else{var i=j/(2*Math.PI)*Math.asin(l/g)}return g*Math.pow(2,-10*h)*Math.sin((h*k-i)*(2*Math.PI)/j)+l+e},easeInOutElastic:function(f,h,e,l,k){var i=1.70158;var j=0;var g=l;if(h==0){return e}if((h/=k/2)==2){return e+l}if(!j){j=k*(0.3*1.5)}if(g<Math.abs(l)){g=l;var i=j/4}else{var i=j/(2*Math.PI)*Math.asin(l/g)}if(h<1){return -0.5*(g*Math.pow(2,10*(h-=1))*Math.sin((h*k-i)*(2*Math.PI)/j))+e}return g*Math.pow(2,-10*(h-=1))*Math.sin((h*k-i)*(2*Math.PI)/j)*0.5+l+e},easeInBack:function(e,f,a,i,h,g){if(g==undefined){g=1.70158}return i*(f/=h)*f*((g+1)*f-g)+a},easeOutBack:function(e,f,a,i,h,g){if(g==undefined){g=1.70158}return i*((f=f/h-1)*f*((g+1)*f+g)+1)+a},easeInOutBack:function(e,f,a,i,h,g){if(g==undefined){g=1.70158}if((f/=h/2)<1){return i/2*(f*f*(((g*=(1.525))+1)*f-g))+a}return i/2*((f-=2)*f*(((g*=(1.525))+1)*f+g)+2)+a},easeInBounce:function(e,f,a,h,g){return h-jQuery.easing.easeOutBounce(e,g-f,0,h,g)+a},easeOutBounce:function(e,f,a,h,g){if((f/=g)<(1/2.75)){return h*(7.5625*f*f)+a}else{if(f<(2/2.75)){return h*(7.5625*(f-=(1.5/2.75))*f+0.75)+a}else{if(f<(2.5/2.75)){return h*(7.5625*(f-=(2.25/2.75))*f+0.9375)+a}else{return h*(7.5625*(f-=(2.625/2.75))*f+0.984375)+a}}}},easeInOutBounce:function(e,f,a,h,g){if(f<g/2){return jQuery.easing.easeInBounce(e,f*2,0,h,g)*0.5+a}return jQuery.easing.easeOutBounce(e,f*2-g,0,h,g)*0.5+h*0.5+a}});

/**
 * hoverIntent is similar to jQuery's built-in "hover" method except that
 * instead of firing the handlerIn function immediately, hoverIntent checks
 * to see if the user's mouse has slowed down (beneath the sensitivity
 * threshold) before firing the event. The handlerOut function is only
 * called after a matching handlerIn.
 *
 * hoverIntent r7 // 2013.03.11 // jQuery 1.9.1+
 * http://cherne.net/brian/resources/jquery.hoverIntent.html
 *
 * You may use hoverIntent under the terms of the MIT license. Basically that
 * means you are free to use hoverIntent as long as this header is left intact.
 * Copyright 2007, 2013 Brian Cherne
 *
 * // basic usage ... just like .hover()
 * .hoverIntent( handlerIn, handlerOut )
 * .hoverIntent( handlerInOut )
 *
 * // basic usage ... with event delegation!
 * .hoverIntent( handlerIn, handlerOut, selector )
 * .hoverIntent( handlerInOut, selector )
 *
 * // using a basic configuration object
 * .hoverIntent( config )
 *
 * @param  handlerIn   function OR configuration object
 * @param  handlerOut  function OR selector for delegation OR undefined
 * @param  selector    selector OR undefined
 * @author Brian Cherne <brian(at)cherne(dot)net>
 **/
(function($) {
    $.fn.hoverIntent = function(handlerIn,handlerOut,selector) {

        // default configuration values
        var cfg = {
            interval: 100,
            sensitivity: 7,
            timeout: 0
        };

        if ( typeof handlerIn === "object" ) {
            cfg = $.extend(cfg, handlerIn );
        } else if ($.isFunction(handlerOut)) {
            cfg = $.extend(cfg, { over: handlerIn, out: handlerOut, selector: selector } );
        } else {
            cfg = $.extend(cfg, { over: handlerIn, out: handlerIn, selector: handlerOut } );
        }

        // instantiate variables
        // cX, cY = current X and Y position of mouse, updated by mousemove event
        // pX, pY = previous X and Y position of mouse, set by mouseover and polling interval
        var cX, cY, pX, pY;

        // A private function for getting mouse position
        var track = function(ev) {
            cX = ev.pageX;
            cY = ev.pageY;
        };

        // A private function for comparing current and previous mouse position
        var compare = function(ev,ob) {
            ob.hoverIntent_t = clearTimeout(ob.hoverIntent_t);
            // compare mouse positions to see if they've crossed the threshold
            if ( ( Math.abs(pX-cX) + Math.abs(pY-cY) ) < cfg.sensitivity ) {
                $(ob).off("mousemove.hoverIntent",track);
                // set hoverIntent state to true (so mouseOut can be called)
                ob.hoverIntent_s = 1;
                return cfg.over.apply(ob,[ev]);
            } else {
                // set previous coordinates for next time
                pX = cX; pY = cY;
                // use self-calling timeout, guarantees intervals are spaced out properly (avoids JavaScript timer bugs)
                ob.hoverIntent_t = setTimeout( function(){compare(ev, ob);} , cfg.interval );
            }
        };

        // A private function for delaying the mouseOut function
        var delay = function(ev,ob) {
            ob.hoverIntent_t = clearTimeout(ob.hoverIntent_t);
            ob.hoverIntent_s = 0;
            return cfg.out.apply(ob,[ev]);
        };

        // A private function for handling mouse 'hovering'
        var handleHover = function(e) {
            // copy objects to be passed into t (required for event object to be passed in IE)
            var ev = jQuery.extend({},e);
            var ob = this;

            // cancel hoverIntent timer if it exists
            if (ob.hoverIntent_t) { ob.hoverIntent_t = clearTimeout(ob.hoverIntent_t); }

            // if e.type == "mouseenter"
            if (e.type == "mouseenter") {
                // set "previous" X and Y position based on initial entry point
                pX = ev.pageX; pY = ev.pageY;
                // update "current" X and Y position based on mousemove
                $(ob).on("mousemove.hoverIntent",track);
                // start polling interval (self-calling timeout) to compare mouse coordinates over time
                if (ob.hoverIntent_s != 1) { ob.hoverIntent_t = setTimeout( function(){compare(ev,ob);} , cfg.interval );}

                // else e.type == "mouseleave"
            } else {
                // unbind expensive mousemove event
                $(ob).off("mousemove.hoverIntent",track);
                // if hoverIntent state is true, then call the mouseOut function after the specified delay
                if (ob.hoverIntent_s == 1) { ob.hoverIntent_t = setTimeout( function(){delay(ev,ob);} , cfg.timeout );}
            }
        };

        // listen for mouseenter and mouseleave
        return this.on({'mouseenter.hoverIntent':handleHover,'mouseleave.hoverIntent':handleHover}, cfg.selector);
    };
})(jQuery);
/*
 * jQuery Superfish Menu Plugin
 * Copyright (c) 2013 Joel Birch
 *
 * Dual licensed under the MIT and GPL licenses:
 *	http://www.opensource.org/licenses/mit-license.php
 *	http://www.gnu.org/licenses/gpl.html
 */

(function ($, w) {
	"use strict";

	var methods = (function () {
		// private properties and methods go here
		var c = {
				bcClass: 'sf-breadcrumb',
				menuClass: 'sf-js-enabled',
				anchorClass: 'sf-with-ul',
				menuArrowClass: 'sf-arrows'
			},
			ios = (function () {
				var ios = /^(?![\w\W]*Windows Phone)[\w\W]*(iPhone|iPad|iPod)/i.test(navigator.userAgent);
				if (ios) {
					// tap anywhere on iOS to unfocus a submenu
					$('html').css('cursor', 'pointer').on('click', $.noop);
				}
				return ios;
			})(),
			wp7 = (function () {
				var style = document.documentElement.style;
				return ('behavior' in style && 'fill' in style && /iemobile/i.test(navigator.userAgent));
			})(),
			unprefixedPointerEvents = (function () {
				return (!!w.PointerEvent);
			})(),
			toggleMenuClasses = function ($menu, o) {
				var classes = c.menuClass;
				if (o.cssArrows) {
					classes += ' ' + c.menuArrowClass;
				}
				$menu.toggleClass(classes);
			},
			setPathToCurrent = function ($menu, o) {
				return $menu.find('li.' + o.pathClass).slice(0, o.pathLevels)
					.addClass(o.hoverClass + ' ' + c.bcClass)
						.filter(function () {
							return ($(this).children(o.popUpSelector).hide().show().length);
						}).removeClass(o.pathClass);
			},
			toggleAnchorClass = function ($li) {
				$li.children('a').toggleClass(c.anchorClass);
			},
			toggleTouchAction = function ($menu) {
				var msTouchAction = $menu.css('ms-touch-action');
				var touchAction = $menu.css('touch-action');
				touchAction = touchAction || msTouchAction;
				touchAction = (touchAction === 'pan-y') ? 'auto' : 'pan-y';
				$menu.css({
					'ms-touch-action': touchAction,
					'touch-action': touchAction
				});
			},
			getMenu = function ($el) {
				return $el.closest('.' + c.menuClass);
			},
			getOptions = function ($el) {
				return getMenu($el).data('sf-options');
			},
			over = function () {
				var $this = $(this),
					o = getOptions($this);
				clearTimeout(o.sfTimer);
				$this.siblings().superfish('hide').end().superfish('show');
			},
			close = function (o) {
				o.retainPath = ($.inArray(this[0], o.$path) > -1);
				this.superfish('hide');

				if (!this.parents('.' + o.hoverClass).length) {
					o.onIdle.call(getMenu(this));
					if (o.$path.length) {
						$.proxy(over, o.$path)();
					}
				}
			},
			out = function () {
				var $this = $(this),
					o = getOptions($this);
				if (ios) {
					$.proxy(close, $this, o)();
				}
				else {
					clearTimeout(o.sfTimer);
					o.sfTimer = setTimeout($.proxy(close, $this, o), o.delay);
				}
			},
			touchHandler = function (e) {
				var $this = $(this),
					o = getOptions($this),
					$ul = $this.siblings(e.data.popUpSelector);

				if (o.onHandleTouch.call($ul) === false) {
					return this;
				}

				if ($ul.length > 0 && $ul.is(':hidden')) {
					$this.one('click.superfish', false);
					if (e.type === 'MSPointerDown' || e.type === 'pointerdown') {
						$this.trigger('focus');
					} else {
						$.proxy(over, $this.parent('li'))();
					}
				}
			},
			applyHandlers = function ($menu, o) {
				var targets = 'li:has(' + o.popUpSelector + ')';
				if ($.fn.hoverIntent && !o.disableHI) {
					$menu.hoverIntent(over, out, targets);
				}
				else {
					$menu
						.on('mouseenter.superfish', targets, over)
						.on('mouseleave.superfish', targets, out);
				}
				var touchevent = 'MSPointerDown.superfish';
				if (unprefixedPointerEvents) {
					touchevent = 'pointerdown.superfish';
				}
				if (!ios) {
					touchevent += ' touchend.superfish';
				}
				if (wp7) {
					touchevent += ' mousedown.superfish';
				}
				$menu
					.on('focusin.superfish', 'li', over)
					.on('focusout.superfish', 'li', out)
					.on(touchevent, 'a', o, touchHandler);
			};

		return {
			// public methods
			hide: function (instant) {
				if (this.length) {
					var $this = this,
						o = getOptions($this);
					if (!o) {
						return this;
					}
					var not = (o.retainPath === true) ? o.$path : '',
						$ul = $this.find('li.' + o.hoverClass).add(this).not(not).removeClass(o.hoverClass).children(o.popUpSelector),
						speed = o.speedOut;

					if (instant) {
						$ul.show();
						speed = 0;
					}
					o.retainPath = false;

					if (o.onBeforeHide.call($ul) === false) {
						return this;
					}

					$ul.stop(true, true).animate(o.animationOut, speed, function () {
						var $this = $(this);
						o.onHide.call($this);
					});
				}
				return this;
			},
			show: function () {
				var o = getOptions(this);
				if (!o) {
					return this;
				}
				var $this = this.addClass(o.hoverClass),
					$ul = $this.children(o.popUpSelector);

				if (o.onBeforeShow.call($ul) === false) {
					return this;
				}

				$ul.stop(true, true).animate(o.animation, o.speed, function () {
					o.onShow.call($ul);
				});
				return this;
			},
			destroy: function () {
				return this.each(function () {
					var $this = $(this),
						o = $this.data('sf-options'),
						$hasPopUp;
					if (!o) {
						return false;
					}
					$hasPopUp = $this.find(o.popUpSelector).parent('li');
					clearTimeout(o.sfTimer);
					toggleMenuClasses($this, o);
					toggleAnchorClass($hasPopUp);
					toggleTouchAction($this);
					// remove event handlers
					$this.off('.superfish').off('.hoverIntent');
					// clear animation's inline display style
					$hasPopUp.children(o.popUpSelector).attr('style', function (i, style) {
						return style.replace(/display[^;]+;?/g, '');
					});
					// reset 'current' path classes
					o.$path.removeClass(o.hoverClass + ' ' + c.bcClass).addClass(o.pathClass);
					$this.find('.' + o.hoverClass).removeClass(o.hoverClass);
					o.onDestroy.call($this);
					$this.removeData('sf-options');
				});
			},
			init: function (op) {
				return this.each(function () {
					var $this = $(this);
					if ($this.data('sf-options')) {
						return false;
					}
					var o = $.extend({}, $.fn.superfish.defaults, op),
						$hasPopUp = $this.find(o.popUpSelector).parent('li');
					o.$path = setPathToCurrent($this, o);

					$this.data('sf-options', o);

					toggleMenuClasses($this, o);
					toggleAnchorClass($hasPopUp);
					toggleTouchAction($this);
					applyHandlers($this, o);

					$hasPopUp.not('.' + c.bcClass).superfish('hide', true);

					o.onInit.call(this);
				});
			}
		};
	})();

	$.fn.superfish = function (method, args) {
		if (methods[method]) {
			return methods[method].apply(this, Array.prototype.slice.call(arguments, 1));
		}
		else if (typeof method === 'object' || ! method) {
			return methods.init.apply(this, arguments);
		}
		else {
			return $.error('Method ' +  method + ' does not exist on jQuery.fn.superfish');
		}
	};

	$.fn.superfish.defaults = {
		popUpSelector: 'ul,.sf-mega', // within menu context
		hoverClass: 'sfHover',
		pathClass: 'overrideThisToUse',
		pathLevels: 1,
		delay: 800,
		animation: {opacity: 'show'},
		animationOut: {opacity: 'hide'},
		speed: 'normal',
		speedOut: 'fast',
		cssArrows: true,
		disableHI: false,
		onInit: $.noop,
		onBeforeShow: $.noop,
		onShow: $.noop,
		onBeforeHide: $.noop,
		onHide: $.noop,
		onIdle: $.noop,
		onDestroy: $.noop,
		onHandleTouch: $.noop
	};

})(jQuery, window);

/*!
jQuery smallipop plugin
@name jquery.smallipop.js
@author Sebastian Helzle (sebastian@helzle.net or @sebobo)
@version 0.6.4
@date 2015-02-27
@category jQuery plugin
@copyright (c) 2011-2015 Small Improvements (http://www.small-improvements.com)
@license Licensed under the MIT (http://www.opensource.org/licenses/mit-license.php) license.
*/
!function(a){return"function"==typeof define&&define.amd?define(["jquery"],a):a(jQuery)}(function(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z,$,_,ab,bb,cb,db,eb,fb,gb,hb,ib,jb,kb,lb,mb,nb,ob,pb,qb,rb,sb,tb,ub,vb,wb,xb,yb,zb,Ab,Bb,Cb,Db,Eb,Fb,Gb,Hb;return g="smallipop",j=g+"-hint",l=g+"-instance",i=g+"-content",m=g+"-left",n=g+"-right",h=g+"-bottom",e=g+"-align-left",f=g+"-align-right",k=g+"-initialized",o=g+"-theme-",p=g+"-tour",s=p+"-content",v=p+"-overlay",t=p+"-footer",r=p+"-close-icon",x=p+"-progress",q=p+"-close",w=p+"-prev",u=p+"-next",O="focus."+g,N="click."+g,M="blur."+g,Q="mouseout."+g,R="mouseover."+g,U="touchend."+g,S="resize."+g,T="scroll."+g,P="keyup."+g,K=g+"OriginalZIndex",A=g+"BeingShown",F=g+"HideDelayTimer",G=g+"ShowDelayTimer",H=g+"TriggerHovered",C=g+"PopupHovered",E=g+"Shown",D=g+"Position",I=g+"XDistance",J=g+"YDistance",B=g+"IsTour",ob=new RegExp(g+"-(align|bottom)w*","g"),pb=new RegExp(g+"w+","g"),b=a(document),d=a(window),c=null,eb={},Fb={},z=null,hb=1,jb=1,ub=null,ib=0,rb=null,mb="<div class='"+l+"'><div class='"+i+"'/></div>",a.smallipop=zb={version:"0.6.2",defaults:{autoscrollPadding:200,contentAnimationSpeed:150,cssAnimations:{enabled:!1,show:"animated fadeIn",hide:"animated fadeOut"},funcEase:"easeInOutQuad",handleInputs:!0,hideDelay:500,hideTrigger:!1,hideOnPopupClick:!0,hideOnTriggerClick:!0,infoClass:j,invertAnimation:!1,popupId:"",popupOffset:31,popupYOffset:0,popupDistance:20,popupDelay:100,popupAnimationSpeed:200,preferredPosition:"top",referencedContent:null,theme:"default",touchSupport:!0,tourHighlight:!1,tourHighlightColor:"#222",tourHighlightFadeDuration:200,tourHighlightOpacity:.5,tourHighlightZIndex:9997,tourNavigationEnabled:!0,triggerAnimationSpeed:150,triggerOnClick:!1,onAfterHide:null,onAfterShow:null,onBeforeHide:null,onBeforeShow:null,onTourClose:null,onTourNext:null,onTourPrev:null,windowPadding:30,labels:{prev:"Prev",next:"Next",close:"Close",of:"of"}}},a.easing.easeInOutQuad||(a.easing.easeInOutQuad=function(a,b,c,d,e){return(b/=e/2)<1?d/2*b*b+c:-d/2*(--b*(b-2)-1)+c}),sb=function(){var a,b,c,d,e;e=[];for(c in Fb)b=Fb[c],e.push(function(){var c,e,f;for(f=[],c=0,e=b.length;e>c;c++)a=b[c],d=a.trigger,f.push(d.data(K)?d.css("zIndex",d.data(K)):void 0);return f}());return e},Ab="undefined"!=typeof Modernizr&&null!==Modernizr?Modernizr.touch:void 0,y="undefined"!=typeof Modernizr&&null!==Modernizr?Modernizr.cssanimations:void 0,bb=function(b){return a("."+(g+b))},ab=function(){return c||(c=a("<div id='"+v+"'/>").appendTo(a("body")).fadeOut(0)),c},db=function(a){return ab().fadeOut(a.tourHighlightFadeDuration),sb()},cb=function(b){var c,d,e,f,h,i,j,k,l,m,n,o,p,q,r,s,t,u;clearTimeout(ub),k=(null!=b?b.target:void 0)?a(b.target):b,u=[];for(i in eb)f=eb[i],h=f.data(),(j=h[E])&&(l=bb(j),n=l.is(k),m=l.data(g),o=m.options||zb.defaults,(!h[B]&&!m.isFormElement||f.is(k)||n&&f.is(o.popupInstance))&&(h[B]&&(z=null,null!=(s=l.data(g))&&"function"==typeof(r=s.options).onTourClose&&r.onTourClose(),db(o)),e=!o.hideOnTriggerClick&&n,d=!o.hideOnPopupClick&&f.find(k).length,(!k||!l.length||"click"!==(t=null!=b?b.type:void 0)&&"touchend"!==t||!e&&!d)&&(j&&o.hideTrigger&&l.stop(!0).fadeTo(o.triggerAnimationSpeed,1),f.data(F,null).data(A,!1),o.cssAnimations.enabled?(f.removeClass(o.cssAnimations.show).addClass(o.cssAnimations.hide).data(E,""),u.push(o.onAfterHide?window.setTimeout(o.onAfterHide,o.popupAnimationSpeed):void 0)):(c=o.invertAnimation?-1:1,p=h[I]*c,q=h[J]*c,u.push(f.stop(!0).animate({top:"-="+q,left:"+="+p,opacity:0},o.popupAnimationSpeed,o.funcEase,function(){var b;return b=a(this),b.data(A)||b.css("display","none").data(E,""),"function"==typeof o.onAfterHide?o.onAfterHide():void 0}))))));return u},xb=function(b){var c,d;return(c=a(this).data(g))?(c.popupInstance.data(E)===c.id||"checkbox"!==(d=!c.type)&&"radio"!==d||null!=b&&b.preventDefault(),Hb.call(this)):void 0},gb=function(a){return clearTimeout(a.data(F)),clearTimeout(a.data(G))},nb=function(a){return null==a&&(a=50),clearTimeout(rb),rb=setTimeout(qb,a)},Z=function(a,b){return a?(a.match(b)||[]).join(" "):void 0},X=function(a,b){return Z(b,ob)},Y=function(a,b){return Z(b,pb)},qb=function(b){var c,d,i,j,k,p,q,r,s,t,u,v,w,x,y,z,B,C,F,G,H,K,L,M,N,O,P,Q,R,S,T,U,W,Y,Z,$,_,ab;null==b&&(b=!0),ab=[];for(w in eb)k=eb[w],q=k.data(),K=q[E],K&&(M=bb(K),N=M.data(g),j=N.options,k.removeClass(X),b&&(L=o+j.theme.split(" ").join(" "+o),k.attr("class",""+l+" "+L)),O=a(window),U=Z=j.popupDistance,W=j.popupOffset,$=j.popupYOffset,c="fixed"===k.data(D),v=k.outerHeight(),z=k.outerWidth(),p=z/2,S=O.width(),P=O.height(),R=O.scrollTop(),Q=O.scrollLeft(),T=j.windowPadding,d=M.offset(),G=M.outerWidth(),F=M.outerHeight(),H=d.top-R,x=d.left+G/2,y=d.top-v+$,B=v+j.popupDistance-$,u=H-B,r=P-H-F-B,s=d.left-z-W,t=S-d.left-G-z,C=j.preferredPosition,"left"===C||"right"===C?(Z=0,y+=F/2+v/2,"right"===C&&t>T||T>s?(k.addClass(n),x=d.left+G+W):(k.addClass(m),x=d.left-z-W,U=-U)):(U=0,x+p>S-T?(x-=2*p-W,k.addClass(e)):T>x-p?(x-=W,k.addClass(f)):x-=p,T>x&&(x=T),("bottom"===C&&r>T||T>u)&&(Z=-Z,y+=v+F-2*$,k.addClass(h))),F>v&&(_=y+v+T-Z+$-R-P,_>0&&(y=Math.max(y-_-T,d.top+$+T+Z))),G>z&&(Y=x+z+T+U+W-Q-S,Y>0&&(x=Math.max(x-Y+T,d.left+W+T-U))),j.hideTrigger&&M.stop(!0).fadeTo(j.triggerAnimationSpeed,0),i=0,(!q[A]||j.cssAnimations.enabled)&&(y-=Z,x+=U,U=Z=0,i=1),c&&(x-=Q,y-=R),k.data(I,U).data(J,Z).css({top:y,left:x,display:"block",opacity:i}),ab.push(V(k,{top:"-="+Z,left:"+="+U,opacity:1})));return ab},$=function(){return qb(!1)},V=function(a,b){var c,d;return c=(null!=(d=bb(a.data(E)).data(g))?d.options:void 0)||zb.defaults,c.cssAnimations.enabled?(a.addClass(c.cssAnimations.show),window.setTimeout(function(){return W(a,c)},c.popupAnimationSpeed)):a.stop(!0).animate(b,c.popupAnimationSpeed,c.funcEase,function(){return W(a,c)})},W=function(a,b){var c;return c=a.data(),c[A]?(a.data(A,!1),"function"==typeof b.onAfterShow?b.onAfterShow(bb(c[E])):void 0):void 0},wb=function(b,d){var e,f,h,j,k,l,m,n,o;return null==d&&(d=""),n=b.data(g),o=n.options,h=n.popupInstance,h.data(H)?(l=h.data(E),l&&(e=bb(l),e.length&&(f=e.data(g).options||zb.defaults,f.hideTrigger&&e.stop(!0).fadeTo(f.fadeSpeed,1))),o.tourHighlight&&o.tourIndex?(m=ab().css({backgroundColor:o.tourHighlightColor,zIndex:o.tourHighlightZIndex}),sb(),"static"===b.css("position")&&b.css("position","relative"),b.data(K)||b.data(K,b.css("zIndex")),b.css("zIndex",o.tourHighlightZIndex+1),m.fadeTo(o.tourHighlightFadeDuration,o.tourHighlightOpacity)):c&&db(o),j=d||n.hint,o.referencedContent&&!d&&(j=a(o.referencedContent).clone(!0,!0)||j),k=fb(b)?"fixed":"absolute",l!==n.id&&h.hide(0),h.data(A,!0).data(E,n.id).data(D,k).find("."+i).empty().append(j),h.css("position",k),nb(0)):void 0},fb=function(a){var b;for(b=a;b.length&&"HTML"!==b[0].nodeName.toUpperCase();){if("fixed"===b.css("position"))return!0;b=b.parent()}return!1},Hb=function(){var b,c,d,e,f,h;return e=c=a(this),b=e.hasClass(k),b||(e=bb(c.data(E))),e.length?(f=e.data(g),c=f.popupInstance.data(b?H:C,!0),gb(c),d=c.data(E),d!==f.id||0===c.css("opacity")?("function"==typeof(h=f.options).onBeforeShow&&h.onBeforeShow(e),c.data(G,setTimeout(function(){return wb(e)},f.options.popupDelay))):void 0):void 0},Gb=function(){var b,c,d,e,f,h;return e=c=a(this),b=e.hasClass(k),b||(e=bb(c.data(E))),e.length?(f=e.data(g),c=f.popupInstance.data(b?H:C,!1),gb(c),d=c.data(),d[C]||d[H]?void 0:("function"==typeof(h=f.options).onBeforeHide&&h.onBeforeHide(e),c.data(F,setTimeout(function(){return cb(c)},f.options.hideDelay)))):void 0},lb=function(){return clearTimeout(ub),ub=setTimeout($,250)},vb=function(b,c){var d,e,f;if(null!=b?b.length:void 0)return f=b.data(g),d=f.tourTitle,e=f.popupInstance.find(d?"."+s:"."+i),e.html()!==c?e.stop(!0).fadeTo(f.options.contentAnimationSpeed,0,function(){return a(this).html(c).fadeTo(f.options.contentAnimationSpeed,1),qb()}):void 0},tb=function(a,b){var c,d,e,f,h,i;if(f=a.data(g),e=null!=f?f.tourTitle:void 0,e&&Fb[e])for(Fb[e].sort(function(a,b){return a.index-b.index}),"number"!=typeof b||b%1!==0?b=-1:b-=1,z=e,c=Fb[e],d=h=0,i=c.length-1;i>=0?i>=h:h>=i;d=i>=0?++h:--h)if(b>=0&&d===b||0>b&&c[d].id===f.id)return Eb(e,d)},Eb=function(b,c){var d,e,f,h,i,j,k;return(f=Fb[b])?(e=f[c].trigger,k=e.data(g),j=k.options,i=j.tourNavigationEnabled,h="",i&&(h+="<div class='"+x+"'>"+(""+(c+1)+" "+j.labels.of+" "+f.length+"</div>"),c>0&&(h+="<a href='#' class='"+w+"'>"+j.labels.prev+"</a>"),c<f.length-1&&(h+="<a href='#' class='"+u+"'>"+j.labels.next+"</a>")),i&&c!==f.length-1||(h+="<a href='#' class='"+q+"'>"+j.labels.close+"</a>"),d=a("<div class='"+s+"'/>"+("<a href='#' class='"+r+"'>&Chi;</a>")+("<div class='"+t+"'>"+h+"</div>")),d.eq(0).append(k.hint),gb(k.popupInstance),k.popupInstance.data(H,!0),yb(e,d)):void 0},yb=function(c,e){var f,h,i,j;return h=c.offset().top,f=h-b.scrollTop(),j=d.height(),i=c.data(g).options,!fb(c)&&(f<i.autoscrollPadding||f>j-i.autoscrollPadding)?a("html, body").animate({scrollTop:h-j/2},800,"swing",function(){return wb(c,e)}):wb(c,e)},Cb=function(a){var b,c,d,e,f,h,i;if(null!=a&&a.preventDefault(),c=Fb[z])for(b=c[0].popupInstance,e=b.data(E)||c[0].id,d=h=0,i=c.length-2;i>=0?i>=h:h>=i;d=i>=0?++h:--h)if(c[d].id===e&&(f=c[d].trigger.data(g).options,f.tourNavigationEnabled))return"function"==typeof f.onTourNext&&f.onTourNext(c[d+1].trigger),Eb(z,d+1)},Db=function(a){var b,c,d,e,f,h,i;if(null!=a&&a.preventDefault(),c=Fb[z])for(b=c[0].popupInstance,e=b.data(E)||c[0].id,d=h=1,i=c.length-1;i>=1?i>=h:h>=i;d=i>=1?++h:--h)if(c[d].id===e&&(f=c[d].trigger.data(g).options,f.tourNavigationEnabled))return"function"==typeof f.onTourPrev&&f.onTourPrev(c[d-1].trigger),Eb(z,d-1)},Bb=function(b){var c;return null!=b&&b.preventDefault(),c=a(b.target).closest("."+l),cb(c)},L=function(b){return b.each(function(){var b,c;return c=a(this),b=c.data(g),b?c.unbind("."+g).data(g,{}).removeClass(Y):void 0})},kb=function(a){var b,c,d,e,f;switch(d="input"===(e=null!=a?a.target.tagName.toLowerCase():void 0)||"textarea"===e,a.which){case 27:f=[];for(c in eb)b=eb[c],f.push(cb(b));return f;case 37:if(!d)return Db();break;case 39:if(!d)return Cb()}},_=function(c,e){var f;return null==c&&(c="default"),null==e&&(e=!1),eb[c]?eb[c]:(f=a(mb).css("opacity",0).attr("id",""+(g+jb++)).addClass(l).data(I,0).data(J,0).data(B,e).bind(R,Hb).bind(Q,Gb),a("body").append(f),e?f.delegate("."+w,N,Db).delegate("."+u,N,Cb).delegate("."+q+", ."+r,N,Bb):f.delegate("a",N,cb),2===jb&&(b.bind(""+N+" "+U,cb),d.bind(S,nb).bind(T,lb).bind(P,kb)),eb[c]=f)},a.fn.smallipop=function(b,c){var d;if(null==b&&(b={}),null==c&&(c=""),0===this.length)return this;if("string"==typeof b){switch(b.toLowerCase()){case"show":xb.call(this.first().get(0));break;case"hide":cb(this.first().get(0));break;case"destroy":L(this);break;case"tour":tb(this.first(),c);break;case"update":vb(this.first(),c)}return this}return b=a.extend(!0,{},zb.defaults,b),y||(b.cssAnimations.enabled=!1),d=_(b.popupId),this.each(function(){var e,f,h,i,j,l,m,n,o,p,q,r,s,t,u,v;if(f=a(this),n=f[0].tagName.toLowerCase(),u=f.attr("type"),q=f.data(),j=c||f.attr("title"),e=a("> ."+b.infoClass+":first",f),e.length&&(j=e.clone(!0,!0).removeClass(b.infoClass)),j&&!f.hasClass(k)){i=hb++,r={},t=d,s=a.extend(!0,{},b),"object"==typeof q[g]&&a.extend(!0,s,q[g]);for(l in q)v=q[l],l.indexOf(g)>=0&&(m=l.replace(g,""),m&&(m=m.substr(0,1).toLowerCase()+m.substr(1),s[m]=v));if(h=s.handleInputs&&("input"===n||"select"===n||"textarea"===n),s.tourIndex?(p=s.tourTitle||"defaultTour",s.hideOnTriggerClick=s.hideOnPopupClick=!1,t=_(p,!0),Fb[p]||(Fb[p]=[]),Fb[p].push({index:s.tourIndex||0,id:i,trigger:f,popupInstance:t})):(o=s.touchSupport&&Ab,h?(s.hideOnTriggerClick=!1,r[O]=Hb,r[M]=Gb):o||(r[Q]=Gb),s.triggerOnClick||o?r[N]=xb:(r[N]=Gb,r[R]=Hb)),f.addClass(""+k+" "+g+i).attr("title","").data(g,{id:i,hint:j,options:s,tagName:n,type:u,tourTitle:p,popupInstance:t,isFormElement:h}).bind(r),!s.hideOnTriggerClick)return f.delegate("a",N,cb)}})}});


/* MENU RESPONSIVE */
/*! Pushy - v0.9.2 - 2014-9-13* Pushy is a responsive off-canvas navigation menu using CSS transforms & transitions.* https://github.com/christophery/pushy/* by Christopher Yee */
$(function() {
    var pushy = $('.pushy'), //menu css class
        body = $('body'),
        container = $('#container'), //container css class
        push = $('.push'), //css class to add pushy capability
        siteOverlay = $('.site-overlay'), //site overlay
        pushyClass = "pushy-left pushy-open", //menu position & menu open class
        pushyActiveClass = "pushy-active", //css class to toggle site overlay
        containerClass = "container-push", //container open class
        pushClass = "push-push", //css class to add pushy capability
        menuBtn = $('.menu-btn, .pushy .btn-close'), //css classes to toggle the menu
        menuSpeed = 200, //jQuery fallback menu speed
        menuWidth = pushy.width() + "px"; //jQuery fallback menu width

    function togglePushy() {
        body.toggleClass(pushyActiveClass); //toggle site overlay
        pushy.toggleClass(pushyClass);
        container.toggleClass(containerClass);
        push.toggleClass(pushClass); //css class to add pushy capability
    }

    function openPushyFallback() {
        body.addClass(pushyActiveClass);
        pushy.animate({
            left: "0px"
        }, menuSpeed);
        container.animate({
            left: menuWidth
        }, menuSpeed);
        push.animate({
            left: menuWidth
        }, menuSpeed); //css class to add pushy capability
    }

    function closePushyFallback() {
        body.removeClass(pushyActiveClass);
        pushy.animate({
            left: "-" + menuWidth
        }, menuSpeed);
        container.animate({
            left: "0px"
        }, menuSpeed);
        push.animate({
            left: "0px"
        }, menuSpeed); //css class to add pushy capability
    }

    //checks if 3d transforms are supported removing the modernizr dependency
    cssTransforms3d = (function csstransforms3d() {
        var el = document.createElement('p'),
            supported = false,
            transforms = {
                'webkitTransform': '-webkit-transform',
                'OTransform': '-o-transform',
                'msTransform': '-ms-transform',
                'MozTransform': '-moz-transform',
                'transform': 'transform'
            };

        // Add it to the body to get the computed style
        document.body.insertBefore(el, null);

        for (var t in transforms) {
            if (el.style[t] !== undefined) {
                el.style[t] = 'translate3d(1px,1px,1px)';
                supported = window.getComputedStyle(el).getPropertyValue(transforms[t]);
            }
        }

        document.body.removeChild(el);

        return (supported !== undefined && supported.length > 0 && supported !== "none");
    })();

    if (cssTransforms3d) {
        //toggle menu
        menuBtn.click(function() {
            togglePushy();
        });
        //close menu when clicking site overlay
        siteOverlay.click(function() {
            togglePushy();
        });
    } else {
        //jQuery fallback
        pushy.css({
            left: "-" + menuWidth
        }); //hide menu by default
        container.css({
            "overflow-x": "hidden"
        }); //fixes IE scrollbar issue

        //keep track of menu state (open/close)
        var state = true;

        //toggle menu
        menuBtn.click(function() {
            if (state) {
                openPushyFallback();
                state = false;
            } else {
                closePushyFallback();
                state = true;
            }
        });

        //close menu when clicking site overlay
        siteOverlay.click(function() {
            if (state) {
                openPushyFallback();
                state = false;
            } else {
                closePushyFallback();
                state = true;
            }
        });
    }
});
/* END MENU RESPONSIVE */

(function($) {

    $(document).ready(function() {
        <!-- SUBMENU MENU ---->
        var submenu_01 = $('.first-menu').superfish({
            animation: {
                height: 'show'
            },
            animationOut: {
                height: 'hide'
            },
            speed: 'fast',
            delay: 0
        });

        <!-- BOX RESUMEN SHOP ---->
        var cart_shop = $('.cont-card_leng').superfish({
            delay: 0
        });

        /*---- Forzar Touch IOS -----*/
        document.addEventListener("touchstart", function() {}, false);
        /*---- Forzar Touch IOS -----*/

        <!-- SCROLL PERSONALIZADO -->
$(function()
{
	$('.scroll-pane').each(
		function()
		{
			$(this).jScrollPane(
				{
					showArrows: true
				}
			);
			var api = $(this).data('jsp');
			var throttleTimeout;
			$(window).bind(
				'resize',
				function()
				{
					if (!throttleTimeout) {
						throttleTimeout = setTimeout(
							function()
							{
								api.reinitialise();
								throttleTimeout = null;
							},
							50
						);
					}
				}
			);
		}
	)

});
		

        $(window).scroll(function() {
            if ($(document).scrollTop() > 300) {
                $('.js-prev').addClass('show-arrow');
            } else {
                $('.js-prev').removeClass('show-arrow');
            }
        });

        $(window).scroll(function() {
            if ($(window).scrollTop() + $(window).height() > $(document).height() - 300) {
                $('.js-next').addClass('hidden-arrow');
				$('.js-prev').addClass('only-arrow');
            } else {
                $('.js-next').removeClass('hidden-arrow');
				$('.js-prev').removeClass('only-arrow');
            }
        });

        /*---- If Mobile ---*/
        if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
            $("html").addClass("device-mobile")	
        }
        /*---- END If Mobile ---*/		
		
		/* Tooltip*/
$('.tip').smallipop({
	 hideDelay: 100,
	 popupAnimationSpeed:200,
	 preferredPosition: 'bottom',
	 popupDistance:5,
	 });
/*------------*/


    });
})(jQuery);

/*--- CLONE NEWSLETTER FORM ------*/
 $(".cont-social_newsletter").clone().prependTo(".cont-social_newsletter-02");


/* NEXT ANCHOR */
$('.js-next').click(function(e) {
    var selected = $(".list-item.current-panel");
    var anchors = $(".list-item");
    var pos = anchors.index(selected);
    var next = anchors.get(pos + 1);
    var prev = anchors.get(pos - 1);
    target = $(next);
    $(selected).removeClass("current-panel");
    $(next).addClass("js-current-panel");

    if (target.offset()) {
        $('html, body').animate({
            scrollTop: target.offset().top + 'px'
        }, {
            duration: 1500,
            easing: "easeInOutCubic"
        });
    }
    e.preventDefault();
});

$('.js-prev').click(function(e) {
    var selected = $(".list-item.current-panel");
    var anchors = $(".list-item");
    var pos = anchors.index(selected);
    var next = anchors.get(pos + 1);
    var prev = anchors.get(pos - 1);
    target = $(prev);
    $(selected).removeClass("current-panel");
    $(prev).addClass("current-panel");
    if (target.offset()) {
        $('html, body').animate({
            scrollTop: target.offset().top + 'px'
        }, {
            duration: 1500,
            easing: "easeInOutCubic"
        });
    }
    e.preventDefault();
});
/* END NEXT ANCHOR */


/* CENTRAR VERTICAL MODAL */
var modalVerticalCenterClass = ".modal";

function centerModals($element) {
    var $modals;
    if ($element.length) {
        $modals = $element;
    } else {
        $modals = $(modalVerticalCenterClass + ':visible');
    }
    $modals.each(function(i) {
        var $clone = $(this).clone().css('display', 'block').appendTo('body');
        var top = Math.round(($clone.height() - $clone.find('.modal-content').height()) / 2);
        top = top > 0 ? top : 0;
        $clone.remove();
        $(this).find('.modal-content').css("margin-top", top);
    });
}
$(modalVerticalCenterClass).on('show.bs.modal', function(e) {
    centerModals($(this));
});
$(window).on('resize', centerModals);