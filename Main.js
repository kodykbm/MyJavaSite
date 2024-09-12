document.addEventListener("DOMContentLoaded", function() {
    var trojanHorse = document.getElementById("trojanHorse");

    trojanHorse.addEventListener("mouseover", function() {
        trojanHorse.style.transform = "scale(1.2)";
        trojanHorse.style.transition = "transform 0.4s";
    });

    trojanHorse.addEventListener("mouseout", function() {
        trojanHorse.style.transform = "scale(1)";
    });
});


document.addEventListener("DOMContentLoaded", function() {
    var trojanHorse = document.getElementById("hackerman");

    trojanHorse.addEventListener("mouseover", function() {
        trojanHorse.style.transform = "scale(1.2)";
        trojanHorse.style.transition = "transform 0.4s";
    });

    trojanHorse.addEventListener("mouseout", function() {
        trojanHorse.style.transform = "scale(1)";
    });
});

const hamMenu = document.querySelector(".ham-menu");

const offScreenMenu = document.querySelector(".off-screen-menu");

hamMenu.addEventListener("click", () => {
  hamMenu.classList.toggle("active");
  offScreenMenu.classList.toggle("active");
});


