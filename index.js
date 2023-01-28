// intialize the count as 0
// listen for clicks on the increment button
// increment the count variable when the button is clicked (log it out)
// change the count-el in the HTML to reflect the new count
let saveEl = document.getElementById("save-el");
let countEl = document.getElementById("count-el");
let count = 0;
console.log(countEl);

function increment() {
  // count = count + 1;
  count += 1;
  countEl.textContent = count;
  console.log("clicked");
}

// 1. Create a function, save(), which logs out the count when it's called

function save() {
  // 2. Create a variable that contains both the count and the dash separator, i.e. "12 - "
  // 3. Render the variable in the saveEl using innerText
  // NB: Make sure to not delete the existing content of the paragraph
  let countStr = count + " - ";
  // saveEl.innerText += countStr;
  saveEl.textContent += countStr;
  count = 0;
  countEl.innerText = count;
}
