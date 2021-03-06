/**
 * @preserve
 * jquery.mobile.struts2.js
 *
 * Integration of mobile elements with struts 2
 *
 * Requires use of jquery.struts2.js
 *
 * Copyright (c) 2010 - 2015 Johannes Geppert http://www.jgeppert.com
 *
 * Dual licensed under the MIT and GPL licenses:
 *   http://www.opensource.org/licenses/mit-license.php
 *   http://www.gnu.org/licenses/gpl.html
 *
 */

/*global jQuery, window,  */
"use strict";
(function($) {

	/**
	 * Bind Mobile Elements to Struts2 Component
	 */
	$.struts2_jquery_mobile = {
	};

	// Extend it from orginal plugin
	$.extend(true, $.struts2_jquery_mobile, $.struts2_jquery);
	$.struts2_jquery_mobile.debugPrefix = "[struts2_jquery_mobile] ";
	
})(jQuery);