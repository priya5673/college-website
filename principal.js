window.addEventListener("scroll", function() {
    const message = document.querySelector(".message");
    const position = message.getBoundingClientRect().top;
    const screenHeight = window.innerHeight;

    if(position < screenHeight - 100) {
        message.classList.add("active");
    }
});