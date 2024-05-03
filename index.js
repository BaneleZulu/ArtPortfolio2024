//** Reactive navigation code */
//** Navigation header changes colors in response to scroll position on the y-axis */
//** Default color Black, y-axis > 1000 new color : Transparent */
document.addEventListener("DOMContentLoaded", function () {
  const top_nav = document.querySelector(".top_lvl_header");

  window.onscroll = function () {
    nav_manipulator();
  };
  function nav_manipulator() {
    if (
      document.body.scrollTop > 1000 ||
      document.documentElement.scrollTop > 1000
    ) {
      top_nav.style.backdropFilter = "blur(1)";
      top_nav.style.backgroundColor = "transparent";
      top_nav.style.boxShadow = "0 0 20px lightgrey";
      top_nav.style.transition = "background 4s ease-in-out";
    } else {
      top_nav.style.backgroundColor = "rgba(61, 61, 61, 100%)";
      top_nav.style.transition = "background 4s ease-in-out";
    }
  }
});

//** Draggable responsive image scroller  */
document.addEventListener("DOMContentLoaded", function () {
  const slider = document.querySelector(".realistic_image_scrollpane");
  let isMouseDown = false;
  let startX;

  slider.addEventListener("mousedown", (e) => {
    // alert("MOUSE DOWN");
    isMouseDown = true;
    startX = e.pageX - slider.offsetLeft;
  });
  slider.addEventListener("mouseup", () => {
    isMouseDown = false;
  });
  slider.addEventListener("mouseleave", () => {
    isMouseDown = false;
  });
  slider.addEventListener("mousemove", (e) => {
    if (!isMouseDown) return;
    e.preventDefault();
    // alert("MOUSE MOVIING");
    const x = e.pageX - slider.offsetLeft;
    const slide_on_X = (x - startX) * 20;
    slider.scrollLeft = slider.scrollLeft - slide_on_X;
    startX = x;
  });
});

//**Navigation control */
function openTab(evt, tabName) {
  var i, tab_content, tab_links;
  // let isActive;
  tab_content = document.getElementsByClassName("tabContent");
  for (i = 0; i < tab_content.length; i++) {
    tab_content[i].style.display = "none";
  }
  tab_links = document.getElementsByClassName("tab_links");
  for (i = 0; i < tab_links.length; i++) {
    tab_links[i].className = tab_links[i].className.replace(" active", "");
  }

  document.getElementById(tabName).style.display = "block";
  evt.currentTarget.className += " active";
}

// **Menu toggle button */
document.addEventListener("DOMContentLoaded", function () {
  const controller = document.getElementById("nav_controller");
  const nav_menu = document.getElementById("mobile_nav");
  const tab_link = document.querySelectorAll(".tab_link");
  let isVisible = false;

  controller.addEventListener("click", () => {
    if (!isVisible) {
      controller.classList.remove("fa-sharp", "fa-solid", "fa-x");
      controller.classList.add("fa", "fa-solid", "fa-bars");
      nav_menu.style.display = "none";
      nav_menu.style.transition = "all 0.8s ease-in-out";
      isVisible = true;
    } else {
      controller.classList.remove("fa", "fa-solid", "fa-bars");
      controller.classList.add("fa-sharp", "fa-solid", "fa-x");
      nav_menu.style.transition = "all 0.8s ease-in-out";
      isVisible = false;
      nav_menu.style.display = "block";
    }
  });

  tab_link.forEach((element) => {
    element.addEventListener("click", () => {
      controller.classList.remove("fa-sharp", "fa-solid", "fa-x");
      controller.classList.add("fa", "fa-solid", "fa-bars");
      nav_menu.style.transition = "all 0.8s ease-in-out";
      nav_menu.style.display = "none";
      isVisible = false;
    });
  });
});
