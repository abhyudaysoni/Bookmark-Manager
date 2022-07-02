let tabContent = document.querySelectorAll(".tab-content");

tabContent[0].style.display = "flex";
tabContent[0].style.flexDirection = "column";

let tablinks = document.querySelectorAll(".tab-links");

function openFeatures(evt, feature, buttonName) {
    //this loop removes the active class from all the unactive blocks
    let i;
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    //this sets the current tab to active
    evt.currentTarget.className += " active";

    //this loop hides all the other tabs
    for (let i = 0; i < tabContent.length; i++) {
        tabContent[i].style.display = "none";
    }

    //this statement displays the reuired tab
    document.getElementById(feature).style.display = "flex";
    document.getElementById(feature).style.flexDirection = "column";
}

//selecting the faq buttons
const ques = document.querySelectorAll(".questions");
let i;
for (i = 0; i < ques.length; i++) {
    ques[i].addEventListener("click", function () {
        this.classList.toggle("active");
        let ans = this.nextElementSibling;
        if (ans.style.display === "block") {
            ans.style.display = "none";
        } else {
            ans.style.display = "block";
        }
    });
}
