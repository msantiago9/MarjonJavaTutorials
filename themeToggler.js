let light = document.querySelector("link[href='light.css']") !== null;
const toggleTheme = () => {
  if (light) {
    document.querySelector("link[href='light.css']").href = "dark.css";
  } else {
    document.querySelector("link[href='dark.css']").href = "light.css";
  }
  light = !light;
};
