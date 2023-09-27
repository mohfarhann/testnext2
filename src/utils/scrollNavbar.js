export const isScrolled = () => {
    let lastScrollTop = 0;

    window.addEventListener("scroll", function(){
        let currentScroll = window.pageYOffset || document.documentElement.scrollTop;
        if (currentScroll < lastScrollTop) {
          document.querySelector(".navbar").classList.remove("hidden");
        } else {
          document.querySelector(".navbar").classList.add("hidden");
        }
        lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
      }, false);
}