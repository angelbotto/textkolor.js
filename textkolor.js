/***
 *     _            _   _   __      _
 *    | |          | | | | / /     | |
 *    | |_ _____  _| |_| |/ /  ___ | | ___  _ __
 *    | __/ _ \ \/ / __|    \ / _ \| |/ _ \| '__|
 *    | ||  __/>  <| |_| |\  \ (_) | | (_) | |
 *     \__\___/_/\_\\__\_| \_/\___/|_|\___/|_|
 *
 *
 *   textKolor.js is a jquery plugin for generate color from normal string.
 *
 *
 *   Licensed under the MIT license.
 *
 *   http://www.opensource.org/licenses/mit-license.php
 *   textKolor.js, © 2014 https://twitter.com/bottico
 */

$.fn.textkolor = function(str) {var hash = 0; for (var i = 0; i < str.length; i++) {hash = str.charCodeAt(i) + ((hash << 5) - hash); } var colour="#"; for (var j = 0; j < 3; j++) {var value = (hash >> (j * 8)) & 0xFF; colour += ('00' + value.toString(16)).substr(-2); } this.css("background", colour ); };