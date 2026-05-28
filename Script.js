/* =========================================
   MAIN GROUP SWITCH (SEM1 / SEM2 / PAPERS)
========================================= */

function toggleGroup(groupName) {

  const sections = document.querySelectorAll(".semester");

  sections.forEach(section => {

    if (section.classList.contains(groupName)) {
      section.style.display = "block";
    } else {
      section.style.display = "none";
    }

  });

  // close all open subjects when switching group
  document.querySelectorAll(".subject-card input")
    .forEach(cb => cb.checked = false);
}


/* =========================================
   SUBJECT TOGGLE (ONLY ONE OPEN AT A TIME)
========================================= */

document.addEventListener("DOMContentLoaded", () => {

  const checkboxes = document.querySelectorAll(".subject-card input");

  checkboxes.forEach(cb => {

    cb.addEventListener("change", function () {

      if (this.checked) {

        checkboxes.forEach(other => {
          if (other !== this) {
            other.checked = false;
          }
        });

      }

    });

  });

});