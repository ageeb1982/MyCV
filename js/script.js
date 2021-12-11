let minix = document.getElementsByClassName("minix");
let lnks = document.getElementsByClassName("nav-link");
var linkClick = function () {
    for (var i = 0; i < lnks.length; i++) {
        lnks[i].classList.remove('active');
    }



    this.classList.add('active');

};

for (let i = 0; i < lnks.length; i++) {
    lnks[i].addEventListener('click', linkClick, false);

}

var miniClick = function () {
    for (var i = 0; i < minix.length; i++) {
        minix[i].classList.remove('active');
    }



    this.classList.add('active');

};

for (let i = 0; i < minix.length; i++) {
    minix[i].addEventListener('click', miniClick, false);

}