document.addEventListener("DOMContentLoaded", function () {

  const imgBox = document.getElementById("imgBox");
  const bigImg = document.getElementById("bigImg");

  document.addEventListener("click", function (e) {
    const img = e.target.closest(".gallery img");
    if (img) {
      e.preventDefault();            // 🔥 browser default STOP
      bigImg.src = img.src;
      imgBox.style.display = "flex";
    }
  });

  imgBox.addEventListener("click", function () {
    imgBox.style.display = "none";
  });

});
