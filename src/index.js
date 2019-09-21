export default {
  install(Vue) {
    addStyleString(
      ".stopAnimation *,.stopAnimation *:before,.stopAnimation *:after{ animation-play-state: paused} @keyframes fadeIn {from {opacity: 0;}to {opacity: 1;}} .fadeIn{ animation-name: fadeIn}"
    );

    Vue.directive("fade", {
      bind(el) {
        el.classList.add("fadeIn");
        el.style.animationDuration = ".5s";
      },
      inserted(el) {
        el.parentNode.classList.add("stopAnimation");
        el.addEventListener("load", () => {
          el.parentNode.classList.remove("stopAnimation");
        });
      }
    });
  }
};

const addStyleString = rule => {
  let css = document.createElement("style");
  css.type = "text/css";
  if (css.styleSheet) css.styleSheet.cssText = rule;
  else css.appendChild(document.createTextNode(rule));
  document.getElementsByTagName("head")[0].appendChild(css);
};
