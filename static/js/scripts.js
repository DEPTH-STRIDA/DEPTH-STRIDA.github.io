document.addEventListener("DOMContentLoaded", function () {
  let otherWebsites = document.getElementById("other-websites");
  let otherWebsitesClose = document.getElementById("other-websites-close");
  let otherWebsitesOpen = document.getElementById("other-websites-open");

  otherWebsites.style.display = "none";
  //   console.log(otherWebsites);
  //   console.log(otherWebsitesClose);
  //   console.log(otherWebsitesOpen);

  let onMode = true;

  otherWebsitesClose.addEventListener("click", function () {
    setAttributeAllMenu("0");
    otherWebsitesOpen.setAttribute("aria-expanded", "false");

    otherWebsites.style.display = "none";
    onMode = true;

    setTimeout(() => {
      otherWebsitesOpen.focus();
    }, 100);
  });

  otherWebsitesOpen.addEventListener("click", function () {
    //
    if (onMode == true) {
      otherWebsites.style.display = "flex";
      onMode = false;
      document;

      otherWebsitesOpen.setAttribute("aria-expanded", "true");

      setAttributeAllMenu("-1");
      setMainItem(0);
    } else {
      otherWebsites.style.display = "none";
      onMode = true;
      setAttributeAllMenu("0");

      otherWebsitesOpen.setAttribute("aria-expanded", "false");
      otherWebsitesOpen.focus();
    }
  });
});
document.addEventListener("DOMContentLoaded", function () {});

function setMainItem(index) {
  switch (index) {
    case 0:
      document
        .getElementById("other-websites-open")
        .setAttribute("tabindex", "0");
      break;

    case 1:
      document.getElementById("menu-item1").setAttribute("tabindex", "0");
      break;
    case 2:
      document.getElementById("menu-item2").setAttribute("tabindex", "0");
      break;
    case 3:
      document.getElementById("menu-item3").setAttribute("tabindex", "0");
      break;
    case 4:
      document.getElementById("menu-item4").setAttribute("tabindex", "0");
      break;
    case 5:
      document.getElementById("menu-item5").setAttribute("tabindex", "0");
      break;

    default:
      console.log("not valid index");
      break;
  }
}

function setAttributeAllMenu(value) {
  document
    .getElementById("other-websites-open")
    .setAttribute("tabindex", value);
  document.getElementById("menu-item1").setAttribute("tabindex", value);
  document.getElementById("menu-item2").setAttribute("tabindex", value);
  document.getElementById("menu-item3").setAttribute("tabindex", value);
  document.getElementById("menu-item4").setAttribute("tabindex", value);
  document.getElementById("menu-item5").setAttribute("tabindex", value);
}
