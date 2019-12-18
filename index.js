const navOnScroll =(() => {
  window.onscroll = () => {
    console.log("działa");
    toggleNavClass();
  }
  const toggleNavClass = () => {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
      document.querySelector("header").className="fixed";
      document.querySelector(".top-nav").classList.add("invisible");
      document.querySelector(".bot-nav").classList.add("fixed");
      document.querySelector(".logo-xs").classList.remove("invisible");
      document.querySelector(".logo-xs").classList.add("flex-align-center");
    } else {
      document.querySelector("header").className="";
      document.querySelector(".top-nav").classList.remove("invisible");
      document.querySelector(".bot-nav").classList.remove("fixed");
      document.querySelector(".logo-xs").classList.add("invisible");
      document.querySelector(".logo-xs").classList.remove("flex-align-center");
    }
  }
})();
