let minix = document.getElementsByClassName("minix");
let lnks = document.getElementsByClassName("nav-link");
const mySec = document.getElementById("mySection");

var linkClick = function () {
    deActive();
    this.classList.add('active');
};

for (let i = 0; i < lnks.length; i++) {
    lnks[i].addEventListener('click', linkClick, false);
}

var miniClick = function () {
    deActive();
    this.classList.add('active');
};

for (let i = 0; i < minix.length; i++) {
    minix[i].addEventListener('click', miniClick, false);
}


document.addEventListener("scroll", (e) => {
    var scrolled = document.scrollingElement.scrollTop;
    for (var i = 0; i < mySec.childNodes.length; i++) {
        let myChlid = mySec.childNodes[i];
        if (myChlid.tagName) {
            if (myChlid.tagName.toLowerCase() == "section") {
                let pos = myChlid.offsetTop;
                if (scrolled > (pos - 200)) { deActive(myChlid); }
            }
        }
    }
});

function deActive(eo) {
    for (var i = 0; i < minix.length; i++) {
        minix[i].classList.remove('active');
    }
    for (let i = 0; i < lnks.length; i++) {
        lnks[i].classList.remove('active');
    }
    if (eo) { activeById(eo); }
}
function activeById(eo) {

    let items = document.querySelectorAll(`[href="#${eo.id}"]`);

    for (var i = 0; i < items.length; i++) {
        items[i].classList.add('active');
    }
}