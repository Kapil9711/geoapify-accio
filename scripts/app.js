// var requestOptions = {
//   method: "GET",
// };

// fetch(
//   "https://api.geoapify.com/v1/geocode/search?text=Delhi india &apiKey=18bf7e3910a1491180c0c84ab1eee638",
//   requestOptions
// )
//   .then((response) => response.json())
//   .then((result) => console.log(result))
//   .catch((error) => console.log("error", error));

//ip adress geoapi

// fetch("https://api.ipify.org?format=json")
//   .then((response) => response.json())
//   .then((data) => {
//     console.log(data.ip);
//   })
//   .catch((error) => {
//     console.log("Error:", error);
//   });

// fetch(
//   "https://api.geoapify.com/v1/ipinfo?ip=103.68.21.98&apiKey=18bf7e3910a1491180c0c84ab1eee638"
// )
//   .then((response) => response.json())
//   .then((result) => console.log(result))
//   .catch((error) => console.log("error", error));

const homeBox = document.querySelector(".home-box");
const resultBox = document.querySelector(".result-box");
const resultContainer = document.querySelector(".result-container");

const input = document.querySelector("#input");
const submitBtn = document.querySelector("#submit-btn");
const error = document.querySelector(".error");

resultContainer.style.display = "none";
error.style.display = "none";

displayData(homeBox, "position");

const handleClick = async () => {
  const value = input.value;
  if (!value) {
    resultContainer.style.display = "none";
    return (error.style.display = "initial");
  }
  error.style.display = "none";
  await displayData(resultBox, "text", value);
  resultContainer.style.display = "initial";
};

submitBtn.addEventListener("click", handleClick);
