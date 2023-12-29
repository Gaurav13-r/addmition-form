const first_name = document.getElementById("firstname");
const first_name_count = document.getElementById("fisrt-name-counting");

const last_name = document.getElementById("lastname");
const last_name_count = document.getElementById("last-name-counting");

const addr = document.getElementById("address");
const addr_count = document.getElementById("address-counting");

const citis = document.getElementById("city-student");
const city_count = document.getElementById("city-counting");

const state_stud = document.getElementById("state-student");
const state_count = document.getElementById("state-counting");

const collage = document.getElementById("collage");
const collage_count = document.getElementById("collage-counting");

const email = document.getElementById("email");
const pcode = document.getElementById("number");
const country = document.getElementById("country");
const perset = document.getElementById("percentage");
const year = document.getElementById("passingyear");

const FormSubmitBtn = document.getElementById("submit-btn");
const popUpOkBtn = document.getElementById("ok-btn");

const formElement = document.getElementById("application-form");

const blackDrop = document.getElementById("backdrop");
const PopUp = document.getElementById("pop-up");

const applicant_name = document.getElementById("applicant-name");

function updateFirstNameCount(event) {
  const TextEntered = event.target.value;
  const TextCount = TextEntered.length;

  console.log(TextEntered);
  const updateNumber = 50 - TextCount;
  first_name_count.textContent = updateNumber;
}

function updateLastNameCount(event) {
  const TextEnteredLastName = event.target.value;
  const TextCountLastName = TextEnteredLastName.length;

  console.log(TextEnteredLastName);
  const updateNumberLastName = 50 - TextCountLastName;
  last_name_count.textContent = updateNumberLastName;
}

function updateAddressCount(event) {
  const TextEntered = event.target.value;
  const TextCount = TextEntered.length;

  const updateNumber = 200 - TextCount;
  addr_count.textContent = updateNumber;
}

function updateCityCount(event) {
  const TextEnteredCity = event.target.value;
  const TextCountCity = TextEnteredCity.length;

  console.log(TextEnteredCity);
  const updateNumberCity = 50 - TextCountCity;
  city_count.textContent = updateNumberCity;
}

function updateStateCount(event) {
  const TextEnteredState = event.target.value;
  const TextCountState = TextEnteredState.length;

  const updateNumberState = 50 - TextCountState;
  state_count.textContent = updateNumberState;
}

function updateCollageCount(event) {
  const TextEntered = event.target.value;
  const TextCount = TextEntered.length;

  const updateNumber = 50 - TextCount;
  collage_count.textContent = updateNumber;
}

async function saveStudent(event) {
  event.preventDefault();
  const formData = new FormData(event.target);
  const NewName = formData.get("fname").trim();
  console.log(NewName);
  applicant_name.textContent = NewName;

  // Convert the FormData to a plain JavaScript object
  const jsonData = {};
  formData.forEach((value, key) => {
    jsonData[key] = value;
  });
  try {
    const response = await fetch("/", {
      method: "POST",
      body: JSON.stringify(jsonData),
      headers: {
        "Content-type": "application/json",
      },
    });
    if (!response.ok) {
      alert("Error");
    }
  } catch (error) {
    console.log(error);
  }
}

function displayPopup() {
  blackDrop.style.display = "block";
  PopUp.style.display = "block";
}

function hidePopup() {
  blackDrop.style.display = "none";
  PopUp.style.display = "none";
}

first_name.addEventListener("input", updateFirstNameCount);
last_name.addEventListener("input", updateLastNameCount);
addr.addEventListener("input", updateAddressCount);
citis.addEventListener("input", updateCityCount);
state_stud.addEventListener("input", updateStateCount);
collage.addEventListener("input", updateCollageCount);

formElement.addEventListener("submit", saveStudent);
formElement.addEventListener("submit", displayPopup);
popUpOkBtn.addEventListener("click", hidePopup);
blackDrop.addEventListener("click", hidePopup);
