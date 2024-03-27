const profilePic = document.querySelector("#pp");
const InputProfilePic = document.querySelector("#picture-input");
const picActionBtn = document.querySelector("#picture-action");

const Lname = document.querySelector("#name");
const nameInput = document.querySelector("#name-input");
const nameAction = document.querySelector("#name-action");

const bio = document.querySelector("#bio");
const bioInput = document.querySelector("#bio-input");
const bioAction = document.querySelector("#bio-action");

const skill = document.querySelector("#skill-list");
const skillIpnut = document.querySelector("#skill-input");
const skillAction = document.querySelector("#skill-action");

picActionBtn.addEventListener("click", function () {
  const imageUrl = URL.createObjectURL(InputProfilePic.files[0]);
  profilePic.src = imageUrl;
});

nameAction.addEventListener("click", function () {
  Lname.textContent = `${nameInput.value}`;
});

bioAction.addEventListener("click", function () {
  bio.textContent = `${bioInput.value}`;
});

skillAction.addEventListener("click", function () {
  skill.innerHTML += `<li>${skillIpnut.value}</li>`;
});
