const navOnScroll =(() => {
  window.onscroll = () => {
    console.log("działa");
    toggleNavClass();
    toggleContactClass();
  }
  const toggleNavClass = () => {
    if (document.body.scrollTop > 1 || document.documentElement.scrollTop > 1) {
      document.getElementById("nav").className="fixed-nav";
      document.querySelector("header").className="fixed-nav";
      document.querySelector(".visible").classList.add("halfInvisible");
      document.querySelector(".invisible").classList.add("halfVisible");
    } else {
      document.getElementById("nav").className="";
      document.querySelector("header").className="";
      document.querySelector(".visible").classList.remove("halfInvisible");
      document.querySelector(".invisible").classList.remove("halfVisible");
    }
  }
  const toggleContactClass = () => {
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
      document.querySelector(".visible").classList.add("toInvisible");
      document.querySelector(".invisible").classList.add("toVisible");
    } else {
      document.querySelector(".visible").classList.remove("toInvisible");
      document.querySelector(".invisible").classList.remove("toVisible");
    }
  }
})();
