const monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];
const today = new Date()

// to return the date number(1-31) for the specified date

console.log("today => ",today)

let tomorrow =  new Date()

tomorrow.setDate(today.getDate() + 1)

//returns the tomorrow date

console.log("tomorrow => ",tomorrow, monthNames[tomorrow.getMonth()])

let months = monthNames[tomorrow.getMonth()]

let fullDate = `${tomorrow.getDate()} ${months}  ${tomorrow.getFullYear()}`



document.getElementById("tomorrow-date").innerHTML=fullDate