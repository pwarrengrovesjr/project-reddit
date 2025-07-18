var messageBoard = document.getElementById("message-board")
var userName = document.getElementById("your-name");
var postText = document.getElementById("post-text");
const btn = document.getElementById("btn");

btn.addEventListener("click", function () {
  messageBoard.insertAdjacentHTML("beforeend", `<div class="col-7 border-bottom p-2 fs-5" id="message-board">${postText.value} - Posted By: ${userName.value}</div>`)
})