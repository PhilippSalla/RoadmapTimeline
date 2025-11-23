/*!
 * roadmap.html / roadmap.js / roadmap.css
 * Copyright (c) 2025 Philipp Salla
 * Released under the MIT License
 * https://github.com/PhilippSalla/RoadmapTimeline
 */

function updateRmLine(){
    const roadmap = document.querySelector('.rm-line');
    if (!roadmap) return;

    const itemsList = roadmap.querySelectorAll('.rm-item-container');
    if (!itemsList.length) return;

    // Mobile or desktop
    const gapPx = 21;
    const remBase = parseFloat(getComputedStyle(roadmap).fontSize);
    if (window.innerWidth < 32 * remBase) {
        let totalHeight = 0;
        itemsList.forEach((item, index) => {
            totalHeight += item.offsetHeight;
            if (index < itemsList.length - 1) {
                totalHeight += gapPx;
            }
        });
        roadmap.style.minWidth = "0";
        roadmap.style.minHeight = `${totalHeight}px`;
    }
    else {
        roadmap.style.minWidth =`${itemsList.length * (316 / remBase) + Math.max(0, itemsList.length - 1) * (gapPx / remBase)}rem`;
        roadmap.style.minHeight = "auto";
    }

    scrollToTarget();
}

function scrollHorizontally(e) {
    if (window.innerWidth < 32 * parseFloat(getComputedStyle(document.documentElement).fontSize)) return;
    e = window.event || e;
    var delta = Math.max(-1, Math.min(1, (e.wheelDelta || -e.detail)));
    document.getElementById(this.id).scrollLeft -= (delta * 80); // Default 40
    e.preventDefault();
}

function scrollToTarget(){
    const wrapper = roadmapWrapper.firstElementChild;
    if (!wrapper) return;
    const scrollTarget = wrapper.querySelector("[data-rmscrolltarget='true']");
    if (!scrollTarget) return;

    const wrapperRect = wrapper.getBoundingClientRect();
    const targetRect = scrollTarget.getBoundingClientRect();

    const scrollLeft = targetRect.left - wrapperRect.left + wrapper.scrollLeft;
    const scrollTop  = targetRect.top  - wrapperRect.top  + wrapper.scrollTop;

    roadmap.scrollTo({
        top: scrollTop,
        left: scrollLeft,
        behavior: "smooth"
    });
}

const roadmapWrapper = document.getElementById("roadmap");
if (roadmapWrapper != null) {
    if (roadmapWrapper.dataset.rmscroll === "true"){
        if (roadmapWrapper.addEventListener) {
            roadmapWrapper.addEventListener('mousewheel', scrollHorizontally, false);
            roadmapWrapper.addEventListener('DOMMouseScroll', scrollHorizontally, false);
        } else {
            roadmapWrapper.attachEvent('onmousewheel', scrollHorizontally, false);
        }
    }
    document.addEventListener("DOMContentLoaded", scrollToTarget)
    window.addEventListener('resize', updateRmLine);
    updateRmLine();
}