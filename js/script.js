let lnks = document.getElementsByClassName("nav-link");
 var linkClick = function () {
    for (var i = 0; i < lnks.length; i++) {
        lnks[i].classList.remove('active');
    }
    console.log("this=>", this);
    this.classList.add('active');

};

for (var i = 0; i < lnks.length; i++) {
    lnks[i].addEventListener('click', linkClick, false);

 }