// Store in local storage

// To set localstorage(key and value pair)
localStorage.setItem("name", "harry");
localStorage.setItem("name1", "sourav");
localStorage.setItem("name2", "majumder");

// To get localstorage
let name = localStorage.getItem("name");
console.log(name);

// To clear localstrorage
// localStorage.clear();

// Clear only particular key
localStorage.removeItem("name1");

// To add an array to localstorage
let imporArray = ["soura", "majumder", "5555"];

//JSON stringify is used to make object as string
localStorage.setItem("Student", JSON.stringify(imporArray));

//JSON parse use for string to object
let neo = JSON.parse(localStorage.getItem("Student"));
console.log(neo);
neo.push("kaka");
console.log(neo);
neo.forEach((value) => {
  console.log(value);
});

// Store in session storage
sessionStorage.setItem("sessionname", "harry");
sessionStorage.setItem("sessionname1", "sourav");
sessionStorage.setItem("sessionname2", "majumder");

// If you comment session storage and localstorage both and restart your browser you will see that localstorage will remain
// But session storage will vanish from there
