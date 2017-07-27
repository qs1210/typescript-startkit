const q = function(selector) {
    return document.querySelector(selector);
}
const qs = function(selector) {
    return document.querySelectorAll(selector);
}

const genNew = function(oldEle) {
    const oldEleWidth = window.getComputedStyle(oldEle).width;
    const oldEleLeft = window.getComputedStyle(oldEle).left;

    const newEle = oldEle.cloneNode(true);
    // let styleStr = "position: absolute;"
    // styleStr += "left: " + (parseInt(oldEleWidth) * 2 + parseInt(oldEleLeft)) + "px";
    // newEle.setAttribute("style", styleStr);

    return newEle;
}
const genNew2 = function(oldEle) {
    const oldEleWidth = window.getComputedStyle(oldEle).width;
    const oldEleLeft = window.getComputedStyle(oldEle).left;

    const newEle = oldEle.cloneNode(true);
    // let styleStr = "position: absolute;"
    // styleStr += "left: " + (0 - parseInt(oldEleWidth) * 2 + parseInt(oldEleLeft)) + "px";
    // newEle.setAttribute("style", styleStr);

    return newEle;
}

const moveRight = function(node) {
    const left = window.getComputedStyle(node).left;
    node.setAttribute("style", "left: " + (parseInt(left) - 250) + "px");
}
const moveLeft = function(node) {
    const left = window.getComputedStyle(node).left;
    node.setAttribute("style", "left: " + (parseInt(left) + 250) + "px");
}

const reset = function(node) {
    const left = window.getComputedStyle(node).left;
    node.setAttribute("style", "left: " + (-250) + "px");
    console.log("test1");
}

window.onload = function() {
    console.log("load");

    const showArea = q(".show-area");
    const one = q(".inner1");
    const two = q(".inner2");
    showArea.appendChild(genNew(one));
    showArea.insertBefore(genNew2(two), one);


    const right = q(".right");
    const left = q(".left");

    let count = 0;

    right.addEventListener('click', function(e) {
        // body
        console.log("click right");
        moveRight(showArea);
        count++;
        if (count % 2 === 0) {

            reset(showArea);
        }
    });
    left.addEventListener('click', function(e) {
        // body
        console.log("click left");
        moveLeft(showArea);
        count--;
        if (count % 2 === 0) {

            reset(showArea);
        }
    });

    console.log("change something");
    console.log("change something");


}