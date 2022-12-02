const box = document.querySelector(".box")
document.addEventListener("keydown", e =>{
        box.querySelector(".key-code").innerText = e.keyCode;
        box.querySelector(".key-name").innerText = e.key;
        box.querySelector(".key span").innerText = e.key;
        box.querySelector(".code span").innerText = e.keyCode;
        box.classList.add("active");
        console.log(e);
});