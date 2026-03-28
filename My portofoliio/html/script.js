const scrollTopBtn = document.getElementById("scrollTopBtn");



scrollTopBtn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
});