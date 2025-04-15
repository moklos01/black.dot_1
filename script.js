const canvas = document.getElementById("canvas");
const canvas_button_1 = document.getElementById("canvas_button_1");
const canvas_button_2 = document.getElementById("canvas_button_2");

// Create a Rive instance and load a Rive file
// For this example, we're using a sample animation from Rive's CDN

const square = document.querySelector(".sticky-square");

// Initialize Rive
const r = new rive.Rive({
  src: "sym.riv",
  canvas: canvas,
  autoplay: true,
  stateMachines: "SM_sym",
  artboard: "body sym",

  // artboard: "body sym", // State machine name from the Rive file
  onLoad: () => {
    //resizeCanvas();
    console.log("Rive file loaded successfully");
  },
});

const r1 = new rive.Rive({
  src: "sym.riv",
  canvas: canvas_button_1,
  autoplay: true,
  stateMachines: "SM_button_1",
  artboard: "button_1",

  // artboard: "body sym", // State machine name from the Rive file
  onLoad: () => {
    //resizeCanvas();
    console.log("Rive file loaded successfully");
  },
});

const r2 = new rive.Rive({
  src: "sym.riv",
  canvas: canvas_button_2,
  autoplay: true,
  stateMachines: "SM_button_1",
  artboard: "button_1",

  // artboard: "body sym", // State machine name from the Rive file
  onLoad: () => {
    //resizeCanvas();
    console.log("Rive file loaded successfully");
  },
});

const header = document.querySelector(".header");

window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    header.classList.add("header-scrolled");
  } else if (window.scrollY <= 50) {
    header.classList.remove("header-scrolled");
  }
});
