let secondIcon = document.querySelector(".two-icon");
let search = document.querySelector("input[type= 'search']");

search.addEventListener("focus", function() {
    secondIcon.style.display = "block";
});

search.addEventListener("blur", function() {
    secondIcon.style.display = "none";
});

let navChild = document.querySelectorAll("nav > div");

navChild.forEach(function(e) {
    e.onclick = function() {
        navChild.forEach(function(ele) {
            ele.classList.remove("active");
        });
        e.classList.add("active");
    };
});

let burger = document.querySelector(".fa-solid.fa-bars");
let wrLeft = document.querySelector(".wrapper .left");
let wrRight = document.querySelector(".wrapper .right");
let behind = document.querySelector(".behind");
let lFriend = document.querySelector(".left-friend");

burger.onclick = function() {
    wrLeft.classList.toggle("return");
    behind.classList.add("ds-block");
};

lFriend.onclick = function() {
    wrLeft.classList.toggle("return");
    behind.classList.add("ds-block");
};

behind.onclick = function() {
    behind.classList.remove("ds-block");
    wrLeft.classList.remove("return");
};

let box = document.querySelectorAll(".right2 .box");

box.forEach(function(e) {
    e.addEventListener("mousedown", function() {
        e.style.backgroundColor = "#ffffff1c"
    })
    e.addEventListener("mouseup", function() {
        e.style.backgroundColor = "transparent"
    })
})