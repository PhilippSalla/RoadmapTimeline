function updateWidth(){
    const roadmap = document.querySelector('.rm-line');
    if (!roadmap) return;
    if (window.innerWidth < 32 * parseFloat(getComputedStyle(document.documentElement).fontSize)){
        roadmap.style.minWidth = "0";
        return;
    }
    const itemsList = roadmap.querySelectorAll('.rm-item-container');
    const remBase = parseFloat(getComputedStyle(document.documentElement).fontSize);
    const baseRem = 316 / remBase; // item width rem
    const gapRem = 21 / remBase; // gap width in rem
    roadmap.style.minWidth = `${itemsList.length * baseRem + Math.max(0, itemsList.length - 1) * gapRem}rem`;
}

function scrollHorizontally(e) {
    if (window.innerWidth < 32 * parseFloat(getComputedStyle(document.documentElement).fontSize)) return;
    e = window.event || e;
    var delta = Math.max(-1, Math.min(1, (e.wheelDelta || -e.detail)));
    document.getElementById(this.id).scrollLeft -= (delta * 80); // Default 40
    e.preventDefault();
}

if (document.getElementById("roadmap") != null && document.getElementById("roadmap").dataset.scroll === "true") {
    if (document.getElementById("roadmap").addEventListener) {
        document.getElementById("roadmap").addEventListener('mousewheel', scrollHorizontally, false);
        document.getElementById("roadmap").addEventListener('DOMMouseScroll', scrollHorizontally, false);
    } else {
        document.getElementById("roadmap").attachEvent('onmousewheel', scrollHorizontally);
    }
    window.addEventListener('resize', updateWidth);
    updateWidth();
}