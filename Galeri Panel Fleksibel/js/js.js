const panels = document.querySelectorAll(".panel");

panels.forEach((panel) =>
  panel.addEventListener("click", function () {
    console.log("Halo");
    this.classList.toggle("open");
  })
);
panels.forEach((panel) =>
  panel.addEventListener("transitionend", function (e) {
    console.log(e.propertyName);
    if (e.propertyName.includes("flex")) {
      this.classList.toggle("open-active");
    }
  })
);
