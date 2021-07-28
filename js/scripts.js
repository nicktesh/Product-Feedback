//
// The main Post Category filtering //
//

if (document.getElementById("feedback-page")) {
  const filters = document.querySelectorAll(".filter");

  filters.forEach((filter) => {
    filter.addEventListener("click", function () {
      let selectedFilter = filter.getAttribute("data-filter");
      let itemsToHide = document.querySelectorAll(
        `.post-section-inner .feedback-post-box:not([data-filter='${selectedFilter}'])`
      );
      let itemsToShow = document.querySelectorAll(
        `.post-section-inner [data-filter='${selectedFilter}']`
      );

      if (selectedFilter == "all") {
        itemsToHide = [];
        itemsToShow = document.querySelectorAll(
          ".post-section-inner [data-filter]"
        );
      }

      itemsToHide.forEach((el) => {
        el.classList.add("hide");
        el.classList.remove("show");
      });

      itemsToShow.forEach((el) => {
        el.classList.remove("hide");
        el.classList.add("show");
      });
    });
  });
}

//
// Moves active class through filter view buttons //
//

if (document.getElementById("feedback-page")) {
  // Get the container element
  let btnContainer = document.getElementById("filters");
  // Get all buttons with class="filter-btn" inside the container
  let btns = btnContainer.getElementsByClassName("filter");
  // Loop through the buttons and add the active class to the current/clicked button
  for (let i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", function () {
      let current = document.querySelectorAll(".filter.active");
      current[0].className = current[0].className.replace(" active", "");
      this.className += " active";
    });
  }
}

//
// Allows website users to add feedback //
//

let feedbackBtn = document.getElementById("feedbackBtn");
let feedbackModal = document.getElementById("feedbackModal");

feedbackBtn.addEventListener("click", () => {});
