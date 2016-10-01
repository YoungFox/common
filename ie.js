// 判断是否为IE，0表示非IE，除此之外代表IE的版本
var isIE = (/msie (\d+)/i.test(navigator.userAgent) && !window.opera) ? parseInt(RegExp.$1) : 0;