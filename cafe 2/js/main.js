var header = document.querySelector('header');
var main = document.querySelector('main');
var footer = document.querySelector('footer');

//það sem gerist þegar ég kem fyrst inn á síðuna:
header.innerHTML = templates.header;
main.innerHTML = templates.frontPage;
footer.innerHTML = templates.footer;

var showAbout = function(){
    main.innerHTML = templates.about;
}