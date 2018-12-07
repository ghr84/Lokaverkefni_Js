var header = document.querySelector('header');
var main = document.querySelector('main');
var footer = document.querySelector('footer');
var mobile_footer = document.querySelector('mobile_footer');

////// það sem gerist þegar ég kem inn á síðuna í fyrsta skipti

header.innerHTML = templates.header;
header.innerHTML = templates.frontPage;
footer.innerHTML = templates.footer;

var showAbout = function() {
    main.innerHTML
}