

document.querySelectorAll(".heart-icon").forEach(function (icon) {
  icon.addEventListener("click", function () {
    const lifeSpan = document.querySelector(".life");
    const currentLife = Number(lifeSpan.innerText);
    lifeSpan.innerText = currentLife + 1;
  });
});

//  Copy Emergency Number to Clipboard
document.querySelectorAll(".Copy").forEach(function (btn) {
  btn.addEventListener("click", function () {
    const number = btn.closest(".service-card").querySelector(".service-num").innerText;
    navigator.clipboard.writeText(number)
      .then(() => {
        alert(`"Copied successfully" ${number}`);
      })
      .catch(() => {
        alert(" Copy failed. Please try again");
      });
  });
});








