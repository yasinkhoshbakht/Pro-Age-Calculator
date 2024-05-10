let dateText = document.querySelector("#date");
let userBirthDateText = document.querySelector(".userBirthDateText");
let livedText = document.querySelector(".live");
console.log(date);
setInterval(() => {
  let date = new Date();
  let dateYear = date.getFullYear();
  let dateMonth = date.getMonth() + 1;
  let dateDay = date.getDate();
  dateText.innerHTML = `${dateDay} / ${dateMonth} / ${dateYear}`;
}, 1000);
function getYear(event) {
  event.preventDefault();
  const userBirthDate = document.getElementById("userBirthDate").value;
  const dateObject = new Date(userBirthDate);
  const userDate = dateObject.getFullYear();
  const userMonth = dateObject.getMonth() + 1;
  const currentDate = new Date();
  const month = currentDate.getMonth() + 1;
  const year = currentDate.getFullYear();
  if (year == userDate) {
    var secondYear = 0;
  } else {
    var secondYear = year - userDate - 1;
  }
  var number = userDate - (userDate % 4);
  secondNumber = 0;
  for (let i = number; i < year; i += 4) {
    secondNumber++;
  }
  secondNumber--;
  if (secondYear === 0) {
    var secondMonth = month - Math.abs(userMonth);
    console.log(userMonth);
  } else {
    var secondMonth = secondYear * 12 + month + Math.abs(userMonth - 12);
  }
  const timeDifference = currentDate - dateObject;
  const day = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
  document.getElementById(
    "birthDate"
  ).innerText = `${day}/${secondMonth}/${secondYear}`;
  livedText.classList.add("show");
  userBirthDateText.classList.add("show");
}
