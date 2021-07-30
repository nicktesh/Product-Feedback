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
// Allows users to add Suggestions //
//

let allFeedbackPosts = document.getElementById("allFeedbackPosts");
let feedback = document.createElement("div");
let feedbackForm = document.getElementById("feedbackForm");
let title = document.getElementById("feedbackTitleInput");
let description = document.getElementById("feedbackDescInput");
let category = document.getElementById("feedbackCategoryInput");
// Adds user added feedback to localStorage and prepends current storage to top of parent div
feedback.innerHTML = localStorage.getItem("newFeedback");
allFeedbackPosts.prepend(feedback);

// When the user fills out the feedback form
feedbackForm.addEventListener("submit", (event) => {
  // If any of the inputs are blank, gives error message
  event.preventDefault();
  if (
    title.value === "" ||
    description.value === "" ||
    category.value === "Select a Category"
  ) {
    alert("Fix this NOW");
    // If all inputs are successful, it creates the feedback box and prepends it
  } else {
    // Sets the filter data as the category selected, and makes it lowercase so the filter works
    let feedbackType = category.value.toLowerCase();
    // This creates a div for every object in the JSON data and adds it to the top of the #allFeedbackPosts row
    feedback.innerHTML = `<div class="feedback-post-box" data-filter="${feedbackType}">
    <div class="post-box-inner">
      <div class="total-count-box">
        <div class="total-count-inner">
          <img src="assets/img/chevron-up-solid.svg">
          <p>0</p>
        </div>
      </div>
      <div class="post-info">
        <h3>${title.value}</h3>
        <p>${description.value}</p>
        <div class="post-category">${category.value}</div>
      </div>
      <div class="post-comments">
        <img src="assets/img/comment-alt-solid.svg">
        <p>0</p>
      </div>
      <button class="delete-btn">X</button>
    </div>
  </div>`;
    allFeedbackPosts.prepend(feedback);

    // Resets the form
    $("#feedbackForm")[0].reset();

    // Hides the modal after clicking submit
    $("#feedbackModal").modal("toggle");
  }

  let deleteBtn = document.querySelectorAll(".delete-btn");

  for (let i = 0; i < deleteBtn.length; i++) {
    deleteBtn[i].addEventListener("click", () => {
      // Removes the entire div and contents created from feedbackForm
      deleteBtn[i].parentElement.parentElement.parentElement.remove();
      // Removes the selected feedback box from localStorage
      localStorage.removeItem("newFeedback", feedback.innerHTML);
    });
  }

  // Stores the feedback box into localStorage
  localStorage.setItem("newFeedback", feedback.innerHTML);
});

//
// Allows the user to delete the feedback that they added //
//
let deleteBtn = document.querySelectorAll(".delete-btn");

for (let i = 0; i < deleteBtn.length; i++) {
  deleteBtn[i].addEventListener("click", () => {
    // Removes the entire div and contents created from feedbackForm
    deleteBtn[i].parentElement.parentElement.parentElement.remove();
    // Removes the selected feedback box from localStorage
    localStorage.removeItem("newFeedback", feedback.innerHTML);
  });
}

//
// Allows users to upvote and downvote suggestions
//

let totalCountInner = document.querySelectorAll(".total-count-inner");
let totalVotes = document.querySelectorAll(".totalVotes");

for (let i = 0; i < totalCountInner.length; i++) {
  totalCountInner[i].addEventListener("click", () => {
    for (let j = 0; j < totalVotes.length; j++) {
      let count = Number(totalVotes[j].innerHTML);

      if (count === count) {
        totalVotes[j].innerHTML = count + 1;
      } else {
        return false;
      }
    }
  });
}

// let totalCountInner = document.querySelectorAll(".total-count-inner");
// let totalVotes = document.querySelectorAll(".totalVotes");

// totalVotes.forEach(function (i) {
//   i.addEventListener("click", function () {
//     console.log(i);
//   });
// });

// for (i of totalCountInner) {
//   let totalValue = Number(totalVotes.innerHTML);
//   i.addEventListener("click", () => {
//     if (totalValue === totalValue) {
//       totalVotes.innerHTML = totalValue + 1;
//     } else {
//       return false;
//     }
//   });
// }
