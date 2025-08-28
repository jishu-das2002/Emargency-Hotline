

document.querySelectorAll(".heart-icon").forEach(function (icon) {
  icon.addEventListener("click", function () {
    const lifeSpan = document.querySelector(".life");
    const currentLife = Number(lifeSpan.innerText);
    lifeSpan.innerText = currentLife + 1;
  });
});

